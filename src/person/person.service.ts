import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from "./person.schema";
import { Model } from 'mongoose';
import { SignUpDto } from "./dto/signup.dto";
import { count } from "console";
import { MapDto } from "./dto/map.dto";
import { NotificationDocument } from "src/notification/notification.schema";
import { Notification } from "src/notification/notification.schema";
import e from "express";
@Injectable()
export class PersonService{
    constructor(
        @InjectModel(Person.name) private personModel: Model<PersonDocument>,
        @InjectModel (Notification.name) private notificationModel: Model<NotificationDocument>,
      ) {}

      async signUp(signUpDto: SignUpDto): Promise<void> {
        const { name } = signUpDto;
        const { middleName } = signUpDto;
        const newAccount = new this.personModel({
          name,
          middleName
        });
        const result = await newAccount.save();
        console.log (result)
        
      }

      async GetAccounts() {
        const accounts = await this.personModel.find().exec();
        console.log(accounts)
        return accounts;
       
      }
      async modify(signUpDto: SignUpDto): Promise<void> {
        const { name } = signUpDto;
        const { middleName } = signUpDto;
        const newAccount = new this.personModel({
          name,
          middleName
        });
        const result = await newAccount.save();
        console.log (result)
        
      }

async mapaccoints() {
  
  const users = await this.personModel.find()
  let map = await Promise.all(
    users.map(async (e) => { return {
      name : e.name ,
      nb :  (await (this.notificationModel.find({person:e}))).length
    }

     })
  );
  return (map)
}
}












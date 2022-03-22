import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from "./person.schema";
import { Model } from 'mongoose';
import { SignUpDto } from "./dto/signup.dto";
import { count } from "console";
import { MapDto } from "./dto/map.dto";
@Injectable()
export class PersonService{
    constructor(
        @InjectModel(Person.name) private personModel: Model<PersonDocument>,
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



      //async mapaccoints(mapDto : MapDto) {
        //const{person_id} = mapDto
        /*const map = await this.personModel
      .findById(
        person_id, {
        $map: { input: "$notif" ,
        as : "personNotif"
        }
      })
      .exec();*/
      
      


   // console.log(map)
   /*async mapaccoints(mapDto : MapDto) {

    const result = await this.personModel.find()
    .transform((docs: any) => {
      return docs;
    })
    .exec();
    console.log(result) ;
}*/

async mapaccoints(mapDto : MapDto) {

  const persons = await this.personModel.find().exec();
  persons.map
  const aggregat =this.personModel.aggregate([
    {$match:{'name': {$in: ['wissem']}}},
   
  ])
  console.log(aggregat)
  return aggregat ;
}
}
      

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person, PersonDocument } from 'src/person/person.schema';
import { AddNotificationDto } from './dto/addNotification.dto';
import { NotificationDocument } from './notification.schema';
import { Notification } from './notification.schema';
@Injectable()
export class NotificationService {
constructor(
    @InjectModel(Notification.name) private notifficationModel: Model<NotificationDocument>,
     @InjectModel (Person.name) private personModel: Model<PersonDocument>,
  ) {}
  async addNotif(addNotificationDto: AddNotificationDto): Promise<void> {
    const { message , person_id} = addNotificationDto;
    const person = await this.personModel.findById(person_id).exec();
    console.log(person) ;
    const newNotif = new this.notifficationModel({
        message,
        person
    });
   const result = await newNotif.save();
   await this.personModel
      .findByIdAndUpdate(person_id, {
        $push: { notif: newNotif },
      })
      .exec();
  }


}





import { Module } from '@nestjs/common';
import { Person, PersonSchema } from './person.schema';
import { PersonController } from './person.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonService } from './person.service';
import { Notification , NotificationSchema } from 'src/notification/notification.schema';
@Module({
  imports : [
    MongooseModule.forFeature([{name : Person.name , schema:PersonSchema}]),
    MongooseModule.forFeature([{name : Notification.name , schema : NotificationSchema}]) ,
  ] ,
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}

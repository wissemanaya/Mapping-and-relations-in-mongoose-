import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from './notification.schema';
import { Person, PersonSchema } from 'src/person/person.schema';
@Module({
  imports : [
    MongooseModule.forFeature([{name : Notification.name , schema : NotificationSchema}]) ,
    MongooseModule.forFeature([{name : Person.name , schema:PersonSchema}])
  ] ,

  controllers: [NotificationController],
  providers: [NotificationService]
})
export class NotificationModule {}

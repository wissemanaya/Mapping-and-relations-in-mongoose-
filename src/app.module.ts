import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import { PersonModule } from './person/person.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forRoot('mongodb+srv://wissem:Wissem@cluster0.xrj6c.mongodb.net/notification?retryWrites=true&w=majority'),
  NotificationModule, PersonModule],

})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Notification } from 'src/notification/notification.schema';
import {Types } from 'mongoose'
import mongoose from 'mongoose';
import { Type } from 'class-transformer';


export type PersonDocument = Person & Document;

@Schema()
export class Person {
  @Prop()
  person_id: mongoose.Schema.Types.ObjectId;

  

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  middleName: string;

  /*@Prop({ type: Notification})
  notification : Notification []*/
  
  /*@Prop({ type: NotificationSchema })
  @Type(() => Notification)
  notification: Notification;
}*/
  /*@Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Notification }],
  })
  @Type(() => Notification)
  notifications: Notification [];*/
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Notification.name }],
  })
  notif: Notification[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);

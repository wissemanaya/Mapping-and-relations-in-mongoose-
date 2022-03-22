import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Person, PersonSchema } from 'src/person/person.schema';
import { Type } from 'class-transformer';
import { type } from 'os';
export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {

  @Prop({ required: true })
  message: string;

  
  //@Prop({ type: mongoose.Schema.Types.ObjectId, ref: Person.name})
 // @Type(() => Person)
  //person: Person;

 /* @Prop({ type: Person})
  person : Person []
*/
/*@Prop({ type: PersonSchema })
@Type(() => Person)
person: Person;*/


@Prop({ type: mongoose.Schema.Types.ObjectId, ref: () => Person })
  person: Person
  
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);

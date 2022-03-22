import { Module } from '@nestjs/common';
import { Person, PersonSchema } from './person.schema';
import { PersonController } from './person.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonService } from './person.service';

@Module({
  imports : [
    MongooseModule.forFeature([{name : Person.name , schema:PersonSchema}])
  ] ,
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}

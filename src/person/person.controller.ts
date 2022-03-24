import { Controller, Post, Body ,Get } from '@nestjs/common';
import { MapDto } from './dto/map.dto';
import { SignUpDto } from './dto/signup.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    return this.personService.signUp(signUpDto) ;
  }
  @Get('/account')
  async getAllAccounts() {
    const accounts = await this.personService.GetAccounts();
    return accounts;
  }

  @Get('/map')
  async mapaccoints() {
    return await this.personService.mapaccoints();
  
  }
}

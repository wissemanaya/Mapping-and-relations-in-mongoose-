import { Body, Controller, Post } from '@nestjs/common';
import { AddNotificationDto } from './dto/addNotification.dto';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}


  @Post('/addnotif')
  async addNotif(@Body() addNotificationDto : AddNotificationDto): Promise<void> {
    return this.notificationService.addNotif(addNotificationDto) ;
  }
}

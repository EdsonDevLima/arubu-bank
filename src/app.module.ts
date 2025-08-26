import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account/account.controller';
import { AccountModule } from './account/account.module';

@Module({
  imports: [AccountModule],
  controllers: [AppController, AccountController],
  providers: [AppService],
})
export class AppModule {}

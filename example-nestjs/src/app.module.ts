import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TariffsModule } from './stocks/tariffs.module';

@Module({
  imports: [TariffsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

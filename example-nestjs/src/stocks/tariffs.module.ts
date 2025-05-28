import { Module } from '@nestjs/common';
import { TariffsService } from './tariffs.service';
import { TariffsController } from './tariffs.controller';
import { FileAccessor, FileService } from 'src/file.service';
import { Tariff } from './entities/tariff.entity';

@Module({
  controllers: [TariffsController],
  providers: [
    TariffsService,
    {
      provide: FileService,
      useFactory: (tariffs: TariffsModule) =>
        new FileService<Tariff[]>(tariffs.filePath),
      inject: [TariffsModule],
    },
  
  ],
})
export class TariffsModule implements FileAccessor {
  public readonly filePath: string = 'assets/tariffs.json';
}

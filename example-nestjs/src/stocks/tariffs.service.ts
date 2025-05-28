import { Injectable } from '@nestjs/common';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';
import { Tariff } from './entities/tariff.entity';
import { FileService } from 'src/file.service';

@Injectable()
export class TariffsService {
  constructor(private fileService: FileService<Tariff[]>) {}

  create(createTariffDto: CreateTariffDto) {
    const tariffs = this.fileService.read();

    
    const tariff = { ...createTariffDto, id: tariffs.slice(-1)[0].id + 1 };
    this.fileService.add(tariff);
  }

  findAll(title?: string): Tariff[] {
    const tariffs = this.fileService.read();

    return title
      ? tariffs.filter((tariff) =>
          tariff.title.toLowerCase().includes(title.toLowerCase()),
        )
      : tariffs;
  }

  findOne(id: number): Tariff | null {
    const tariffs = this.fileService.read();

    return tariffs.find((tariff) => tariff.id === id) ?? null;
  }

  update(id: number, updateTariffDto: UpdateTariffDto): void {
    const tariffs = this.fileService.read();

    const updatedTariffs = tariffs.map((tariff) =>
      tariff.id === id ? { ...tariff, ...updateTariffDto } : tariff,
    );

    this.fileService.write(updatedTariffs);
  }

  remove(id: number): void {
    const filteredTariffs = this.fileService
      .read()
      .filter((tariff) => tariff.id !== id);

    this.fileService.write(filteredTariffs);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TariffsService } from './tariffs.service';
import { CreateTariffDto } from './dto/create-tariff.dto';
import { UpdateTariffDto } from './dto/update-tariff.dto';
import { Tariff } from './entities/tariff.entity';
import { Query } from '@nestjs/common';

@Controller('tariffs')
export class TariffsController {
  constructor(private readonly tariffsService: TariffsService) {}

  @Post()
  create(@Body() createTariffDto: CreateTariffDto) {
    return this.tariffsService.create(createTariffDto);
  }

  // @Get()
  // findAll() {
  //   return this.stocksService.findAll();
  // }

  @Get()
  findAll(@Query('title') title?: string): Tariff[] {
    return this.tariffsService.findAll(title);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tariffsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTariffDto: UpdateTariffDto) {
    return this.tariffsService.update(+id, updateTariffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tariffsService.remove(+id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CelularModelService } from './celular-model.service';
import { CelularModel } from './celular-model.entity';

@Controller('/celular-models')
export class CelularModelController {
  constructor(private service: CelularModelService) {}

  @Get()
  findAll(): Promise<CelularModel[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<CelularModel> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Celular model not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() celularModel: CelularModel): Promise<CelularModel> {
    return this.service.save(celularModel);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() celularModel: CelularModel,
  ): Promise<CelularModel> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Celular model not found', HttpStatus.NOT_FOUND);

    celularModel.id = found.id;

    return this.service.save(celularModel);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Celular model not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }
}

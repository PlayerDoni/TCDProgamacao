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
import { CelularFactoryService } from './celular-factory.service';
import { CelularFactory } from './celular-factory.entity';

@Controller('/celular-factories')
export class CelularFactoryController {
  constructor(private service: CelularFactoryService) {}

  @Get()
  findAll(): Promise<CelularFactory[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<CelularFactory> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException(
        'Celular factory not found',
        HttpStatus.NOT_FOUND,
      );

    return found;
  }

  @Post()
  create(@Body() celularFactory: CelularFactory): Promise<CelularFactory> {
    return this.service.save(celularFactory);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() celularFactory: CelularFactory,
  ): Promise<CelularFactory> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException(
        'Celular factory not found',
        HttpStatus.NOT_FOUND,
      );

    celularFactory.id = found.id;

    return this.service.save(celularFactory);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException(
        'Celular factory not found',
        HttpStatus.NOT_FOUND,
      );

    return this.service.remove(id);
  }
}

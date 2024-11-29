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
import { CelularService } from './celular.service';
import { Celular } from './celular.entity';

@Controller('/celulares')
export class CelularController {
  constructor(private service: CelularService) {}

  @Get()
  findAll(): Promise<Celular[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Celular> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Celular not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() celular: Celular): Promise<Celular> {
    return this.service.save(celular);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() celular: Celular,
  ): Promise<Celular> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Celular not found', HttpStatus.NOT_FOUND);

    celular.id = found.id;

    return this.service.save(celular);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Celular not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }
}

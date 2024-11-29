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
import { CelularTypeService } from './celular-type.service';
import { CelularType } from './celular-type.entity';

@Controller('/celular-types')
export class CelularTypeController {
  constructor(private service: CelularTypeService) {}

  @Get()
  findAll(): Promise<CelularType[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<CelularType> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Celular type not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() celularType: CelularType): Promise<CelularType> {
    return this.service.save(celularType);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() celularType: CelularType,
  ): Promise<CelularType> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Celular type not found', HttpStatus.NOT_FOUND);

    celularType.id = found.id;

    return this.service.save(celularType);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Celular type not found', HttpStatus.NOT_FOUND);

    return this.service.remove(id);
  }
}

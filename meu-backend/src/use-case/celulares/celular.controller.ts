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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CelularService } from './celular.service';
import { Celular } from './celular.entity';
import { SupabaseService } from 'src/@libs/supabase/supabase.service';

@Controller('/celulares')
export class CelularController {
  constructor(
    private readonly service: CelularService,
    private readonly supabaseService: SupabaseService,
  ) {}

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

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('File not found', HttpStatus.BAD_REQUEST);
    }

    const result = await this.supabaseService.upload(file);

    if (!result) {
      throw new HttpException(
        'Unable to upload file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return result;
  }
}

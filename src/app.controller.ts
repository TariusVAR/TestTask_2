import { 
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete 
} from '@nestjs/common';
import { Article } from '@prisma/client';
import { AppService } from './app.service';
import { CreateArticleDto } from './dto/create.news.dto';
import { UpdateArticleDto } from './dto/update.news.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/article')
  findAll() {
    return this.appService.findMany({});
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne({ id });
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateNewsDto: UpdateArticleDto,
  ) {
    return this.appService.update({
      where: { id },
      data: updateNewsDto,
    })
  }

  @Post('/article')
  create(
    @Body()
    data: CreateArticleDto,
    ): Promise<Article> { 
      return this.appService.create(data); 
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
      return this.appService.delete({ id })
    }
  /*
  Patch - обновление статьи

  Post - добавление статьи

  Delete - удаление статьи
  */
}

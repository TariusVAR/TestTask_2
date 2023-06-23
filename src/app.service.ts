import { Injectable } from '@nestjs/common';
import { Article, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create.news.dto';
import { UpdateArticleDto } from './dto/update.news.dto';

@Injectable()
export class AppService {
  constructor(private prisma:PrismaService) {}

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ArticleWhereUniqueInput;
    where?: Prisma.ArticleWhereInput;
    orderBy?: Prisma.ArticleOrderByWithRelationInput;
  }): Promise<Article[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.article.findMany({ skip, take, cursor, where, orderBy });
  }

  async findOne(where: Prisma.ArticleWhereUniqueInput): Promise<Article> {
    const article: Article = await this.prisma.article.findUnique({ where });

    if (!article) throw new NotFoundException('Статья не найдена!');

    return article;
  }

  async create(data: CreateArticleDto): Promise<Article>
  {
    data = {
      title: data.title,
      content: data.content
    };
    return this.prisma.article.create({ data });
  }

  async update(params: {
    where: Prisma.ArticleWhereUniqueInput;
    data: UpdateArticleDto;
  }): Promise<Article> {
    const { data, where } = params;

    return this.prisma.article.update({ data, where });
  }

  async delete(
    where: Prisma.ArticleWhereUniqueInput,
  ): Promise<Article | NotFoundException> {
    const article: Article = await this.prisma.article.findUnique({ where });

    if (!article) throw new NotFoundException('Статья не найдена!');

    return this.prisma.article.delete({ where });
  }
}

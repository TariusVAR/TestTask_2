import { Article, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create.news.dto';
import { UpdateArticleDto } from './dto/update.news.dto';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    findMany(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ArticleWhereUniqueInput;
        where?: Prisma.ArticleWhereInput;
        orderBy?: Prisma.ArticleOrderByWithRelationInput;
    }): Promise<Article[]>;
    findOne(where: Prisma.ArticleWhereUniqueInput): Promise<Article>;
    create(data: CreateArticleDto): Promise<Article>;
    update(params: {
        where: Prisma.ArticleWhereUniqueInput;
        data: UpdateArticleDto;
    }): Promise<Article>;
    delete(where: Prisma.ArticleWhereUniqueInput): Promise<Article | NotFoundException>;
}

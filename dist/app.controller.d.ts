import { Article } from '@prisma/client';
import { AppService } from './app.service';
import { CreateArticleDto } from './dto/create.news.dto';
import { UpdateArticleDto } from './dto/update.news.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        content: string;
    }, unknown> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        content: string;
    }, unknown> & {}>;
    update(id: string, updateNewsDto: UpdateArticleDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        content: string;
    }, unknown> & {}>;
    create(data: CreateArticleDto): Promise<Article>;
    delete(id: string): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        title: string;
        content: string;
    }, unknown> & {}) | import("@nestjs/common").NotFoundException>;
}

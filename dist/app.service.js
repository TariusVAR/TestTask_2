"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const common_2 = require("@nestjs/common");
let AppService = exports.AppService = class AppService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findMany(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.article.findMany({ skip, take, cursor, where, orderBy });
    }
    async findOne(where) {
        const article = await this.prisma.article.findUnique({ where });
        if (!article)
            throw new common_2.NotFoundException('Статья не найдена!');
        return article;
    }
    async create(data) {
        data = {
            title: data.title,
            content: data.content
        };
        return this.prisma.article.create({ data });
    }
    async update(params) {
        const { data, where } = params;
        return this.prisma.article.update({ data, where });
    }
    async delete(where) {
        const article = await this.prisma.article.findUnique({ where });
        if (!article)
            throw new common_2.NotFoundException('Статья не найдена!');
        return this.prisma.article.delete({ where });
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
//# sourceMappingURL=app.service.js.map
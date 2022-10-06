import { Module } from '@nestjs/common';
import { CobaController } from './coba.controller';
import { CobaService } from './coba.service';

@Module({
    controllers: [CobaController],
    providers: [CobaService],
})
export class CobaModule {}

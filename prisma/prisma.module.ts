import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // <- isso permite que outros módulos usem o serviço
})
export class PrismaModule {}

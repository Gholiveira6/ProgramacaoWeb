import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ClienteController], // O controlador está registrado aqui
  providers: [ClienteService, PrismaService], // O serviço está registrado aqui
})
export class ClienteModule {}

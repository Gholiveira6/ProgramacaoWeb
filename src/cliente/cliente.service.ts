import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    const cliente = await this.prisma.cliente.create({
      data: createClienteDto,
    });
    return cliente;
  }

  async findAll() {
    return this.prisma.cliente.findMany();
  }

  async findOne(id: string) {
    return this.prisma.cliente.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    return this.prisma.cliente.update({
      where: { id },
      data: updateClienteDto,
    });
  }

  async remove(id: string) {
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}

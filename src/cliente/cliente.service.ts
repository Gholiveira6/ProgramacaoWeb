import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    // Cria um novo cliente no banco de dados
    const cliente = await this.prisma.cliente.create({
      data: createClienteDto,
    });
    return cliente;
  }

  async findAll() {
    // Retorna todos os clientes do banco de dados
    return this.prisma.cliente.findMany();
  }

  async findOne(id: string) {
    // Retorna um cliente específico pelo ID (agora como string)
    return this.prisma.cliente.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    // Atualiza um cliente existente no banco de dados
    return this.prisma.cliente.update({
      where: { id },
      data: updateClienteDto,
    });
  }

  async remove(id: string) {
    // Remove um cliente do banco de dados
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}

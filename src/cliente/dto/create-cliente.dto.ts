import { isString, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  id: string;
  nome: string;
  endereco: string;
  cnpj: string;
  telefone: string;
  email: string;
}

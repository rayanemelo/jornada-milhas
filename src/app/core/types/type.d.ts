export interface Promocao {
  id: number;
  destino: string;
  imagem: string;
  preco: number;
}

export interface UF {
  id: number;
  nome: string;
  sigla: string;
}


export interface Usuario {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  cidade: string;
  estado: UF
}

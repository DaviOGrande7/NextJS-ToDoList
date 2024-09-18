export class Funcionario {
    nome: string;
    dataDeNascimento: Date;
  
    constructor(nome: string, dataDeNascimento: string) {
      this.nome = nome;
      this.dataDeNascimento = new Date(dataDeNascimento);
    }
  }
  
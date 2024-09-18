"use client"
import { useState } from "react";
import { Funcionario } from "./Funcionario";
import { calcularIdade, calcularDiasParaAniversario } from "./Funcoes";

export default function Home() {

  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([
    new Funcionario('Gervásio Duarte', '1970-01-12'),
    new Funcionario('Irene Chaves', '1992-03-20')
  ]);

  function adicionarFuncionario(nome: string, dataDeNascimento: string): void {
    const novoFuncionario = new Funcionario(nome, dataDeNascimento);
    setFuncionarios([...funcionarios, novoFuncionario]);
  }

  return (
    <div>
      <h1>Funcionários</h1>
      <hr/>
      <div>
        {funcionarios
          .sort((a, b) => calcularDiasParaAniversario(a.dataDeNascimento) - calcularDiasParaAniversario(b.dataDeNascimento))
          .map((funcionario, index) => {
            const idade = calcularIdade(funcionario.dataDeNascimento);
            const diasParaAniversario = calcularDiasParaAniversario(funcionario.dataDeNascimento);

            return (
              <div key={index}>
                <h1><strong>{funcionario.nome}</strong></h1>
                <p>{funcionario.dataDeNascimento.toLocaleDateString()} ({idade} anos; faltam {diasParaAniversario} dias para o aniversário)</p>
              </div>
            );
          })}
      </div>
      <hr/>
      <div>
        <input type="text" placeholder="Insira seu nome" id="nome"/>
        <input type="date" id="dataDeNascimento"/>
        <button onClick={() => {
          const nome = (document.getElementById("nome") as HTMLInputElement).value;
          const dataDeNascimento = (document.getElementById("dataDeNascimento") as HTMLInputElement).value;
          adicionarFuncionario(nome, dataDeNascimento);
        }}>
          Cadastrar funcionário
        </button>
      </div>
    </div>
  );
}

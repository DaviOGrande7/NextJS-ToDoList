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
    <div className="justify-center flex bg-slate-400">
      <div className="flex flex-col items-center justify-center min-h-screen p-4 w-2/4 bg-slate-100">
        <h1 className="text-3xl font-bold mb-4">Funcionários</h1>
        <hr className="w-full mb-4" />
        
        <div className="flex flex-col items-center space-y-4 mb-4">
          {funcionarios
            .sort((a, b) => calcularDiasParaAniversario(a.dataDeNascimento) - calcularDiasParaAniversario(b.dataDeNascimento))
            .map((funcionario, index) => {
              const idade = calcularIdade(funcionario.dataDeNascimento);
              const diasParaAniversario = calcularDiasParaAniversario(funcionario.dataDeNascimento);

              return (
                <div key={index} className="text-center border p-4 rounded-lg shadow-md w-full max-w-md">
                  <h1 className="text-xl font-semibold">{funcionario.nome}</h1>
                  <p className="text-gray-600">
                    {funcionario.dataDeNascimento.toLocaleDateString()} ({idade} anos; faltam {diasParaAniversario} dias para o aniversário)
                  </p>
                </div>
              );
            })}
        </div>

        <hr className="w-full mb-4" />

        <div className="flex flex-col items-center space-y-4">
          <div>
            <input type="text" placeholder="Insira seu nome" id="nome" className="border p-2 rounded-md w-full max-w-md" />
            <input type="date" id="dataDeNascimento" className="border p-2 rounded-md w-full max-w-md" />
          </div>
          <button 
            onClick={() => {
              const nome = (document.getElementById("nome") as HTMLInputElement).value;
              const dataDeNascimento = (document.getElementById("dataDeNascimento") as HTMLInputElement).value;
              adicionarFuncionario(nome, dataDeNascimento);
            }}
            className="bg-blue-500 text-white p-2 rounded-md w-full max-w-md hover:bg-blue-600"
          >
            Cadastrar funcionário
          </button>
        </div>
      </div>
    </div>
  );
}

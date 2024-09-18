export function calcularIdade(dataDeNascimento: Date): number {
    const hoje = new Date();
    const anoNascimento = dataDeNascimento.getFullYear();
    const mesNascimento = dataDeNascimento.getMonth();
    const diaNascimento = dataDeNascimento.getDate();
  
    let idade = hoje.getFullYear() - anoNascimento;
    if (hoje.getMonth() < mesNascimento || (hoje.getMonth() === mesNascimento && hoje.getDate() < diaNascimento)) {
      idade--;
    }
    return idade;
  }
  
export function calcularDiasParaAniversario(dataDeNascimento: Date): number {
    const hoje = new Date();
    const proximoAniversario = new Date(hoje.getFullYear(), dataDeNascimento.getMonth(), dataDeNascimento.getDate());

    if (proximoAniversario < hoje) {
        proximoAniversario.setFullYear(hoje.getFullYear() + 1);
    }

    const diffEmMilissegundos = proximoAniversario.getTime() - hoje.getTime();
    const diasParaAniversario = Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));

    return diasParaAniversario;
}

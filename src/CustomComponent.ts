export default abstract class CustomComponent {
  protected nome: string;
  protected caminho: string;
  protected custo: number;
  protected tipo: string;

  constructor(nome: string, caminho: string, custo: number, tipo: string) {
    this.nome = nome;
    this.caminho = caminho;
    this.custo = custo;
    this.tipo = tipo;
  }

  getNome(): string {
    return this.nome;
  }

  getCaminho(): string {
    return this.caminho;
  }

  getCusto(): number {
    return this.custo;
  }

  getTipo(): string {
    return this.tipo;
  }

  exibir(): void {
    throw new Error("Método não suportado");
  }

  adicionar(a: CustomComponent): void {
    throw new Error("Método não suportado");
  }

  remover(a: CustomComponent): void {
    throw new Error("Método não suportado");
  }

  recuperarFilho(i: number): CustomComponent | undefined {
    throw new Error("Método não suportado");
  }

  calcularCusto(i: number) {
    throw new Error("Método não suportado");
  }

  departamentoEmDepartamento(a: CustomComponent): CustomComponent | undefined {
    throw new Error("Método não suportado");
  }
}

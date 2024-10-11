import CustomComponent from "./CustomComponent";

export default class Departamento extends CustomComponent {
  private componentes: CustomComponent[];

  constructor(nome: string, caminho: string) {
    super(nome, caminho, 0.0, "D");
    this.componentes = [];
  }

  getComponentes(): CustomComponent[] {
    return this.componentes;
  }

  adicionar(a: CustomComponent): void {
    this.componentes.push(a);
  }

  remover(a: CustomComponent): void {
    const index = this.componentes.findIndex(
      (c) => c.getNome() == a.getNome() && c.getCaminho() == a.getCaminho()
    );
    if (index !== -1) {
      this.componentes.splice(index, 1);
    }
  }

  recuperarFilho(i: number): CustomComponent | undefined {
    if (this.componentes.length - 1 > i) return undefined;
    return this.componentes[i];
  }

  calcularCusto(custo: number) {
    this.custo = this.custo + custo;
  }

  exibir(): void {
    console.log("---------------------------------------------------");
    for (let a of this.componentes) {
      this.calcularCusto(a.getCusto());
    }
    console.log(`- ${this.nome} - ${this.caminho} - ${this.custo} - `);
    for (let a of this.componentes) {
      a.getCaminho();
      a.exibir();
    }
  }
}

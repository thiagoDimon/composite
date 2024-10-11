import CustomComponent from "./CustomComponent";

export default class Funcionario extends CustomComponent {
  exibir(): void {
    console.log(`- ${this.nome} - ${this.caminho} - ${this.custo} - `);
  }
}

import CustomComponent from "./CustomComponent";

export default class Gerenciador {
  private raiz: CustomComponent;

  constructor(r: CustomComponent) {
    this.raiz = r;
  }

  exibir() {
    this.raiz.exibir();
  }
}

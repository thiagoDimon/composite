import Departamento from "./Departamento";
import Funcionario from "./Funcionario";
import Gerenciador from "./Gerenciador";

const raiz = new Departamento("Raiz", "/raiz");

const dep1 = new Departamento("Departamento 1", "/dep1");
const dep2 = new Departamento("Departamento 2", "/dep2");
const dep3 = new Departamento("Departamento 3", "/dep3");

raiz.adicionar(dep1);
raiz.adicionar(dep2);
raiz.adicionar(dep3);

const fun1 = new Funcionario("Funcionário 1", "/fun1", 500, "F");
const fun2 = new Funcionario("Funcionário 2", "/fun2", 200, "F");
const fun3 = new Funcionario("Funcionário 3", "/fun3", 100, "F");

const dep4 = new Departamento("Departamento 4", "/dep4");
dep4.adicionar(fun1);
dep4.adicionar(fun2);
dep4.adicionar(fun3);

dep1.adicionar(fun1);
dep1.adicionar(fun2);
dep2.adicionar(fun2);
dep2.adicionar(dep4);
dep3.adicionar(fun1);
dep3.adicionar(fun3);

const gerenciador = new Gerenciador(raiz);

gerenciador.exibir();

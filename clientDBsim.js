let clienteList = [];
let contagemClientes = 0;

class Cliente {
  constructor(nome, nascimento, idade, rg, cpf, endereco) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.idade = idade;
    this.rg = rg;
    this.cpf = cpf;
    this.endereco = endereco;
  }
}

function consultarTodos() {
  if (clienteList.length === 0) {
    console.log("Nenhum cliente cadastrado ainda.");
    return;
   } else {
    console.log("\n📋 Lista de Clientes:");
    //loop
    console.table(clienteList);
    console.log("Total de clientes:", contagemClientes);
    
    
  }
}

function editarCliente() {
    if (clienteList.length === 0) {
    console.log("Nenhum cliente cadastrado ainda.");
    return;
     }
  
  const cpfBusca = prompt("Digite o CPF do cliente a editar:");
  const cliente = clienteList.find(x => x.cpf === cpfBusca);

  if (!cliente) {
    console.log("Cliente não encontrado!");
    return;
   }

  console.log("Caso não deseje alterar, pressione ENTER.");
  
  const novoNome = prompt("Nome (" + cliente.nome + "):") || cliente.nome;
  const novoNascimento = prompt("Nascimento (" + cliente.nascimento + "):") || cliente.nascimento;
  const novaIdade = prompt("Idade (" + cliente.idade + "):") || cliente.idade;
  const novoRg = prompt("RG (" + cliente.rg + "):") || cliente.rg;
  const novoCpf = prompt("CPF (" + cliente.cpf + "):") || cliente.cpf;
  const novoEndereco = prompt("Endereço (" + cliente.endereco + "):") || cliente.endereco;

  cliente.nome = novoNome;
  cliente.nascimento = novoNascimento;
  cliente.idade = novaIdade;
  cliente.rg = novoRg;
  cliente.cpf = novoCpf;
  cliente.endereco = novoEndereco;

  console.log("Dados atualizados com sucesso!");
}

function consultarPorCPF() {
  if (clienteList.length === 0) {
    console.log("Nenhum cliente cadastrado ainda.");
    return;
  }

  const cpfBusca = prompt("Digite o CPF do cliente para consulta:");

  // Procura cliente pelo CPF
  const cliente = clienteList.find(x => x.cpf === cpfBusca);

  if (!cliente) {
    console.log("Cliente não encontrado!");
   } else {
    console.log("Cliente encontrado:");
    console.table([cliente]);
  }
}

function cadastrarCliente() {
  console.log("Insira os dados para cadastro");

  let nome;
  while (true) {
  nome = prompt("Nome completo:");
  
  if (nome === null) {
    console.log("Operação cancelada. Saindo.");
    return;
   }
  
  if (nome.trim() === "") {
    console.log("Este campo é obrigatório. Digite seu nome completo.");
    continue;
   }

  break;
  }

  let nascimento;
  while (true) {
  nascimento = prompt("Nascimento:");
  
  if (nascimento === null) {
    console.log("Operação cancelada. Saindo.");
    return;
   }
  
  if (nascimento.trim() === "") {
    console.log("Este campo é obrigatório. Digite sua data de nascimento.");
    continue;
   }

  break;
  }

  let idade;
  while (true) {
  idade = prompt("Idade:");
  
  if (idade === null) {
    console.log("Operação cancelada. Saindo.");
    return;
   }
  
  if (idade.trim() === "") {
    console.log("Este campo é obrigatório. Digite sua idade.");
    continue;
   }

  break;
 }
  
  let rg;
  while (true) {
  rg = prompt("RG:");
  
  if (rg === null) {
    console.log("Operação cancelada. Saindo.");
    return;
   }
  
  if (rg.trim() === "") {
    console.log("Este campo é obrigatório. Digite seu RG.");
    continue;
   }

  break;
  }
  
  let cpf;
  while (true) {
  cpf = prompt("CPF:");
  
  if (cpf === null) {
    console.log("Operação cancelada. Saindo.");
    return;
   }
  
  if (cpf.trim() === "") {
    console.log("Este campo é obrigatório. Digite seu CPF.");
    continue;
   }

  break;
 }

  let endereco;
  while (true) {
  endereco = prompt("Endereço:");
  
  if (endereco === null) {
    console.log("Operação cancelada. Saindo.");
    return;
   }
  
  if (endereco.trim() === "") {
    console.log("Este campo é obrigatório. Digite seu endereço.");
    continue;
   }

  break;
  }
  
  const clienteTemp = new Cliente(nome, nascimento, idade, rg, cpf, endereco);

  clienteList.push(clienteTemp);
  console.log("Cliente: "+ nome +" cadastrado com sucesso!");
  contagemClientes++;

}

function excluirCliente() {
    if (clienteList.length === 0) {
    console.log("Nenhum cliente cadastrado ainda.");
    return;
     }
   
  let cpfBusca = prompt("Digite o CPF do cliente a excluir:");

  // Procura o cliente
  let clienteRemovido = clienteList.find(x => x.cpf === cpfBusca);

  if (!clienteRemovido) {
    console.log("Cliente não encontrado!");
    return;
   }

  // Remove o cliente, cria novo array sem ele
  clienteList = clienteList.filter(x => x.cpf !== cpfBusca);
  contagemClientes--;

  console.log("Cliente excluído com sucesso!");
}


  let op = 0;
  while (op !== 6) {
  const input = prompt(
    "Menu:\n" +
    "1. Cadastrar cliente\n" +
    "2. Consultar cliente\n" +
    "3. Consultar todos\n" +
    "4. Editar cliente\n" +
    "5. Excluir cliente\n" +
    "6. Sair"
  );

    if (input === null) {
    console.log("Operação cancelada. Saindo.");
    break;
     }
  
  op = parseInt(input);

  switch(op) {
    case 1:
      cadastrarCliente();
      break;
    case 2:
      consultarPorCPF();
      break;
    case 3:
      consultarTodos();
      break;
    case 4:
      editarCliente();
      break;
    case 5:
      excluirCliente();
      break;
    case 6:
      console.log("Obrigado. Até breve!");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
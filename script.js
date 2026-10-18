// 1 e 2. Conexão com o JavaScript, comentário e instruções
// Mensagem inicial da atividade.
console.log("Meu primeiro script foi executado!");
console.log("Painel de Estudos");
console.log(10 + 5);
console.log("A atividade começou");

// 3. Variáveis com const e let
const nomeAluno = "Seu nome";
const curso = "Desenvolvimento Web";
let quantidadeTarefas = 3;

console.log("Tarefas antes:", quantidadeTarefas);
quantidadeTarefas = 4; // altera o valor da variável declarada com let
console.log("Tarefas depois:", quantidadeTarefas);

// 4. var como contexto histórico
var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log(exemploAntigo);

// 5. Tipos de dados
const titulo = "Painel de estudos"; // string
const quantidade = 4; // number
const ativo = true; // boolean
const observacao = null; // null

console.log(titulo);
console.log(quantidade);
console.log(ativo);
console.log(observacao);

// 6. Operadores
const nota1 = 7;
const nota2 = 8;
const soma = nota1 + nota2;
const diferenca = nota2 - nota1;
const produto = nota1 * nota2;
const media = soma / 2;
const aprovado = media >= 6;

console.log("Soma das notas:", soma);
console.log("Diferença entre as notas:", diferenca);
console.log("Produto das notas:", produto);
console.log("Média:", media);
console.log("Aprovado?", aprovado);

// 7. Strings e template literals
const mensagem = `O aluno ${nomeAluno} está no curso de ${curso} e possui ${quantidadeTarefas} tarefas.`;
console.log(mensagem);

// 8. Decisão com if e else
// Teste 1: media = 7.5 (>= 6) -> "Aprovado"
// Teste 2: troque nota1 e nota2 por 4 e 5 -> "Precisa revisar"
if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

// 10. Desafio integrador: pedido de material de estudo
const produtoPedido = "Caderno";
const preco = 25;
let unidades = 2;
const totalPedido = preco * unidades;
const desconto = totalPedido * 0.1;
const totalComDesconto = totalPedido - desconto;

console.log(`Pedido: ${unidades}x ${produtoPedido}. Total: R$ ${totalPedido}. Com desconto: R$ ${totalComDesconto}.`);

if (totalPedido >= 40) {
  console.log("Frete grátis");
} else {
  console.log("Frete pago");
}

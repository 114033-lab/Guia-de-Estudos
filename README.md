Guia de Estudos (Estude With ME)
1. Nome e tema do projeto

Nome: Guia de Estudos (título da página: Estude With ME)

Tema: um painel simples de acompanhamento de estudos, que organiza tarefas, notas e horas de estudo do curso de Desenvolvimento Web. O projeto é uma atividade prática que une HTML + Bootstrap (interface) e JavaScript (lógica básica).

2. Explicação da interface criada

A página foi construída com Bootstrap 5 (via CDN) e é responsiva. Ela é dividida em:

Barra de navegação (navbar): fundo verde com o nome "Guia de Estudos".
Seção inicial (header): título "Acompanhe seus estudos" com a etiqueta Novo e um texto curto explicando a proposta do painel.
Alerta: aviso em destaque informando que o aluno tem 4 tarefas pendentes.
Três cards informativos:
Tarefas: 4 pendentes;
Notas: média 7,5;
Horas de estudo: 12 h na semana.
Botão "Ver minhas tarefas": botão grande e centralizado, que serve como chamada para ação.
Rodapé (footer): fundo verde, com o texto de direitos e o nome da atividade.

O layout usa flex-column e min-vh-100 no body, o que mantém o rodapé sempre no fim da tela, mesmo com pouco conteúdo. Os cards se reorganizam conforme o tamanho da tela: 1 por linha no celular, 2 em tablets e 3 em telas grandes.

3. Componentes Bootstrap utilizados
Componente / recurso	Onde foi usado
Navbar (navbar, navbar-brand)	Barra superior com o nome do guia
Badge (badge, text-bg-*)	"Novo", "4 pendentes", "Média 7,5" e "12 h"
Alert (alert alert-info)	Aviso de tarefas pendentes
Card (card, card-body, card-title, card-text)	Tarefas, Notas e Horas de estudo
Button (btn btn-primary btn-lg)	Botão "Ver minhas tarefas"
Grid system (container, row, col-12 col-md-6 col-lg-4)	Organização responsiva dos cards
Utilitários de espaçamento (my-5, mt-5, py-3, g-4)	Margens, paddings e espaços entre os cards
Utilitários de flexbox (d-flex, flex-column, flex-grow-1)	Rodapé fixo na base da página
Utilitários de texto e cor (fw-bold, lead, display-5, text-center, bg-success, text-bg-success)	Tipografia, alinhamento e cores
Sombra (shadow-sm)	Efeito suave nos cards
4. Diferença entre let, const e var
Palavra-chave	Pode mudar o valor?	Escopo	Quando usar
const	Não	Bloco	Valores que não mudam (ex.: nomeAluno, curso, nota1)
let	Sim	Bloco	Valores que precisam ser alterados (ex.: quantidadeTarefas, unidades)
var	Sim	Função (ou global)	Apenas em códigos antigos; hoje é evitado

Exemplos do projeto:

js
const curso = "Desenvolvimento Web"; // não muda
let quantidadeTarefas = 3;           // pode mudar
quantidadeTarefas = 4;               // alterado com sucesso
var exemploAntigo = "Declaração utilizada em códigos antigos";

O var foi usado apenas como contexto histórico. Ele pode causar comportamentos inesperados porque não respeita o escopo de bloco e permite redeclaração da mesma variável. Por isso, a recomendação atual é usar const por padrão e let quando for necessário alterar o valor.

5. Tipos de dados utilizados
Tipo	Exemplo no código
String (texto)	const titulo = "Painel de estudos";
Number (número)	const quantidade = 4; / const preco = 25;
Boolean (verdadeiro/falso)	const ativo = true; / const aprovado = media >= 6;
Null (valor vazio intencional)	const observacao = null;
6. Explicação da condição if/else

O script calcula a média de duas notas e decide se o aluno está aprovado:

js
const nota1 = 7;
const nota2 = 8;
const media = (nota1 + nota2) / 2; // 7.5

if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

Como funciona:

A média é calculada somando as notas e dividindo por 2 (resultado: 7,5).
O if testa se media >= 6.
Como 7,5 é maior que 6, a condição é verdadeira e aparece "Aprovado" no console.
Se a média fosse menor que 6, o bloco else seria executado e apareceria "Precisa revisar".

Testes realizados:

Notas 7 e 8 → média 7,5 → Aprovado
Notas 4 e 5 → média 4,5 → Precisa revisar

O desafio final do script usa a mesma lógica para o frete: se o total do pedido for maior ou igual a R$ 40, mostra "Frete grátis"; caso contrário, "Frete pago".

7. Maior dificuldade encontrada

Ajuste este trecho com a sua experiência real, se for diferente.

A maior dificuldade foi entender como o JavaScript e o HTML/Bootstrap se conectam e encontrar pequenos erros de código que não davam mensagem clara. Por exemplo, um caractere > sobrando depois do fechamento da div na navbar aparecia como texto solto na tela, e uma palavra escrita errada ("desenvolvimeto") passou despercebida. Também foi difícil, no início, saber quando usar let e quando usar const, e como montar mensagens com template literals (crase e ${}).

8. Como a dificuldade foi resolvida

Ajuste este trecho com a sua experiência real, se for diferente.

Erros de HTML: revisei o código linha por linha e usei as Ferramentas do Desenvolvedor do navegador (F12) para inspecionar os elementos e localizar o que estava fora do lugar.
JavaScript: usei console.log() em cada etapa para acompanhar o valor das variáveis e confirmar se os cálculos e as condições estavam corretos, testando também valores diferentes (como notas 4 e 5).
let x const: adotei a regra de começar sempre com const e trocar para let somente quando o valor realmente precisava mudar.
Bootstrap: consultei a documentação oficial para escolher as classes certas e conferir a responsividade redimensionando a janela do navegador.
Como executar
Deixe os arquivos index.html e script.js na mesma pasta.
Abra o index.html no navegador.
Pressione F12 e abra a aba Console para ver as saídas do JavaScript.
Tecnologias
HTML5
Bootstrap 5.3.3 (CDN)
JavaScript

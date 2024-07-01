#### 26/06/2024

Curso de Typescript parte 3: mais técnicas e boas práticas

@01-Entendendo Decorators 

@@01
Apresentação

[00:00] Olá, pessoal, eu sou Flavio Almeida, bem vindos ao terceiro curso de TypeScript, esse curso ele tem todo o conteúdo do primeiro, do segundo curso é o mesmo projeto só que uma ligeira modificação que eu quero mostrar para vocês.
[00:15] Primeira coisa que vocês vão fazer é ir lá no projeto, no link do capítulo, baixar o projeto e descompactar na área de trabalho de vocês. Descompactando na área de trabalho, eu vou pegar o meu Visual Studio Code, o editor de texto utilizado durante o treinamento, vou lá na área de trabalho, abrir aqui, TypeScript abriu o projeto do curso.

[00:35] Com todo o código do curso anterior, a única modificação é que a pasta dist e a app, que antes tinha o código fonte, agora estão dentro de app. Então src tem o nosso código fonte TypeScript que nós escrevemos e a pasta dist é a pasta onde ficam os arquivos compilados do TypeScript para o Java Script.

[00:58] Essa estrutura eu alterei para ficar mais perto com a estrutura de um servidor web ou uma aplicação escrita em Angular usando o Angular CLI, React e por aí vai. Relembrando o seguinte, para nós rodarmos esse projeto, você precisa ter o node.js 10.21 ou superior, versões LTS, vocês precisam usar o Studio Code e ter o Chrome instalado, então como é que eu executo o projeto?

[01:26] Executando o projeto, lembrando de cursos anteriores que a gente tem um script, start que vai rodar o meu servidor local, mais o computador TypeScript em tempo real, significa que qualquer mudança nos nossos arquivos TS vai refletir no nosso projeto. Então eu vou escrever npm run start e isso aqui vai ser suficiente para ele abrir o navegador, no meu caso ele abriu aqui na minha segunda tela, deixa eu jogar para cá.

[01:53] O projeto abriu, deixa eu forçar de novo, vou parar e vou voltar lá para o nosso código, abriu o terminal e lembrando, como faz para abrir o terminal? Você vem em “terminal > new terminal”, com a pasta do projeto aberta dentro do Visual Studio Code, vou dar npm run start. Fazendo isso o navegador vai ser automaticamente aberto. Uma outra diferença que a gente já nota aqui, é que dentro de localhost:3000 eu vou ter a subpasta dist e dentro dela o meu index.html.

[02:34] Mas a aplicação continua funcionando perfeita em relação ao curso anterior, nenhum código foi trocado, só a estrutura de pastas, tá bom? Então é essa a estrutura que nós vamos utilizar ao longo do treinamento, então relembrando que o nosso código fonte agora está na pasta src, de source, e o resultado da compilação do nosso arquivo Start Script vão estar dentro da pasta dist.

[03:05] Uma outra coisa aqui, só para finalizar, esse index.html que tem aqui dentro da pasta app só para o redirect quando eu abro o meu servidor lá para a pasta dist. E é a pasta dist que eu tenho meu index.htlm e meus scripts, tá bom? Só uma mudança porque eu quero motivar uma coisa lá para o final do treinamento e eu preciso dessa estrutura aí.

[03:29] Fechado, galera? Então vamos começar, porque tem bastante coisa nova aqui para nós vermos e deixar nosso Code cada vez mais lindo.

@@02
Preparando o ambiente

Você pode ir acompanhando o passo a passo do desenvolvimento do nosso projeto e, caso deseje, você pode baixar o projeto do curso ou acessar os arquivos do GitHub.
Bons estudos!

https://github.com/alura-cursos/typescript-curso-3/archive/f4398d11cf4a7b0fd5adf9d387ce9e0f985242a0.zip

https://github.com/alura-cursos/typescript-curso-3/tree/f4398d11cf4a7b0fd5adf9d387ce9e0f985242a0

@@03
Requisitos não funcionais

[00:00] Pessoal, vamos voltar aqui para a nossa aplicação, porque nós precisamos continuar. Nossa aplicação está funcionando, nós conseguimos ir lá cadastrar aqui uma negociação que não seja em dia útil, mas, seguinte, essa aplicação é uma aplicação que você vai trabalhar, que você vai desenvolver geralmente ela tem requisitos que alguém está pedindo que essa aplicação funcione de uma determinada maneira.
[00:30] Mas tem coisas que nós chamamos de requisitos não funcionais que é tudo aquilo que a sua aplicação tem que ter e que o cliente não pede, que está subentendido que vai ter e um dos requisitos não funcionais nessa aplicação é a velocidade. Nós esperamos que essa renderização da nossa tabela seja numa velocidade aceitável.

[00:50] É claro que pelo escopo da nossa aplicação, ela é até aceitável, mas, por exemplo, eu poderia gerar uma métrica aqui na minha aplicação para saber se eu preciso substituir a nossa própria solução, o nosso próprio micro framework view, substituir por uma solução mais profissional do mercado como a angular, react e por aí vai.

[01:11] Então como é que eu faço essa análise para saber o tempo de renderização, o tempo que demora meus métodos para serem executados? A primeira coisa que passa na nossa cabeça é nós chegarmos lá na nossa classe view, nossa abstract class view generic e o que eu vou fazer? Eu vou chegar no método update e vou usar aqui um recurso que tem no próprio navegador, eu vou fazer um teste de performance e tempo de execução.

[01:39] Vou criar aqui uma constante que vou chamar de t1, esse cara vai ser igual ao objeto disponível globalmente no navegador chamado performance e vou chamar o método now. Então vou guardar o tempo 1 e quando eu acabo de renderizar, eu vou dizer que const t2 = performance.now e agora eu preciso saber a diferença entre um e outro.

[02:20] Então o que eu vou fazer no meu console? console.log e aí eu vou botar assim, usando uma template string, tempo de execução do método update: t2-t1, esse cara vai me dar em milissegundos e eu vou dividir por mil para saber quanto é em segundos e eu vou colocar aqui segundos, quero saber quanto tempo esse cara demora.

[03:00] Vou salvar. Nenhum erro de compilação aqui que nós estamos vendo, vou voltar lá para o navegador, vou olhar aqui o console log. Ele já carregou e como nós já fazemos o update no table, ele está dizendo que o update do view demorou essa fração aqui de segundos. Beleza, agora vamos adicionar 17/01/2020, 1111, incluir. Mais outro teste.

[03:32] Então eu tenho uma métrica aqui de segundos, mas a questão toda agora é que eu também tenho que saber quanto o método adiciona vai levar. Então vamos voltar lá para o código, vou voltar lá para o meu controle dentro de src. Você pode fazer assim também, “Ctrl + P”, aí você coloca controller e ele vai te mostrar controller.ts, cuidado, tá?

[03:55] Dentro do controller.ts eu vou fazer a mesma coisa, const t1 = performance.now, guardei esse tempo. Quando eu acabo de incluir eu vou fazer cons t2 = performance.now e agora eu vou ter que fazer o console.log. Vou copiar aqui, na natureza nada se cria, tudo se copia. Vou colocar aqui, tempo de execução do método que não é mais update, é adiciona.

[04:41] Está aqui o meu código. Vou chegar um pouco para o lado para vocês verem aqui. Completar o código, salvei e vou voltar lá para o meu navegador, fez o refresh. Vou digitar 17/01/2020, vou incluir alguma coisa aqui, pronto incluiu e eu tenho lá o tempo de execução gasto com o método adiciona. Você vê que ele já não foi tão rápido quanto os outros, mas mesmo assim é muito rápido.

[05:14] Só que isso não está legal, galera. É o seguinte, todo o lugar que eu quiser realizar essa métrica, eu vou ter que praticamente copiar e colar o mesmo código, que é cria t1, cria t2, faz o console.log e a única coisa que muda nesse console log é o nome do método que eu estou executando. Então esse código é intrusivo, ele está entrando na lógica.

[05:39] Esse requisito não funcional está entrando na lógica do método da minha classe, ele não pertence, ele não faz parte da regra de negócio, ele está aí porque eu preciso executá-lo. Outra coisa, se eu quiser fazer isso em outros lugares do sistema, eu vou ter que repetir esse código em vários lugares, então a pergunta que nós fazemos é será que tem algum jeito para isolar esse requisito não funcional, que é um teste de performance, em um único lugar?

[06:04] E desse único lugar reutilizar em qualquer lugar, qualquer método que eu queira? Tem e é isso que nós vamos ver. O TypeScript fornece uma solução muito interessante para resolver esse tipo de problema.

@@04
TypeScript e Decorators

[00:00] Bom, galera, o TypeScript possui um recurso de linguagem chamado decorator. Esse decorator me permite pegar esse código, por exemplo, o nosso código que checa performance, isolar esse código e colocar esse código em um único lugar e esse código pode ser aplicado em diversos lugares na aplicação.
[00:23] Flavio, você está dizendo que esse código que eu preciso colocar um código, iniciar uma variável antes do miolo do método ser executado e outro no final do método a ser executado, isso pode ser violado em um código? Beleza, até entendi, mas como esse código vai ser aplicado no meu método?

[00:41] É isso que nós vamos ver agora bem devagar. Então vamos entender como funciona esse decorator. A primeira coisa, para você não ficar assustado, é que o decorator é, nada mais, nada menos, que uma função. Então vamos começar lá dentro da pasta src.

[00:57] Eu vou criar aqui a pasta "decorators" e dentro dela eu vou criar um decorator, o nome que eu vou usar vai ser logar tempo de execução. Vou renomear aqui, “new file > logar-tempo-de-execucao.ts”. Então está aqui o meu arquivo criado, é um arquivo ts, o que eu vou fazer? Sabemos que esse arquivo para o sistema de modus que estamos usando do ECMAScript é um módulo, então ele tem que exportar alguma coisa.

[01:39] O que eu vou exportar? Eu vou dar export function e o nome da função que eu vou exportar, logarTempoDeExecucao, só isso, uma função que eu estou exportando. Flavio, você está dizendo que decorator é só isso? Não, tem mais, mas o princípio para nós entendermos é que esse decorator é declarado dessa forma.

[02:03] Ainda está longe terminarmos esse decorator, mas o mais importante para entendermos é onde que eu quero usar esse cara? Eu quero usar tanto em view quanto no meu controller, então como é que essa função decorator, depois de pronta, como que pegamos ela e associa com o método que queremos analisar e executar um código? Esse código de performance ou qualquer outro que a gente vai ver ao longo do treinamento.

[02:30] Eu vou voltar lá para o meu controller, negociação controller, onde tem o adicione, vou remover isso aqui, porque queremos que isso seja feito pelo decorator. O que eu vou fazer? Você vai chegar e eu vou importar aqui em cima do adiciona, vou colocar @logarTempoDeExecução. Fiz isso, abro e fecho parênteses, quando faço isso dá um erro, mas já vou explicar.

[03:08] Primeira coisa que você vai verificar é se o seu import lá em cima, se ele importou logarTempoDeExecucao, descendo uma pasta ele foi para a pasta decorators. Verifica se o js está lá. Esse js precisa estar lá. Antes de terminarmos o decorator, você já sabe que o decorator eu uso essa sintaxe especial usando arroba ou at, no inglês, mais o nome da minha função decorator.

[03:38] Como é uma função, estou abrindo e fechando parênteses, mas se eu passo o mouse aqui em cima, você vai ver que esse decorator ainda não está pronto. Nós precisamos continuar a implementar, porque ele não segue uma assinatura de um decorator real, mas o mais importante aqui, antes da implementação, é o seguinte, suponha que nós já implementamos esse decorator. Não vai funcionar.

[04:05] Nós precisamos ativar uma configuração especial no compilador para garantir que os decorators sejam processados pelo TypeScript no momento da compilação do seu código. Então, recapitulando, estou tendo esse erro porque o meu decorator não está pronto, se eu estivesse com o decorator, pronto nem iria funcionar porque eu preciso deixar claro para o compilador TypeScript, quero que o TypeScript processe decorators no meu código e como faço isso?

[04:36] Vou salvar, vou lá no centro nervoso do compilador TypeScript, que é o tsconfig.json e vou colocar uma propriedade aqui que é experimentalDecorators: true. Quando eu coloco eu estou dizendo para o TypeScript que eu vou usar decorators experimentais.

[05:05] A primeira coisa que você pode estar pensando na sua cabeça é se você vai usar uma coisa experimenta. Não, isso é usado por angulares, isso é usado se você tem TypeScript react você pode usar também. É só porque a definição do API de decorator ainda não foi consolidada no mundo do Java Script.

[05:23] Então o que estou dizendo para o TypeScript é usar a questão experimental, mas de experimental não tem nada, porque isso é usado em produção e por aí vai. Salvei, agora o meu compilador está com isso ativado e agora nós podemos voltar lá para logar tempo de execução. Só para garantir eu vou parar aqui o meu servidor e vou executar npm run start.

[05:49] Só para ter certeza de que a configuração que eu passei para o decorator vai estar sendo executada aqui no meu código. É uma coisa importante para nós vermos, é que eu preciso fazer esse código compilar, vamos lá agora para o próximo vídeo que vamos terminar o nosso decorator.

@@05
API do Decorator

[00:00] Vamos lá para a implementação do nosso decorator. Lembrando que quando eu chamo aqui, boto o arroba e chamo essa função TempoDeExecucao, ela não é o decorator, ela precisa retornar a uma função que segue as regras do TypeScript de um decorator, que função é essa? Eu vou dar um return function, que vai receber três parâmetros. Já falo o que é cada um desses parâmetros.
[00:26] Vai receber o target que eu vou dizer que é any. Vou receber uma propertyKey, que é string, e vou receber um descriptor, que é um PropertyDescriptor. O que é target? Isso aqui é irrelevante para o nosso caso, mas não custa nada explicar, esse target ele é o seguinte, se você coloca o decorator no método estático, esse target é a função construtora da classe.

[01:08] Se você coloca esse decorator no método que não é estático, ele vai te retornar o prototype daquela classe. Só lembrando aqui rapidamente que todo o sistema de herança do Java Script é baseado em prototipação e do TypeScript também, porque, no final, o código que tá rodando é um código Java Script. O que é prototipação? Só para lembrarmos aqui.

[01:29] Você tem uma instância de uma classe e eu chamo o método, se o método não existe, ela pergunta: “Beleza, eu não tenho, mas o prototype tem?”. Aí vai e tenta achar uma no prototype. Se tiver, é porque eu herdei, então ganho esse prototype e ele vai executar do prototype.

[01:49] Se o prototype não tiver, ele vai perguntar: “Meu prototype tem?” e, se não tiver, ele vai perguntar: “O prototype do prototype do prototype” e se ninguém tiver lá na cadeia de herança do método, eu vou ter um erro de execução.

[02:02] Então, de novo, o target pode ser se o meu decorator está em cima de um método estático de uma classe, pode ser uma função conjuntora e se estiver no método que não é estático, ele vai ser o prototype. Irrelevante para o nosso problema aqui. Segundo, o próprio propertyKey já é legal, porque ele é me dá o nome do método como string que foi decorado.

[02:23] E o PropertyDescriptor é muito especial, ele sabe tudo sobre o método que queremos executar, que queremos modificar, ele tem uma referência para o método original. Então o que nós precisamos fazer aqui e que nós vamos ver no próximo vídeo, nós vamos precisar fazer o seguinte, antes de ir para o próximo vídeo, eu vou mostrar só o conceito aqui. Olha o que eu vou fazer.

[02:47] Quando esse meu decorator for chamado, eu vou fazer return descriptor. Flavio, você aplicou o decorator e ele não fez nada, só retornou o descriptor? Só, o meu decorator não estava fazendo nada, só para vermos se estava tudo se encaixando, se nós não temos erro. Salvei e então você sabe que a minha função decorator no final tem que retornar um descriptor.

[03:13] Vou lá em negociação-controller, salvei e não tenho mais erro de compilação. Volto lá na minha aplicação e se eu coloco aqui "16/11/1111", boto qualquer coisa em quantidade, incluo, está tudo funcionando, tudo uma maravilha. Então nós criamos um decorator que quando é executado, ele não faz nada, mas o importante e que nós vamos ver no próximo vídeo, é que precisamos modificar esse descriptor para ter o comportamento que queremos.

[03:43] No caso, queremos que antes do bloco e método seja executado, queremos criar uma variável de tempo e quando ele terminar de ser executado, eu quero criar uma variável de tempo e saber quanto tempo demorou esse método para ser executado. Mas esse é o esqueleto de um decorator que vocês podem utilizar no projeto de vocês. Vamos para o próximo vídeo porque eu quero implementar e fazer mágica aqui.

@@06
Implementando nosso Decorator

[00:00:00] Vamos lá, nós temos nosso decorator aqui, nossa função logarTempoDeExecucao, que ao ser chamada retorna uma função que segue a regra do TypeScript decorator. Um detalhe só para lembrar, por que eu coloquei any no target, faz sentido porque o any pode ser um construtor ou prototype da classe, então não sei, ele pode ser qualquer coisa.
[00:00:23] Então eu explicitei o valor do any, o que eu não posso é deixar de explicitar o valor, porque nós ativamos lá no TypeScript. O TypeScript parou de adotar valores implícitos para any, então eu tenho que estipular isso aqui na munheca.

[00:00:42] Como é que vou implementar? Eu sei que tenho que guardar o comportamento original do método, não faz sentido jogar ele fora, porque antes de eu substituir ou adicionar lá pelo meu método, eu tenho que guardar o original. Então vou criar aqui uma variável que vou colocar aqui para vocês que vai ser const metodoOriginal, esse cara vai ser descriptor.value.

[00:01:13] Esse método aqui está como se fosse desencaixado da instância da classe e está colocado dentro de uma variável que contém a referência para o método. Em TypeScript nós podemos fazer isso e consequente em Java Script também. Java Script e TypeScript. [01:30] Guardei o método e agora vamos começar a modificar o meu descriptor, que é o meu método original. Eu vou passar para ele, vou modificar e passar uma função com comportamento que eu quero executar. Aqui eu guardei o método original, aqui eu quero sobrescrever o comportamento e em algum momento eu quero chamar o método original.

[02:02] Só que antes de chamar esse método original, quero fazer const t1 = performance.now() e agora aqui embaixo vou fazer const t2 = performance.now() e em algum momento eu vou ter quer fazer console.log(‘${propertyKey}, tempo de execução: ${(t2 – t1)/1000} segundos’).

[03:11] Flavio, o decorator está pronto? Não, tem mais coisa para fazermos, mas o mais importante aqui é você entender o seguinte, isso aqui vai substituir o método original da minha classe. Quando ele for chamado, olha a primeira coisa que ele vai fazer, vai criar t1, vai chamar o método original e quando ele acabar de chamar o método original, eu vou pegar o t2 e vou exibir no console log.

[03:39] Então a pegadinha que estou falando aqui, é como nós vamos chamar o método original. Vou chegar agora e vou dizer const retorno = metodoOriginal(), vou ter o retorno, depois de exibir isso tudo eu tenho que fazer o retorno do método original. Faz sentido? Porque, olha só, se esse aqui é o meu novo método, eu chamei o método original, peguei o retorno dele e fiz o meu novo método retornar o retorno esperado do método original.

[04:26] Só que, seguinte, o problema na hora de chamar esse método original é isso que vamos precisar ver no próximo vídeo porque não é bem assim o negócio que vai funcionar. A ideia toda é o seguinte, quantos parâmetros recebe adiciona? Nenhum. Se eu for colocar em views, quantos parâmetros ele recebe? Model.

[04:52] Poderia ter método que recebe, dois, nenhum, quatro, sete, oito, quinze parâmetros? Então, qual é a sacada, eu tenho que saber na hora que eu estou chamando o método original, passar os parâmetros que eu recebi aqui de um método que eu sobrescrevi e repassá-lo para o método original, como é que eu vou fazer isso já que eu não sei quantos parâmetros eu preciso?

[05:15] Então é isso que vamos ver no próximo vídeo.

@@07
Revisando Decorators

Marque todas as afirmativas verdadeiras sobre TypeScript e Decorators.

É utilizando como @NomeDoDecorator().
 
Alternativa correta! O barril não exporta nada de novo, apenas artefatos de outros módulos.
Alternativa correta
É ativado por padrão na linguagem TypeScript.
 
Alternativa correta
É um recurso experimental.
 
Alternativa correta! É verdade. Tanto isso é verdade que precisamos habilitar a propriedade "experimentalDecorators": true no arquivo tsconfig.json.

@@08
O que é o descriptor?

Quando criamos um decorator, um dos parâmetros mais importantes é o descriptor.
Marque a alternativa verdadeira sobre o papel do descriptor:

Nos dá acesso a implementação do método decorado através de descriptor.value.
 
Alternativa correta!
Alternativa correta
É o método decorado.
 
Alternativa correta
Não podemos sobrescrever o valor de descriptor.value, definindo uma nova implementação para o método.

@@09
Recorrendo ao JavaScript

[00:00] Tenho aqui o meu código, não está completo e a gente tem um problema. Meu decorator, que é essa função, esse eu preciso sobrescrever, ele me dá acesso a esse descriptor e esse descriptor é o método que se eu jogar qualquer coisa aqui, eu vou sobrescrever lá na minha classe. O que eu fiz? Eu defini uma nova função no qual eu guardo tempo, vou chamar o método original.
[00:41] Guardo o retorno do método original, pego o tempo final, exibo no console o tempo gasto e retorno o retorno do método original através do meu novo método. Só que a questão toda é o seguinte, esse método pode servir uma quantidade que eu não sei de parâmetros, eu posso decorar o método que recebe nenhum, que recebe um, que recebe três, então como vou fazer?

[01:06] Nós vamos pedir ajuda ao Java Script, o Java Script resolve esse problema. Eu vou adicionar um parâmetro que é o rest operator, vou fazer (...args: Array<any>), isso está dizendo que se eu tenho uma função tipo chama(1, 2, 3, 4, 5) e eu passo uma quantidade infinita de parâmetros, esses parâmetros vão ser transformados em um array e vão ser passados como array para a chamada do método chama internamente.

[01:50] Internamente ele vai ser considerado que um array, então é por isso que eu estou dizendo aqui que se você passar 1, 2, 3, 4, 5 parâmetros, eu vou considerar esse cara como array args, onde dentro desse array eu tenho todos os parâmetros que você passou. E eu estou definindo um array do tipo any, porque não sei quais são os parâmetros que você colocou.

[02:12] Se você quiser, você pode usar aquela forma enxuta que eu mostrei para vocês no último curso, que eu digo que ele é um array do tipo any. Você vê que o tipo any não é vilão, aqui ele está tornando o nosso código bem flexível. Aí é a sacada, na hora de chamar o método original, eu não posso chamar assim, porque se eu chamar assim esse método original perdeu o this.

[02:37] Porque quando você pega um método de uma classe e joga em uma variável e você chama esse método a partir de uma variável, mudou o contexto, o this não é mais a instancia da classe. Então eu tenho que na hora de chamar o método original, de uma maneira recuperar o this dela.

[02:54] A pergunta que eu faço para vocês é a seguinte, se essa função que está aqui, ela vai sobrescrever lá na definição da minha classe o método original, então quando ela é chamada, quem vai ser o this? Vai ser a instância da classe no qual o meu decorator for colocado em cima do método. Então o this aqui eu tenho certeza de que vai ser negociação ou vai ser view, vai ser a instância da classe no qual o meu decorator que eu botei no método vai ser chamado.

[03:32] Então eu vou usar um recurso antigo do TypeScript, vou chamar o método aqui que está isolado, que está agindo como uma função, vou fazer aqui metodoOriginal.apply(this, args). Esse apply me permite passar um contexto this e me permite passar uma rede de parâmetros, olha como as coisas se encaixam utilizando o conhecimento que temos de Java Script.

[03:56] Passei como parâmetro para descriptor.value uma função que recebe uma quantidade indefinida de parâmetros, mas se você passar dez parâmetros, internamente essa função vai tratá-los como um array. Aí o que que eu faço, pego o método original, chamo a execução dele com apply, esse apply eu preciso passar qual é o contexto e quais são os parâmetros.

[04:25] Então método original executada no contexto de this, esse this é o this desse bloco, porque é o this que vai ser executado lá no adiciona, então o this dele vai ser negociações controller e passa como parâmetros os argumentos aqui desse array. Então ele vai chamar o método passando cada item desse array como se fosse um parâmetro separado por virgula do método.

[04:51] E agora eu capturei o retorno, agora que tenho o retorno significa que o meu método acabou de ser executado, pego o t2, gero aqui o meu tempo de performance e retorno o retorno original do meu método. No final eu estou retornando o descriptor, que é o que eu precisei modificar, será que vai funcionar? Vou salvar, vou abrir meu terminal de novo, vou ver se ele está rodando aqui.

[05:24] Deixa eu ver se não tem erro de compilação, nenhum erro de compilação. Vou lá no meu projeto, no negociação controller. Eu não tenho mais o código de timer, vou remover também para não ficar nos confundindo o código do timer da view update, porque eu quero aplicar o decorator lá. Salvei, tudo rodando e agora é a hora da verdade.

[06:00] Quando eu chamar o adiciona, eu substituí o adiciona pelo minha função lá através do decorator, vou colocar o timer, vou chamar o original, vou fechar o timer, exibir no console e retornar o valor através dessa função. Como essa função não retorna nada, o adiciona não retorna nada, o retorno aqui vai ser nada, vai ser um undefinded.

[06:25] Mas não tem problema nenhum, o importante é você tornar esse cara genérico e que eu possa aplicá-lo aonde eu quiser na minha aplicação. Vou voltar lá para o navegador, recarreguei minha página, não vejo nada no console. Vou agora adicionar, vou colocar aqui incluir e quando eu clico, olha que bacana, ele falou: “Adiciona”, que é o nome do método, a própria Artykey de onde eu coloquei meu decorator.

[06:57] Tempo de execução tantos segundos e agora a prova da verdade, vou chegar lá na minha view.ts, porque eu também quero saber o tempo de execução. Vou chegar aqui na view.ts no método update, vou colocar @logarTempoDeExecucao, dei “Enter” e vou lá em cima ver se esse cara foi importado corretamente. Foi importado sem o js, tem que colocar o js, por favor.

[07:25] Botei, abre e fecha aqui. Salvo. Salvei e nenhum erro de compilação, pelo menos na minha tela e aqui no meu console, volto para o navegador e vou recarregar a minha página e quando eu recarrego aqui a minha página, nós sabemos que eu já chamo um update da minha view para renderizar essa tabela e tá lá o tempo de execução.

[07:49] Então, gente, nós conseguimos colocar essa lógica, esse requisito não funcional de medir o tempo de execução de um método, em um único lugar e eu posso replicar e colocar ele em qualquer método que eu quiser. Isso é muito interessante, porque eu não poluo o meu código das minhas classes com requisitos não funcionais da aplicação. Vamos agora lá para o próximo vídeo.

@@10
Curiosidade a respeito do Decorator

[00:00] Nosso primeiro decorator, um decorator de método ultra genérico que eu posso usar para medir a performance de qualquer método foi pronto. Mas uma coisa é o seguinte, decorator não existe ainda em Java Script, então, por questão de curiosidade, como é que deve ser esse código? O Java Script tem que transformar esse código em um código compatível com o Java Script, não é isso?
[00:23] Vamos olhar lá dentro da pasta “dist > js > controllers” e abrir a negociação-controller. Vamos olhar o adiciona e você vai ver que não tem nenhum decorator aqui em cima, não tem nada, porque o Java Script não suporta isso, mas se você vier aqui no topo você vai ser uma variável, um monte de código aqui escrito e se você olhar aqui embaixo, eu tenho aqui decorate, logarTempoDeExecucao, prototype, adiciona.

[01:00] Você vai ver que esse código confuso, que se nós formos olhar aqui não vamos entender por ser complicado, é um código que garante que aquela implementação que escrevemos sucinta e localizada em um único lugar, vai funcionar no meu código em runtime. Uma coisa interessante é que eu estou compilando o meu código para “ES6”.

[01:29] Se eu trocar esse cara para “ES5”, o código vai ficar mais diferente ainda, por exemplo, estou lá em negociação “ES6” suporta classe, vou lá no meu tsconfig e vou dizer que é “ES5”, salvei. Deixa eu ver se ele vai compilar de volta. Mudou, gerou, não precisei abrir e fechar, gerou tudo de novo e agora eu vou entrar e olhar em negociacao.controller.

[01:59] Eu não tenho mais classe, o TypeScript compilou mexendo com prototype, mexendo com função, criou de uma maneira que vai funcionar em navegadores antigos que usam “ES5”, por aí vai. Então você pode ver que o código ficou mais verboso ainda, mas você ainda está garantindo que o código que você escreveu vai funcionar em versões mais antigas do navegador.

[02:38] Vou voltar lá no tsconfig.json para “ES6”, vou salvar, salvei e ele vai compilar tudo de novo, gerou tudo de novo. Abro minha negociação de novo e está lá minha negociação ainda utilizando classe e usando toda essa questão do decorator para aplicar na minha classe. Então isso é uma curiosidade, fecho aqui para você não se confundir.

[02:55] Essa pasta dist até é colapsa, vamos focar só na pasta src para não correr o risco de você editar arquivo errado, então vamos para o próximo capítulo que lá nós vamos ver outros tipos de decorator para tornarmos o nosso código cada vez mais elegante.

@@11
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@12
O que aprendemos?

Nesta aula, aprendemos:
Introdução e estrutura do projeto
Requisitos não funcionais
Decorator de método
Logar tempo de execução com decorator

#### 01/07/2024

@02-Decorators de métodos

@@01
Projeto da aula anterior

Você pode ir acompanhando o passo a passo do desenvolvimento do nosso projeto e, caso deseje, você pode baixar o projeto do curso.
Bons estudos!

https://github.com/alura-cursos/typescript-curso-3/archive/44c27912c3e440ae39b64d0ebf3517460a5abf6b.zip

@@02
Decorator com parâmetro

[00:00] Vamos voltar aqui para o nosso decorator. Tem o seguinte problema, não é um problema no nosso código, mas é um requerimento, tem desenvolvedor que quer ver o TempoDeExecucao em segundos, igual a nós fizemos, e tem desenvolvedor que quer ver o TempoDeExecucao em milissegundos. Eu não vou criar um logarTempoDeExecucao em segundos e logarTempoDeExecucao em milissegundos.
[00:30] Vou passar o parâmetro para esse decorator que vai indicar para o desenvolvedor se ele quer ver milissegundos ou segundos. O padrão que vamos adotar é em milissegundos, que é o padrão. Eu vou dizer aqui que ele vai receber um parâmetro (emSegundos: boolean), só que eu quero que ele tenha um valor padrão, se você não passar esse parâmetro, volta aqui para o código, vou lá para o meu decorator.

[01:15] Está dando erro de execução, porque eu sou obrigado a passar esse parâmetro, eu poderia tornar igual nós vimos nos cursos anteriores, tornar ele um parâmetro opcional, mas se eu tornar um parâmetro opcional, eu vou ter que testar dentro do meu código o valor dele, então eu vou usar um recurso que já tem no Java Script a bastante tempo, o valor padrão.

[01:40] O valor padrão dele é false, salvei e volto lá para a negociação controller. Não estou passando parâmetro nenhum e o compilador TypeScript não está reclamando, ele não está reclamando, porque se você não passar esse parâmetro, ele vai adotar o valor false como padrão. Ele se integra com o Java Script e entende isso. E agora que eu tenho esse parâmetro, eu preciso planejar a minha lógica aqui dentro.

[02:13] Dentro do meu descriptor eu preciso checar primeiro se eu vou usar segundos ou milissegundos e também quero trocar esse texto aqui para segundos ou milissegundos. Vou criar uma variável que chama let divisor = 1;, o padrão é milissegundos, então vou dividir por um, let unidade = ‘milissegundos’ e eu vou testar. Se é em segundos, o divisor vai ser 1000 e a unidade vai ser segundos.

[03:07] E agora, na hora de exibir aqui, vou colocar aqui o meu divisor e aqui vai entrar a unidade, que é o meu valor. Eu ainda posso deixar o nosso código um pouco mais interessante, posso imprimir detalhes sobre o método, mas aí eu vou deixar isso para um outro decorator.

[03:31] Nós vamos criar um decorator depois desse, um decorator de análise para saber o nome do método, parâmetros dos métodos, qual o retorno, mas o mais importante aqui é que agora dou essa opção para o desenvolvedor escolher o que ele quer.

[03:45] Se ele quer exibir em segundos ou milissegundos e isso mostra para nós que eu posso passar parâmetros para um decorator. Vou salvar, voltar lá em negociação controller, esse aqui eu quero o padrão, mas o view.ts eu quero passar true, que vai ser em segundos. Então vou salvar, voltar lá no navegador, o update está mostrando em segundos.

[04:26] Lembrando para nós não nos confundirmos e eu também não me confundir, que eu coloquei true, é porque eu quero que seja em segundos, porém o adiciona tem que ser em milissegundos. Então vou chamar agora aqui 15/11/1111, 2, colocou qualquer coisa e está lá, executou o adiciona mostrando o tempo de execução agora em milissegundos.

[04:51] Isso mostra que um decorator pode receber parâmetros quantos parâmetros você quiser. Pode querer passar um objeto de configuração, se for o caso, não há limites aqui para o que você pode fazer. Agora para fixarmos isso, vamos para o próximo vídeo que vamos fazer um decorator que eu acho bem útil, ele vai analisar, vai escrutinar, verificar os dados do seu método. Vamos lá?

@@03
Esboço de um Decorator de método

Rafaela deseja criar um decorator que, ao ser aplicado em um método, exibe no console a data na qual o método foi chamado. Contudo, se o decorator receber como parâmetro dd/MM/yyyy, deve exibir a data neste formato.
Marque a opção que declara o esqueleto do decorator que Rafaela deseja criar:

Selecione uma alternativa

function logData(formato: string = '') {

    return function(target: any, key: string) {
         const metodoOriginal = descriptor.value;
                 // aqui vem a lógica do decorator
         return descriptor;
    }
}
 
Alternativa errada! O último parâmetro é o descriptor, necessário para o decorator. Contudo, ele não foi passado como parâmetro.
Alternativa correta
function logData() {

    return function(target: any, key: string, descriptor: PropertyDescriptor) {
         const metodoOriginal = descriptor.value;
                 // aqui vem a lógica do decorator
         return descriptor;
    }
}
 
Alternativa correta
function logData(formato: string = '') {

    return function(target: any, key: string, descriptor: PropertyDescriptor) {
         const metodoOriginal = descriptor.value;
                 // aqui vem a lógica do decorator
         return descriptor;
    }
}
 
Alternativa correta!

@@04
Criando um Decorator de inspeção

[00:00] Nós criamos o primeiro decorator, o logarTempoDeExecucao, mas eu vou criar um outro que é bem útil para nós fixarmos o que aprendemos de decorator. Eu quero criar um decorator que não importa qual o método eu coloque, ele diga qual o nome do método, quais são os parâmetros do método e qual é o retorno do método. Então vamos criar um novo decorator que vou chamar de inspect.
[00:47] Qual é a primeira coisa que fazemos dentro do decorator? Depois vou mostrar uma coisa bem legal. Vou criar uma função export function inspect, ele não vai receber parâmetro nenhum e ele tem que retornar return function target: any. Já falei sobre isso no outro vídeo, lembrando que se coloco esse decorator no método estático, o target vai ser a função constructor e se eu coloco no método que não é estático, método de instância, vai ser o prototype.

[01:28] Por isso eu colocou any. O segundo parâmetro é o propertyKey: string, é o nome do método, e o famoso descriptor: PropertyDescriptor, que faz toda a mágica acontecer. Ele que tem referência do meu método e por ai vai. Qual é a ideia? Eu vou guardar o método original const metodoOriginal = descriptor.value, vou sobrescrever o meu descriptor. mas eu sei que no final return descriptor.

[02:15] É bom, até quando você for criar o seu decorator, você já faz assim para não esquecer de dar o return descriptor. Agora vou dizer aqui no descriptor.value = function (...args: any), eu não sei quantos parâmetros esse método vai receber então vou usar o action operator e todo o parâmetro que você passar para ele vai ser do tipo any, porque parâmetro pode ser qualquer coisa e eu não sei qual parâmetro você quer colocar lá dentro.

[02:55] Passei a minha função anônima para dentro dele e o que vamos fazer, primeira coisa é garantir a execução do método original, cons retorno = metodoOriginal.apply, porque quero executar o método original no contexto de this. This é o contexto da minha nova função que foi adicionada no value, por isso eu não posso usar arrow function, porque o this não vai variar, ele vai ser léxico e eu não quero isso.

[03:30] Por isso tem que ser function aqui. Eu boto const retorno = metodoOriginal.apply(this, args); e aqui eu vou dar return retorno, está aqui o meu decorator e esse aqui é o esqueleto perfeito. Pego o meu método, pego o retorno, passo para ambos e retorno, pode até usar como template para qualquer decorator que você fizer, só que agora eu vou começar a colocar no espectro o seguinte, vou dar um console.log(‘--- Método ${propertyKey}‘).

[04:32] Vou colocar agora console.log (‘------ parâmetros: ${JSON.stringfy(args)}’)_, agora vou fazer o retorno e eu sei o retorno, vou dar console.log(‘------ retorno: ${JSON.stringfy(retorno)}’). Então chamei o método, eu vou saber qual o nome do método que eu estou chamando, quais são os parâmetros e qual é o retorno. inspect não recebe parâmetro nenhum.

[05:56] Agora nós vamos testar o nosso decorator e vou até fazer uma coisa para vocês verem, eu coloquei esse decorator no update. Vou colocar dois decorators e vamos ver o que acontece, vou colocar o inspect(), fiz isso e vou lá para cima, porque ele fez o auto import e se você não fez o auto import ou não funcionou, esse é o import que fazemos.

[06:31] Se certifica que esse cara tem js no final. Então, olha que legal, primeiro criei um decorator com a mesma estrutura do anterior, só que vai me dizer quais são os parâmetros, qual o retorno, etc., e eu coloquei junto com o outro decorator, então vamos voltar lá no nosso código.

[06:49] Vou executar aqui, recarreguei, Método Update, quais são os parâmetros do update? Olha que legal o que aconteceu aqui, vai ter um vídeo só para isso, eu coloquei dois decorators e o que acontece quando eu coloco dois decorators? Então eu vou explicar isso no próximo vídeo para ficar mais claro e não precisarmos correr. Quem é executado primeiro? O que acontece?

@@05
Ordem de execução dos Decorators

[00:00] Vamos analisar com calma a ordem de execuções do decorator. Eu vou voltar lá no meu navegador e quando eu executo o meu navegador, quem eu vejo imprimindo console, foi o meu inspect. Quando o meu inspect acabou, antes do meu inspect fazer o retorno, porque o retorno está aqui, o Método Update não retorna nada e olha aqui os parâmetros que ele está recebendo.
[00:29] Antes dele retornar o retorno do meu inspect ele delegou para o outro decorator que executou o código e viu quantos milissegundos terminou e quando acabou, voltou para o decorator anterior. Então o que está acontecendo é o seguinte, se eu volto lá para o meu decorator, a resposta é simple, vem o @inspect() primeiro e o @logarTempoDeExecução(true) como segundo, mas eu quero explicar um pouco mais para vocês.

[00:55] Então o que eu vou mostrar aqui é no inspect.ts. Quando o meu inspect é executado, eu modifico e ele vai executar esse cara e vai chamar o método original, porém o método original já está com decorator. O decorator foi aplicado nele, que é o segundo decorator, então eu estou executando esse código, disparando o outro decorator e esse decorator fica suspenso aguardando o método ser retornado.

[01:29] E depois exibe o retorno, então a ordem é primeiro @inspect() e segundo @logarTempoDeExecução(true) mas na hora dele modificar a classe, ele modifica primeiro @logarTempoDeExecução(true), aplica esse decorator no método e esse método está decorado, depois ele vai decorar esse método com o @inspect(), então ele primeiro modifica o método.

[01:57] Primeiro método a ser modificado, o update vai ser modificado com decorator @logarTempoDeExecução(true), depois ele vai ser modificado com @inspect(). Ou seja, quando o inspect rodar, ele vai estar rodando, porque ele vai ser o primeiro, mas ele vai estar rodando na hora de processar sobre o método que já foi decorado com @logarTempoDeExecução(true), então você pode adotar aqui se eu voltar para cá, o primeiro está sendo o @inspect.

[02:24] Faz sentido porque se eu quero @logarTempoDeExecução pode ser que eu queira também @logarTempoDeExecução em considerando um @inspect dentro dele. Então eu movi aqui o decorator, salvei, nós vemos aqui que ele executou o @inspect e no final ele logou, você pode estar pensando: “Flavio, mas quem foi executado primeiro foi o inspect”, não foi não, gente.

[02:53] Se eu voltar no @logarTempoDeExecução e colocar aqui um console.log(‘Inicio logar tempo de execução’) na hora da chamada dele, salvei e volto lá para o navegador. Nós vemos que quem foi chamado primeiro foi o @logarTempoDeExecução, aí delegou para o inspect e quando o inspect acabou de retornar, ele voltou o controle para o meu decorator e eu imprimi o tempo de execução, então faz sentido para mim.

[03:36] Deixa eu voltar lá no @logarTempoDeExecução, então fica a ideia de que os decorator são executados na ordem, o primeiro e depois vem o segundo, porém, internamente, o que o Java Script vai fazer é primeiro vai aplicar o *decorator, vai fazer o replace do último, depois desse cara com replace ele vai fazer o replace pelo de @logarTempoDeExecução, é por isso que na hora que eu estou executando a execução o inspect é disparado.

[04:10] Então, é isso, galera. Então vai cair lá no exercício e vai perguntar qual é a ordem de execução dos tempos do decorator, é primeiro de cima para baixo e eu posso combinar decorators aqui como vocês puderam ver. Então vamos continuar porque tem mais coisa de decorator para vermos.

@@06
Qual a ordem?

Marque a alternativa correta a respeito da ordem de aplicação dos decorators.

Serão aplicados aleatoriamente.
 
Alternativa correta
Serão aplicados do topo para baixo.
 
Alternativa errada! Pois na verdade eles são executados do topo para baixo e não aplicados.
Alternativa correta
Serão aplicados de baixo para o topo.
 
Alternativa certa! Sim os decorators são aplicados de baixo para cima dentro do JS.

@@07
Simplificando o Decorator

[00:00] Bom, galera. Olha só, eu vendi o peixe para vocês que ao construir o decorator, primeiro nós criamos essa função e retorna uma outra função que tenha a declaração do meu decorator. Só que, seguinte, eu gosto de fazer assim porque eu nunca sei se o meu decorator no futuro vai receber parâmetro ou não, mas se você tem um decorator que não recebe parâmetro, olha o que eu posso fazer.
[00:35] Tirei o bloco, vou retornar e fazer o export function inspect, vou aumentar o espaço para vocês poderem ver, eu agora estou exportando direto a função que é o meu decorator, eu não tenho aquela função de fora. Aquela função externa é para que você possa passar parâmetros para o seu decorator, porque se nós olhamos no logarTempoDeExecucao através do closer do Java Script.

[01:16] Se eu passo um parâmetro aqui nessa função e retorno uma outra função, essa outra função vai lembrar o parâmetro passado para essa função, então se eu salvo agora e olho lá no meu terminal, vai ter um erro lá em view. Se eu coloco em view, ele está dizendo que esse inspect não está rolando, porque esse cara agora não me retorna uma função do decorator quando eu chamo, não preciso chamá-la.

[01:50] Então esse cara já é a função do decorator, eu não preciso chamar. Estou passando a função direto, eu só chamo aqui se eu quiser passar parâmetro para o decorator que eu vou retornar. Aqui eu não estou passando parâmetro nenhum e estou retornando o decorator direto, então aqui não vai dar certo se eu abrir e fechar parênteses.

[02:15] Eu vou salvar aqui, o código rodou, volto para o navegador, ele continua funcionando que é uma maravilha. Um monte de decorator aqui, um monte de coisa que ele fez aqui para nós. Mas, olha só, eu fiz isso para mostrar para vocês, mas a minha sugestão é cria o decorator. Eu faço assim, eu tento até copiar o angular faz com os decorators dele.

[02:47] Como você não sabe se você vai receber parâmetro ou não futuro, cria wraper mesmo que não receba parâmetro nenhum, que retorna a função do decorator, mas se você for purista, você fala: “Não, Flavio, eu nunca vou receber um parâmetro desse decorator”, você retorna direto a função com o nome inspect e na hora de aplicar esse decorator, você não vai abrir e fechar os parênteses.

[03:15] Você vai chamar assim @inspect. Um outro motivo que eu gosto de criar sempre o wraper é que você garante que todos os decorators, você vai obrigar o desenvolvedor a abrir e fechar o parênteses, não fica essa coisa destoante que um eu passo parâmetro e outro não passa e por aí vai.

[03:30] Eu só estou mostrando isso aqui caso você se depare com esse código e veja: “Ah, mas eu não vou receber parâmetro nenhum?”, você pode fazer desse jeito também. Então, vamos lá continuar.

@@08
Escapando texto através de Decorator

[00:00] Bom, galera, mais uma coisa aqui ainda em relação ao decorator. Eu estou rolando o @logar com o @inspect, depois eu removo esses decorators, vai chegar uma hora que vou ter tanto decorator que vou remover alguns, senão vai ficar muita saída no console.
[00:19] Mas uma coisa eu quero mostrar para vocês que o decorator pode ser utilizado, se nós voltarmos lá para um exercício que nós fizemos, um code que nós escrevemos no exercício anterior, era o seguinte, a minha view pode receber um parâmetro opcional, escapar? true ou false, para que ela realize o escape do texto do template antes de ser atribuído para o innerHTML do meu elemento.

[00:47] Nós fizemos isso por uma questão de segurança para remover a tag script e eu posso ligar e desligar isso. Eu coloquei esse código dentro da minha view, mas eu posso também querer fazer esse escape em outros lugares. E, mais, eu posso tentar deixar o código da minha view mais claro, isolando essa lógica de escape em um decorator.

[01:13] Eu vou criar com vocês aqui um decorator e vou chamar de escape.ts, então essa é a hora de nós fazermos uma revisão. Vou criar um decorator sem a aquele wraper, vou retornar o decorator direto, então como é que eu faço? export function escape, essa função vai receber três parâmetros.

[01:42] O target: any, o propertyKey: string e descriptor: PropertyDescriptor. Primeira coisa que vou fazer é guardar o método original, porque tenho que chamar esse método, metodoOriginal = descriptor.value; descriptor.value = function (... args: any[]), o args vai ser do tipo any. Eu sei que no final eu tenho que retornar return descriptor. E o que vou fazer aqui?

[03:09] Vou pegar o retorno, const retorno = metodoOriginal.apply(this, args);, vou chamar o método original, usar a receita de bolo do apply, vou passar o this que é a instância que está executando o meu método no momento, e os parâmetros para esse método. No final vou fazer um retorno.

[03:44] Eu vou transformar esse cara para let retorno = metodoOriginal.apply(this, args) e antes de retornar esse cara, eu vou verificar primeiro se ele e uma string porque não faz sentido eu fazer o escape em algo que não é string.

[03:53] Se você colocar esse decorator no método que retorna um objeto ou um número, vai dar problema, então vou fazer um if (typeof retorno === ‘string’), vou testar se ele é do tipo string. Vamos voltar lá para a view, vou copiar a nossa expressão regular. Eu executei o metodoOriginal e peguei o retorno, mas antes de eu fazer o método retornar ao meu método que eu modifiquei aqui, vou testar, é uma string?

[04:57] O typeof é string? É, se for, eu estou dizendo que o retorno vai receber ele aplicando a expressão regular e eu vou e retorno com escape. Vou colocar aqui um console.log(‘@escape em ação na classe ${this.constructor.name ’}, será que com as informações aqui tem como saber qual a classe que está executando isso? Tem. This é a instância, a classe que tem o método decorado, eu sei o nome da classe através disso aí.

[05:48] Isso aí já não é TypeScript, é Java Script, se eu tenho objeto e coloco .constructor.name, eu consigo pegar o nome da classe aqui. Escape em ação na classe ${this.constructor.name} para o método ${propertyKey}, então ele vai exibir aqui. Eu posso quebrar isso e ele não vai reclamar, porque é uma template string.

[06:23] Então está aí o meu decorator, vou salvar, nenhum erro de compilação, vou fechar aqui para vocês poderem ver o código na íntegra para meditar e ver se faz sentido. Vou agora lá para view.ts, vou ter que remover esse código todo, vou remover o prive.escapar, vou remover esse parâmetro opcional. Vou remover esses outros códigos.

[07:01] Vou salvar, sei que tenho um erro de compilação, porque lá no controller eu estou passando o parâmetro, se eu for lá no controller do NegociaçõesView eu quero realizar o escape, mas eu não recebo mais esse cara como parâmetro, removo aqui, meu código está compilando. Está rodando, nenhum erro de compilação.

[07:48] Nós tínhamos combinado no curso anterior que apenas as NegociaçõesView que vai fazer o escape, então vou lá em NegociaçõesView. Eu não vou colocar em view, porque se não vai aplicar para todo mundo, eu quero poder ser seletivo, para NegociaçõesView eu quero que ele faça o escape no método template. Então vou colocar aqui `@escapar.ts`, vou salvar o nome em português para ficar mais fácil.

[08:32] Então agora eu vou chegar no método e para essa classe faz sentido eu fazer o escape. Salvei, nenhum erro de compilação aqui, tudo rodando e volto para o navegador. Quando nós rodamos a aplicação pela primeira vez, lembrando que o NegociaçõesView , se voltarmos lá para o nosso código, Negociacao.controller, logo no constructor eu chamo o update de NegociaçõesView, então é por isso que ele fez lá escape em ação na classe NegociaçõesView para o método template.

[09:16] Então eu consigo também extrair esses códigos que eu quero utilizar em outros lugares e evitar ficar poluindo o meu código com código de repetição e agora eu posso usar esse @escapar em qualquer método que retorne uma string. Vou deixar aqui no escapar.ts de novo e vamos continuar, já pegaram a ideia de que o decorator é muito poderoso?

[09:40] É por isso que angular utiliza muito decorator no framework para livrar o desenvolvedor lá do código, ter que escrever esses códigos que não fazem sentido dentro daquele método. Hora eu quero que ele se comporte de um jeito, hora quero que se comporte de outro, então eu posso utilizar o decorator. Então vamos lá continuar.

@@09
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxi

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@10
O que aprendemos?

Nesta aula, aprendemos:
Decorator com parâmetro
Criação de um decorator de inspeção
Ordem de execução dos decorators
Simplificação no design de decorators
Portabilidade de funcionalidade antiga para decorators
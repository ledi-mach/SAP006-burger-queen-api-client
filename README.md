 # :hamburger: WoodBurgers
---
![image](https://user-images.githubusercontent.com/64505863/136089973-814a9714-36d2-4476-9f24-a2a55c404c60.png)
## Projeto
A WoodBurger é um projeto desenvolvido atráves do consumo da API [Burger Queen](https://lab-api-bq.herokuapp.com/api-docs/) e com o framework React, que possibilita um funcionário de restaurante a fazer pedidos e acompanhar o preparo deles ordenadamente atráves de uma interface intuitiva que foi feita pensada na agilidade e na praticidade do usuário. <br/>O projeto foi proposto pela Laboratoria e teve como algumas premissas ser um SPA (*Single Page App*) responsivo em tablets, ter estrutura definida de pastas e arquivos, manter a interface e o estado sincronizados com o React, além do uso de Javascript (E6+). 

### Sobre o cliente
Uma pequena hamburgueria chamada Wood Burger possui atendimento 24 horas e está crescendo. Assim, precisa de uma interface na qual possa realizar pedidos usando um tablet e enviá-los para a cozinha para que sejam preparados de forma ordenada e otimizada. O restaurante em questão possui um menu mais simples para o café da manhã e outro mais complexo para o restante do dia e ambos devem ser exibidos na aplicação.

## Histórias de usuário
As histórias de usuário a serem desenvolvidas foram fornecidas pela Wood Burger, sendo elas:


 :memo: **História 1**: Enquanto funcionário quero poder entrar no sistema caso as credenciais já tenha recebido minhas credenciais pelo administrador.<br/>
Critérios  de aceitação: O usuário deverá ter acesso à uma tela de login e deve ser capaz de inserir email e senha. Caso os valores digitados estejam incorretos, deverá receber mensagens de erro com orientações. Se os valores digitados estiverem corretos ele deverá logar e ser redirecionado ao seu setor de trabalho.

 :memo: **História 2**: Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a cozinha para serem preparados em ordem. <br/>
Critérios de aceitação: Os produtos deverão estar aparecer na tela e o usuário deverá ser capaz de manipulá-los adicionando-os e/ou excluindo-os da comanda, podendo acompanhar o resumo e total da compra.Deverá ser possível guardar o nome e número da mesa do cliente para ajudar no controle interno e ao enviar o pedido para a cozinha, ele deverá ser armazenado num banco de dados. 

 :memo: **História 3**: Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente. <br />
Critérios de aceitação: Os pedidos deverão ser exibidos na cozinha na ordem pela qual foram feitos. O chef de cozinha deve poder atualizar o status dos pedidos e tamvbém ver o tempo que levou para preparar o pedido desde que chegou até ser marcado como concluído.

 :memo: **História 4**: Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes. <br/>
Critérios de aceitação: Os atendente deverão ter acesso ao status do pedido que foi atualizado pelo chef. Também deverá ser capaz de marcar os pedidos que foram entregues.

## Planejamento e organização
Para o planejamento focamos na experiência do usuário ao navegar entre as páginas e suas necessidades. Para o desenvolvimento do projeto usamos o método Kanban no GitHub Issues, colocando no backlog as tarefas principais para atender aos critérios de aceitação e incrementando-as conforme o projeto avançava.

![readme1](https://user-images.githubusercontent.com/80779104/136120480-b698f9f3-31d1-4f93-a742-d5b74226cd62.jpg)

## Protótipo de alta fidelidade 
O protótipo inicial foi desenvolvido no Figma e sofreu algumas alterações, onde incorporamos algumas sugestões de colegas e usuários que testaram o aplicativo.

![bqprot](https://user-images.githubusercontent.com/80779104/136121311-27cc5601-6a5e-4d05-9164-42fde0d10cb9.jpg)

## Resultado final:
Você pode conferir o produto final rodando o vídeo com a demonstração abaixo ou diretamente na página [clicando aqui](https://stark-citadel-37160.herokuapp.com/login).

https://user-images.githubusercontent.com/80779104/139990998-ecd48913-cf05-40e1-b3b8-7840c136b80f.mp4

## Testes de usabilidade

No decorrer do projeto realizamos alguns testes com diferentes pessoas buscando analisar a sua experiência enquanto navegavam na aplicação e com base nas observações feitas por eles realizamos algumas atualizações buscando atender às suas necessidades. Foram elas:

- Clique para aumentar e diminuir a quantidade de produtos na ordem estava sendo propagada à todos os produtos da ordem.
- Responsividade para o tablet e celular estava com os itens do cabeçalho desalinhados.
- Aviso de sucesso quando é feito um pedido.
- Confirmação para deletar um pedido.

## Ferramentas utilizadas
 <a href="#">
		<img src="https://img.shields.io/static/v1?label=&message=React.JS&color=blue&style=for-the-badge&logo=Ghost"  alt="React">
	</a>
 <a href="#">
		<img src="https://img.shields.io/static/v1?label=&message=HTML 5&color=red&style=for-the-badge&logo=Ghost"  alt="HTML5">
	</a>
  <a href="#">
		<img src="https://img.shields.io/static/v1?label=&message=CSS 3&color=blue&style=for-the-badge&logo=Ghost"  alt="CSS3">
	</a>
  <a href="#">
		<img src="https://img.shields.io/static/v1?label=&message=JAVASCRIPT&color=yellow&style=for-the-badge&logo=Ghost"  alt="js">
	</a>
 <a href="#">
		<img src="https://img.shields.io/static/v1?label=&message=Node.js&color=green&style=for-the-badge&logo=Ghost"  alt="node">
	</a>
 <a href="#">
		<img src="https://img.shields.io/static/v1?label=&message=HEROKU&color=purple&style=for-the-badge&logo=Ghost"  alt="heroku">
	</a>
 <a href="#">
		<img src="https://img.shields.io/static/v1?label=&message=FIGMA&color=red&style=for-the-badge&logo=Ghost"  alt="heroku">
	</a>
 <a href="#">
		<img src="https://img.shields.io/static/v1?label=&message=GIT e GitHub&color=black&style=for-the-badge&logo=Ghost"  alt="heroku">
	</a>

### :technologist: Desenvolvedoras: 
**Larissa Siqueira** <br/>
[LinkedIn](https://www.linkedin.com/in/larissasiqueiras/) <br/>
Email: <a href:="larissa.raie@gmail.com ">larissa.raie@gmail.com </a>

**Lediane Machado** <br/>
[LinkedIn](https://www.linkedin.com/in/ledianemachado/) <br/>
Email: <a href:="mailto:lediane141@gmail.com">lediane141@gmail.com</a>



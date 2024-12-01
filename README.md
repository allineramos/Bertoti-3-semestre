# <p align="center"> Sistema CRUD de Filmes com Spring Boot
### Um sistema simples para gerenciar filmes com funcionalidades de criação, leitura, atualização e exclusão.



## Objetivo

Este projeto utiliza **Spring Boot** no back-end para implementar um sistema **CRUD** (Criar, Ler, Atualizar e Deletar) voltado para o gerenciamento de filmes. O sistema inclui um **front-end simples** para interação com o usuário, permitindo uma experiência completa de gestão de dados.


## Ferramentas Utilizadas

- **Java (Spring Boot)**: Framework para desenvolvimento de aplicações Java, utilizado para a criação da API e gerenciamento da lógica de back-end.
- **Postman**: Ferramenta utilizada para testar as rotas da API e garantir que os métodos de CRUD estejam funcionando corretamente.
- **React Native**: Utilizado para o desenvolvimento do front-end, permitindo a criação de interfaces móveis interativas.
- **Maven**: Para gerenciamento de dependências e build do projeto Java.
  

## Funcionalidades

- **Cadastrar**: Permite ao usuário adicionar novos filmes ao sistema.
- **Ler**: Exibe todos os filmes cadastrados no banco de dados.
- **Editar**: Permite editar filmes existentes (alterar nome, gênero).
- **Deletar**: Remove filmes do sistema.

## Demonstração das Funcionalidades no Front-end

###  1. Método GET - Exibir Registros   

Abaixo está a imagem do front-end mostrando os registros existentes no sistema:

![Imagem 1](https://github.com/user-attachments/assets/9e4f0c53-96e9-4b89-b28f-9b76e905dd28)

Aqui, o sistema exibe todos os filmes cadastrados e suas informações.

###  2. Cadastrar - Adicionar Novo Registro   

Abaixo está a imagem do front-end com um novo registro adicionado:

![Imagem 2](https://github.com/user-attachments/assets/c4f9ece1-4bd6-4ffe-8179-130d92ebfed7)

Aqui, um novo filme foi adicionado ao sistema.

###  3. Editar - Atualizar Registro   

Abaixo, temos a interface para editar um registro já existente:

- **Selecionando o nome do registro para realizar a alteração**:

![Imagem 8](https://github.com/user-attachments/assets/edb80454-0855-49cd-85f7-e5ba54971ac5)

- **Registro alterado**: O filme foi atualizado com sucesso.

![Imagem 7](https://github.com/user-attachments/assets/d15baf8a-3830-4196-aa68-41cf0c39b5c3)

###  4. Deletar - Remover Registro   

Aqui está a imagem mostrando a tela de exclusão de um registro:

- **Selecionando o ID do registro para ser excluído**:

![Imagem 9](https://github.com/user-attachments/assets/7217ab69-e45c-413b-b0fc-47c4ca06d71a)

- **Registro excluído**: O filme foi removido com sucesso.

![Imagem 10](https://github.com/user-attachments/assets/40198123-2e8a-4220-bd1f-880be80ac239)


## Demonstração das Funcionalidades no Back-end (Postman)

Essas imagens ilustram o uso do **Postman** para testar os métodos da API CRUD de filmes. O Postman é uma ferramenta útil para realizar chamadas HTTP e verificar as respostas da API.

###  1. Método GET - Listar Filmes   

Esse método retorna todos os filmes cadastrados na base de dados.

![Imagem get - b](https://github.com/user-attachments/assets/2f8b8ec9-6526-4d6c-bf76-34236a3d1620)

Aqui vemos a resposta da requisição GET, listando os filmes cadastrados.

###  Método POST - Criar Filme   

Esse método permite criar um novo filme no banco de dados.

- **Requisição POST**: Aqui, um novo filme é enviado para ser cadastrado.

![Imagem 1 post - b](https://github.com/user-attachments/assets/d8eb34b2-e5e0-4186-a613-dae44517ada8)

- **Requisição GET após realizar o POST**: Após o filme ser criado, a lista de filmes é atualizada.

![Imagem 2 post - b](https://github.com/user-attachments/assets/d8cc26e3-a0f3-4ebd-9ec1-e0066a8953bc)

###  Método PUT - Atualizar Filme   

Esse método atualiza os dados de um filme existente.

- **Requisição PUT**: Aqui, estamos atualizando as informações de um filme.

![Imagem 1 put - b](https://github.com/user-attachments/assets/a6dbfc92-29ea-4d8e-a720-d1c2661ea751)

- **Requisição GET após realizar o PUT**: A resposta da requisição GET mostra o filme atualizado.

![Imagem 2 put - b](https://github.com/user-attachments/assets/b9479e9f-885e-4563-8017-aaec648e3225)

### Método DELETE - Excluir Filme    

Esse método remove um filme da base de dados.

- **Requisição DELETE**: Aqui, estamos excluindo um filme da base de dados.

![Imagem 2 delete - b](https://github.com/user-attachments/assets/33156092-9cb1-4c40-808d-f4516cfe9dcf)

- **Requisição GET após realizar o DELETE**: Após a exclusão, o filme não aparece mais na lista.

![Imagem 3 delete - b](https://github.com/user-attachments/assets/6c342840-96ce-4094-900e-b45eab9e195e)  

## Considerações Finais

Este projeto implementa um sistema CRUD simples utilizando Spring Boot e pode ser facilmente expandido para incluir outras funcionalidades, como autenticação de usuários, validação de dados e integração com outros serviços.




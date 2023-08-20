# CRUD- Todo Node & Angular

###  Instalação: 

<br/>

```shell

Clone:
git clone https://github.com/VictorMaciel28/attendment.git

```

#### Banco de dados:

```shell

Arquivo .env em /backend com a variável:

DATABASE_URL="mysql://user:password@endereco:porta/ubots?schema=public"


```


#### Backend na porta 3030:

```shell

$ cd backend

Baixar dependencias:
$ yarn install

Rodar Migratons:
$ yarn prisma migrate dev --name init

Rodar Seeding
$ npx prisma db seed

Rodar backend:
$ yarn dev

```

#### Frontend na porta 4200:


```shell

$ cd frontend

Baixar dependencias:
$ yarn install

Rodar frontend:
$ ng serve

```

#### Erros na compilação

```shell

Pode ser necessário o uso do comando

Para windows:
set NODE_OPTIONS=--openssl-legacy-provider

Para Linux:
$ env:NODE_OPTIONS = "--openssl-legacy-provider"

Isso se dá por ajustes de SSL realizado nas versões mais recentes

```

#### Algumas Imagens:

<img src="screenshots/main_page.png">

<br/>

<img src="screenshots/edit_func.png">

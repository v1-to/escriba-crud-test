# CRUD Test Escriba

## Como Rodar

- É necessário ter o Docker e o Docker Composen instalado na máquina
- A aplicação roda na porta 4173
- Lembre de conferir a url da api (que está no arquivo .env do projeto) caso rode esteja rodando de uma forma diferente

```sh
docker compose up
```

## Observações

- Um dos bônus seria o uso do VueX, mas como estou acostumado a utilizar do Pinia e a própria documentação do VueX encoraja o uso do Pinia, segui com ela
- Como não foi citado poder utilizar de quaisquer outras dependencias optei por fazer tudo e não usar de coisas prontas como modal e validação de formulários (exceto o Vue Router e Pinia)
- Como o prazo de 3 dias é um pouco apertado, optei por improvisar em alguns pontos (para não perder tempo com planejamento excessivo) e refatorar posteriormente
- Os produtos estão com o campo valoUnitario ao invés de valorUnitario (mantive como estava)
- Não fiz o projeto pensando no mobile-first mas resolvi algumas quebras da responsividade
- Tenho certeza que seja possível aplicar o DRY nas stores criando uma store base para operações de CRUD, só precisaria de mais planejamento e implementação

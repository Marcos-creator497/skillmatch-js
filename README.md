# SkillMatch JS

## Sobre o projeto
O SkillMatch JS é um simulador de compatibilidade entre um candidato e vagas de front-end júnior. Compara habilidades do candidato com os requisitos das vagas e mostra percentual de compatibilidade, habilidades faltantes, vaga mais compatível e recomendação de estudo.

## Como executar
1. Abrir o Google Chrome
2. Pressionar F12 ou clicar com botão direito → Inspecionar
3. Clicar na aba Console
4. Copiar todo o código do arquivo skillmatch.js
5. Colar no console e pressionar Enter

## Conceitos aplicados
JavaScript, Arrays, Objetos, Funções, Arrow Functions, Classes, Herança, this, Callbacks, Closures, Promises, Async/Await, Map, Filter, Reduce, GitHub, Kanban

## Extensões usadas no VS Code
- Prettier
## Sobre var, let e const
Neste projeto utilizamos `const` para valores que não mudam (como o objeto candidato e o array de vagas) e `let` para variáveis que podem mudar (como a classificação). Evitamos `var` porque ela tem escopo de função e pode causar bugs inesperados — `const` e `let` têm escopo de bloco e são consideradas boas práticas no JavaScript moderno.
## Como a internet funciona
A internet conecta computadores em rede. O navegador (cliente) faz requisições a servidores que respondem com dados. Neste projeto simulamos isso com Promise e async/await.

# My English School

Curso de inglês (A1 → A2) em HTML, CSS e JavaScript puros, feito para estudar no computador, no celular e no tablet. Funciona como site e pode ser instalado como app (PWA).

- 9 módulos e 37 sessões de 40 minutos, com exercícios corrigidos e explicados.
- 🃏 Cartões de repetição espaçada · 📝 caderno de erros · 🎧 áudio com destaque da palavra.
- 🎮 **Jogar**: rodadas estilo jogo (9 tipos de exercício, missões, conquistas, sons), inclusive por lugares e situações (restaurante, aeroporto, hospital…). Sem corações, ligas nem ranking.
- 🎨 Temas Claro (pastel), Escuro e Dark (preto puro para telas OLED).
- ☁ Sincronização opcional do progresso entre aparelhos (login por e-mail e senha; só o progresso vai para a nuvem).

## Estrutura

```
index.html, css/, js/, sw.js   o programa
material/                      o conteúdo do curso (textos, exercícios, cenários do jogo, imagens)
firebase-config.js             configuração da sincronização (a chave do app web não é segredo; os dados são protegidos pelo login e pelas regras do Firestore)
NUVEM.md                       passo a passo da sincronização
```

Para alterar só o conteúdo, edite a pasta `material/` seguindo o `material/LEIA-ME.md`.

O progresso de cada pessoa fica no navegador dela (e na conta dela, se ativar a sincronização).

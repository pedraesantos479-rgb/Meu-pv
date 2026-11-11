# Netflix Brasil — página inicial (reprodução visual)

Reprodução independente e responsiva da página pública inicial da Netflix Brasil, feita com HTML, CSS e JavaScript usando Vite. Este projeto demonstra apenas a interface: não tem backend, autenticação, assinatura nem integração com a Netflix.

## Executar localmente

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço local mostrado pelo Vite. Para gerar a versão de produção, execute `npm run build`; os arquivos serão gerados em `dist/`.

## Funcionalidades

- Layout responsivo com cabeçalho, destaque, seção de títulos em alta, motivos para assinar e perguntas frequentes.
- Perguntas frequentes interativas com elementos nativos de disclosure.
- Formulários demonstrativos que validam o e-mail e informam que a criação de conta não está conectada a um backend.
- Botão de entrada aponta para a página oficial da Netflix.

As imagens são carregadas do Unsplash e a fonte, do Google Fonts; esses elementos externos precisam de conexão com a internet.

## Sobre `morluto/rea`

`rea` é uma ferramenta independente para engenharia reversa de aplicações, não o código-fonte nem os recursos da página da Netflix. Esta implementação recria visualmente a página pública sem copiar ou incorporar esse projeto e sem acessar áreas protegidas. Consulte https://github.com/morluto/rea para instruções de instalação e uso da ferramenta.

Este projeto não é afiliado à Netflix. Netflix é uma marca registrada de seus respectivos proprietários.

import './style.css';

const titles = [
  { name: 'Stranger Things', category: 'SÉRIE', image: 'photo-1518709268805-4e9042af9f23' },
  { name: 'Round 6', category: 'SÉRIE', image: 'photo-1519608487953-e999c86e7455' },
  { name: 'One Piece', category: 'SÉRIE', image: 'photo-1534447677768-be436bb09401' },
  { name: 'Wandinha', category: 'SÉRIE', image: 'photo-1509248961158-e54f6934749c' },
  { name: 'Bridgerton', category: 'SÉRIE', image: 'photo-1515886657613-9f3515b0c78f' },
  { name: 'O Agente Noturno', category: 'SÉRIE', image: 'photo-1519608487953-e999c86e7455' },
  { name: 'Avatar: O Último Mestre do Ar', category: 'SÉRIE', image: 'photo-1500530855697-b586d89ba3ee' },
  { name: 'Cobra Kai', category: 'SÉRIE', image: 'photo-1521737711867-e3b97375f902' },
  { name: 'DNA do Crime', category: 'SÉRIE', image: 'photo-1519608487953-e999c86e7455' },
  { name: 'A Diplomata', category: 'SÉRIE', image: 'photo-1485846234645-a62644f84728' }
];

const questions = [
  { question: 'O que é a Netflix?', answer: 'A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes, documentários e muito mais em milhares de aparelhos conectados à internet.' },
  { question: 'Quanto custa a Netflix?', answer: 'Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por um preço mensal. Os planos e valores podem ser consultados no site oficial.' },
  { question: 'Onde posso assistir?', answer: 'Assista onde quiser, quando quiser. Acesse sua conta em netflix.com pelo computador ou em qualquer aparelho conectado à internet com o aplicativo Netflix.' },
  { question: 'Como faço para cancelar?', answer: 'A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar sua conta online quando quiser.' },
  { question: 'O que eu posso assistir na Netflix?', answer: 'A Netflix tem um grande catálogo de séries, filmes, animes, documentários e outros conteúdos premiados.' },
  { question: 'A Netflix é adequada para crianças?', answer: 'A experiência infantil da Netflix está incluída na assinatura e oferece controles para que responsáveis possam escolher o que as crianças assistem.' }
];

const posterUrl = (image) => `https://images.unsplash.com/${image}?auto=format&fit=crop&w=500&h=700&q=80`;

const logo = `<svg class="logo" viewBox="0 0 111 30" role="img" aria-label="Netflix"><path fill="currentColor" d="M15.5 0h8v30h-7.7L8 13.2V30H0V0h7.8l7.7 16.9V0Zm13.2 0h22.4v6.2H36.5v5.7h13.7v6H36.5v5.9h14.8V30H28.7V0Zm25 0h24.6v6.4h-8.3V30h-8V6.4h-8.3V0Zm27.5 0h23.2v6.4h-15.2v5.9h13.7v6.2h-13.7V30h-8V0Z" /></svg>`;

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="hero">
    <div class="hero__backdrop" aria-hidden="true"></div>
    <div class="hero__shade" aria-hidden="true"></div>
    <nav class="top-nav wrap" aria-label="Navegação principal">
      <a class="brand" href="#inicio" aria-label="Netflix - início">${logo}</a>
      <div class="nav-actions">
        <label class="language-picker">
          <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M2 4h12M8 2v2m3 0c-.7 3.2-3.1 5.7-6.2 7.3M5.2 6.1c1.3 2.6 3.5 4.7 6.3 6M2.5 14h11" /></svg>
          <select aria-label="Selecionar idioma"><option>Português</option><option>English</option></select>
          <span class="chevron" aria-hidden="true">⌄</span>
        </label>
        <a class="sign-in" href="https://www.netflix.com/br/login" target="_blank" rel="noreferrer">Entrar</a>
      </div>
    </nav>

    <main id="inicio" class="hero__content">
      <h1>Filmes, séries e muito mais, sem limites</h1>
      <p class="hero__price">A partir de R$ 20,90. Cancele quando quiser.</p>
      <p class="hero__prompt">Quer assistir? Informe seu e-mail para criar ou reiniciar sua assinatura.</p>
      <form class="signup-form" id="signup-form" novalidate>
        <label class="email-field"><span class="sr-only">Endereço de e-mail</span><input id="email" type="email" autocomplete="email" placeholder="E-mail" required /></label>
        <button class="button button--primary" type="submit">Vamos lá <span aria-hidden="true">›</span></button>
      </form>
      <p class="form-message" id="form-message" aria-live="polite"></p>
    </main>
    <div class="hero__bottom-curve" aria-hidden="true"></div>
  </header>

  <main class="content wrap">
    <section class="trending section" aria-labelledby="trending-title">
      <h2 id="trending-title">Em alta</h2>
      <div class="filters"><label class="sr-only" for="region-filter">Região</label><select id="region-filter"><option>Brasil</option><option>Global</option></select><label class="sr-only" for="type-filter">Tipo</label><select id="type-filter"><option>Séries</option><option>Filmes</option></select></div>
      <div class="poster-track" aria-label="Títulos em alta">
        ${titles.map((title, index) => `<article class="poster"><span class="poster__rank" aria-hidden="true">${index + 1}</span><img src="${posterUrl(title.image)}" alt="${title.name}" loading="lazy" /><span class="poster__label">${title.category}</span></article>`).join('')}
      </div>
    </section>

    <section class="section reasons" aria-labelledby="reasons-title">
      <h2 id="reasons-title">Mais motivos para assinar</h2>
      <div class="reason-grid">
        <article class="reason-card"><h3>Aproveite na TV</h3><p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p><span class="reason-icon" aria-hidden="true">▣</span></article>
        <article class="reason-card"><h3>Baixe séries para assistir offline</h3><p>Salve seus títulos favoritos e tenha sempre algo para assistir.</p><span class="reason-icon" aria-hidden="true">↓</span></article>
        <article class="reason-card"><h3>Assista onde quiser</h3><p>Assista a quantos filmes e séries quiser no celular, tablet, notebook e TV.</p><span class="reason-icon" aria-hidden="true">⌑</span></article>
        <article class="reason-card"><h3>Crie perfis para crianças</h3><p>Deixe as crianças se aventurarem em um espaço com personagens que elas vão adorar.</p><span class="reason-icon" aria-hidden="true">♡</span></article>
      </div>
    </section>

    <section class="section faq" aria-labelledby="faq-title">
      <h2 id="faq-title">Perguntas frequentes</h2>
      <div class="faq-list">${questions.map((item, index) => `<details class="faq-item" ${index === 0 ? 'open' : ''}><summary>${item.question}<span class="faq-plus" aria-hidden="true">+</span></summary><p>${item.answer}</p></details>`).join('')}</div>
    </section>

    <section class="bottom-signup" aria-labelledby="bottom-signup-title">
      <h2 id="bottom-signup-title">Pronto para assistir? Informe seu e-mail para criar ou reiniciar sua assinatura.</h2>
      <form class="signup-form signup-form--bottom" novalidate>
        <label class="email-field"><span class="sr-only">Endereço de e-mail</span><input type="email" autocomplete="email" placeholder="E-mail" required /></label>
        <button class="button button--primary" type="submit">Vamos lá <span aria-hidden="true">›</span></button>
      </form>
    </section>

    <footer class="footer"><p>Dúvidas? <a href="https://help.netflix.com/pt" target="_blank" rel="noreferrer">Acesse a Central de Ajuda</a></p><div class="footer__links"><a href="https://help.netflix.com/pt/node/412" target="_blank" rel="noreferrer">Perguntas frequentes</a><a href="https://help.netflix.com/pt" target="_blank" rel="noreferrer">Central de Ajuda</a><a href="https://www.netflix.com/br/login" target="_blank" rel="noreferrer">Conta</a><a href="https://media.netflix.com/pt_br/" target="_blank" rel="noreferrer">Imprensa</a><a href="https://help.netflix.com/pt/node/14361" target="_blank" rel="noreferrer">Relações com investidores</a><a href="https://jobs.netflix.com/" target="_blank" rel="noreferrer">Carreiras</a><a href="https://www.netflix.com/br/browse/genre/839338" target="_blank" rel="noreferrer">Assistir</a><a href="https://help.netflix.com/pt/node/100637" target="_blank" rel="noreferrer">Formas de assistir</a><a href="https://help.netflix.com/pt/legal/termsofuse" target="_blank" rel="noreferrer">Termos de uso</a><a href="https://help.netflix.com/pt/legal/privacy" target="_blank" rel="noreferrer">Privacidade</a><a href="https://help.netflix.com/pt/node/100628" target="_blank" rel="noreferrer">Preferências de cookies</a><a href="https://help.netflix.com/pt/node/134094" target="_blank" rel="noreferrer">Informações corporativas</a></div><label class="language-picker language-picker--footer"><svg aria-hidden="true" viewBox="0 0 16 16"><path d="M2 4h12M8 2v2m3 0c-.7 3.2-3.1 5.7-6.2 7.3M5.2 6.1c1.3 2.6 3.5 4.7 6.3 6M2.5 14h11" /></svg><select aria-label="Selecionar idioma"><option>Português</option><option>English</option></select><span class="chevron" aria-hidden="true">⌄</span></label><p class="footer__country">Netflix Brasil</p><p class="footer__note">Esta é uma reprodução independente para fins de estudo. Não é um site oficial da Netflix.</p></footer>
  </main>
`;

function handleSignup(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const input = form.querySelector('input[type="email"]');
  const message = document.querySelector('#form-message');
  if (!input.value.trim() || !input.validity.valid) {
    input.setAttribute('aria-invalid', 'true');
    input.focus();
    if (message) message.textContent = 'Informe um endereço de e-mail válido.';
    return;
  }
  input.removeAttribute('aria-invalid');
  if (message) message.textContent = 'Demonstração visual: a criação de conta não está conectada a um backend.';
  else window.alert('Demonstração visual: a criação de conta não está conectada a um backend.');
}

document.querySelectorAll('.signup-form').forEach((form) => form.addEventListener('submit', handleSignup));

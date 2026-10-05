/* ===== CONTEÚDO (edite textos aqui) ===== */
const p = t => `<p>${t}</p>`;
const DATA = {
  enredo: { type: "acc", items: [
    ["1915: a seca chega", p("As chuvas não vêm e o sertão cearense seca. <b>Personagens:</b> Chico Bento, Vicente, Conceição. <b>Importância:</b> instala o conflito que move as duas linhas da história.")],
    ["Chico Bento e a família", p("O vaqueiro perde o sustento com a estiagem e decide partir com a esposa Cordulina e os filhos. <b>Importância:</b> é a linha do retirante, que mostra o custo humano da seca.")],
    ["O êxodo", p("A família faz a travessia a pé rumo à capital e sofre perdas e fome no caminho. <b>Importância:</b> transforma a estatística da migração em experiência individual.")],
    ["Conceição", p("Professora, culta e independente, Conceição vive entre Fortaleza e a fazenda da avó, Dona Inácia. <b>Importância:</b> traz o olhar reflexivo e social sobre o sofrimento dos retirantes.")],
    ["Vicente", p("Vicente é o primo ligado ao campo e à criação de gado; a seca ameaça seu patrimônio. <b>Importância:</b> representa o sertanejo proprietário e seu vínculo com a terra.")],
    ["Encontros e separações", p("A relação entre Conceição e Vicente é marcada por afeto e por visões de mundo diferentes; os dois não ficam juntos. <b>Importância:</b> é a segunda linha narrativa, mais íntima.")],
    ["Consequências", p("Em Fortaleza, Conceição ajuda os retirantes; a família de Chico Bento segue para São Paulo. <b>Importância:</b> encerra a obra com a marca do deslocamento e da reconstrução.")]
  ]},
  narrativa: { type: "acc", items: [
    ["Narrador", p("Narrador em terceira pessoa, que observa de fora e acompanha o interior de várias personagens. Isso permite mostrar sertão e cidade, ricos e pobres, sem um único ponto de vista.")],
    ["Tempo", p("Cronológico, ambientado na seca de 1915. O tempo psicológico aparece nas reflexões de Conceição.")],
    ["Espaço", p("Sertão cearense (fazenda, estrada) e Fortaleza (a capital que recebe os retirantes). O espaço condiciona o destino das personagens.")],
    ["Conflito", p("Conflito externo: homem contra a seca e a desigualdade. Conflito interno: dilemas de Conceição sobre amor, independência e responsabilidade social.")],
    ["Estrutura", p("Duas linhas paralelas que se cruzam: a do retirante (Chico Bento) e a do drama de Conceição e Vicente.")]
  ]},
  personagens: { type: "tabs", items: [
    ["Conceição", p("<b>Papel:</b> protagonista da linha intelectual. <b>Traços:</b> professora, leitora, independente. <b>Relações:</b> Vicente, Dona Inácia, os retirantes. <b>Conflito:</b> liberdade pessoal x expectativas sociais e afetivas.")],
    ["Vicente", p("<b>Papel:</b> fazendeiro sertanejo. <b>Traços:</b> rústico, prático, ligado ao gado. <b>Relações:</b> Conceição (prima), Dona Inácia. <b>Conflito:</b> proteger a terra durante a seca e o desencontro com Conceição.")],
    ["Chico Bento", p("<b>Papel:</b> retirante. <b>Traços:</b> vaqueiro, resistente, pai de família. <b>Relações:</b> Cordulina e os filhos. <b>Conflito:</b> sobreviver e manter a família unida.")],
    ["Cordulina", p("<b>Papel:</b> esposa de Chico Bento. <b>Traços:</b> forte, sofrida. <b>Relações:</b> marido e filhos, entre eles Duquinha. <b>Conflito:</b> proteger os filhos em meio à fome e às perdas.")],
    ["Duquinha", p("<b>Papel:</b> filho do casal retirante. <b>Relações:</b> pais, irmãos e Conceição, que se aproxima da família. <b>Importância:</b> expõe como a crise recai sobre as crianças.")],
    ["Dona Inácia", p("<b>Papel:</b> avó de Conceição. <b>Traços:</b> tradicional, ligada ao sertão. <b>Relações:</b> Conceição. <b>Importância:</b> representa o mundo rural e seus valores.")]
  ]},
  escola: { type: "tabs", items: [
    ["Modernismo", p("Movimento iniciado com a Semana de 1922, que rompe com modelos tradicionais e valoriza uma linguagem brasileira e temas nacionais. <i>O Quinze</i> (1930) pertence à segunda fase, focada em questões sociais.")],
    ["Regionalismo", p("Tratamento realista de regiões do país. O romance de 1930 dá voz ao Nordeste e à seca como problema social, com linguagem próxima da oralidade.")],
    ["Na obra", p("<b>Análise:</b> o romance une regionalismo (sertão, retirantes), preocupação social (pobreza, abandono) e linguagem direta. Conceição também traz uma questão moderna: a autonomia feminina.")]
  ]},
  contexto: { type: "acc", items: [
    ["A seca", p("A seca de 1915 atingiu o Ceará e provocou forte perda de rebanhos e de lavouras.")],
    ["Êxodo e Fortaleza", p("Muitos sertanejos migraram para a capital. Fortaleza chegou a abrir campos de concentração para flagelados, sob controle do poder público.")],
    ["Desigualdade", p("Proprietários e trabalhadores enfrentaram a seca de formas desiguais; a vulnerabilidade dependia de terra, renda e proteção social.")],
    ["Publicação", p("O livro sai em 1930, quinze anos depois, por uma autora muito jovem, na virada da produção modernista regionalista.")]
  ]},
  temas: { type: "tabs", items: [
    ["Seca", p("<b>Como aparece:</b> pasto, gado e roçado desaparecem. <b>Personagens:</b> Chico Bento, Vicente. <b>Evidencia:</b> o clima como força que rompe rotinas. <b>Reflexão (análise):</b> o fenômeno é natural, mas os efeitos são sociais.")],
    ["Desigualdade", p("<b>Como aparece:</b> Vicente e Chico Bento vivem a seca de modos distintos. <b>Evidencia:</b> a diferença entre quem tem terra e quem só tem trabalho. <b>Reflexão:</b> vulnerabilidade também é construção social.")],
    ["Migração", p("<b>Como aparece:</b> a travessia até Fortaleza. <b>Personagens:</b> Chico Bento, Cordulina, Duquinha. <b>Evidencia:</b> partir é falta de opção. <b>Reflexão:</b> migrar envolve perdas materiais e afetivas.")],
    ["Sobrevivência", p("<b>Como aparece:</b> fome, cansaço e escolhas duras. <b>Evidencia:</b> resistência cotidiana. <b>Reflexão:</b> sobreviver não deve ser romantizado; é resposta à falta de apoio.")],
    ["Abandono", p("<b>Como aparece:</b> pouco amparo no caminho e nos campos de flagelados. <b>Reflexão (análise):</b> o texto convida a pensar na responsabilidade pública.")],
    ["Relações humanas", p("<b>Como aparece:</b> afeto, distância social e solidariedade, como a ajuda de Conceição. <b>Reflexão:</b> empatia não substitui políticas públicas, mas muda trajetórias.")]
  ]},
  frases: { type: "acc", items: [
    ["A partida da família", p("<b>Cena (paráfrase):</b> os retirantes deixam o lugar onde viveram, levando pouco. <b>O que isso revela?</b> Análise: a migração é vista como perda do mundo conhecido.")],
    ["O olhar de Conceição", p("<b>Cena (paráfrase):</b> Conceição observa os flagelados e se envolve em seu socorro. <b>O que isso revela?</b> Análise: a obra propõe consciência social diante do sofrimento.")],
    ["O apego de Vicente", p("<b>Cena (paráfrase):</b> Vicente se preocupa com o gado e a terra. <b>O que isso revela?</b> Análise: mostra outra dimensão da seca, a econômica e a identitária.")]
  ]},
  hoje: { type: "acc", items: [
    ["Semelhanças", p("Eventos climáticos extremos ainda afetam mais quem tem menos recursos. Deslocamentos por seca ou enchente e a desigualdade de acesso a água, moradia e renda seguem como debates atuais.")],
    ["Diferenças", p("Hoje existem políticas como programas de transferência de renda, cisternas, previsão meteorológica e sistemas de alerta. O contexto de 2026 é diferente do de 1915 e não deve ser tratado como cópia.")],
    ["Desafios atuais", p("Mudanças climáticas, vulnerabilidade social, deslocamentos e acesso a recursos exigem análise por dados. A obra ajuda a lembrar que crises climáticas nunca são só naturais.")]
  ]},
  autora: { type: "acc", items: [
    ["1910: nascimento", p("Nasce em Fortaleza, em 17 de novembro de 1910.")],
    ["1930: O Quinze", p("Publica seu primeiro romance, com cerca de 20 anos, e ganha projeção nacional.")],
    ["Trajetória e obras", p("Escreveu romances, crônicas e teatro. Entre as obras: <i>João Miguel</i> (1932), <i>Caminho de Pedras</i> (1937), <i>As Três Marias</i> (1939), <i>Dôra, Doralina</i> (1975) e <i>Memorial de Maria Moura</i> (1992).")],
    ["1977: Academia", p("Torna-se a primeira mulher eleita para a Academia Brasileira de Letras.")],
    ["2003: legado", p("Morre no Rio de Janeiro, em 4 de novembro de 2003. É referência da literatura brasileira e do romance social do Nordeste.")]
  ]}
};

/* ===== QUIZ: edite perguntas aqui (a = índice da resposta certa, começando em 0) ===== */
const QUIZ = [
  { c:"Enredo", q:"O que leva Chico Bento a deixar o sertão?", o:["Um convite de Conceição para trabalhar em Fortaleza","A perda do sustento com a seca, que destrói o gado e o roçado","Uma disputa de terras com Vicente","O desejo de estudar na capital"], a:1, e:"A seca elimina as condições de trabalho e subsistência da família." },
  { c:"Enredo", q:"Qual afirmação descreve a estrutura da narrativa?", o:["Uma única linha, contada só do ponto de vista de Vicente","Duas linhas que se cruzam: a do retirante e a de Conceição e Vicente","Uma sequência de cartas de Conceição","Um diário do narrador durante a seca"], a:1, e:"O romance alterna a saga dos retirantes com o drama pessoal de Conceição." },
  { c:"Personagens", q:"Qual traço melhor define Conceição?", o:["Camponesa analfabeta que migra","Moça culta e professora que valoriza a independência","Fazendeira que defende o casamento arranjado","Comerciante de Fortaleza"], a:1, e:"Conceição representa uma mulher letrada e autônoma para a época." },
  { c:"Personagens", q:"Qual contraste organiza a relação entre Conceição e Vicente?", o:["Vicente é urbano e Conceição rústica","Conceição tem visão reflexiva e social; Vicente é ligado ao campo e à terra","Ambos pensam de forma idêntica","Vicente é retirante e Conceição fazendeira"], a:1, e:"Os dois refletem modos distintos de ver o sertão e o mundo." },
  { c:"Narrador", q:"Que tipo de narrador conduz O Quinze?", o:["Primeira pessoa, protagonista","Terceira pessoa, que acessa a interioridade de várias personagens","Primeira pessoa, testemunha","Narrador em forma de cartas"], a:1, e:"O narrador em terceira pessoa acompanha diversos núcleos." },
  { c:"Narrador", q:"Que efeito esse narrador produz?", o:["Limita a história a um único ponto de vista","Permite mostrar sertão, cidade e classes diferentes ao mesmo tempo","Elimina o conflito social","Torna o texto poético e sem enredo"], a:1, e:"A perspectiva ampla ajuda a compor um panorama social." },
  { c:"Escola literária", q:"A que corrente O Quinze está ligado?", o:["Romantismo indianista","Parnasianismo","Romance regionalista da segunda fase do Modernismo","Realismo do século XIX apenas"], a:2, e:"É um marco do romance social de 1930." },
  { c:"Escola literária", q:"O que aproxima a obra do Modernismo?", o:["Idealização da natureza","Linguagem próxima do falar brasileiro e olhar crítico sobre problemas sociais","Foco na monarquia","Uso exclusivo de versos"], a:1, e:"O Modernismo valoriza linguagem e temas nacionais e sociais." },
  { c:"Contexto histórico", q:"O que o título 'O Quinze' remete?", o:["A quinze capítulos","À idade de Conceição","À grande seca de 1915","A quinze personagens"], a:2, e:"O título alude à seca de 1915 no Ceará." },
  { c:"Contexto histórico", q:"Que fato histórico de 1915 dialoga com a obra?", o:["Uma guerra civil no Ceará","Campos para flagelados em Fortaleza, ligados ao êxodo","A fundação da capital","Uma revolta militar"], a:1, e:"A migração dos retirantes gerou medidas de contenção na capital." },
  { c:"Temas", q:"Como a migração aparece na obra?", o:["Como aventura","Como consequência da perda das condições de sobrevivência","Como projeto de ascensão","Como turismo"], a:1, e:"Partir é falta de alternativa, não escolha livre." },
  { c:"Temas", q:"Qual leitura sobre indivíduo e ambiente é mais adequada?", o:["O clima decide tudo, sem influência social","O ambiente pesa, mas os efeitos variam com a posição social","A seca afeta todos igualmente","O ambiente não importa"], a:1, e:"A obra mostra que a seca atinge de modo desigual." },
  { c:"Criticidade", q:"Por que a obra vai além de retratar a seca?", o:["Só descreve paisagens","Ao acompanhar os efeitos sociais, questiona desigualdade e amparo","Nega a existência da seca","Ignora os personagens pobres"], a:1, e:"Interpretação: o foco está nas relações sociais e na vulnerabilidade." },
  { c:"Criticidade", q:"O que a atuação de Conceição junto aos retirantes pode sugerir?", o:["Que a seca se resolve sozinha","Que empatia e responsabilidade social podem interferir na realidade","Que retirantes não precisam de ajuda","Que a cidade é sempre hostil"], a:1, e:"É uma leitura crítica: a ajuda individual aparece como gesto ético, não solução total." },
  { c:"Atualidade", q:"Qual afirmação sobre 1915 e 2026 é mais adequada?", o:["Nada mudou","Não há relação","Persistem vulnerabilidades ante eventos extremos, mas há políticas e tecnologias diferentes","Não existem mais secas"], a:2, e:"Comparar exige ver semelhanças e diferenças." }
];

/* ===== RENDERIZAÇÃO ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// Acordeão: usa <details>, nativo e acessível
function renderAccordion(el, items) {
  el.innerHTML = items.map(([t, b]) => `<details><summary>${t}</summary><div>${b}</div></details>`).join("");
}

// Abas acessíveis (aria-selected), usadas em personagens/escola/temas
function renderTabs(el, items) {
  el.innerHTML = `<div class="tabs" role="tablist" aria-orientation="vertical">${items.map(([t], i) => `<button role="tab" aria-selected="${i === 0}" data-i="${i}">${t}</button>`).join("")}</div><div class="panel" role="tabpanel" tabindex="0"></div>`;
  const panel = $(".panel", el), btns = $$("button", el);
  const show = i => { btns.forEach((b, j) => b.setAttribute("aria-selected", j === i)); panel.innerHTML = `<h3>${items[i][0]}</h3>${items[i][1]}`; };
  btns.forEach((b, i) => b.addEventListener("click", () => show(i)));
  el.addEventListener("keydown", e => { // setas do teclado
    const i = btns.findIndex(b => b.getAttribute("aria-selected") === "true");
    const n = e.key === "ArrowDown" ? i + 1 : e.key === "ArrowUp" ? i - 1 : null;
    if (n !== null && btns[n]) { e.preventDefault(); show(n); btns[n].focus(); }
  });
  show(0);
}

$$("[data-render]").forEach(el => {
  const d = DATA[el.dataset.render];
  (d.type === "tabs" ? renderTabs : renderAccordion)(el, d.items);
});

/* ===== ABERTURA ===== */
$("#enter").addEventListener("click", () => {
  $("#intro").classList.add("out");
  document.body.classList.remove("locked");
  setTimeout(() => $("#intro").remove(), 400);
  $("#obra").scrollIntoView();
});

/* ===== ÍNDICE, PROGRESSO, REVELAÇÃO E CONTADOR ===== */
const links = $$("#rail a");
const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id));
}), { rootMargin: "-40% 0px -55% 0px" });
$$("main > section").forEach(s => obs.observe(s));

addEventListener("scroll", () => {
  const h = document.documentElement;
  $("#progress").style.height = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
}, { passive: true });

const reveal = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
}), { threshold: .15 });
$$("h2, .lead").forEach(el => { el.classList.add("rv"); reveal.observe(el); });

// contador do 15 (apenas ao aparecer)
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
new IntersectionObserver(([e], o) => {
  if (!e.isIntersecting) return; o.disconnect();
  const t = 15, n = $("#count");
  if (reduce) return void (n.textContent = t);
  let v = 0; const id = setInterval(() => { n.textContent = ++v; if (v >= t) clearInterval(id); }, 60);
}).observe($("#obra"));

/* ===== QUIZ ===== */
const box = $("#quizbox");
let idx = 0, score = 0, stats = {};

function startQuiz() { idx = 0; score = 0; stats = {}; showQuestion(); }

function showQuestion() {
  const q = QUIZ[idx];
  box.innerHTML = `<p class="q-meta">QUESTÃO ${String(idx + 1).padStart(2, "0")} / ${QUIZ.length} · ${q.c}</p>
    <p class="q-text">${q.q}</p><div role="group" aria-label="Alternativas">${q.o.map((o, i) => `<button class="opt" data-i="${i}"><b>${"ABCD"[i]}</b> ${o}</button>`).join("")}</div><div id="fb"></div>`;
  $$(".opt", box).forEach(b => b.addEventListener("click", () => answer(+b.dataset.i)));
}

function answer(i) {
  const q = QUIZ[idx], ok = i === q.a;
  (stats[q.c] ||= [0, 0])[1]++;
  if (ok) { score++; stats[q.c][0]++; }
  $$(".opt", box).forEach((b, j) => { b.disabled = true; if (j === q.a) b.classList.add("ok"); else if (j === i) b.classList.add("no"); });
  $("#fb").innerHTML = `<div class="fb"><b>${ok ? "CORRETO" : "INCORRETO"}</b>. ${q.e}</div><button class="btn" id="next">${idx === QUIZ.length - 1 ? "Ver resultado" : "Próxima"}</button>`;
  $("#next").focus();
  $("#next").addEventListener("click", () => { idx++; idx < QUIZ.length ? showQuestion() : showResult(); });
}

function showResult() {
  const pct = score / QUIZ.length;
  const msg = pct === 1 ? "Leitura completa da obra." : pct >= .7 ? "Bom domínio. Revise os temas em que errou." : pct >= .4 ? "Base sólida. Volte às seções do hub e tente de novo." : "Explore as seções do hub e refaça o quiz.";
  box.innerHTML = `<p class="q-meta">SEU RESULTADO</p><p class="big">${score}/${QUIZ.length}</p><p>${msg}</p>` +
    Object.entries(stats).map(([c, [a, t]]) => `<div class="bar"><span>${c}</span><i style="width:${(a / t) * 100}%"></i><span>${a}/${t}</span></div>`).join("") +
    `<p style="margin-top:1.5rem"><button class="btn" id="again">Refazer quiz</button></p>`;
  $("#again").addEventListener("click", startQuiz);
}
startQuiz();

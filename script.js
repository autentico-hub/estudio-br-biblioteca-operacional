const documentosBR = [
  // INSIRA NOVAS ORIENTAÇÕES ABAIXO.
  // A função principal é consultar o conhecimento extraído e orientar a profissional.
  // Use fontePdf apenas como referência opcional, não como resposta principal.
  {
    titulo: "Feriados não geram reposição",
    categoria: "Atendimento",
    resumo: "Feriados não geram reposição, visto que não há agendamento.",
    palavrasChave: ["feriado", "reposição", "repor feriado", "falta em feriado"],
    textoBase: "Em feriados, a agenda regular do estúdio não é aberta para atendimento. Como não existe sessão agendada, não há sessão a ser reposta.",
    orientacaoInstitucional: "Feriados não geram reposição, visto que não há agendamento.",
    condutaRecomendada: [
      "Não oferecer reposição por feriado.",
      "Explicar que, como não existe sessão agendada nesse dia, não há sessão a ser reposta."
    ],
    respostaSugerida: "Nos feriados não há reposição, porque não existe agendamento de sessão nesse dia. Essa é uma regra contratual do Estúdio.",
    fontePdf: ""
  },
  {
    titulo: "Pedido de desconto fora da política oficial",
    categoria: "Comercial",
    resumo: "Descontos não devem ser oferecidos fora da política oficial de valor e compromisso.",
    palavrasChave: ["desconto", "mensalidade", "valor", "preço", "negociação"],
    textoBase: "A política comercial do estúdio organiza valores conforme compromisso, recorrência e previsibilidade de agenda. Negociações individuais fora da política criam exceções e desalinhamento institucional.",
    orientacaoInstitucional: "Descontos não devem ser oferecidos fora da política oficial de valor e compromisso.",
    condutaRecomendada: [
      "Não negociar valor individualmente.",
      "Encaminhar as opções oficiais de plano conforme compromisso e disponibilidade de agenda."
    ],
    respostaSugerida: "Os valores seguem a política oficial do Estúdio, organizada conforme compromisso, recorrência e previsibilidade de agenda. Posso te apresentar as opções disponíveis.",
    fontePdf: ""
  },
  {
    titulo: "Nota fiscal para imposto de renda",
    categoria: "Financeiro",
    resumo: "A nota fiscal do Estúdio BR não deve ser apresentada como serviço médico para dedução de imposto de renda.",
    palavrasChave: ["nota fiscal", "imposto de renda", "recibo", "dedução", "IR"],
    textoBase: "A emissão fiscal do estúdio corresponde à atividade contratada pelo cliente junto ao estúdio. A atividade está vinculada a prática física/condicionamento, não a atendimento fisioterapêutico individual.",
    orientacaoInstitucional: "A nota fiscal do Estúdio BR não deve ser apresentada como serviço médico para dedução de imposto de renda.",
    condutaRecomendada: [
      "Explicar que o CNPJ do estúdio está vinculado à atividade física/condicionamento.",
      "Não afirmar que a nota é dedutível como atendimento fisioterapêutico individual.",
      "Orientar o cliente a consultar seu contador em caso de dúvida tributária."
    ],
    respostaSugerida: "A nota emitida pelo Estúdio corresponde à atividade contratada pelo estúdio e não se enquadra como atendimento fisioterapêutico individual para dedução médica no imposto de renda.",
    fontePdf: ""
  },
  {
    titulo: "Transferência de sessão para outra pessoa",
    categoria: "Atendimento",
    resumo: "Os planos e sessões são pessoais e intransferíveis.",
    palavrasChave: ["transferir sessão", "passar sessão", "outra pessoa", "usar plano de outro"],
    textoBase: "Sessões e planos são vinculados ao cliente contratado, considerando agenda, acompanhamento e responsabilidade técnica. A transferência para outra pessoa não deve ser tratada como regra operacional.",
    orientacaoInstitucional: "Os planos e sessões são pessoais e intransferíveis.",
    condutaRecomendada: [
      "Não autorizar transferência de sessão para outra pessoa sem validação expressa da coordenação.",
      "Explicar que a sessão está vinculada ao plano contratado e ao acompanhamento individual."
    ],
    respostaSugerida: "As sessões são pessoais e vinculadas ao plano contratado. Por isso, não podem ser transferidas para outra pessoa.",
    fontePdf: ""
  },
  {
    titulo: "Lista de espera para horário cheio",
    categoria: "Atendimento",
    resumo: "Horários cheios devem ser tratados com lista de espera, sem promessa de vaga imediata.",
    palavrasChave: ["horário cheio", "lista de espera", "19 horas", "vaga", "lotado"],
    textoBase: "Quando um horário está com alta ocupação, a profissional deve registrar o interesse do cliente e acompanhar disponibilidade real. Não deve prometer encaixe sem confirmação da agenda.",
    orientacaoInstitucional: "Horários cheios devem ser tratados com lista de espera, sem promessa de vaga imediata.",
    condutaRecomendada: [
      "Registrar interesse.",
      "Explicar a limitação de agenda.",
      "Avisar quando houver disponibilidade real."
    ],
    respostaSugerida: "Esse horário está com alta ocupação no momento. Posso registrar seu interesse na lista de espera e te avisar caso surja uma disponibilidade.",
    fontePdf: ""
  },
  {
    titulo: "Manual de Governança Operacional",
    categoria: "Governança",
    resumo: "Diretrizes para decisões, responsabilidades e rotinas internas.",
    palavrasChave: ["governança", "decisão", "responsabilidade", "processo", "rotina interna"],
    textoBase: "Cole aqui o texto extraído do manual.",
    orientacaoInstitucional: "As decisões operacionais devem seguir critérios registrados, responsáveis definidos e comunicação clara entre as áreas.",
    condutaRecomendada: [
      "Verificar qual regra institucional se aplica.",
      "Não improvisar resposta fora da política do estúdio.",
      "Registrar dúvidas ou exceções para validação da coordenação."
    ],
    respostaSugerida: "Vou verificar conforme a orientação interna do Estúdio BR e te retorno com a condução correta.",
    fontePdf: "documentos/manual-governanca-operacional.pdf"
  }
  // INSIRA NOVAS ORIENTAÇÕES ACIMA.
];

const cardsGrid = document.getElementById("cardsGrid");
const guidanceResults = document.getElementById("guidanceResults");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const activeCategory = document.getElementById("activeCategory");
const menuItems = document.querySelectorAll(".menu-item");
const documentModal = document.getElementById("documentModal");
const closeModal = document.getElementById("closeModal");
const closeModalFooter = document.getElementById("closeModalFooter");
const copyResponse = document.getElementById("copyResponse");
const copyGuidance = document.getElementById("copyGuidance");
const openPdf = document.getElementById("openPdf");
const copyStatus = document.getElementById("copyStatus");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const modalBody = document.getElementById("modalBody");

let selectedCategory = "Todos";
let currentGuidanceText = "";
let currentResponseText = "";
let currentPdfPath = "";

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function fieldToText(value) {
  if (Array.isArray(value)) {
    return value.join(" ");
  }

  return value || "";
}

function getSearchableText(documento) {
  return [
    documento.titulo,
    documento.categoria,
    documento.resumo,
    documento.palavrasChave,
    documento.textoBase,
    documento.orientacaoInstitucional,
    documento.condutaRecomendada,
    documento.respostaSugerida
  ].map(fieldToText).join(" ");
}

function getSearchTokens(searchTerm) {
  return normalizeText(searchTerm)
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= 3);
}

function scoreDocument(documento, searchTerm) {
  const normalizedSearch = normalizeText(searchTerm);
  const tokens = getSearchTokens(searchTerm);
  const searchableText = normalizeText(getSearchableText(documento));
  const keywordText = normalizeText(fieldToText(documento.palavrasChave));
  let score = 0;

  if (!normalizedSearch) {
    return 1;
  }

  if (keywordText.includes(normalizedSearch)) score += 60;
  if (normalizeText(documento.titulo).includes(normalizedSearch)) score += 45;
  if (normalizeText(documento.resumo).includes(normalizedSearch)) score += 35;
  if (searchableText.includes(normalizedSearch)) score += 25;

  tokens.forEach((token) => {
    if (keywordText.includes(token)) score += 12;
    if (normalizeText(documento.titulo).includes(token)) score += 10;
    if (searchableText.includes(token)) score += 4;
  });

  return score;
}

function getRankedDocuments(searchTerm) {
  const normalizedSearchTerm = normalizeText(searchTerm);

  return documentosBR
    .map((documento) => ({
      documento,
      score: normalizedSearchTerm ? scoreDocument(documento, searchTerm) : 1
    }))
    .filter(({ documento, score }) => {
      const matchesCategory =
        selectedCategory === "Todos" || documento.categoria === selectedCategory;
      return matchesCategory && score > 0;
    })
    .sort((a, b) => b.score - a.score)
    .map(({ documento }) => documento);
}

function formatList(items) {
  if (!items || items.length === 0) {
    return "Conteúdo ainda não cadastrado.";
  }

  return items.map((item) => `- ${item}`).join("\n");
}

function getValue(value) {
  return value || "Conteúdo ainda não cadastrado.";
}

function getSourceText(documento) {
  return documento.fontePdf
    ? `${documento.titulo} (${documento.fontePdf})`
    : documento.titulo;
}

function getRelatedSnippets(documento, searchTerm) {
  if (!searchTerm) {
    return [];
  }

  const normalizedTerm = normalizeText(searchTerm);
  const fields = [
    documento.resumo,
    fieldToText(documento.palavrasChave),
    documento.textoBase,
    documento.orientacaoInstitucional,
    fieldToText(documento.condutaRecomendada),
    documento.respostaSugerida
  ];

  return fields
    .map((field) => fieldToText(field).replace(/\s+/g, " ").trim())
    .filter((field) => field && normalizeText(field).includes(normalizedTerm))
    .slice(0, 2);
}

function createQuickResult(documento, index) {
  return `
    <article class="quick-result">
      <div class="quick-result-header">
        <h2>${documento.titulo}</h2>
        <span class="card-category">${documento.categoria}</span>
      </div>
      <div class="quick-grid">
        <div class="quick-block">
          <h3>Orientação rápida</h3>
          <p>${documento.orientacaoInstitucional}</p>
        </div>
        <div class="quick-block">
          <h3>Conduta recomendada</h3>
          <p>${formatList(documento.condutaRecomendada)}</p>
        </div>
        <div class="quick-block">
          <h3>Resposta sugerida ao cliente</h3>
          <p>${documento.respostaSugerida}</p>
        </div>
        <div class="quick-block">
          <h3>Fonte interna consultada</h3>
          <p>${getSourceText(documento)}</p>
        </div>
      </div>
      <div class="quick-actions">
        <button class="copy-button quick-copy-response" type="button" data-index="${index}">Copiar resposta</button>
      </div>
    </article>
  `;
}

function renderQuickResults(rankedDocuments, searchTerm) {
  if (!searchTerm) {
    guidanceResults.innerHTML = "";
    return;
  }

  if (rankedDocuments.length === 0) {
    guidanceResults.innerHTML = `
      <div class="quick-empty">
        Não encontrei uma orientação cadastrada para esse assunto. Consulte a coordenação antes de responder ao cliente.
      </div>
    `;
    return;
  }

  guidanceResults.innerHTML = rankedDocuments
    .slice(0, 3)
    .map((documento) => createQuickResult(documento, documentosBR.indexOf(documento)))
    .join("");
}

function createCard(documento, searchTerm) {
  const documentIndex = documentosBR.indexOf(documento);
  const snippets = getRelatedSnippets(documento, searchTerm);
  const snippetHtml = snippets.length
    ? `<div class="related-snippets">
        <strong>Trechos relacionados</strong>
        ${snippets.map((snippet) => `<p>${snippet}</p>`).join("")}
      </div>`
    : "";

  return `
    <article class="card">
      <span class="card-category">${documento.categoria || "Sem categoria"}</span>
      <h2>${documento.titulo || "Documento sem título"}</h2>
      <p>${documento.resumo || "Orientação preparada para receber conteúdo real do Estúdio BR."}</p>
      ${snippetHtml}
      <button class="open-button" type="button" data-index="${documentIndex}">Consultar orientação</button>
    </article>
  `;
}

function buildCompleteGuidance(documento) {
  return `${documento.titulo || "Documento sem título"}
Categoria: ${documento.categoria || "Sem categoria"}

Orientação rápida
${getValue(documento.orientacaoInstitucional)}

Conduta recomendada
${formatList(documento.condutaRecomendada)}

Resposta sugerida
${getValue(documento.respostaSugerida)}

Fonte interna consultada
${getSourceText(documento)}

Texto base extraído
${getValue(documento.textoBase)}`;
}

function openDocument(documentIndex) {
  const documento = documentosBR[documentIndex];

  modalCategory.textContent = documento.categoria || "Sem categoria";
  modalTitle.textContent = documento.titulo || "Documento sem título";
  modalSummary.textContent = documento.resumo || "Resumo ainda não cadastrado.";
  modalBody.innerHTML = `
    <section class="modal-section">
      <h3>Orientação rápida</h3>
      <p class="document-content">${getValue(documento.orientacaoInstitucional)}</p>
    </section>
    <section class="modal-section">
      <h3>Conduta recomendada</h3>
      <p class="document-content">${formatList(documento.condutaRecomendada)}</p>
    </section>
    <section class="modal-section">
      <h3>Resposta sugerida ao cliente</h3>
      <p class="document-content">${getValue(documento.respostaSugerida)}</p>
    </section>
    <section class="modal-section reference-section">
      <h3>Fonte interna consultada</h3>
      <p>${getSourceText(documento)}</p>
    </section>
  `;

  currentResponseText = documento.respostaSugerida || "";
  currentGuidanceText = buildCompleteGuidance(documento);
  currentPdfPath = documento.fontePdf || "";
  copyStatus.textContent = "";
  openPdf.classList.toggle("hidden", !currentPdfPath);
  documentModal.classList.remove("hidden");
}

function hideModal() {
  documentModal.classList.add("hidden");
}

function copyTextFallback(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

async function copyText(text, successMessage) {
  if (!text) {
    copyStatus.textContent = "Não há texto para copiar";
    return;
  }

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      copyTextFallback(text);
    }

    copyStatus.textContent = successMessage;
  } catch (error) {
    copyTextFallback(text);
    copyStatus.textContent = successMessage;
  }
}

function renderCards() {
  const searchTerm = searchInput.value.trim();
  const rankedDocuments = getRankedDocuments(searchTerm);

  renderQuickResults(rankedDocuments, searchTerm);
  resultCount.textContent = rankedDocuments.length;
  activeCategory.textContent = selectedCategory;

  if (rankedDocuments.length === 0) {
    cardsGrid.innerHTML = `
      <div class="empty-state">
        Nenhum documento encontrado.
      </div>
    `;
    return;
  }

  cardsGrid.innerHTML = rankedDocuments
    .map((documento) => createCard(documento, searchTerm))
    .join("");
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((menuItem) => menuItem.classList.remove("active"));
    item.classList.add("active");
    selectedCategory = item.dataset.category;
    renderCards();
  });
});

searchInput.addEventListener("input", renderCards);

guidanceResults.addEventListener("click", (event) => {
  if (event.target.classList.contains("quick-copy-response")) {
    const documento = documentosBR[event.target.dataset.index];
    copyText(documento.respostaSugerida, "Resposta copiada");
  }
});

cardsGrid.addEventListener("click", (event) => {
  if (event.target.classList.contains("open-button")) {
    openDocument(event.target.dataset.index);
  }
});

closeModal.addEventListener("click", hideModal);
closeModalFooter.addEventListener("click", hideModal);
copyResponse.addEventListener("click", () => {
  copyText(currentResponseText, "Resposta copiada");
});
copyGuidance.addEventListener("click", () => {
  copyText(currentGuidanceText, "Orientação completa copiada");
});
openPdf.addEventListener("click", () => {
  if (currentPdfPath) {
    window.open(currentPdfPath, "_blank");
  }
});

documentModal.addEventListener("click", (event) => {
  if (event.target === documentModal) {
    hideModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideModal();
  }
});

renderCards();

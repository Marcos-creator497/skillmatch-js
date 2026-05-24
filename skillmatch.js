// ============================================
// RF01 - PERFIL DO CANDIDATO
// ============================================
const candidato = {
  nome: "Marcos",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3
};

// ============================================
// RF02 - LISTA DE VAGAS
// ============================================
const vagas = [
  {
    id: 1,
    empresa: "TechStart",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
    salario: 2800,
    modalidade: "Remoto"
  },
  {
    id: 2,
    empresa: "CodeLab",
    cargo: "Estágio Front-End",
    requisitos: ["JavaScript", "Kanban", "GitHub"],
    salario: 1800,
    modalidade: "Híbrido"
  },
  {
    id: 3,
    empresa: "WebSolutions",
    cargo: "Programador JavaScript Júnior",
    requisitos: ["JavaScript", "Arrays", "Objetos", "Funções"],
    salario: 3000,
    modalidade: "Presencial"
  }
];
// ============================================
// RF03, RF04, RF05 - CALCULAR COMPATIBILIDADE,
// CLASSIFICAR E LISTAR HABILIDADES FALTANTES
// ============================================
function calcularCompatibilidade(candidato, vaga) {
  const habilidadesEncontradas = vaga.requisitos.filter(req =>
    candidato.habilidades.includes(req)
  );

  const habilidadesFaltantes = vaga.requisitos.filter(req =>
    !candidato.habilidades.includes(req)
  );

  const percentual = Math.round(
    (habilidadesEncontradas.length / vaga.requisitos.length) * 100
  );

  let classificacao;
  if (percentual >= 80) {
    classificacao = "Alta compatibilidade";
  } else if (percentual >= 50) {
    classificacao = "Média compatibilidade";
  } else {
    classificacao = "Baixa compatibilidade";
  }

  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    percentual,
    habilidadesEncontradas,
    habilidadesFaltantes,
    classificacao
  };
}
// ============================================
// RF09 - CLASSE VAGA
// RF10 - HERANÇA
// RF11 - USO DO THIS
// ============================================
class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}
// ============================================
// RF12 - CALLBACK
// ============================================
function finalizarAnalise(nomeCandidato, callback) {
  console.log("Análise finalizada.");
  callback(nomeCandidato);
}

function exibirMensagemFinal(nome) {
  console.log(`${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`);
}

// ============================================
// RF13 - CLOSURE
// ============================================
function criarContadorDeAnalises() {
  let total = 0;
  return function () {
    total++;
    return total;
  };
}

const contarAnalise = criarContadorDeAnalises();

// ============================================
// RF14 - PROMISE E ASYNC/AWAIT
// ============================================
function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
}

async function iniciarSistema() {
  console.log("Carregando vagas...");
  const vagasCarregadas = await buscarVagasSimuladas();
  console.log("Vagas carregadas com sucesso!");
  return vagasCarregadas;
}
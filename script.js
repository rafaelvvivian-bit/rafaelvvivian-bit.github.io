/* ==========================================================================
   Rafael Vivian — Portfolio & Landing Page ("O Criador Analítico")
   Interactive Logic: Polar Harmonic Force Simulator (HiDPI), i18n (PT/EN),
   Theme Switcher (Paleta 2: CAE / von Mises), vCard & Networking
   ========================================================================== */

const i18nDictionary = {
  pt: {
    "nav.credential": "Engenharia de Produto & Ferramentaria • Criador Analítico",
    "nav.about": "Perfil",
    "nav.expertise": "Pilares",
    "nav.career": "Experiência",
    "nav.cases": "Cases & Lab FEA",
    "nav.education": "Formação",
    "nav.maker": "Lado Maker",
    "nav.contact": "Contato",

    "hero.badge": "Desenvolvimento de Produtos & Processos • Ferramentaria • Simulação FEA",
    "hero.title": "Unindo <em>Engenharia de Produto</em>, <em>Gestão de Ferramentaria</em> e <em>Simulação Avançada</em> para transformar problemas físicos em soluções reais.",
    "hero.lead": "Mais de 20 anos de trajetória industrial (Ferramentaria Nacional e Progeral Clamps), liderando o ciclo completo de novos produtos e ferramentas: da concepção, cálculo estrutural, FEA (ANSYS/Abaqus/SolidWorks) e APQP/FMEA até a industrialização, Lean Manufacturing e automação digital no chão de fábrica.",
    "hero.ctaPrimary": "Conectar no LinkedIn",
    "hero.ctaDownloadCv": "Baixar Currículo (PDF)",
    "hero.ctaQr": "QR Code",
    "hero.affiliationsLabel": "Especialidades & Ferramentas Chave:",
    "hero.location": "Boituva / Iperó — SP, Brasil",
    "hero.archetypeTag": "Criador Analítico",
    "hero.cardHeadline": "Desenvolvimento de Produtos e Processos | Engenharia | APQP & Scrum | Lean Manufacturing | Gestão de Ferramentaria | Simulações (FEA)",
    "hero.cardRole1Title": "Ferramentaria Nacional & Progeral Clamps",
    "hero.cardRole1Sub": "+19 anos em Desenvolvimento de Produto, Ferramentaria e Estampagem",
    "hero.cardRole2Title": "Formação Multidisciplinar Sólida",
    "hero.cardRole2Sub": "Eng. de Produção (IFSP) • Automação (FATEC-SP) • ETEC & SENAI",

    "metrics.m1Label": "Trajetória Industrial",
    "metrics.m1Desc": "Evolução consistente do chão de fábrica (SENAI/Operação) à Supervisão de P&D e Ferramentaria.",
    "metrics.m2Label": "Liderança & Supervisão",
    "metrics.m2Desc": "Gestão integrada de equipes multidisciplinares de engenharia, ferramentaria, manutenção e produto.",
    "metrics.m3Label": "Rigor de Engenharia",
    "metrics.m3Desc": "FMEA-VDA, Tool Design, simulações estruturais (ANSYS/Abaqus/SolidWorks) e ensaios empíricos.",
    "metrics.m4Label": "Inovação & Eco-Design",
    "metrics.m4Desc": "Algoritmos no TOTVS Protheus, dashboards Python/JS, Impressão 3D (FDM) e Economia Circular (DfD).",

    "about.tag": "Perfil Profissional • O Criador Analítico",
    "about.title": "Rigor matemático, vivência prática de ferramentaria e visão moderna de produto",
    "about.p1": "Profissional multidisciplinar que une mais de duas décadas de experiência prática na indústria metalmecânica e de polímeros ao rigor analítico da Engenharia de Produção (IFSP Boituva) e da Automação Industrial (FATEC-SP).",
    "about.p2": "Construí minha carreira de forma orgânica e sólida: iniciei como Aprendiz Eletricista (SENAI) e Operador Técnico de estampagem/conformação, evoluindo para Assistente de Engenharia, Analista e Supervisor de Desenvolvimento de Produto na Progeral Clamps (14 anos), e posteriormente Supervisor de Ferramentaria e especialista em Desenvolvimento de Produtos na Ferramentaria Nacional.",
    "about.p3": "Essa base real de fábrica me permite projetar produtos e ferramentas com máxima manufaturabilidade (DFM/DFA), aplicando cálculos avançados (equações de Lamé, contato de Hertz, séries harmônicas polares), simulações por Elementos Finitos (ANSYS, Abaqus, SolidWorks), metodologias de qualidade (APQP, FMEA-VDA, Lean, Scrum) e ferramentas digitais próprias (algoritmos para TOTVS Protheus e dashboards em Python/Chart.js).",
    "about.skillsTitle": "Competências & Certificações",
    "about.quote": "\"Um perfil multidisciplinar que une o rigor matemático da engenharia à criatividade maker, traduzindo problemas físicos em soluções digitais e produtos tangíveis.\"",

    "expertise.tag": "Pilares de Atuação",
    "expertise.title": "Quatro frentes integradas de entrega técnica e gestão",
    "expertise.subtitle": "Da concepção matemática e simulação computacional à fabricação de ferramentas de estampagem e industrialização seriada.",
    "expertise.p1Title": "Desenvolvimento de Produtos, APQP & Ferramentaria",
    "expertise.p1Desc": "Coordenação técnica do ciclo completo de novos produtos e ferramentas de estampagem/conformação, desde estudos de viabilidade técnica e econômica até o tryout e aprovação final para produção seriada.",
    "expertise.p1Item1": "Aplicação rigorosa de APQP, PPAP, FMEA-VDA, CEP, PDCA e Plano de Controle",
    "expertise.p1Item2": "Gestão de fabricação e manutenção de ferramentas de estampagem e dispositivos",
    "expertise.p1Item3": "Interface técnica com clientes, fornecedores, qualidade, compras e produção",
    "expertise.p2Title": "Simulação Numérica (FEA), Cálculos & Materiais",
    "expertise.p2Desc": "Modelagem matemática avançada e simulações por Elementos Finitos para validação estrutural, redução de custos, aumento de robustez e previsão de falhas.",
    "expertise.p2Item1": "Simulações estruturais e tensão de von Mises em ANSYS, Abaqus e SolidWorks",
    "expertise.p2Item2": "Ensaios empíricos de fluência e relaxamento térmico (60°C) em aço mola 51CrV4",
    "expertise.p2Item3": "Equações de Lamé, contato de Hertz, Lei de Hooke e séries harmônicas polares",
    "expertise.p3Title": "Lean Manufacturing, ERP & Automação Digital",
    "expertise.p3Desc": "União da formação em Automação Industrial e Engenharia de Produção para otimizar o chão de fábrica através de algoritmos, indicadores e melhoria contínua.",
    "expertise.p3Item1": "Algoritmos de perda de material para o ERP TOTVS Protheus (usinagem de barras)",
    "expertise.p3Item2": "Dashboards interativos de engenharia em Python, GeoGebra e HTML/JS (Chart.js)",
    "expertise.p3Item3": "Liderança de programas Lean Manufacturing, redução de refugos e ganho de OEE",
    "expertise.p4Title": "Prototipagem 3D, Sustentabilidade & Economia Circular",
    "expertise.p4Desc": "Manufatura aditiva rápida e pesquisa aplicada ao ciclo de vida do produto, unindo funcionalidade de montagem e responsabilidade ambiental.",
    "expertise.p4Item1": "Prototipagem em PLA (FDM) com geometrias pino-furo de absorção radial",
    "expertise.p4Item2": "Pesquisa em Design for Disassembly (DfD) e gestão sustentável de polímeros",
    "expertise.p4Item3": "Desenvolvimento de cases para microcontroladores e dispositivos especiais",

    "career.tag": "Trajetória Profissional Completa",
    "career.title": "+22 anos construindo soluções na indústria",
    "career.subtitle": "Histórico completo extraído do LinkedIn: da base técnica operacional à supervisão de ferramentaria e engenharia de desenvolvimento de produtos.",
    "career.filterAll": "Toda a Carreira (2004 – Presente)",
    "career.filterFn": "Ferramentaria Nacional (4a 11m)",
    "career.filterProgeral": "Progeral Clamps (14a 1m)",
    "career.filterLead": "Cargos de Liderança & Gestão",
    "career.badgeCurrent": "Atual • Engenharia de Produto",
    "career.badgeSup": "Supervisão & Gestão",
    "career.badgeSupRd": "Supervisão P&D",
    "career.badgeProdEng": "Engenharia de Produto",
    "career.badgeTryout": "Base Técnica & Tryout",
    "career.badgeEarly": "Início Industrial",
    "career.r1Period": "Fevereiro de 2026 – Presente • Iperó, SP",
    "career.r1Role": "Especialista em Desenvolvimento de Produtos",
    "career.r1Desc": "Liderança técnica em projetos de inovação, estudos de viabilidade técnica/econômica e coordenação multidisciplinar (engenharia, produção, qualidade, compras e fornecedores). Definição de requisitos críticos, aplicação de APQP, PPAP, FMEA-VDA e Plano de Controle, condução de simulações (FEA) e métodos estatísticos, testes funcionais/dimensionais e industrialização de novos produtos com foco em DFM/DFA, redução de custos e manufaturabilidade.",
    "career.r2Period": "Janeiro de 2022 – Fevereiro de 2026 (4 anos 2 meses) • Iperó, SP",
    "career.r2Role": "Supervisor de Ferramentaria",
    "career.r2Desc": "Gestão integrada das áreas de ferramentaria e desenvolvimento de produtos. Planejamento e coordenação da fabricação, manutenção e melhoria de ferramentas de estampagem progressiva, dispositivos e equipamentos especiais. Gestão de equipes multidisciplinares, controle de cronogramas, indicadores (KPIs) e orçamento, aplicação de Lean Manufacturing/PDCA e aumento da vida útil de ferramentas.",
    "career.r3Period": "Janeiro de 2019 – Janeiro de 2022 (3 anos 1 mês) • Iperó, SP",
    "career.r3Role": "Supervisor de Desenvolvimento de Produto",
    "career.r3Org": "Progeral Clamps (14 anos 1 mês na empresa)",
    "career.r3Desc": "Gestão da equipe de desenvolvimento de produtos, definindo prioridades, metas e indicadores de desempenho. Coordenação de projetos estratégicos de inovação, análises de viabilidade técnica, econômica e produtiva para novos investimentos, negociação técnica com clientes/fornecedores e liderança de iniciativas de redução de custos e robustez de produto.",
    "career.r4Period": "Janeiro de 2014 – Janeiro de 2019 (5 anos 1 mês) • Iperó, SP",
    "career.r4Role": "Analista de Desenvolvimento de Produtos",
    "career.r4Desc": "Desenvolvimento de novos produtos desde a concepção até a aprovação final para produção seriada. Aplicação de APQP, FMEA, CEP e ferramentas da qualidade, condução de testes funcionais, validações dimensionais e otimização de processos produtivos.",
    "career.r5Period": "Janeiro de 2008 – Janeiro de 2014 (6 anos 2 meses) • Iperó, SP",
    "career.r5Role": "Assistente de Engenheiro (2011–2014) & Operador Técnico (2008–2011)",
    "career.r5Desc": "Elaboração de desenhos técnicos, especificações e documentação de engenharia; participação ativa em tryouts de ferramentas, validação de protótipos e liberação de equipamentos. Experiência prévia na operação e regulagem de equipamentos de estampagem e conformação metálica, inspeções dimensionais e redução de refugos.",
    "career.r6Period": "Janeiro de 2004 – Dezembro de 2004 (1 ano) • Boituva, SP",
    "career.r6Role": "Aprendiz Eletricista",
    "career.r6Desc": "Início da trajetória industrial em atividades de manutenção elétrica vinculadas ao Curso de Aprendizagem Industrial do SENAI São Paulo.",

    "lab.tag": "Cases de Sucesso & Laboratórios Digitais",
    "lab.title": "Projetos de Engenharia, Simulação & Pesquisa Aplicada",
    "lab.subtitle": "Cases estruturados de modelagem matemática, otimização de ferramental e engenharia aplicada — cada um com laboratório ou painel interativo em nova janela.",
    "lab.cardCat": "Case de Sucesso • Física Aplicada & Modelagem Polar",
    "lab.cardTitle": "Laboratório Digital: Força Radial em Aço Mola 51CrV4",
    "lab.cardDesc": "Modelagem matemática por séries harmônicas polares aplicada ao comportamento mecânico de abraçadeiras de aço mola 51CrV4, convertida em simulador interativo.",
    "lab.cardSummary": "Aplicação da equação harmônica F₁(θ) = A₀ + A₁·cos(θ) + B₁·sen(θ) + A₂·cos(2θ) combinada a equações de Lamé, contato de Hertz, Lei de Hooke e ensaios em estufa a 60°C.",
    "lab.cardObjective": "Prever e visualizar em tempo real a distribuição angular de força radial, picos (F_máx), vales (F_mín) e ovalização da abraçadeira a partir dos parâmetros harmônicos.",
    "lab.cardResult": "Equação nominal calibrada com variação entre 205,0 N e 283,0 N (ΔF = 78,0 N) e laboratório digital com gráfico polar HiDPI e perfil angular 0°–360°.",
    "lab.cardMetric": "Aço Mola 51CrV4 • Estufa 60°C • Lamé, Hertz & Harmônicos",
    "lab.openNewWinBtn": "Abrir Laboratório em Nova Janela",

    "cases.c1Cat": "Física Aplicada & FEA",
    "cases.c1Title": "Abraçadeiras 51CrV4, Teoria de Hertz/Lamé & Snap-Fits em FEA",
    "cases.c1Desc": "Execução de ensaios empíricos de fluência e relaxamento de tensão em estufa a 60°C, combinados com análise de tensão equivalente de von Mises no ANSYS, Abaqus e SolidWorks Simulation para validação de fechos tipo snap-fit e componentes de fixação.",
    "cases.c1Metric": "Previsão de Relaxamento Térmico • Validação Virtual Snap-Fit (ANSYS / Abaqus)",
    "cases.c2Cat": "Algoritmos & ERP Industrial",
    "cases.c2Title": "Otimização de Matéria-Prima no TOTVS Protheus & Dashboards",
    "cases.c2Desc": "Desenvolvimento de algoritmos de cálculo de perda de material integrados ao sistema TOTVS Protheus para maximizar o rendimento bruto de barras de usinagem, além de painéis interativos em Python, GeoGebra e HTML/JS (Chart.js).",
    "cases.c2Metric": "Redução de Perda de Barra no ERP • Automação de Relatórios (Python / Chart.js)",
    "cases.c3Cat": "Estruturas, USM & Impressão 3D",
    "cases.c3Title": "Absorção Radial em FDM, Deflexão Estrutural & Usinagem Ultrassônica",
    "cases.c3Desc": "Criação de geometrias pino-furo com absorção radial para compensar tolerâncias de impressão 3D (PLA), pesquisa em Design for Disassembly (DfD), cálculo de ancoragem/deflexão em perfil \"U\" de aço, inspeção de gás e pesquisa em Usinagem Ultrassônica (USM).",
    "cases.c3Metric": "Compensação Dimensional FDM • Eco-Design (DfD) • Cálculo Estrutural & USM",
    "cases.labelSummary": "Resumo:",
    "cases.labelObjective": "Objetivo:",
    "cases.labelResult": "Resultado:",
    "cases.labelChallenge": "Desafio:",
    "cases.labelSolution": "Solução:",
    "cases.labelImpact": "Resultados:",
    "cases.c4Cat": "Case de Sucesso • Ferramentaria & CEP Digital",
    "cases.c4Title": "Dashboard Executivo & Simulador de Ferramental Bihler GRM-NC",
    "cases.c4Desc": "Painel interativo (HTML5/JS, SVG cinemático e Chart.js) para modelar como variáveis de retífica, geometria e setup 5S impactam a vida útil do ferramental e a dispersão estatística na conformação radial.",
    "cases.c4Challenge": "Traduzir parâmetros técnicos de usinagem e setup da Bihler GRM-NC em leitura executiva de vida útil, estabilidade (CEP) e status de OEE.",
    "cases.c4Solution": "Animação SVG em 4 etapas da dobra radial (punções e mandril), 4 sliders IHM (acabamento Ra, refrigeração, ângulo de corte e 5S), carta de controle CEP (±3σ) e gráfico interativo de Ponto de Equilíbrio (Produção × Custo).",
    "cases.c4Impact": "Simulação de ganho de vida útil de 80.000 para até 240.000 peças (+200%) com redução da dispersão modelada (σ de 12.000 para 2.500).",
    "cases.c4Metric": "Bihler GRM-NC • Carta CEP (±3σ) • Cinemática SVG & OEE",
    "cases.c4Action": "Abrir Simulador Interativo",
    "cases.c5Cat": "Case de Sucesso • Pesquisa & Extensão (14º CONICT 2023)",
    "cases.c5Title": "Engenharia de Produção & Inovação para Agricultura Familiar (IFSP)",
    "cases.c5Desc": "Artigo em coautoria publicado no 14º Congresso de Inovação, Ciência e Tecnologia do IFSP (ISSN 2178-9959), estruturando ações de curricularização da extensão (Edital 2023 PRX_182) para assentamentos rurais em Iperó-SP.",
    "cases.c5Challenge": "Mapear entraves entre produção e comercialização para ~300 famílias assentadas em Iperó-SP (Assentamento Horto Bela Vista), marcadas por falta de gestão, ATER e gargalos logísticos.",
    "cases.c5Solution": "Diagnóstico em 5 dimensões (pesquisa bibliográfica e campo) e programa com 3 eventos de extensão alinhados à Agenda 2030, aplicando Plano de Negócios, SWOT, Pareto, Gantt e Matemática Financeira.",
    "cases.c5Impact": "Publicação científica nos anais do 14º CONICT IFSP 2023 e transferência de ferramentas industriais de planejamento e custos para autonomia produtiva regional.",
    "cases.c5Metric": "14º CONICT IFSP 2023 (Coautor) • Edital PRX_182 • SWOT, Pareto & Gantt",
    "cases.c5Action": "Abrir Painel Interativo do Case",
    "cases.c6Cat": "Case de Sucesso • Qualidade A3, 6M & Capabilidade (NDA)",
    "cases.c6Title": "Resolução A3, Ishikawa 6M & Recuperação de Cpk e Hora-a-Hora",
    "cases.c6Desc": "Aplicação combinada de Relatório A3, 5 Porquês, Ishikawa 6M e validação estatística (n = 125 peças) para alinhamento de tolerâncias de ferramental e eliminação de microparadas crônicas em célula produtiva (dados anonimizados).",
    "cases.c6Challenge": "Reprovações dimensionais abaixo do LIE em conformação de precisão (Cpk inicial -0,66) e microparadas reativas de eletrodo consumindo até 18,2% da meta em turno de 10h.",
    "cases.c6Solution": "5 Porquês revelando desalinhamento entre desenho do punção e produto; recentralização nominal (+50 μm normalizado), Ishikawa 6M e plano preventivo de setup/dressagem.",
    "cases.c6Impact": "Evolução de Cpk de -0,66 para +0,94 (n = 125; σ estável de 0,009 → 0,007 mm) e salto de aderência hora-a-hora de 81,8% para 98,8% (+187 un/turno).",
    "cases.c6Metric": "A3 & 5 Porquês • Cpk -0,66 → +0,94 • 6M & OEE (98,8%)",
    "cases.c6Action": "Abrir Painel Interativo A3 & Cpk",
    "cases.c7Cat": "Case de Sucesso • Norma DIN 3021 & Simulação de Monte Carlo",
    "cases.c7Title": "Análise de Conjunto DIN 3021 & Proposta de Revisão via Monte Carlo",
    "cases.c7Desc": "Estudo estatístico e dimensional do acoplamento mangueira + niple + abraçadeira (Projeto MQB) segundo a norma DIN 3021, modelando interferências de montagem (di − ds), diâmetros Dmin/Dmax e capabilidade (Cpk) por Simulação de Monte Carlo.",
    "cases.c7Summary": "Avaliação dimensional comparando desenho atual e proposta de revisão em características críticas (di, p, Øds, Ødw) e no conjunto montado (Dmin/Dmax) sob distribuição normal.",
    "cases.c7Objective": "Adaptar o sistema à norma DIN 3021, quantificar interferência segura de vedação (-1,55 a -0,45 mm no envelope DWG) e auditar se os limites LIE/LSE atuais suportam as tolerâncias propostas.",
    "cases.c7Result": "Projeção de ganho de capabilidade em Øds (Cpk 1,38 → 2,19) e Dmin (1,65 → 1,85), além de detecção crítica da necessidade de redefinir LIE/LSE para Ødw (22,0 → 22,4 mm; Cpk -0,07 sem revisão) e di (Cpk 0,84).",
    "cases.c7Metric": "Norma DIN 3021 • Monte Carlo (µ, σ, Cpk) • Revisão LIE/LSE",
    "cases.c7Action": "Abrir Simulador DIN 3021 & Monte Carlo",
    "cases.c8Cat": "Case de Sucesso • Lean Manufacturing & Gestão Visual",
    "cases.c8Title": "Gestão Visual Kanban, Drum-Buffer-Rope & Estabilização de Lead Time",
    "cases.c8Desc": "Implementação de metodologia Kanban integrada ao método Drum-Buffer-Rope (TOC): controle visual por cartões em quadro físico (Compre Aqui / Em Usinagem), sincronização pelo posto-gargalo (Drum) e limite de WIP com a Regra das 10 Caixas.",
    "cases.c8Challenge": "Falta de linearidade no fluxo de usinagens, acúmulo desordenado de trabalho em processo (WIP) e prazo de entrega altamente disperso em 2023 (média de 38 dias por peça com desvio padrão crítico de 106 dias).",
    "cases.c8Solution": "Estruturação de fluxo puxado Drum-Buffer-Rope com cartões padronizados (Projetos P, Reposições R, Manutenção M), sinalização por Farol, caixas de buffer identificadas por cartão e teto rígido de 10 caixas no chão de fábrica.",
    "cases.c8Impact": "Redução do prazo médio de entrega de peças de 38 para 14 dias (-63,2%) e queda drástica do desvio padrão de 106 para 5 dias (-95,3% de variabilidade), alcançando previsibilidade e fluxo linear contínuo entre 2023 e 2025.",
    "cases.c8Metric": "Quadro Kanban & DBR • Prazo 38d → 14d (µ) • Desvio 106d → 5d (σ) • WIP Cap 10",
    "cases.c8Action": "Abrir Painel Animado Kanban & DBR",
    "cases.c9Cat": "Treinamento Técnico & Engenharia de Ferramental Bihler",
    "cases.c9Title": "Manutenção de Ferramentas de Estampagem, Cinemática Bihler & Física do Corte",
    "cases.c9Desc": "Treinamento técnico avançado para ferramentaria e engenharia de processos focado na cinemática de prensas Bihler (curso excêntrico, curva de força FN a 30° antes do PMI e penetração limite de 0,5 mm), otimização de esforços de corte por escalonamento e alívio angular, folgas Oehler e prevenção de retorno de retalho com dentes trava-cavaco a 6,5°.",
    "cases.c9Challenge": "Quebras prematuras de punções por penetração excessiva na matriz (>0,5 mm), risco constante de sobrecarga da prensa (4,68 t com 3 punções simultâneos em prensa de 4,0 t), desgaste severo por folgas inadequadas e paradas de linha por sucção de cavaco (slug pulling).",
    "cases.c9Solution": "Padronização geométrica e operacional Bihler: ajuste fino de penetração máxima de 0,5 mm no PMI (90°), escalonamento temporal de punções em ⅓·e (queda de carga para 1,56 t) ou alívio angular em 10°–15° (-48% a -60%), folga de corte de 8%e e usinagem de dente trava-cavaco a 6,5° na matriz com avanço do pino guia em 2e.",
    "cases.c9Impact": "Eliminação de quebras por sobrecarga mecânica na prensa de 4t (trabalho seguro a 39% da capacidade nominal), aumento substancial da vida útil de punções e matrizes, corte limpo com fratura uniforme e erradicação de paradas de máquina por arraste de retalhos.",
    "cases.c9Metric": "Cinemática Bihler • PMI 90° (Penetr. ≤0,5mm) • Escalonamento ⅓e (-60% Carga) • Trava-Cavaco 6,5°",
    "cases.c9Action": "Abrir Simulador Interativo do Treinamento",
    "cases.c10Cat": "People Analytics & Gestão por Competências",
    "cases.c10Title": "Matriz de Versatilidade, Matriz 9-Box & Avaliação de Desempenho na Ferramentaria",
    "cases.c10Desc": "Estruturação completa de People Analytics e liderança técnica para 27 colaboradores de ferramentaria: mapeamento de 38 competências técnicas em 4 níveis (atingimento de 84,5% no Desenvolvimento e 60,0% no Apoio), cruzamento 2D em Matriz 9-Box (Técnico × Comportamental), simulador de Persona com cálculo em tempo real e desdobramento em Planos de Desenvolvimento Individual (PDI) com ciclos de 45d, 90d e anual.",
    "cases.c10Challenge": "Falta de mapeamento formal de polivalência nas máquinas operatrizes, ausência de critérios objetivos para promoção e feedback, e necessidade de elevar a disciplina operacional (rotinas 5S e apontamento de ordens no Kanban de usinagem).",
    "cases.c10Solution": "Implementação de Matriz de Versatilidade com 4 níveis de qualificação (Treinamento a Multiplicador), avaliação 360° em 13 pilares comportamentais, gráfico de dispersão 9-Box com simulador de Persona interativo e análise 80/20 via Pareto de Gaps para feedback coletivo construtivo.",
    "cases.c10Impact": "Atingimento de 84,5% das operações no Desenvolvimento e 60,0% no Apoio, redução de 54% nas falhas de disciplina/5S através de PDIs focados, transparência total nos critérios de efetivação (45/90 dias) e formação de multiplicadores técnicos internos.",
    "cases.c10Metric": "Matriz 9-Box • Versatilidade 84,5% (Dev) / 60,0% (Apoio) • Simulador Persona • PDI 45d/90d",
    "cases.c10Action": "Abrir Painel de Gestão & Simulador de Persona",

    "education.tag": "Formação Acadêmica & Certificações",
    "education.title": "Base acadêmica e técnica nas melhores instituições públicas de São Paulo",
    "education.bachelorBadge": "Bacharelado",
    "education.e1Title": "Engenharia de Produção",
    "education.e1Detail": "Gestão da produção, engenharia do produto, pesquisa operacional, simulação, qualidade e sustentabilidade (Eco-design / DfD).",
    "education.techBadge": "Graduação Tecnológica",
    "education.e2Title": "Tecnólogo em Automação Industrial",
    "education.e2Detail": "Sistemas automatizados, controle de processos industriais, instrumentação e integração de manufatura.",
    "education.e3Title": "Mecânico de Manutenção (Manutenção Mecânica)",
    "education.e3Detail": "Manutenção mecânica industrial, ajustagem, elementos de máquinas e confiabilidade de equipamentos.",
    "education.e4Title": "Técnico em Mecatrônica",
    "education.e4Detail": "Mecatrônica, Robótica e Engenharia de Controle e Automação.",
    "education.e5Title": "Eletricista Aprendiz (Manutenção Elétrica)",
    "education.e5Detail": "Formação de aprendizagem industrial em comandos elétricos, instalações e manutenção industrial.",
    "education.certYear": "Qualificações",
    "education.certBadge": "Certificações",
    "education.e6Title": "Certificações Especializadas",
    "education.e6Inst": "Qualidade, Projeto de Ferramentas & Liderança",
    "education.e6Detail": "• Tool Design<br>• FMEA - Failure Mode and Effects Analysis & FMEA - VDA<br>• Coordenador de Melhoria Contínua - Lean Manufacturing<br>• Comunicação e Oratória",

    "projects.tag": "Criatividade, Design & Vida Hands-On",
    "projects.title": "Além da Engenharia: Design Visual, Garagem & Cultura Maker",
    "projects.subtitle": "O rigor analítico divide espaço com o apreço estético, a paixão pela mecânica clássica e a curiosidade intelectual constante.",
    "projects.p1Cat": "Design Gráfico & Vestuário",
    "projects.p1Title": "Identidade Visual, Estamparia & Marca FLVR DROP",
    "projects.p1Desc": "Criação de identidades visuais, logotipos e estampas autorais, incluindo o projeto da marca FLVR DROP e desenvolvimentos gráficos comemorativos personalizados.",
    "projects.p1Metric": "FLVR DROP • Branding • Design de Vestuário",
    "projects.p2Cat": "Mecânica Automotiva na Garagem",
    "projects.p2Title": "Projeto Clássico VW Fusca & Manutenção Hands-On",
    "projects.p2Desc": "Entusiasta de colocar a mão na massa na própria garagem: cuidando tanto da manutenção de um Honda HR-V quanto da restauração e ajuste mecânico de um clássico Volkswagen Fusca (de reparos de carburador a emblemas e detalhes estéticos).",
    "projects.p2Metric": "VW Fusca Clássico • Carburação & Mecânica Prática",
    "projects.p3Cat": "Energia, Repertório & Exploração Técnica",
    "projects.p3Title": "Sustentabilidade, Literatura & Imersões Industriais",
    "projects.p3Desc": "Leitor atento a debates sobre transição energética, clima e sociedade (como \"O Mundo Sem Fim\") e admirador de obras clássicas como J.R.R. Tolkien. Roteiros que conectam cultura, artesanato e benchmarking técnico (Tríplice Fronteira, São Bernardo do Campo e Expo Revestir).",
    "projects.p3Metric": "O Mundo Sem Fim • Expo Revestir • Benchmarking Técnico",

    "contact.tag": "Contato Direto & Networking",
    "contact.title": "Vamos conversar sobre engenharia, desenvolvimento de produtos ou novos projetos?",
    "contact.lead": "Disponível em Boituva, Iperó e região (SP) ou remotamente para projetos de engenharia de produto, ferramentaria, melhoria contínua, simulações FEA e conexões estratégicas.",
    "contact.phoneTitle": "Telefone / WhatsApp",
    "contact.vcardTitle": "Salvar Contato na Agenda (vCard .vcf)",
    "contact.vcardSub": "Inclui telefone (15) 98135-2882, e-mail e LinkedIn",
    "contact.formTitle": "Enviar Mensagem Direta",
    "contact.formSub": "Preencha abaixo para enviar via WhatsApp ou copiar e abrir o LinkedIn.",
    "contact.labelName": "Seu Nome",
    "contact.labelOrg": "Empresa / Organização",
    "contact.labelTopic": "Assunto",
    "contact.opt1": "Desenvolvimento de Produtos & Processos",
    "contact.opt2": "Gestão de Ferramentaria & Estampagem",
    "contact.opt3": "Simulação FEA, Cálculos & Projetos Especiais",
    "contact.opt4": "Oportunidade Profissional / Networking",
    "contact.labelMsg": "Mensagem",
    "contact.btnSubmit": "Copiar & Abrir WhatsApp",
    "contact.btnLinkedIn": "Copiar & Abrir LinkedIn",

    "footer.tagline": "Boituva / SP • Desenvolvimento de Produtos e Processos | Engenharia | Ferramentaria | Simulação FEA.",
    "footer.backTop": "Voltar ao topo ↑",
    "modal.subtitle": "Escaneie para abrir o perfil oficial no LinkedIn",
    "modal.copyLink": "Copiar Link",
    "modal.openProfile": "Abrir LinkedIn",
    "modal.qrOffline": "QR Code indisponível offline."
  },

  en: {
    "nav.credential": "Product Engineering & Tooling • Analytical Creator",
    "nav.about": "Profile",
    "nav.expertise": "Pillars",
    "nav.career": "Experience",
    "nav.cases": "FEA Lab & Cases",
    "nav.education": "Education",
    "nav.maker": "Maker Side",
    "nav.contact": "Contact",

    "hero.badge": "Product & Process Development • Tooling Management • FEA Simulation",
    "hero.title": "Combining <em>Product Engineering</em>, <em>Tooling Management</em>, and <em>Advanced Simulation</em> to turn physical challenges into real solutions.",
    "hero.lead": "Over 20 years of industrial track record (Ferramentaria Nacional and Progeral Clamps), leading the full lifecycle of new products and stamping tools: from concept, structural calculation, FEA (ANSYS/Abaqus/SolidWorks), and APQP/FMEA to industrialization, Lean Manufacturing, and shop-floor digital automation.",
    "hero.ctaPrimary": "Connect on LinkedIn",
    "hero.ctaDownloadCv": "Download Resume (PDF)",
    "hero.ctaQr": "QR Code",
    "hero.affiliationsLabel": "Core Specialties & Engineering Stack:",
    "hero.location": "Boituva / Iperó — SP, Brazil",
    "hero.archetypeTag": "Analytical Creator",
    "hero.cardHeadline": "Product & Process Development | Engineering | APQP & Scrum | Lean Manufacturing | Tooling Management | FEA Simulations",
    "hero.cardRole1Title": "Ferramentaria Nacional & Progeral Clamps",
    "hero.cardRole1Sub": "19+ years in Product Development, Tooling & Metal Stamping",
    "hero.cardRole2Title": "Strong Multidisciplinary Education",
    "hero.cardRole2Sub": "Industrial Eng. (IFSP) • Automation (FATEC-SP) • ETEC & SENAI",

    "metrics.m1Label": "Industrial Trajectory",
    "metrics.m1Desc": "Consistent growth from shop-floor operations (SENAI) to R&D and Tooling Supervision.",
    "metrics.m2Label": "Leadership & Supervision",
    "metrics.m2Desc": "Integrated management of cross-functional teams across engineering, tooling, maintenance, and product.",
    "metrics.m3Label": "Engineering Rigor",
    "metrics.m3Desc": "FMEA-VDA, Tool Design, structural FEA simulations (ANSYS/Abaqus/SolidWorks), and empirical testing.",
    "metrics.m4Label": "Innovation & Eco-Design",
    "metrics.m4Desc": "Material yield algorithms in TOTVS Protheus, Python/JS dashboards, 3D Printing (FDM), and Circular Economy (DfD).",

    "about.tag": "Professional Profile • The Analytical Creator",
    "about.title": "Mathematical rigor, hands-on tooling experience, and modern product vision",
    "about.p1": "A multidisciplinary professional combining more than two decades of hands-on experience in the metalworking and polymer industries with the analytical rigor of Production Engineering (IFSP Boituva) and Industrial Automation (FATEC-SP).",
    "about.p2": "I built my career organically from the ground up: starting as an Apprentice Electrician (SENAI) and Metal Stamping Technician, advancing to Engineering Assistant, Product Development Analyst, and Product Development Supervisor at Progeral Clamps (14 years), and subsequently Tooling Supervisor and Product Development Specialist at Ferramentaria Nacional.",
    "about.p3": "This shop-floor foundation enables me to engineer products and tools with maximum manufacturability (DFM/DFA), applying advanced analytical calculations (Lamé equations, Hertzian contact, polar harmonic series), Finite Element Analysis (ANSYS, Abaqus, SolidWorks), quality frameworks (APQP, FMEA-VDA, Lean, Scrum), and custom digital tools (TOTVS Protheus algorithms and Python/Chart.js dashboards).",
    "about.skillsTitle": "Competencies & Certifications",
    "about.quote": "\"A multidisciplinary profile uniting mathematical engineering rigor with maker creativity—translating physical problems into digital solutions and tangible products.\"",

    "expertise.tag": "Core Pillars",
    "expertise.title": "Four integrated fronts of technical delivery and management",
    "expertise.subtitle": "From mathematical conception and FEA simulation to stamping tool manufacturing and serial industrialization.",
    "expertise.p1Title": "Product Development, APQP & Tooling Management",
    "expertise.p1Desc": "Technical coordination of the full lifecycle of new products and stamping/forming tools, from technical-economic feasibility studies to tool tryout and serial production sign-off.",
    "expertise.p1Item1": "Rigorous application of APQP, PPAP, FMEA-VDA, SPC, PDCA, and Control Plans",
    "expertise.p1Item2": "Manufacturing and maintenance management of stamping dies, jigs, and special equipment",
    "expertise.p1Item3": "Technical interface across customers, suppliers, quality, purchasing, and production",
    "expertise.p2Title": "Numerical Simulation (FEA), Calculations & Materials",
    "expertise.p2Desc": "Advanced mathematical modeling and Finite Element Analysis for structural validation, cost reduction, robustness improvement, and failure prediction.",
    "expertise.p2Item1": "Structural and von Mises stress analysis in ANSYS, Abaqus, and SolidWorks Simulation",
    "expertise.p2Item2": "Empirical creep and thermal stress relaxation testing (60°C) on 51CrV4 spring steel",
    "expertise.p2Item3": "Lamé equations, Hertz contact theory, Hooke's Law, and polar harmonic force series",
    "expertise.p3Title": "Lean Manufacturing, ERP & Digital Automation",
    "expertise.p3Desc": "Combining Industrial Automation and Production Engineering to optimize shop-floor operations through algorithms, KPIs, and continuous improvement.",
    "expertise.p3Item1": "Material loss calculation algorithms for TOTVS Protheus ERP (bar machining yield)",
    "expertise.p3Item2": "Interactive engineering dashboards built with Python, GeoGebra, and HTML/JS (Chart.js)",
    "expertise.p3Item3": "Lean Manufacturing leadership, scrap reduction, and operational efficiency gains",
    "expertise.p4Title": "3D Prototyping, Sustainability & Circular Economy",
    "expertise.p4Desc": "Rapid additive manufacturing and applied product lifecycle research, uniting assembly functionality with environmental responsibility.",
    "expertise.p4Item1": "PLA (FDM) prototyping with radial-absorption pin/hole geometries for tolerance compensation",
    "expertise.p4Item2": "Academic research in Design for Disassembly (DfD) and sustainable polymer disposal",
    "expertise.p4Item3": "Functional enclosure design for microcontrollers and custom electronic devices",

    "career.tag": "Full Professional Track Record",
    "career.title": "22+ years building solutions in industry",
    "career.subtitle": "Complete history from LinkedIn: from technical shop-floor operations to tooling supervision and product development engineering.",
    "career.filterAll": "All Roles (2004 – Present)",
    "career.filterFn": "Ferramentaria Nacional (4y 11m)",
    "career.filterProgeral": "Progeral Clamps (14y 1m)",
    "career.filterLead": "Leadership & Supervision",
    "career.badgeCurrent": "Current • Product Engineering",
    "career.badgeSup": "Supervision & Management",
    "career.badgeSupRd": "R&D Supervision",
    "career.badgeProdEng": "Product Engineering",
    "career.badgeTryout": "Technical Base & Tryout",
    "career.badgeEarly": "Industrial Start",
    "career.r1Period": "February 2026 – Present • Iperó, SP",
    "career.r1Role": "Product Development Specialist",
    "career.r1Desc": "Technical leadership in innovation projects, technical/economic feasibility studies, and cross-functional coordination (engineering, production, quality, purchasing, and suppliers). Definition of critical requirements, application of APQP, PPAP, FMEA-VDA, and Control Plans, FEA simulations and statistical methods, functional/dimensional validation, and DFM/DFA-driven industrialization.",
    "career.r2Period": "January 2022 – February 2026 (4y 2m) • Iperó, SP",
    "career.r2Role": "Tooling Supervisor (Supervisor de Ferramentaria)",
    "career.r2Desc": "Integrated management of tooling and product development departments. Planning and coordination of manufacturing, maintenance, and improvement of progressive stamping dies, fixtures, and special equipment. Multidisciplinary team management, schedule/KPI/budget control, Lean Manufacturing/PDCA deployment, and tool life extension.",
    "career.r3Period": "January 2019 – January 2022 (3y 1m) • Iperó, SP",
    "career.r3Role": "Product Development Supervisor",
    "career.r3Org": "Progeral Clamps (14 years 1 month at the company)",
    "career.r3Desc": "Managed the product development team, setting priorities, targets, and KPIs. Coordinated strategic innovation and new product projects, technical/economic feasibility analyses for new investments, technical negotiation with customers and suppliers, and cost-reduction initiatives.",
    "career.r4Period": "January 2014 – January 2019 (5y 1m) • Iperó, SP",
    "career.r4Role": "Product Development Analyst",
    "career.r4Desc": "End-to-end new product development from concept to serial production approval. Applied APQP, FMEA, SPC, and quality tools; conducted functional tests, dimensional validations, and manufacturing process optimization.",
    "career.r5Period": "January 2008 – January 2014 (6y 2m) • Iperó, SP",
    "career.r5Role": "Engineering Assistant (2011–2014) & Technical Operator (2008–2011)",
    "career.r5Desc": "Created engineering drawings, technical specifications, and documentation; participated in tool tryouts, prototype validation, and equipment sign-off. Previously operated and set up metal stamping and forming equipment, performing dimensional inspections and scrap reduction.",
    "career.r6Period": "January 2004 – December 2004 (1 year) • Boituva, SP",
    "career.r6Role": "Apprentice Electrician",
    "career.r6Desc": "Started industrial career in electrical maintenance activities tied to the SENAI Industrial Apprenticeship Program.",

    "lab.tag": "Success Cases & Digital Labs",
    "lab.title": "Engineering Projects, Simulation & Applied Research",
    "lab.subtitle": "Structured cases spanning mathematical modeling, tooling optimization, and applied engineering — each with an interactive lab or dashboard in a new window.",
    "lab.cardCat": "Success Case • Applied Physics & Polar Modeling",
    "lab.cardTitle": "Digital Lab: Radial Force in 51CrV4 Spring Steel",
    "lab.cardDesc": "Polar harmonic series mathematical modeling applied to the mechanical behavior of 51CrV4 spring steel clamps, converted into an interactive simulator.",
    "lab.cardSummary": "Harmonic equation F₁(θ) = A₀ + A₁·cos(θ) + B₁·sin(θ) + A₂·cos(2θ) combined with Lamé equations, Hertz contact theory, Hooke's law, and 60°C thermal chamber tests.",
    "lab.cardObjective": "Predict and visualize in real time the angular radial force distribution, peaks (F_max), valleys (F_min), and clamp ovalization from harmonic parameters.",
    "lab.cardResult": "Calibrated nominal equation ranging from 205.0 N to 283.0 N (ΔF = 78.0 N) and a full digital lab featuring a HiDPI polar plot and 0°–360° angular profile.",
    "lab.cardMetric": "51CrV4 Spring Steel • 60°C Chamber • Lamé, Hertz & Harmonics",
    "lab.openNewWinBtn": "Open Lab in New Window",

    "cases.c1Cat": "Applied Physics & FEA",
    "cases.c1Title": "51CrV4 Clamps, Hertz/Lamé Theory & Snap-Fits in FEA",
    "cases.c1Desc": "Empirical creep and stress relaxation tests in a 60°C thermal chamber combined with von Mises stress analysis in ANSYS, Abaqus, and SolidWorks Simulation to validate snap-fit joints and fastening components.",
    "cases.c1Metric": "Thermal Relaxation Prediction • Virtual Snap-Fit Validation (ANSYS / Abaqus)",
    "cases.c2Cat": "Algorithms & Industrial ERP",
    "cases.c2Title": "Raw Material Optimization in TOTVS Protheus & Dashboards",
    "cases.c2Desc": "Developed material loss calculation algorithms integrated into the TOTVS Protheus ERP to maximize bar machining yield, alongside interactive dashboards in Python, GeoGebra, and HTML/JS (Chart.js).",
    "cases.c2Metric": "Bar Yield Optimization in ERP • Engineering Reporting Automation (Python / Chart.js)",
    "cases.c3Cat": "Structures, USM & 3D Printing",
    "cases.c3Title": "Radial Absorption in FDM, Structural Deflection & Ultrasonic Machining",
    "cases.c3Desc": "Designed radial-absorption pin/hole geometries to compensate for 3D printing (PLA) tolerances, conducted Design for Disassembly (DfD) research, structural deflection calculations for steel U-profiles, gas pipeline inspection, and Ultrasonic Machining (USM) research.",
    "cases.c3Metric": "FDM Tolerance Compensation • Eco-Design (DfD) • Structural & USM Research",
    "cases.labelSummary": "Summary:",
    "cases.labelObjective": "Objective:",
    "cases.labelResult": "Result:",
    "cases.labelChallenge": "Challenge:",
    "cases.labelSolution": "Solution:",
    "cases.labelImpact": "Results:",
    "cases.c4Cat": "Success Case • Tooling & Digital SPC",
    "cases.c4Title": "Executive Engineering Dashboard & Bihler GRM-NC Tooling Simulator",
    "cases.c4Desc": "Interactive web dashboard (HTML5/JS, kinematic SVG, and Chart.js) modeling how grinding finish, cooling, cutting angle, and 5S setup impact tool life and statistical dispersion in radial forming.",
    "cases.c4Challenge": "Translate Bihler GRM-NC machining and setup variables into an executive view of tool life, process stability (SPC), and OEE status.",
    "cases.c4Solution": "4-stage kinematic radial-bending SVG animation (punches and mandrel), 4 HMI sliders (Ra finish, cooling, cutting angle, and 5S), live SPC chart (15 batches, ±3σ), and interactive Break-Even chart (Production vs. Cost).",
    "cases.c4Impact": "Modeled tool-life projection from 80,000 up to 240,000 parts (+200%) alongside reduced modeled dispersion (σ from 12,000 down to 2,500).",
    "cases.c4Metric": "Bihler GRM-NC • SPC Chart (±3σ) • SVG Kinematics & OEE",
    "cases.c4Action": "Launch Interactive Simulator",
    "cases.c5Cat": "Success Case • Research & Extension (14th CONICT 2023)",
    "cases.c5Title": "Production Engineering & Innovation for Family Farming (IFSP)",
    "cases.c5Desc": "Co-authored paper published at the 14th IFSP Innovation, Science & Technology Congress (ISSN 2178-9959), structuring extension curriculum actions (Call 2023 PRX_182) for rural settlements in Iperó-SP.",
    "cases.c5Challenge": "Map production and commercialization bottlenecks for ~300 settled families in Iperó-SP (Assentamento Horto Bela Vista) facing management gaps, lack of technical assistance, and logistics constraints.",
    "cases.c5Solution": "5-dimension diagnosis (literature + field interview) and a 3-event extension program aligned with UN Agenda 2030, applying Business Plans, SWOT, Pareto, Gantt, and Financial Mathematics.",
    "cases.c5Impact": "Peer-reviewed publication in the 14th CONICT IFSP 2023 proceedings and transfer of industrial planning and cost-control tools for regional productive autonomy.",
    "cases.c5Metric": "14th CONICT IFSP 2023 (Co-author) • PRX_182 • SWOT, Pareto & Gantt",
    "cases.c5Action": "Open Interactive Case Dashboard",
    "cases.c6Cat": "Success Case • A3 Quality, 6M & Process Capability (NDA)",
    "cases.c6Title": "A3 Problem Solving, 6M Ishikawa & Cpk / Hourly Stability Recovery",
    "cases.c6Desc": "Combined application of A3 Reporting, 5 Whys, 6M Ishikawa, and statistical capability validation (n = 125 pcs) to align tooling tolerances and eliminate chronic micro-stops in an industrial cell (anonymized data).",
    "cases.c6Challenge": "Dimensional rejects below LSL in precision forming (initial Cpk -0.66) and reactive electrode micro-stops consuming up to 18.2% of a 10-hour shift target.",
    "cases.c6Solution": "5 Whys uncovering tooling-to-product tolerance misalignment; nominal punch re-centering (+50 μm normalized), 6M Ishikawa root-cause tree, and preventive dressing/setup schedule.",
    "cases.c6Impact": "Cpk improved from -0.66 to +0.94 (n = 125; stable σ 0.009 → 0.007 mm) and hourly schedule adherence jumped from 81.8% to 98.8% (+187 units/shift).",
    "cases.c6Metric": "A3 & 5 Whys • Cpk -0.66 → +0.94 • 6M & OEE (98.8%)",
    "cases.c6Action": "Open Interactive A3 & Cpk Dashboard",
    "cases.c7Cat": "Success Case • DIN 3021 Standard & Monte Carlo Simulation",
    "cases.c7Title": "DIN 3021 Assembly Stack-Up Analysis & Monte Carlo Revision Proposal",
    "cases.c7Desc": "Statistical and dimensional study of the hose + nipple + clamp assembly (MQB Project) under DIN 3021, modeling assembly interference (di − ds), mounting diameters Dmin/Dmax, and process capability (Cpk) via Monte Carlo simulation.",
    "cases.c7Summary": "Dimensional evaluation comparing current drawing vs. revision proposal across critical hose/nipple features (di, p, Øds, Ødw) and assembled diameters (Dmin/Dmax) under normal distributions.",
    "cases.c7Objective": "Adapt the assembly to DIN 3021, quantify safe sealing interference (-1.55 to -0.45 mm in the DWG envelope), and audit whether existing LSL/USL limits accommodate the proposed tolerances.",
    "cases.c7Result": "Projected capability gains on Øds (Cpk 1.38 → 2.19) and Dmin (1.65 → 1.85), while flagging the mandatory LSL/USL revision for Ødw (22.0 → 22.4 mm; Cpk -0.07 if unrevised) and di (Cpk 0.84).",
    "cases.c7Metric": "DIN 3021 Standard • Monte Carlo (µ, σ, Cpk) • LSL/USL Revision",
    "cases.c7Action": "Open DIN 3021 & Monte Carlo Simulator",
    "cases.c8Cat": "Success Case • Lean Manufacturing & Visual Management",
    "cases.c8Title": "Visual Kanban, Drum-Buffer-Rope & Tooling Lead Time Stabilization",
    "cases.c8Desc": "Implementation of visual Kanban integrated with the Drum-Buffer-Rope (TOC) method: visual physical card board (Compre Aqui / Em Usinagem), bottleneck synchronization (Drum), and strict WIP capping with the 10-Box Rule.",
    "cases.c8Challenge": "Unstable machining flow, disordered work-in-process (WIP) accumulation, and highly dispersed delivery lead times in 2023 (averaging 38 days per part with a critical standard deviation of 106 days).",
    "cases.c8Solution": "Structured Drum-Buffer-Rope pull-flow using standardized cards (Projects P, Replacements R, Maintenance M), visual Farol dispatching, box buffers per card, and a strict 10-box WIP cap.",
    "cases.c8Impact": "Part delivery lead time dropped from 38 to 14 days (-63.2%) with a dramatic standard deviation reduction from 106 to 5 days (-95.3% variability), achieving predictable and continuous linear flow from 2023 to 2025.",
    "cases.c8Metric": "Kanban & DBR • Lead Time 38d → 14d (µ) • Std Dev 106d → 5d (σ) • WIP Cap 10",
    "cases.c8Action": "Open Animated Kanban & DBR Dashboard",
    "cases.c9Cat": "Technical Training & Bihler Tooling Engineering",
    "cases.c9Title": "Stamping Tool Maintenance, Bihler Kinematics & Shear Fracture Physics",
    "cases.c9Desc": "Advanced technical training for toolroom specialists and process engineers focused on Bihler press kinematics (eccentric stroke, nominal force curve FN at 30° before BDC, and strict 0.5 mm penetration ceiling), cutting force reduction via punch staggering and shear angles, Oehler clearances, and slug-pulling prevention using 6.5° retention teeth.",
    "cases.c9Challenge": "Premature punch breakage caused by excessive die penetration (>0.5 mm), recurrent press overload risk (4.68 t peak with 3 simultaneous punches on a 4.0 t press), severe wear from improper clearances, and line stoppages due to slug pulling.",
    "cases.c9Solution": "Standardized Bihler geometry and operating procedures: calibrated die penetration limit of 0.5 mm at BDC (90°), punch staggering at ⅓·e (reducing peak force to 1.56 t) or shear relief angles at 10°–15° (-48% to -60%), 8%e cutting clearance, and wire-EDM 6.5° slug-retention teeth with guide pilot advance of 2e.",
    "cases.c9Impact": "Elimination of press overload trips on the 4t unit (safe operation at 39% nominal capacity), marked increase in punch and die longevity, clean fracture profiles with minimal burr, and total eradication of downtime caused by slug pulling.",
    "cases.c9Metric": "Bihler Kinematics • BDC 90° (Penetr. ≤0.5mm) • ⅓e Staggering (-60% Peak Force) • 6.5° Slug Retention",
    "cases.c9Action": "Open Interactive Training Simulator",
    "cases.c10Cat": "People Analytics & Competency-Based Leadership",
    "cases.c10Title": "Skills Versatility Matrix, 9-Box Performance Evaluation & Industrial Leadership",
    "cases.c10Desc": "End-to-end People Analytics and technical leadership framework for a 27-member toolroom team: mapping 38 technical operations across 4 qualification levels (achieving 84.5% qualification in Development and 60.0% in Tooling Support), 2D 9-Box correlation (Technical × Behavioral), interactive Persona Simulator with real-time positioning, and Individual Development Plans (IDP) structured across 45-day, 90-day, and annual review cycles.",
    "cases.c10Challenge": "Absence of formalized polyvalence tracking across machine tools, subjective promotion/feedback criteria, and the need to strengthen shop-floor operational discipline (5S routines and machining Kanban adherence).",
    "cases.c10Solution": "Implementation of a Skills Versatility Matrix with 4 qualification tiers (Training to Multiplier), 13 behavioral competency rubrics, 9-Box dispersion matrix with interactive Persona Simulator, and 80/20 Pareto gap analysis driving constructive feedback.",
    "cases.c10Impact": "Achieved 84.5% operational qualification in Tooling Development and 60.0% in Support, 54% reduction in discipline/5S gaps through targeted IDPs, full transparency in probation/annual evaluations, and internal mentor development.",
    "cases.c10Metric": "9-Box Matrix • Versatility 84.5% (Dev) / 60.0% (Support) • Persona Simulator • 45d/90d IDP",
    "cases.c10Action": "Open People Analytics & Persona Simulator",

    "education.tag": "Academic Background & Certifications",
    "education.title": "Academic and technical foundation at São Paulo's premier public institutions",
    "education.bachelorBadge": "B.Sc.",
    "education.e1Title": "B.Sc. in Production Engineering (Engenharia de Produção)",
    "education.e1Detail": "Production management, product engineering, operations research, simulation, quality, and sustainability (Eco-design / DfD).",
    "education.techBadge": "Technologist Degree",
    "education.e2Title": "Technologist in Industrial Automation",
    "education.e2Detail": "Automated systems, industrial process control, instrumentation, and manufacturing integration.",
    "education.e3Title": "Maintenance Mechanic (Mechanical Maintenance)",
    "education.e3Detail": "Industrial mechanical maintenance, fitting, machine elements, and equipment reliability.",
    "education.e4Title": "Mechatronics Technician",
    "education.e4Detail": "Mechatronics, Robotics, and Control & Automation Engineering.",
    "education.e5Title": "Apprentice Electrician (Electrical Maintenance)",
    "education.e5Detail": "Industrial apprenticeship in electrical controls, installations, and industrial maintenance.",
    "education.certYear": "Qualifications",
    "education.certBadge": "Certifications",
    "education.e6Title": "Specialized Certifications",
    "education.e6Inst": "Quality, Tool Design & Leadership",
    "education.e6Detail": "• Tool Design<br>• FMEA - Failure Mode and Effects Analysis & FMEA - VDA<br>• Continuous Improvement Coordinator - Lean Manufacturing<br>• Public Speaking & Communication",

    "projects.tag": "Creativity, Design & Hands-On Life",
    "projects.title": "Beyond Engineering: Visual Design, Garage & Maker Culture",
    "projects.subtitle": "Analytical rigor shares space with visual aesthetics, classic automotive mechanics, and constant intellectual curiosity.",
    "projects.p1Cat": "Graphic & Apparel Design",
    "projects.p1Title": "Visual Identity, Streetwear & FLVR DROP Brand",
    "projects.p1Desc": "Creation of visual identities, logos, and custom apparel prints, including the FLVR DROP brand project and commemorative graphic designs.",
    "projects.p1Metric": "FLVR DROP • Branding • Apparel Design",
    "projects.p2Cat": "Hands-On Garage Mechanics",
    "projects.p2Title": "Classic VW Beetle Project & Hands-On Maintenance",
    "projects.p2Desc": "Passionate about working with my own hands in the garage: maintaining both a modern Honda HR-V and restoring/tuning a classic Volkswagen Beetle (from carburetor repairs to emblems and aesthetic details).",
    "projects.p2Metric": "Classic VW Beetle • Carburetor Tuning & Mechanics",
    "projects.p3Cat": "Energy, Culture & Technical Exploration",
    "projects.p3Title": "Sustainability, Literature & Industrial Benchmarking",
    "projects.p3Desc": "Avid reader on energy transition, climate, and society (such as \"World Without End\") and admirer of classic literature like J.R.R. Tolkien. Trips connecting culture, craftsmanship, and industrial benchmarking (Triple Frontier, São Bernardo do Campo, and Expo Revestir).",
    "projects.p3Metric": "World Without End • Expo Revestir • Technical Benchmarking",

    "contact.tag": "Direct Contact & Networking",
    "contact.title": "Let's talk about engineering, product development, or new projects?",
    "contact.lead": "Available in Boituva, Iperó, and the São Paulo region or remotely for product engineering, tooling management, continuous improvement, FEA simulations, and strategic connections.",
    "contact.phoneTitle": "Phone / WhatsApp",
    "contact.vcardTitle": "Save Contact Card (vCard .vcf)",
    "contact.vcardSub": "Includes phone +55 (15) 98135-2882, email, and LinkedIn",
    "contact.formTitle": "Send a Direct Message",
    "contact.formSub": "Fill out below to send via WhatsApp or copy and open LinkedIn.",
    "contact.labelName": "Your Name",
    "contact.labelOrg": "Company / Organization",
    "contact.labelTopic": "Subject",
    "contact.opt1": "Product & Process Development",
    "contact.opt2": "Tooling Management & Metal Stamping",
    "contact.opt3": "FEA Simulation, Calculations & Special Projects",
    "contact.opt4": "Career Opportunity / Networking",
    "contact.labelMsg": "Message",
    "contact.btnSubmit": "Copy & Open WhatsApp",
    "contact.btnLinkedIn": "Copy & Open LinkedIn",

    "footer.tagline": "Boituva / SP • Product & Process Development | Engineering | Tooling | FEA Simulation.",
    "footer.backTop": "Back to top ↑",
    "modal.subtitle": "Scan to open official LinkedIn profile",
    "modal.copyLink": "Copy Link",
    "modal.openProfile": "Open LinkedIn",
    "modal.qrOffline": "QR Code unavailable offline."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  /* ========================================================================
     1. Theme Toggle (Dark / Light — Paleta 2: CAE / von Mises Spectrum)
     ======================================================================== */
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("rv_theme") || "dark";
  htmlEl.setAttribute("data-theme", savedTheme);

  /* ========================================================================
     2. Interactive Polar Radial Force Simulator (51CrV4 Clamp Harmonic Equation)
        F1(theta) = A0 + A1*cos(theta) + B1*sin(theta) + A2*cos(2*theta)
        Reads CSS Custom Properties & scales for HiDPI (devicePixelRatio)
     ======================================================================== */
  const canvas = document.getElementById("polarCanvas");
  const ctx = canvas ? canvas.getContext("2d") : null;
  const LOGICAL_SIZE = 420;

  const inputA0 = document.getElementById("paramA0");
  const inputA1 = document.getElementById("paramA1");
  const inputB1 = document.getElementById("paramB1");
  const inputA2 = document.getElementById("paramA2");

  const valA0 = document.getElementById("valA0");
  const valA1 = document.getElementById("valA1");
  const valB1 = document.getElementById("valB1");
  const valA2 = document.getElementById("valA2");

  const statMax = document.getElementById("statMax");
  const statMin = document.getElementById("statMin");
  const statDelta = document.getElementById("statDelta");
  const resetLabBtn = document.getElementById("resetLabBtn");

  function drawPolarPlot() {
    if (!ctx || !canvas) return;

    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== LOGICAL_SIZE * dpr) {
      canvas.width = LOGICAL_SIZE * dpr;
      canvas.height = LOGICAL_SIZE * dpr;
      canvas.style.width = `${LOGICAL_SIZE}px`;
      canvas.style.height = `${LOGICAL_SIZE}px`;
    }

    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const A0 = parseFloat(inputA0.value);
    const A1 = parseFloat(inputA1.value);
    const B1 = parseFloat(inputB1.value);
    const A2 = parseFloat(inputA2.value);

    valA0.textContent = `${A0.toFixed(2)} N`;
    valA1.textContent = `${A1.toFixed(2)} N`;
    valB1.textContent = `${B1.toFixed(2)} N`;
    valA2.textContent = `${A2.toFixed(2)} N`;

    const styles = getComputedStyle(htmlEl);
    const gridColor = styles.getPropertyValue("--border-strong").trim() || "rgba(148, 163, 184, 0.2)";
    const textColor = styles.getPropertyValue("--text-muted").trim() || "#94A3B8";
    const refCircleColor = styles.getPropertyValue("--accent-gold").trim() || "#F59E0B";
    const curveColor = styles.getPropertyValue("--accent-emerald").trim() || "#2DD4BF";
    const fillColor = styles.getPropertyValue("--accent-emerald-soft").trim() || "rgba(45, 212, 191, 0.14)";

    const w = LOGICAL_SIZE;
    const h = LOGICAL_SIZE;
    const cx = w / 2;
    const cy = h / 2;
    const maxRadiusPx = Math.min(cx, cy) - 38;
    const maxForceScale = 420; // N full scale

    ctx.clearRect(0, 0, w, h);

    // Draw concentric force rings
    const rings = [100, 200, 300, 400];
    ctx.lineWidth = 1;
    ctx.font = "11px 'JetBrains Mono', monospace";
    ctx.fillStyle = textColor;

    rings.forEach((forceVal) => {
      const r = (forceVal / maxForceScale) * maxRadiusPx;
      ctx.beginPath();
      ctx.strokeStyle = gridColor;
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillText(`${forceVal}N`, cx + 4, cy - r + 12);
    });

    // Draw angular spokes (every 30 deg)
    for (let deg = 0; deg < 360; deg += 30) {
      const rad = (deg * Math.PI) / 180;
      const xEnd = cx + maxRadiusPx * Math.cos(rad);
      const yEnd = cy - maxRadiusPx * Math.sin(rad);
      ctx.beginPath();
      ctx.strokeStyle = gridColor;
      ctx.moveTo(cx, cy);
      ctx.lineTo(xEnd, yEnd);
      ctx.stroke();

      if (deg % 90 === 0) {
        const lx = cx + (maxRadiusPx + 18) * Math.cos(rad) - 10;
        const ly = cy - (maxRadiusPx + 18) * Math.sin(rad) + 4;
        ctx.fillText(`${deg}°`, lx, ly);
      }
    }

    // Draw reference mean circle A0
    const rMean = Math.max(0, (A0 / maxForceScale) * maxRadiusPx);
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = refCircleColor;
    ctx.lineWidth = 1.6;
    ctx.arc(cx, cy, rMean, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // Compute and draw F1(theta) curve
    let fMax = -Infinity;
    let fMin = Infinity;

    ctx.beginPath();
    for (let deg = 0; deg <= 360; deg += 1) {
      const theta = (deg * Math.PI) / 180;
      const F = A0 + A1 * Math.cos(theta) + B1 * Math.sin(theta) + A2 * Math.cos(2 * theta);
      if (F > fMax) fMax = F;
      if (F < fMin) fMin = F;

      const r = Math.max(0, (F / maxForceScale) * maxRadiusPx);
      const x = cx + r * Math.cos(theta);
      const y = cy - r * Math.sin(theta);

      if (deg === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = curveColor;
    ctx.lineWidth = 2.6;
    ctx.stroke();

    ctx.restore();

    // Update numeric stats
    const delta = fMax - fMin;
    statMax.textContent = `${fMax.toFixed(1)} N`;
    statMin.textContent = `${fMin.toFixed(1)} N`;
    statDelta.textContent = `${delta.toFixed(1)} N`;
  }

  if (inputA0 && inputA1 && inputB1 && inputA2) {
    [inputA0, inputA1, inputB1, inputA2].forEach((inp) => {
      inp.addEventListener("input", drawPolarPlot);
    });

    resetLabBtn.addEventListener("click", () => {
      inputA0.value = "255.75";
      inputA1.value = "1.0";
      inputB1.value = "37.5";
      inputA2.value = "13.25";
      drawPolarPlot();
    });

    drawPolarPlot();
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    htmlEl.setAttribute("data-theme", nextTheme);
    localStorage.setItem("rv_theme", nextTheme);
    drawPolarPlot();
  });

  /* ========================================================================
     3. Language Switcher (PT-BR / EN)
     ======================================================================== */
  let currentLang = localStorage.getItem("rv_lang") || "pt";
  const langToggleBtn = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");
  const langSubLabel = document.getElementById("langSubLabel");

  function applyLanguage(lang) {
    const dict = i18nDictionary[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        if (dict[key].includes("<em>") || dict[key].includes("<br>")) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    htmlEl.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    if (lang === "pt") {
      langLabel.textContent = "PT";
      langSubLabel.textContent = "EN";
    } else {
      langLabel.textContent = "EN";
      langSubLabel.textContent = "PT";
    }
    localStorage.setItem("rv_lang", lang);
  }

  applyLanguage(currentLang);

  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    applyLanguage(currentLang);
  });

  /* ========================================================================
     4. Mobile Navigation Menu
     ======================================================================== */
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
  });

  /* ========================================================================
     5. Timeline Filter Tabs (with aria-selected accessibility)
     ======================================================================== */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const timelineItems = document.querySelectorAll(".timeline-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.getAttribute("data-filter");
      timelineItems.forEach((item) => {
        const categories = item.getAttribute("data-category") || "";
        if (filter === "all" || categories.includes(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  /* ========================================================================
     6. QR Code Modal & Copy Link
     ======================================================================== */
  const qrModal = document.getElementById("qrModal");
  const openQrModalBtn = document.getElementById("openQrModalBtn");
  const closeQrModalBtn = document.getElementById("closeQrModalBtn");
  const copyUrlBtn = document.getElementById("copyUrlBtn");

  function openModal() {
    qrModal.classList.add("open");
    qrModal.setAttribute("aria-hidden", "false");
    closeQrModalBtn.focus();
  }

  function closeModal() {
    qrModal.classList.remove("open");
    qrModal.setAttribute("aria-hidden", "true");
    openQrModalBtn.focus();
  }

  openQrModalBtn.addEventListener("click", openModal);
  closeQrModalBtn.addEventListener("click", closeModal);

  qrModal.addEventListener("click", (e) => {
    if (e.target === qrModal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && qrModal.classList.contains("open")) {
      closeModal();
    }
  });

  copyUrlBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("https://www.linkedin.com/in/rafael-vivian");
      const originalText = copyUrlBtn.textContent;
      copyUrlBtn.textContent = currentLang === "pt" ? "Copiado! ✓" : "Copied! ✓";
      setTimeout(() => {
        copyUrlBtn.textContent = originalText;
      }, 2200);
    } catch (_) {
      window.open("https://www.linkedin.com/in/rafael-vivian", "_blank", "noopener,noreferrer");
    }
  });

  /* ========================================================================
     7. Download Digital Contact Card (vCard .vcf)
     ======================================================================== */
  const downloadVcardBtn = document.getElementById("downloadVcardBtn");
  downloadVcardBtn.addEventListener("click", () => {
    const vcardContent = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Vivian;Rafael;;;",
      "FN:Rafael Vivian",
      "ORG:Ferramentaria Nacional",
      "TITLE:Especialista em Desenvolvimento de Produtos | Engenharia | Gestão de Ferramentaria | Simulação FEA",
      "TEL;TYPE=CELL,VOICE:+5515981352882",
      "EMAIL;TYPE=PREF,INTERNET:rafaelvvivian@gmail.com",
      "URL;TYPE=LinkedIn:https://www.linkedin.com/in/rafael-vivian",
      "ADR;TYPE=HOME:;;Boituva;São Paulo;;Brasil",
      "NOTE:Desenvolvimento de Produtos e Processos | Engenharia | APQP & Scrum | Lean Manufacturing | Gestão de Projetos | Gestão de Ferramentaria | Sustentabilidade e Economia Circular | Simulações FEA.",
      "END:VCARD"
    ].join("\r\n");

    const blob = new Blob([vcardContent], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Rafael_Vivian.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });

  /* ========================================================================
     8. Contact Form -> Copy Formatted Message & Open WhatsApp OR LinkedIn
     ======================================================================== */
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");
  const sendLinkedInBtn = document.getElementById("sendLinkedInBtn");

  function buildContactMessage() {
    const name = document.getElementById("senderName").value.trim();
    const org = document.getElementById("senderOrg").value.trim();
    const topic = document.getElementById("senderTopic").value;
    const message = document.getElementById("senderMessage").value.trim();

    return currentLang === "pt"
      ? `Olá Rafael Vivian,\n\nMeu nome é ${name}${org ? ` (${org})` : ""}. Gostaria de conversar sobre [${topic}].\n\n${message}`
      : `Hello Rafael Vivian,\n\nMy name is ${name}${org ? ` (${org})` : ""}. I would like to connect regarding [${topic}].\n\n${message}`;
  }

  async function handleContactDispatch(channel) {
    if (!contactForm.reportValidity()) return;

    const formattedText = buildContactMessage();
    try {
      await navigator.clipboard.writeText(formattedText);
      formFeedback.textContent =
        channel === "whatsapp"
          ? currentLang === "pt"
            ? "✓ Mensagem copiada! Abrindo WhatsApp..."
            : "✓ Message copied! Opening WhatsApp..."
          : currentLang === "pt"
          ? "✓ Mensagem copiada! Abrindo perfil do LinkedIn..."
          : "✓ Message copied! Opening LinkedIn profile...";
    } catch (_) {
      formFeedback.textContent =
        currentLang === "pt"
          ? "Redirecionando para contato..."
          : "Redirecting to contact...";
    }

    const targetUrl =
      channel === "whatsapp"
        ? `https://wa.me/5515981352882?text=${encodeURIComponent(formattedText)}`
        : "https://www.linkedin.com/in/rafael-vivian";

    setTimeout(() => {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }, 650);
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleContactDispatch("whatsapp");
  });

  if (sendLinkedInBtn) {
    sendLinkedInBtn.addEventListener("click", () => {
      handleContactDispatch("linkedin");
    });
  }

  /* ========================================================================
     9. Scroll Reveal & Active Nav Link Highlight (with bottom-of-page fix)
     ======================================================================== */
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  window.addEventListener(
    "scroll",
    () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;
      if (atBottom) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === "#contato");
        });
        return;
      }

      const scrollY = window.scrollY + 140;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { passive: true }
  );
});

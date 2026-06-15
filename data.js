const dbData = {
    sql: {
        title: "Bases de Dados Relacionais (SQL)",
        icon: "🗄️",
        desc: "O modelo tradicional e mais amplamente utilizado nas últimas décadas. Organizam os dados em tabelas com linhas (registos) e colunas (atributos), estabelecendo relações estritas entre elas. Exigem um esquema (schema) predefinido antes da inserção dos dados.",
        advantage: "Garantem a propriedade ACID (Atomicidade, Consistência, Isolamento, Durabilidade), assegurando que as transações são fiáveis e consistentes, mesmo em caso de falhas.",
        useCases: "Sistemas bancários, sistemas de faturação, ERPs, e aplicações onde a integridade dos dados é absolutamente crítica.",
        examples: "PostgreSQL, MySQL, Oracle Database, Microsoft SQL Server",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    kv: {
        title: "Chave-Valor (Key-Value)",
        icon: "⚡",
        desc: "O modelo NoSQL mais simples. Cada item é armazenado como um par composto por uma 'chave' única e o seu 'valor' correspondente (que pode ser um texto simples ou um objeto).",
        advantage: "Velocidade de leitura e escrita incrivelmente rápida e extrema facilidade de particionamento horizontal.",
        useCases: "Gestão de sessões de utilizadores, carrinhos de compras em lojas online, e sistemas de cache para acelerar websites.",
        examples: "Redis, Amazon DynamoDB, Memcached",
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    doc: {
        title: "Orientadas a Documentos",
        icon: "📄",
        desc: "Em vez de tabelas, armazenam dados em documentos semi-estruturados (geralmente nos formatos JSON ou BSON). Cada documento pode ter uma estrutura completamente diferente do outro.",
        advantage: "Grande flexibilidade na estrutura dos dados; os programadores podem alterar a estrutura sem parar o sistema ou reescrever esquemas.",
        useCases: "Catálogos de comércio eletrónico, sistemas de gestão de conteúdos (CMS), aplicações em tempo real com dados variáveis.",
        examples: "MongoDB, Couchbase, Firebase Cloud Firestore",
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    col: {
        title: "Orientadas a Colunas",
        icon: "📊",
        desc: "Em vez de armazenarem dados por linhas, armazenam por colunas. Isto torna a leitura e a agregação de grandes volumes de dados num atributo específico muito mais eficiente.",
        advantage: "Excelente para escalabilidade horizontal gigantesca e análise rápida de grandes volumes de dados (Big Data).",
        useCases: "Armazenamento de dados de IoT (Internet of Things), análise de logs de servidores, Data Warehouses.",
        examples: "Apache Cassandra, HBase",
        color: "text-teal-600",
        bg: "bg-teal-50"
    },
    graph: {
        title: "Bases de Dados de Grafos",
        icon: "🕸️",
        desc: "Desenhadas especificamente para gerir relações altamente conectadas. Armazenam dados como nós (entidades) e arestas (as relações entre essas entidades).",
        advantage: "Consultar relações complexas é extremamente rápido, algo que seria muito lento e exigiria múltiplos 'JOINs' pesados numa base de dados SQL tradicional.",
        useCases: "Redes sociais (amigos em comum), motores de recomendação avançados, deteção de fraudes financeiras.",
        examples: "Neo4j, Amazon Neptune",
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    vec: {
        title: "Bases de Dados Vetoriais",
        icon: "🧠",
        desc: "A base da Inteligência Artificial Moderna. Armazenam dados (texto, imagens, áudio) convertidos em 'vetores' (listas de números multidimensionais gerados por redes neuronais).",
        advantage: "Permitem pesquisas ultra-rápidas por 'semelhança de contexto e significado' em vez de apenas pesquisas por palavras-chave exatas.",
        useCases: "Memória para Modelos de Linguagem (LLMs como o ChatGPT), pesquisa semântica, reconhecimento avançado de imagens.",
        examples: "Pinecone, Milvus, Weaviate, Chroma",
        color: "text-rose-600",
        bg: "bg-rose-50"
    },
    ts: {
        title: "Séries Temporais (Time-Series)",
        icon: "⏱️",
        desc: "Otimizadas de raiz para carregar, armazenar e analisar sequências contínuas de dados que são estritamente indexados pelo tempo.",
        advantage: "Alta eficiência na escrita contínua de milhões de pontos de dados e funções nativas para analisar dados ao longo de janelas temporais.",
        useCases: "Monitorização da infraestrutura de TI, dados do mercado financeiro, sensores meteorológicos, telemetria.",
        examples: "InfluxDB, TimescaleDB",
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    mem: {
        title: "Bases de Dados em Memória",
        icon: "🚀",
        desc: "Sistemas que evitam o acesso lento a discos (HDD/SSD) e armazenam todos os dados diretamente na memória RAM do servidor.",
        advantage: "Oferecem latências microscópicas (sub-milissegundo), essenciais para operações onde qualquer atraso é intolerável.",
        useCases: "Jogos multijogador em tempo real, análises em tempo real, sistemas de licitação de publicidade, placares de líderes em direto.",
        examples: "Redis, SAP HANA",
        color: "text-red-600",
        bg: "bg-red-50"
    }
};

const decisionMatrix = [
    { id: "opt1", need: "Transações financeiras, regras rígidas, relatórios estritos", type: "SQL (Relacional)", ex: "PostgreSQL" },
    { id: "opt2", need: "Dados não estruturados, necessidade de mudar campos frequentemente", type: "NoSQL (Documentos)", ex: "MongoDB" },
    { id: "opt3", need: "Milhões de leituras/escritas por segundo (Cache/Sessões)", type: "NoSQL (Chave-Valor)", ex: "Redis" },
    { id: "opt4", need: "Descobrir padrões de rede e relações sociais complexas", type: "Grafos", ex: "Neo4j" },
    { id: "opt5", need: "Trabalhar com IA e pesquisa por semelhança de contexto", type: "Vetorial", ex: "Pinecone" }
];

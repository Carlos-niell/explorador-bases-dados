# 🗄️ Explorador Interativo de Bases de Dados

Um aplicativo web interativo que permite explorar diferentes tipos de bases de dados, compreender suas características, vantagens e casos de uso reais.

## 📋 Visão Geral

Este projeto é uma ferramenta educacional que ajuda a compreender o ecossistema moderno de bases de dados. Apresenta:

- **8 tipos diferentes de bases de dados**: SQL, Chave-Valor, Documentos, Colunares, Grafos, Vetoriais, Séries Temporais e Em Memória
- **Gráfico interativo de radar**: Visualiza os trade-offs técnicos entre diferentes arquiteturas
- **Assistente de decisão**: Recomenda o tipo de banco ideal baseado na necessidade do projeto
- **Interface responsiva**: Funciona perfeitamente em dispositivos móveis e desktop

## 🖼️ Preview da Aplicação

![Explorador Interativo de Bases de Dados](images/screenshot.jpg)

A aplicação apresenta uma interface limpa e intuitiva com:
- **Barra de Navegação Lateral**: Menu com 8 tipos diferentes de bases de dados organizados em categorias
- **Painel de Conteúdo Principal**: Mostra detalhes completos de cada tipo selecionado
- **Gráfico de Radar Interativo**: Visualização dos trade-offs técnicos
- **Seção de Decisão**: Assistente interativo para escolher a melhor tecnologia

## 🚀 Características

### 1. Explorador de Arquiteturas
Navegue por diferentes famílias de bases de dados com informações detalhadas:
- Descrição completa de cada tipo
- Vantagens principais
- Casos de uso ideais
- Exemplos de tecnologias populares

### 2. Análise de Compromissos Técnicos
Um gráfico de radar que ilustra os trade-offs entre:
- Esquema estruturado
- Escalabilidade horizontal
- Flexibilidade de dados
- Queries complexas/relações
- Garantia ACID

### 3. Assistente de Decisão
Ferramenta interativa que ajuda a escolher a tecnologia certa baseada em cenários reais:
- Transações financeiras
- Dados não estruturados
- Leituras/escritas em alta velocidade
- Análise de relações complexas
- Integração com IA

## 📁 Estrutura de Arquivos

```
.
├── index.html        # Estrutura HTML principal
├── styles.css        # Estilos CSS
├── data.js          # Dados das bases de dados
├── script.js        # Lógica JavaScript
└── README.md        # Este arquivo
```

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos com Tailwind CSS (via CDN)
- **JavaScript**: Lógica interativa vanilla
- **Chart.js**: Biblioteca para gráficos (via CDN)

## 📦 Dependências

As dependências são carregadas via CDN:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

## 🎨 Design

- **Paleta de Cores**: Warm Neutrals com Soft Categorical Accents (Stone, Teal, Indigo, Blue)
- **Framework CSS**: Tailwind CSS
- **Design Responsivo**: Funciona em todos os tamanhos de tela
- **Animações**: Transições suaves com fade-in effects

## 🔧 Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/Carlos-niell/explorador-bases-dados.git
cd explorador-bases-dados
```

2. Abra o arquivo `index.html` em seu navegador:
   - Pode arrastar o arquivo para o navegador
   - Ou usar um servidor local (recomendado):

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

3. Navegue pelos diferentes tipos de bases de dados
4. Explore o gráfico de trade-offs
5. Use o assistente de decisão para recomendações

## 📚 Tipos de Bases de Dados Cobertos

### 🗄️ Relacional (SQL)
Modelo tradicional com tabelas, linhas e colunas. Ideal para transações financeiras e dados estruturados.
- Exemplos: PostgreSQL, MySQL, Oracle Database, Microsoft SQL Server

### ⚡ Chave-Valor
Modelo NoSQL simples. Ótimo para cache e leituras/escritas ultra-rápidas.
- Exemplos: Redis, Amazon DynamoDB, Memcached

### 📄 Documentos
Armazenam dados em documentos JSON/BSON com estrutura flexível.
- Exemplos: MongoDB, Couchbase, Firebase Cloud Firestore

### 📊 Colunares
Armazenam dados por colunas para análise de Big Data.
- Exemplos: Apache Cassandra, HBase

### 🕸️ Grafos
Otimizadas para relações complexas e redes altamente conectadas.
- Exemplos: Neo4j, Amazon Neptune

### 🧠 Vetoriais
Armazenam dados como vetores multidimensionais para IA e pesquisa semântica.
- Exemplos: Pinecone, Milvus, Weaviate, Chroma

### ⏱️ Séries Temporais
Otimizadas para dados indexados por tempo e análise histórica.
- Exemplos: InfluxDB, TimescaleDB

### 🚀 Em Memória
Armazenam tudo em RAM para latências microscópicas.
- Exemplos: Redis, SAP HANA

## 🎯 Casos de Uso

- **Educação**: Ensino de conceitos de bases de dados
- **Treinamento**: Onboarding de novos desenvolvedores
- **Decisão Técnica**: Ajudar na escolha de tecnologia para projetos
- **Consultoria**: Recomendações arquiteturais

## 🌐 Versão Online

Se hospedado em um servidor web, o aplicativo é totalmente funcional e não requer instalação adicional.

## 👥 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novos tipos de bases de dados
- Melhorar a documentação

## 📄 Licença

Este projeto é fornecido como material educacional.

## 📖 Referência

Baseado no relatório "Tipos de Bases de Dados: Um Guia Completo"

---

**Desenvolvido com ❤️ para educação em tecnologia**

# Prompt para solicitar texto descritivo da ferramenta desenvolvida como plugin no QGIS para projeto de concepção de sistema de esgotamento sanitário

```
Preciso que crie um texto para descrever uma ferramenta que foi desenvolvida pela empresa em que trabalho.

Esta ferramenta foi desenvolvida como um plugin que funciona dentro do sofware QGIS. Esta escolha foi realizada estratégicamente, pensando na otimização dos recursos de geoprocessamento já existentes e na integração com a estrutura de projetos já em andamento.

Este plugin foi desenvolvido com uso da linguagem de programação python.

Quanto ao funcionamento do plugin, sua execução é organizadas em etapas de modo a guiar o usuário e dividir os processamentos em partes específicas. Estas partes são descritas a seguir:

1. O usuário deve criar um novo projeto, que resume-se basicamente na definição de um local par salvamento de todos os arquivos necessários para geração dos resultados.
2. Desenho da área de interesse do usuário com o auxílio de uma imagem de satélite ao fundo para referência de localização. Uma área maior ao redor desta área de referência, chamada de buffer, é definida automaticamente para garantir que os resultados gerados nos processos posteriores não sejam afetados pelo borda da área de interesse.
3. Nesta etapa ocorre a extração do modelo digetal de elevação (DEM). Este modelo é extraído para a área do buffer definida no passo anterior.
4. A partir do DEM são realizados os processamentos de delimitação das bacias de contribuição. Ao final dos processamentos os resultados gerados são as camadas de bacias de contribuição e trechos de drenagem vetorizados.
5. A geração de topologia é definida pelo processo que estabelece o fluxo de drenagem entre as bacias localizadas na área de estudo, ou seja, o resultado gerado nesta etapa de execução da ferramenta é a definição das bacias de drenagem situadas à jusante de cada bacia de contribuição, representados por uma camada de pontos nos exutórios de cada bacia.
6. São calculadas vazões de contribuição para o sistema de esgotamento em cada bacia de contribuição considerando o número de habitantes existente dentro da área da respectiva bacia. Estes cálculos utilizam parâmetros definidos na opção de configurações do plugin. O resultado desta etapa apresenta a linhas de faces de logradouros dentro dos limites da área de interesse.

Precisa falar neste texto sobre as fontes de dados utilizadas. Os dados DEM são obtidos do produto ANADEM desenvolvido pela Agência Nacional das Águas e Saneamento Básico em parceria com o Instituto de Pesquisas Hidráulicas (IPH) da Universidade Federal do Rio Grande do Sul (UFRGS). Os dados de malha municipal, malha de setores censitários com dados de população do censo de 2022 e faces de logradouros com dado de residências foram obtidos do portal de dados do Instituto Brasileiro de Geografia e Estatística (IBGE).

Preciso que crie um texto bem conciso e técnico. Amarre bem as ideia para criar um texto bom de ser lido.

Quero um texto descritivo de no máximo uma página (A4) de tamanho. Pode ser até um pouco menor, mas não muito pequeno. Só não pode ultrapassar 1 página.

```
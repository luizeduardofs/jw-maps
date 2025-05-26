# Usa imagem oficial do Bun
FROM oven/bun

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia todos os arquivos do projeto para o container
COPY . .

# Instala as dependências
RUN bun install

# Define o comando para rodar a aplicação
CMD ["bun", "main.ts"]

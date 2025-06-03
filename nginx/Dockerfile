FROM nginx:1.25-alpine

# Copiar configuração personalizada
COPY ./conf.d/default.conf /etc/nginx/conf.d/default.conf

# Criar diretório para os arquivos de desafio do certbot
RUN mkdir -p /var/www/certbot

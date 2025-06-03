#!/bin/bash

# Script para inicializar o Let's Encrypt
# Adaptado de https://github.com/wmnnd/nginx-certbot

# Defina o domínio e email para o certificado SSL
domains=(m1theus.ddns.net)
email="m1theus@gmail.com" # Adicione seu email aqui (recomendado)
rsa_key_size=4096
data_path="./certbot"
staging=0 # Defina como 1 para testes (sem limites de taxa)

# Verificar se o Docker está instalado
if ! [ -x "$(command -v docker)" ]; then
  echo 'Erro: docker não está instalado.' >&2
  exit 1
fi

# Verificar se o docker-compose está instalado
if ! [ -x "$(command -v docker compose)" ]; then
  echo 'Erro: docker compose não está instalado.' >&2
  exit 1
fi

# Criar diretórios para o certbot
mkdir -p "$data_path/conf/live/$domains"
mkdir -p "$data_path/www"

echo "### Criando certificado dummy para $domains ..."
path="/etc/letsencrypt/live/$domains"
mkdir -p "$data_path/conf/live/$domains"

# Criar certificados auto-assinados temporários para iniciar o Nginx
docker run --rm -v "$(pwd)/certbot/conf:/etc/letsencrypt" -v "$(pwd)/certbot/www:/var/www/certbot" certbot/certbot:latest certonly --webroot -w /var/www/certbot --force-renewal --email "$email" -d "$domains" --agree-tos --no-eff-email --staging

# Remover certificados dummy
rm -rf "$data_path/conf/live/$domains"
rm -rf "$data_path/conf/archive/$domains"
rm -rf "$data_path/conf/renewal/$domains.conf"

echo "### Solicitando certificado Let's Encrypt para $domains ..."

# Selecionar modo de emissão: 0 para produção, 1 para staging
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Iniciar certbot em modo standalone (sem Nginx)
docker run --rm -p 80:80 -v "$(pwd)/certbot/conf:/etc/letsencrypt" -v "$(pwd)/certbot/www:/var/www/certbot" certbot/certbot:latest certonly --standalone --preferred-challenges http $domain_args --email "$email" --agree-tos --no-eff-email --force-renewal $([ "$staging" = 1 ] && echo "--staging")

echo "### Certificados emitidos com sucesso! Iniciando os containers..."

# Iniciar os containers
docker compose up -d

echo "### Tudo pronto! Seu site agora deve estar disponível em https://$domains com SSL configurado."
echo "### Acesse https://$domains no navegador para verificar."

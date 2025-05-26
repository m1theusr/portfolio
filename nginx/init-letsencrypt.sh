#!/bin/sh

# Substitua pelo seu domínio real
domains=(m1theus.ddns.net)
email="m1theus@gmail.com"

# Criar certificado autoassinado temporário
mkdir -p /etc/letsencrypt/live/m1theus.ddns.net
openssl req -x509 -nodes -newkey rsa:4096 -days 1\
    -keyout /etc/letsencrypt/live/m1theus.ddns.net/privkey.pem \
    -out /etc/letsencrypt/live/m1theus.ddns.net/fullchain.pem \
    -subj "/CN=localhost"

# Iniciar Nginx
nginx -g "daemon on;"

# Remover certificado autoassinado
rm -rf /etc/letsencrypt/live/m1theus.ddns.net

# Obter certificado Let's Encrypt
certbot certonly --webroot -w /var/www/certbot \
    --email $email \
    --agree-tos \
    --no-eff-email \
    -d ${domains[0]} \
    --force-renewal \
    --non-interactive || true

# Recarregar Nginx para aplicar as configurações
nginx -s reload

# Configurar renovação automática
echo "0 0,12 * * * /usr/bin/certbot renew --quiet" | crontab -

# Manter o container rodando
tail -f /var/log/nginx/error.log

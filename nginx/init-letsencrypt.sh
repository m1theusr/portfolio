#!/bin/sh

# Substitua pelo seu domínio real
domains=(seusite.com www.seusite.com)
email="seuemail@example.com"

# Criar certificado autoassinado temporário
mkdir -p /etc/letsencrypt/live/seusite.com
openssl req -x509 -nodes -newkey rsa:4096 -days 1\
    -keyout /etc/letsencrypt/live/seusite.com/privkey.pem \
    -out /etc/letsencrypt/live/seusite.com/fullchain.pem \
    -subj "/CN=localhost"

# Iniciar Nginx
nginx -g "daemon on;"

# Remover certificado autoassinado
rm -rf /etc/letsencrypt/live/seusite.com

# Obter certificado Let's Encrypt
certbot certonly --webroot -w /var/www/certbot \
    --email $email \
    --agree-tos \
    --no-eff-email \
    -d ${domains[0]} \
    -d ${domains[1]} \
    --force-renewal \
    --non-interactive || true

# Recarregar Nginx para aplicar as configurações
nginx -s reload

# Configurar renovação automática
echo "0 0,12 * * * /usr/bin/certbot renew --quiet" | crontab -

# Manter o container rodando
tail -f /var/log/nginx/error.log

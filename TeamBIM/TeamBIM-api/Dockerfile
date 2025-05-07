FROM php:8.2-fpm

# Instalar dependencias de PHP y herramientas útiles
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libpng-dev libonig-dev libxml2-dev curl \
    libssl-dev pkg-config libcurl4-openssl-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Instalar la extensión de MongoDB
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer

# Directorio de trabajo
WORKDIR /var/www

# Copiar el proyecto
COPY . .

# Instalación de dependencias Laravel
RUN composer install --no-interaction --no-progress --prefer-dist || true

# Dar permisos (opcional pero recomendable en algunos entornos)
RUN chown -R www-data:www-data /var/www && chmod -R 755 /var/www

# Iniciar Laravel con su servidor embebido
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=9001"]

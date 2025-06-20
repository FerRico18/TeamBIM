# Usa imagen PHP con FPM para que funcione artisan y php-fpm
FROM php:8.2-fpm

# Instalar extensiones necesarias
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    curl \
    git \
    libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Instalar Composer desde imagen oficial
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Crear directorio de trabajo
WORKDIR /var/www

# Copiar todos los archivos del proyecto al contenedor
COPY . .

# Mostrar mensaje si todo bien
RUN echo "🔥 Archivos copiados con éxito"

# Instalar dependencias Laravel
RUN composer install --no-interaction --no-progress --prefer-dist

# Mostrar mensaje si composer termina
RUN echo "📦 Composer terminó"

# Exponer puerto 9000 (artisan)
EXPOSE 9000

# Comando que copia .env si no existe y lanza el servidor de Laravel
CMD if [ ! -f ".env" ]; then cp .env.example .env; fi && \
    echo "✅ .env listo" && \
    php artisan serve --host=0.0.0.0 --port=9000

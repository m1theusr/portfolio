import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar CORS explicitamente para permitir comunicau00e7u00e3o com o frontend
  app.enableCors({
    origin: ['http://localhost:3000', 'http://frontend', 'http://localhost:4000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });
  
  // Obter a porta da variável de ambiente ou usar 4000 como padrão
  const port = process.env.PORT || 4000;
  
  // Escutar em todas as interfaces de rede (importante para Docker)
  await app.listen(port, '0.0.0.0');
  console.log(`Application running on port ${port}`);
}

bootstrap();

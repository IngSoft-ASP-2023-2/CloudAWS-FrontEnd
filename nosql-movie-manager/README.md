# NoSQL Movie Manager Frontend

Frontend estático para el API `movie_manager_nosql` (DynamoDB). CRUD completo de películas.

## Configuración

La URL de la API se configura con la variable de entorno `API_URL`:

```bash
# Default: http://localhost:3001
export API_URL=http://mi-api.example.com
```

## Desarrollo local

```bash
cd nosql-movie-manager
npm install
API_URL=http://localhost:3000 node src/server.js
```

## Docker

```bash
docker build -t nosql-movie-frontend .
docker run -p 3000:3000 -e API_URL=http://host.docker.internal:3001 nosql-movie-frontend
```

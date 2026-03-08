Es una herramienta que permite crear y relacionar distintos contenedores. 

```bash
docker compose --version

```

```docker
services:
	app:
		build: .
		ports:
			- "3000:3000"
		volumes:
			- ./public:/app/public # Lo que modifiquemos en nuestra carpeta se verá modificado dentro del contenedor.
		command: npm run dev # Para que se actualicen los cambios que hacemos con facilidad
		develop:
			watch:
				-action: sync
				 patch: ./src
				 target: /app/src
```


docker compose build
docker compose up -d
docker compose logs --follow
docker compose down
docker compose up --build


(Docmost)[https://docmost.com/]

Docmost is an open-source enterprise-ready collaborative wiki and documentation software. Designed for seamless real-time collaboration, multiple users can work on the same page at the same time in real-time without overwriting each other.

## Installation Steps

**1. Setup the Docker compose file**

Use these commands to download the docker-compose file to the docmost folder. Alternatively, create a directory manually and download the YAML file directly from the Docmost GitHub repository. 

```bash
mkdir docmost
cd docmost
curl -O https://raw.githubusercontent.com/docmost/docmost/main/docker-compose.yml
```

Next, open the docker-compose.yml file. On Linux, you can use vim or nano:

```bash
nano docker-compose.yml

vi docker-compose.yml
```

**2. Replace the default configs**

You are to replace the default environment variables in the `docker-compose.yml` file.

The `APP_URL` should be replaced with your chosen domain. E.g. `https://example.com` or `https://docmost.example.com`.

The `APP_SECRET` value must be replaced with a long random secret key (32 characters minimum).

>[!CAUTION]
>If you leave the default value, the app will fail to start.

![[docker11.png]]
Replace `STRONG_DB_PASSWORD` in the `POSTGRES_PASSWORD` environment variable with a secure password.

Update the `DATABASE_URL` default `STRONG_DB_PASSWORD` value with your chosen Postgres password.

>[!TIP]
>You can generate pasword with `openssl rand -hex 32`. 

```bash
jose8david@jose8david:~/docmost$ openssl rand -hex 32

d2239cb9449387a30f19b8282282a7ace9a7336fde392710a2e7b403d87c8d17

```

**3. Start the Services**

Execute the next command into the directory where you've the docker-compose file.
```bash
docker compose up -d
```

>[!TIPS]
> If the terminal display this message : 
> ```bash 
> unable to get image 'docmost/docmost:latest': Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
> ```
> You have to open Docker and init it
>

The docker compose will pull three images, create a network (docmost_default), create three volumes and create three containers:

![[docker12.png]]
Now you can entry in Docmost from your explorer with the url `localhost:3000`

![[docker13.png]]![[docker14.png]]


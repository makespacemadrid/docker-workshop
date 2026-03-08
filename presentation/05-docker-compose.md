# 5. Docker Compose

## What is Docker Compose?

One best practice for containers is that each container should do one thing and do it well.

You can use multiple `docker run` commands to start multiple containers. But you'll need to manage networks, all the flags needed to connect containers to those networks, and more. Cleanup is also more complicated.

With Docker Compose, you can define all of your containers and their configurations in a single YAML file. If you include this file in your code repository, anyone that clones your repository can get up and running with a single command.

It's important to understand that Compose is a declarative tool - you simply define it and go. If you make a change, run `docker compose up` again and Compose will reconcile the changes intelligently.

## Key Commands

```bash
docker compose up -d --build
docker compose down
```

**Note:** By default, volumes aren't automatically removed when you tear down a Compose stack. If you want to remove the volumes, add the `--volumes` flag:
```bash
docker compose down --volumes
```

![docker8.png](../img/docker8.png)

![docker9.png](../img/docker9.png)

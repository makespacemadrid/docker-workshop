`docker run` creates and starts a container.  
`-p HostPort:ContainerPort` creates a port mapping between the host and the container.  
`--name container_name` assigns a specific name to the container.  
`image_name` specifies the image to be used. 

**When you run this command:**

1. It searches for the image locally; if not found, it downloads it from **Docker Hub**.
2. It creates and starts the container:
    1. Assigns a **virtual IP** within the Docker network.
    2. Opens and maps the specified ports. 

To stop a container running in the foreground, use `Ctrl + C`. 

**Other parameters:**  
`--detach` or `-d` runs the container in the **background**. 

**Useful commands (use `--help` for more information):**

- `docker ps` or `docker container ls`: Lists running containers.
- `docker stop <id/name>`: Stops a container. You only need the first few characters of the ID.
- `docker start <id>`: Starts a stopped container.
- `docker rm <id>`: Deletes a container. It must be stopped first, or you can force it with `docker rm -f`.
- `docker logs <id>`: Displays the container's logs.
- `docker top <id>`: Shows the processes running inside the container (main and secondary processes).
- `docker inspect image/<id> `
- `docker stats` 

**Creating a Container**

In this section, we are going to **launch** a container to **explore** its functionality. **You should execute** the following command to **spin up** the instance:

`docker run -it -p 8080:80 httpd bash`

Once inside, you can execute commands directly within the container. **In order to verify** the environment, type `cat /etc/os-release`. The operating system details **should then be displayed**.
.
![[img/docker10.png]]

The **main process** is **launched** when you **execute** `docker run`. **However**, if an additional command is provided—such as `bash`—the container **will not exhibit** its default behavior.


When you execute the following command:

```
docker run -it ubuntu
```
you will access the terminal of the container and you can run commands there. For example, you can run the following command to inspect the version of the operating system:

```
cat /etc/os-release
```
Or even you can install `wget` or `curl` to download files from the internet. To install these packages, you can use the following command:

```
apt-get install wget    
apt-get install curl    
```

Alpine Linux is a good option for containers because it is very  lightweight and secure.



## Install Docker Desktop

- [Mac](https://desktop.docker.com/mac/main/arm64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-arm64)

- [Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-windows)
	- Enable **Virtual Machine Platform**.
	- Enable **Windows Subsystem for Linux (WSL)**.
	- Open Terminal (PowerShell) and run `docker --version`.
	- **Recommendation:** Install a Linux distribution from the Microsoft Store. You can then integrate these resources into Docker Desktop.
	![[img/docker4.png]]
	

	![[/img/docker5.png]]
- [Linux]([https://docs.docker.com/desktop/setup/install/linux/ubuntu/](https://docs.docker.com/desktop/setup/install/linux/))

	- *Ubuntu 22.04, 24.04 or the latest non-LTS version*

```bash
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF

#Download the latest DEB package.

https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64

#Install Docker Desktop

sudo apt update
sudo apt install gnome-terminal #You must install gnome-terminal to enable terminal access from Docker Desktop
sudo apt-get update
sudo apt install ./docker-desktop-amd64.deb

```

Play with Docker

```
docker run -p 8080:80 httpd

mkdir project
cd project
mkdir 1_project
Now you can drag and drop in the terminal files (open in Chrome or other explorer)
unzip your_file_name.zip
```
**Recommended VS Code Extension:** 
- Docker (Microsoft)
## Run your first container

Run your first container

```
docker run -d -p 8080:80 docker/welcome-to-docker
```

Your container is now **accessible** on port 8080. Visit http://localhost:8080.

![[img/docker0.png]]

![[img/docker1.png]]
## Manage containers using Docker Desktop

![[img/docker3.png]]

- View container information, including **logs** and **files**.
- Access the shell via the **Exec** tab.
- Perform actions like **pause, resume, start, or stop**.
- Traefik proxy - [Traefik](https://traefik.io/traefik/) is an application proxy that routes requests to the right service. It sends all requests for `localhost/api/*` to the backend, requests for `localhost/*` to the frontend, and then requests for `db.localhost` to phpMyAdmin. This provides the ability to access all applications using port 80 (instead of different ports for each service).
## The environment

The containerized environment provided the development environment, ensuring you have everything you need. You didn't have to install Node, MySQL, or any of the other dependencies directly on your machine. All you needed was Docker Desktop and a code editor.

Make changes and see them immediately. This was made possible because 1) the processes running in each container are watching and responding to file changes and 2) the files are shared with the containerized environment.

### ¿What are the container images?

If you’re new to container images, think of them as a standardized package that contains everything needed to run an application, including its files, configuration, and dependencies. These packages can then be distributed and shared with others.

### Docker Hub

To share your Docker images, you need a place to store them. This is where registries come in. While there are many registries, Docker Hub is the default and go-to registry for images. Docker Hub provides both a place for you to store your own images and to find images from others to either run or use as the bases for your own images.

### What is an image/Dockerfile?

Think of a container image as a single package that contains everything needed to run a process. In this case, it will contain a Node environment, the backend code, and the compiled React code.

Any machine that runs a container using the image, will then be able to run the application as it was built without needing anything else pre-installed on the machine.

A Dockerfile is a text-based script that provides the instruction set on how to build the image. For this quick start, the repository already contains the Dockerfile.


### What is a container?

Imagine you're developing a killer web app that has three main **components** - a React frontend, a Python API, and a PostgreSQL database. If you wanted to work on this project, you'd have to install Node, Python, and PostgreSQL.

How do you make sure you have the same versions as the other developers on your team? Or your CI/CD system? Or what's used in production?

Enter containers!

What is a container? Simply put, containers are **isolated processes for each of your app's components**. Each component - the frontend React app, the Python API engine, and the database - runs in its own isolated environment, completely isolated from everything else on your machine.

Here's what makes them awesome. Containers are:

Self-contained. Each container has everything it needs to function with no reliance on any pre-installed dependencies on the host machine.
Isolated. Since containers run in isolation, they have minimal influence on the host and other containers, increasing the security of your applications.
Independent. Each container is independently managed. Deleting one container won't affect any others.
Portable. Containers can run anywhere! The container that runs on your development machine will work the same way in a data center or anywhere in the cloud!

When you launched the container, you exposed one of the container's ports onto your machine. Think of this as creating configuration to let you to connect through the isolated environment of the container.

### What is an image?

Seeing as a container is an isolated process, where does it get its files and configuration? How do you share those environments?

That's where container images come in. A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container.

For a PostgreSQL image, that image will package the database binaries, config files, and other dependencies. For a Python web app, it'll include the Python runtime, your app code, and all of its dependencies.

There are two important principles of images:

Images are immutable. Once an image is created, it can't be modified. You can only make a new image or add changes on top of it.

Container images are composed of layers. Each layer represents a set of file system changes that add, remove, or modify files.


These two principles let you to extend or add to existing images. For example, if you are building a Python app, you can start from the Python image and add additional layers to install your app's dependencies and add your code. This lets you focus on your app, rather than Python itself.

### What is a registry?

Well, you can store your container images on your computer system, but what if you want to share them with your friends or use them on another machine? That's where the image registry comes in.

An image registry is a centralized location for storing and sharing your container images. It can be either public or private. Docker Hub is a public registry that anyone can use and is the default registry.

### What is Docker Compose?

One best practice for containers is that each container should do one thing and do it well. While there are exceptions to this rule, avoid the tendency to have one container do multiple things.

You can use multiple docker run commands to start multiple containers. But, you'll soon realize you'll need to manage networks, all of the flags needed to connect containers to those networks, and more. And when you're done, cleanup is a little more complicated.

With Docker Compose, you can define all of your containers and their configurations in a single YAML file. If you include this file in your code repository, anyone that clones your repository can get up and running with a single command.

It's important to understand that Compose is a declarative tool - you simply define it and go. You don't always need to recreate everything from scratch. If you make a change, run docker compose up again and Compose will reconcile the changes in your file and apply them intelligently.

```
docker compose up -d --build

docker compose down #remove everything. 
```
By default, volumes aren't automatically removed when you tear down a Compose stack. The idea is that you might want the data back if you start the stack again. If you do want to remove the volumes, add the --volumes flag when running the docker compose down command



![[img/docker8.png]]



![[img/docker9.png]]
Docker is a containerization platform that packages an application and its dependencies into a standardized unit called a container. Containers ensure consistency across different environments by providing an isolated runtime environment. Unlike virtual machines, containers share the host system’s kernel, making them lightweight and efficient.

Containers do not require a separate operating system (OS) instance. Instead, they share the underlying OS kernel with the host system. This eliminates the need for additional OS resources and overhead, making containers lightweight and fast to start.

Docker relies heavily on Linux kernel features such as namespaces and cgroups (control groups) to provide isolation, security, and resource management for containers. These features are integral to Linux and are not natively available in the Windows operating system.
- **Namespaces**: Namespaces provide isolated environments for processes so that containers do not interfere with each other. Each container has its own network, filesystem, process tree, and other isolated components.This isolation allows Docker containers to run as if they were separate systems, even though they share the same underlying OS.
- **cgroups**: Control groups allow fine-grained control over resource allocation and management, ensuring that each container gets the right amount of CPU, memory, and other resources. This prevents any single container from consuming excessive resources and ensures fair distribution across all containers.

## 2. Why Docker Runs Natively on Linux

Linux’s native support for containerization is one of the primary reasons Docker was initially developed on Linux and runs natively on it. Let’s delve into the specifics of why Docker is inherently more compatible with Linux.
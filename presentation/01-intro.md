# 1. Introduction to Docker

## What is Docker?

Docker is a containerization platform that packages an application and its dependencies into a standardized unit called a container. Containers ensure consistency across different environments by providing an isolated runtime environment.

Unlike virtual machines, containers share the host system's kernel, making them lightweight and efficient.

![docker8.png](../img/docker8.png)
**Key characteristics:**
- Containers do not require a separate operating system (OS) instance
- They share the underlying OS kernel with the host system
- This eliminates the need for additional OS resources and overhead, making containers lightweight and fast to start

## Linux Kernel Features

Docker relies on Linux kernel features such as namespaces and cgroups (control groups) to provide isolation, security, and resource management for containers.

- **Namespaces**: Provide isolated environments for processes so that containers do not interfere with each other. Each container has its own network, filesystem, process tree, and other isolated components.
- **cgroups**: Allow fine-grained control over resource allocation and management, ensuring that each container gets the right amount of CPU, memory, and other resources.

![docker9.png](../img/docker9.png)



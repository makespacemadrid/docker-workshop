# 1. Introduction to Docker

## What is Docker?

Docker is a containerization platform that packages an application and its dependencies into a standardized unit called a container. Containers ensure consistency across different environments by providing an isolated runtime environment.

Unlike virtual machines, containers share the host system's kernel, making them lightweight and efficient.

**Key characteristics:**
- Containers do not require a separate operating system (OS) instance
- They share the underlying OS kernel with the host system
- This eliminates the need for additional OS resources and overhead, making containers lightweight and fast to start

## Linux Kernel Features

Docker relies on Linux kernel features such as namespaces and cgroups (control groups) to provide isolation, security, and resource management for containers.

- **Namespaces**: Provide isolated environments for processes so that containers do not interfere with each other. Each container has its own network, filesystem, process tree, and other isolated components.
- **cgroups**: Allow fine-grained control over resource allocation and management, ensuring that each container gets the right amount of CPU, memory, and other resources.

## Why Docker?

Imagine you're developing a killer web app that has three main components: a React frontend, a Python API, and a PostgreSQL database. If you wanted to work on this project, you'd have to install Node, Python, and PostgreSQL.

How do you make sure you have the same versions as your team? Or your CI/CD system? Or what's used in production?

**Containers are:**
- **Self-contained**: Each container has everything it needs to function with no reliance on any pre-installed dependencies on the host machine
- **Isolated**: They have minimal influence on the host and other containers, increasing security
- **Independent**: Each container is independently managed. Deleting one container won't affect any others
- **Portable**: Containers can run anywhere - the same container works on your development machine, in a data center, or in the cloud

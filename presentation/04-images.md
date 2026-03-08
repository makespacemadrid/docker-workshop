# 3. Docker Images

## What is an Image?

If you're new to container images, think of them as a standardized package that contains everything needed to run an application, including its files, configuration, and dependencies. These packages can be distributed and shared with others.

For a PostgreSQL image, that image will package the database binaries, config files, and other dependencies. For a Python web app, it'll include the Python runtime, your app code, and all of its dependencies.

## Two Important Principles of Images

1. **Images are immutable**: Once an image is created, it can't be modified. You can only make a new image or add changes on top of it.

2. **Images are composed of layers**: Each layer represents a set of file system changes that add, remove, or modify files.

These principles let you extend or add to existing images. For example, if you're building a Python app, you can start from the Python image and add additional layers to install your app's dependencies and add your code.

## Docker Hub

To share your Docker images, you need a place to store them. This is where registries come in.

Docker Hub is the default and go-to registry for images. It provides both a place for you to store your own images and to find images from others to either run or use as the bases for your own images.

## Image Commands

**Download an image from Docker Hub:**
```bash
docker pull <image_name>
```

**List available images:**
```bash
docker image ls
```

**Remove an image:**
```bash
docker image rm <image_name>
```

**Remove all unused images:**
```bash
docker image prune
```

**View image digests:**
```bash
docker images --digests
```

**View image history:**
```bash
docker history <image_name>
```


Although you don't use Docker images yet, you can download them from Docker Hub with the command `docker pull <image_name>`. 

If you want to see the available images in your computer, you can use the command `docker image ls`.

You can remove an image with the command `docker image rm <image_name>` or you can use the `docker image prune` to remove all unused images, which are not used by any container.

An image is a of template for create multiple containers. Each image has a name, a version (tag), and a description.  

An registry is a place where you can store and share images. Docker Hub is a public registry that anyone can use and is the default registry.

An image tag represents a specific version of the image.

With `docker images --digests` you can see the digest of the image, which is a unique identifier for the image.

## Dockerfile

An Dockerfile is a text-based script that provides the instruction set on how to build the image. It's included the following commands:

`FROM` is a keyword that indicates the base image. It could be `scratch`, it's meaning that the image will be empty.



`docker history` shows the history of an image, how it was built, including all the commands used by father images. Each step is a layer of the image which have a unique ID or hash. 

With the command `docker diff <container_id>` you can see the changes made to the container. What are the changes made to the original image? C, for changes; A, for additions; D, for deletions.




## What is a Dockerfile?

A Dockerfile is a text-based script that provides the instruction set on how to build an image. It contains all the commands needed to create a specific image.

**Key instruction: FROM**

The `FROM` keyword indicates the base image. It could be `scratch`, meaning that the image will be empty.

Any machine that runs a container using the image will be able to run the application as it was built without needing anything else pre-installed on the machine.

## View Container Changes

```bash
docker diff <container_id>
```
- C = changes
- A = additions
- D = deletions

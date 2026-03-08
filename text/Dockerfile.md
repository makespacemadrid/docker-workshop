Dockefile

``


```Dockerfile

FROM httpd # The name of the base image to use.

COPY index.html /usr/local/apache2/htdocs/

```

```bash
docker run -d -p 8080:80 httpd

docker exec -it <container id> bash

pwd # Dir

cd htdocs
ls
cat index.html
echo "Hi, World!">index.html

```

```bash
cd .\project
docker build -t <image_name> . 
docker run -d -p 8080:80 <image_name>
```


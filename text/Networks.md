#### 1. Fundamental Concepts / Conceptos Fundamentales

- **Network:** A communication path that allows containers to talk to each other or to the outside world.
    
- **Subnet:** A segmented piece of a larger network. In Docker, it defines the range of IP addresses available for containers within that network (e.g., `172.18.0.0/16`).
    
- **Gateway:** The "doorway" or router for a network. It is the IP address that allows traffic to exit the current subnet to reach other networks or the internet.
    

#### 2. Default Networking / Redes por defecto

- **Bridge (Default):** If no network is specified, Docker uses the default bridge. Docker sets up firewall rules (iptables) and NAT (Network Address Translation) to provide internet access via the host.
    
- **Commands:**
    
    - `docker network ls`: List all available networks.
        
    - `docker network inspect <network_name>`: Displays network configuration in JSON format, including IPAM (IP Address Management), subnet, gateway, and connected containers.
        

#### 3. Network Drivers 

- **Bridge:** The standard driver for standalone containers.
    
- **Host:** Removes network isolation between the container and the Docker host. The container uses the host's networking namespace. _Note: Only fully functional on Linux; on macOS/Windows, it shares the IP of the internal VM._
    
- **Null (None):** No network connectivity. Useful for isolated processes.
    

#### 4. Hands-on: Communication 

To test connectivity, install tools inside a container:

Bash

```
apt-get update
apt-get install iproute2 iputils-ping wget -y
ip addr                # Check local IP
ping <other_container_IP>
wget <other_container_IP:PORT>
```

#### 5. Custom Networks & Best Practices

- **Create:** `docker network create <network_name>`
    
- **Manage:**
    
    - `docker run -d --name <name> --network <network_name> <image>`
        
    - `docker network connect <network> <container>`
        
    - `docker network disconnect <network> <container>`
        

#### 6. Service Discovery (DNS) 

- **Key Concept:** When containers share a custom network, they can use their **container names** as hostnames instead of IP addresses. Docker's embedded DNS server handles the resolution.
    
- **Important:** This feature **only works on user-defined networks**. It does not work on the default `bridge` network. Using user-defined networks is a best practice to achieve proper network isolation and easy service discovery.




Definir los conceptos básicos de red, subred y gateway
Bridge si no especificas ninguna red. Docker la configura con cortafuegos, acceso a internet por anfitrión. 

docker networks ls muestra las redes.

Controladores:
- bridge
- host (se utiliza la red del anfitrión. Esto no funciona en Windows o MAC porque ellos levantan su máquina virtual, en Linux sí tiene sentido y funciona bien, pues comparte la misma IP y tiene los mismos puertos abiertos)
- null

docker network inspect <name>. Nos da una salida en json. Nos muestra la IPAM donde se indica la subred y puerta de enlace que utiliza, los contenedores de esta red

Intentemos comunicarnos entre contenedores. Entra en la consola de uno de los contenedores y ejecuta

`apt-get update
  apt-get install iproute2 -y
  ip addr
  apt-get install iputils-ping -y
  pin <IP other container>
  apt-get install wget -y
  wget <IP other container:PORT> 
  
`
Vamos a crear nuestras propias redes:

`docker network create <network_name>
 docker network ls
 docker network inspect <network_name> # Verás que ha creado una nueva subred
 
`
Añadamos contenedores a la red:

`
docker run -d --name <container_name> --network <network name> <docker image>
`
Conectar un contenedor a otra red

´
docker network connect <docker network> <docker container name>
´
Para desconectarlo de una red
`
docker network disconnect <docker network> <docker container name>
`

Cuando nos contenedores están dentro de la misma red, en vez de usar las IP de cada uno para hacer, por ejemplo, un PING, podría usarse el nombre del contenedor. De esta forma, hemos conseguido ejecutar el comando usando la DNS. 

Por defecto, el DNS del contanedor será el propio nombre del contenedor. 

Esto solo funciona en las redes que tú crees, la red bridge por defecto no hace esto. Además, no es buena práctica usar la red por defecto para levantar todos los servicios, entre otras cosas porque todos podrán
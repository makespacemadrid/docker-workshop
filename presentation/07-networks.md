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

*Description
The project is demo project providing a solution that implmenting GRPC with VueJS and C#. 
Front-end: VueJS
API: GRPC
Back-end: ASP.NET CORE

*Deploy to localhost
**change client api url
/src/store/actions.ts
```
const host:string = "http://YOUR_IP_ADDRESS:8000"; => const host:string = "http://localhost:8000";
```
/src/store/state.ts
```
host:"http://10.0.0.247:8000", => host:"http://localhost:8000",
```
```
docker-compose build --f
```
```
docker-compose up
```

open browser
```
http://localhost:8080
```

*Deploy to docker swarm (no need to change file)

```
docker-compose build --f
```
```
docker-compose up
```
```
docker-compose push
```

**Copy docker-compose.deploy.yml to node
```
scp docker-compose.deploy.yml host@address:/PATH 
```

Database configuration can be changed in .yml 
```
    environment:
      - DATABASE_HOST=YOURHOST
      - DATABASE_NAME=comp
      - DATABASE_USERNAME=YOURUSRNAME
      - DATABASE_PASSWORD=YOURPASSWORD
```

Pull the docker from repository
```
docker pull YOUR.DOCKER.REGISTRY:PORT/webserver
```
```
docker pull YOUR.DOCKER.REGISTRY:PORT/webclient
```
```
docker pull YOUR.DOCKER.REGISTRY:PORT/webproxy
```
```
docker stack deploy --compose-file docker-compose.deploy.yml comp 
```

In browser
```
http://YOUR_IP_ADDRESS:8080
```

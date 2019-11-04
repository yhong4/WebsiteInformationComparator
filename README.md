*Deploy to localhost
**change client api url
/src/store/actions.ts
```
const host:string = "http://10.0.0.247:8000"; => const host:string = "http://localhost:8000";
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
      - DATABASE_NAME=pricecomp
      - DATABASE_USERNAME=YOURUSRNAME
      - DATABASE_PASSWORD=YOURPASSWORD
```

Pull the docker from repository
```
docker pull registry.msy.com.au:5000/pricecomparisonserver
```
```
docker pull registry.msy.com.au:5000/pricecomparisonclient
```
```
docker pull registry.msy.com.au:5000/pricecomparisonproxy
```
```
docker stack deploy --compose-file docker-compose.deploy.yml pricecomp 
```

In browser
```
http://10.0.0.247:8080
```

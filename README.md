# Recipies

# RUN docker-compose on DEV
docker-compose -f docker-compose.dev.yml up -d
 
# VM

Enter the VM and provide password.

```
ssh p2@149.156.43.57
```

then

```
ssh p2
```

# Deploying

push image to a repo

```
docker tag recipes-{app} inith/recipes-{app}:{version}
docker push inith/recipes-{app}:{version}
```

Then, at the VM, pull the image
## Docker

```{console}

  # Build a new image from the source Dockerfile at path with the tag "my_microservice:v1"
  docker build -t "my_microservice:v1" .

  # New image my_microservice
  docker images

  # Run image
  docker run -d -p 3000:3000 "my_microservice:v1"

  # List running instances
  docker ps

```

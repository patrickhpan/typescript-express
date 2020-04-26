CONTAINER_NAME=${1:-postgres}
PASSWORD=${2:-password}
docker run -d --name "$CONTAINER_NAME" -p 5432:5432 -e "POSTGRES_PASSWORD=$PASSWORD" postgres
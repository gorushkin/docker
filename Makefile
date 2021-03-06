# сборка контейнера из файла, который располагается по пути "." - docker build . -t "container-name"

build-db:
	docker build ./database -t database

node-b:
	docker build . -t node

# запуск контейнера - docker run "container-name"
node-r:
	docker run -p 4000:4000 --name node_container node

# запуск контейнера с именем node_container с подключенными папками
# Run is a combination of create and start. It creates the container and starts it.
node-create:
	docker create --name node_container -p 4000:4000 -v "$$(pwd)"/src/:/usr/app/src/ node

# Start will start any stopped containers. This includes freshly created containers.
# Запускает контенер с выводом в терминал
node-start:
	docker container start node_container -a

run-db:
	docker run database

build:
	docker-compose build

start:
	docker-compose up

stop:
	docker-compose down

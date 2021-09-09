# сборка контейнера из файла, который располагается по пути "." - docker build . -t "container-name"

build-db:
	docker build ./database -t database

node-b:
	docker build . -t my_node

# запуск контейнера - docker run "container-name"
node-r:
	docker run -p 4000:4000 my_node

run-db:
	docker run database

build:
	docker-compose build

start:
	docker-compose up

stop:
	docker-compose down

# сборка контейнера из файла, который располагается по пути "." - docker build . -t "container-name"

build-db:
	docker build ./database -t database

build-node:
	docker build . -t node

# запуск контейнера - docker run "container-name"
run-node:
	docker run -p 4000:4000 node

run-db:
	docker run database

compose-build:
	docker-compose build

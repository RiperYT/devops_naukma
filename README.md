# devops_naukma
Створюємо image:
docker build -t devops_naukma .

Запускаємо контейнер з обмеженнями для перевірки:
docker run --name Week4_Devops -p 80:80 --cpus=2 --memory=512m devops_naukma

Дивимось id:
docker image ls

Встановлюємо тег:
docker tag 72d riperyt/devops_naukma_week2:devops_naukma

Пушимо в Docker Hub:
docker push riperyt/devops_naukma_week2:devops_naukma
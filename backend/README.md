# Requirements

- openjdk17
- postgres
- mvn
- docker

# Usage DEV

pull image
```bash
docker pull postgres:16-alpine
```

run postgres
```bash
docker run --name postgres_container -e POSTGRES_PASSWORD=root -e POSTGRES_USER=postgres -e POSTGRES_DB=recipes -d -p 5432:5432 --restart=always postgres:16-alpine
```

postgres docker exec basics
```bash
\l - list dbs
psql -U postgres -d recipes
\dt - list tables
```

build jar and skip tests & running app
```bash
mvn clean package -DskipTests spring-boot:repackage
```

build image api
```bash 
docker build -t recipes:v0 .
```

run api
```bash
docker run --name recipes_container_v0 -p 8080:8080 -d recipes:v0
```

POST api/v0/recipes
``` json
{
    "title": "Prosty sernik",
    "category": "CAKES_AND_PIES",
    "recipeIngredients": [
        {
            "ingredient": {
                "name": "twaróg"
            },
            "quantity": "1 kg"
        },
        {
            "ingredient": {
                "name": "jajka"
            },
            "quantity": "5 sztuk"
        },
        {
            "ingredient": {
                "name": "cukier"
            },
            "quantity": "250 g"
        }, 
        {
            "ingredient": {
                "name": "masło" 
            },
            "quantity": "150 g"
        }
    ],
    "tags": [
        {
            "name": "słodkie"
        },
        {
            "name": "ciasto" 
        }
    ],
    "calories": 270,
    "protein": 10,
    "carbs": 30,
    "fats": 15,
    "mdFilePath": "recipes/simple_cheesecake.md",
    "imagePath": "recipes/images/simple_cheesecake.jpg",
    "preparationTime": "1h 20min",
    "rate": 4.6
  }
```
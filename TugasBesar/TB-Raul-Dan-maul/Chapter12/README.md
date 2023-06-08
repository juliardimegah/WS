# BAB XII
# CARA MEMBUAT CRUD

# LANGKAH MUDAH MEMBUAT CRUD + FRONT END

## 1)	Buatlah folder 

![image](https://github.com/kerjabhakti/WS/assets/98022263/500339ab-d5a1-4643-90e9-e9ed49b18d79)

Buatlah folder seperti gambar diatas ini

## 2)	Selanjutnya masukan ke VSC (Visual Studio Code)

![image](https://github.com/kerjabhakti/WS/assets/98022263/fb693168-a800-4eed-8c1b-630c658c5837)

## 3)	Klik Shift + ctrl + ` bersamaan

![image](https://github.com/kerjabhakti/WS/assets/98022263/e42436c5-2027-4d57-944a-f716f0019822)

## 4)	HIngga seperti di atas ini

## 5)	Masukan perintah berikut 

```
go mod init github.com/akhil/gql-yt
```

![image](https://github.com/kerjabhakti/WS/assets/98022263/f8620a53-99d0-47be-a2e7-4bc7ec6e068e)

![image](https://github.com/kerjabhakti/WS/assets/98022263/a6abb09a-da28-479e-b07d-d365250a170b)

## 6)	Ketikan perintah berikut : 
```
Go get github.com/99designs/gqlgen
```

Tunggu hingga seperti ini 

![image](https://github.com/kerjabhakti/WS/assets/98022263/472e3dab-832e-4447-a095-f3209935f180)

![image](https://github.com/kerjabhakti/WS/assets/98022263/6cde522d-fe43-4a85-b587-683c1e6545b4)

Berikut yang harus disiapkan dan cara menggunakannya secara sederhana 
•	Buat folder baru untuk Project ```mkdir gql-yt```

•	Mod init proyek Anda, berikan nama apa pun yang Anda suka ```go mod init github.com/akhil/gql-yt```

•	Dapatkan gql gen untuk proyek Anda, dapatkan ```github.com/99designs/gqlgen```

•	Tambahkan gqlgen ke ```tools.g```o printf '// +build tools\npackage tools\nimport _ "github.com/99designs/gqlgen"' | gofmt > tools.go

•	Dapatkan semua dependensi menjadi ```mod rapi```

•	Inisialisasi proyek Anda, jalankan ```github.com/99designs/gqlgen init```

•	Setelah Anda menulis skema graphql, jalankan ini - jalankan ```github.com/99designs/gqlgen generate```

•	Setelah Anda membangun proyek, ini adalah kueri untuk berinteraksi dengan API -


## 7)	Langkah Selanjutnya  
Selanjutnya yaitu melanjutkan ```printf '// +build tools\npackage tools\nimport _ "github.com/99designs/gqlgen"' | gofmt > tools.go```

```
printf '// +build tools\npackage tools\nimport _ "github.com/99designs/gqlgen"' | gofmt > tools.go
```

![image](https://github.com/kerjabhakti/WS/assets/98022263/a9fe5aa1-ac0b-44b0-affd-e8612e6510b4)

## 8)	Masukan perintah berikut : 

```
go get github.com/99designs/gqlgen
```

![image](https://github.com/kerjabhakti/WS/assets/98022263/9208e935-68ed-48bd-86f5-fe782a5bdd78)

## 9)	Go mod Tidy

```
Go mod Tidy
```

![image](https://github.com/kerjabhakti/WS/assets/98022263/87737b1e-2e0e-4d66-9e3e-178c3082795a)

## 10) Kemudian ls

```
ls
```

![image](https://github.com/kerjabhakti/WS/assets/98022263/a47e4fb5-f183-4c1e-9ae6-f486a0fbfa7c)

## 11) Masukan cat tools.go

```
cat tools.go
```

![image](https://github.com/kerjabhakti/WS/assets/98022263/5796d63d-0cd4-471e-bbd9-bf4deb5d41cf)

## 12) Ketikan perintah berikut : 

```
go run github.com/99designs/gqlgen init
```

![image](https://github.com/kerjabhakti/WS/assets/98022263/17f36b59-56b1-4ed7-a0c1-72b233212bdd)

## 13) Ketikan code . untuk membuka vs code

```
code . 
```

![image](https://github.com/kerjabhakti/WS/assets/98022263/a8eca404-e85c-4bec-9347-63a53779144a)

## 14) Bualah folder dengan nama database dan isi dari folder database itu 
Namanya database.go
Masukan kode berikut ini :

```
package database

import (
    "context"
    "log"
    "time"

    "github.com/akhil/gql-yt/graph/model"
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/bson/primitive"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "go.mongodb.org/mongo-driver/mongo/readpref"
)

var connectionString string = "mongodb://raulgantengbanget:0nGCVlPPoCsXNhqG@ac-oilbpwk-shard-00-00.9ofhjs3.mongodb.net:27017,ac-oilbpwk-shard-00-01.9ofhjs3.mongodb.net:27017,ac-oilbpwk-shard-00-02.9ofhjs3.mongodb.net:27017/test?replicaSet=atlas-13x7kp-shard-0&ssl=true&authSource=admin"

type DB struct {
    client *mongo.Client
}

func Connect() *DB {
    client, err := mongo.NewClient(options.Client().ApplyURI(connectionString))
    if err != nil {
        log.Fatal(err)
    }
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()
    err = client.Connect(ctx)
    if err != nil {
        log.Fatal(err)
    }
    err = client.Ping(ctx, readpref.Primary())
    if err != nil {
        log.Fatal(err)
    }
    return &DB{
        client: client,
    }
}

func (db *DB) GetJob(id string) *model.JobListing {
    jobCollec := db.client.Database("graphql-job-board").Collection("jobs")
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()

    _id, _ := primitive.ObjectIDFromHex(id)
    filter := bson.M{"_id": _id}
    var JobListing model.JobListing
    err := jobCollec.FindOne(ctx, filter).Decode(&JobListing)
    if err != nil {
        log.Fatal(err)
    }

    return &JobListing
}

func (db *DB) GetJobs() []*model.JobListing {
    jobCollec := db.client.Database("graphql-job-board").Collection("jobs")
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()
    var JobListings []*model.JobListing
    cursor, err := jobCollec.Find(ctx, bson.D{})
    if err != nil {
        log.Fatal(err)
    }
    if err = cursor.All(context.TODO(), &JobListings); err != nil {
        panic(err)
    }
    return JobListings
}
func (db *DB) CreateJobListing(jobInfo model.CreateJobListingInput) *model.JobListing {
    jobCollec := db.client.Database("graphql-job-board").Collection("jobs")
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()
    inserted, err := jobCollec.InsertOne(ctx, bson.M{
        "title":       jobInfo.Title,
        "description": jobInfo.Description,
        "url":         jobInfo.URL,
        "company":     jobInfo.Company,
    })

    if err != nil {
        log.Fatal(err)
    }
    InsertedID := inserted.InsertedID.(primitive.ObjectID).Hex()
    returnJobListing := model.JobListing{ID: InsertedID,
        Title:       jobInfo.Title,
        Company:     jobInfo.Company,
        Description: jobInfo.Description,
        URL:         jobInfo.URL,
    }
    return &returnJobListing
}
func (db *DB) UpdateJobListing(jobId string, jobInfo model.UpdateJobListingInput) *model.JobListing {
    jobCollec := db.client.Database("graphql-job-board").Collection("jobs")
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()

    updateJobInfo := bson.M{}
    if jobInfo.Title != nil {
        updateJobInfo["title"] = jobInfo.Title
    }
    if jobInfo.Description != nil {
        updateJobInfo["description"] = jobInfo.Description
    }
    if jobInfo.URL != nil {
        updateJobInfo["url"] = jobInfo.URL
    }
    _id, _ := primitive.ObjectIDFromHex(jobId)
    filter := bson.M{"_id": _id}
    update := bson.M{"$set": updateJobInfo}

    results := jobCollec.FindOneAndUpdate(ctx, filter, update, options.FindOneAndUpdate().SetReturnDocument(1))

    var jobListing model.JobListing

    if err := results.Decode(&jobListing); err != nil {
        log.Fatal(err)
    }

    return &jobListing
}
func (db *DB) DeleteJobListing(jobId string) *model.DeleteJobResponse {
    jobCollec := db.client.Database("graphql-job-board").Collection("jobs")
    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()

    _id, _ := primitive.ObjectIDFromHex(jobId)
    filter := bson.M{"_id": _id}
    _, err := jobCollec.DeleteOne(ctx, filter)
    if err != nil {
        log.Fatal(err)
    }
    return &model.DeleteJobResponse{DeletedJobID: jobId}
}
```

## 15) Schema.graphqls didalam file ini masukan 

```
# GraphQL schema example
#
# https://gqlgen.com/getting-started/

type JobListing {
  _id: ID!
  title: String!
  description: String!
  company: String!
  url: String!
}

type Query {
  jobs: [JobListing!]!
  job(id: ID!): JobListing!
}

type Mutation {
  createJobListing(input: CreateJobListingInput!): JobListing!
  updateJobListing(id: ID!, input: UpdateJobListingInput!): JobListing!
  deleteJobListing(id: ID!): DeleteJobResponse!
}

input CreateJobListingInput {
  title: String!
  description: String!
  company: String!
  url: String!
}

input UpdateJobListingInput {
  title: String
  description: String
  url: String
}

type DeleteJobResponse {
  deletedJobId: String!
}
```

## 16) Didalam file generate hapus hingga seperti ini

![image](https://github.com/kerjabhakti/WS/assets/98022263/b02b5273-2961-4df8-852d-b16c16538708)

## 17) Di dalam file schema.resolvers.go

```
package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.27

import (
    "context"

    "github.com/akhil/gql-yt/database"
    "github.com/akhil/gql-yt/graph/model"
)

// CreateJobListing is the resolver for the createJobListing field.
func (r *mutationResolver) CreateJobListing(ctx context.Context, input model.CreateJobListingInput) (*model.JobListing, error) {
    return db.CreateJobListing(input), nil
}

// UpdateJobListing is the resolver for the updateJobListing field.
func (r *mutationResolver) UpdateJobListing(ctx context.Context, id string, input model.UpdateJobListingInput) (*model.JobListing, error) {
    return db.UpdateJobListing(id, input), nil
}

// DeleteJobListing is the resolver for the deleteJobListing field.
func (r *mutationResolver) DeleteJobListing(ctx context.Context, id string) (*model.DeleteJobResponse, error) {
    return db.DeleteJobListing(id), nil
}

// Jobs is the resolver for the jobs field.
func (r *queryResolver) Jobs(ctx context.Context) ([]*model.JobListing, error) {
    return db.GetJobs(), nil
}

// Job is the resolver for the job field.
func (r *queryResolver) Job(ctx context.Context, id string) (*model.JobListing, error) {
    return db.GetJob(id), nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//   - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//     it when you're done.
//   - You have helper methods in this file. Move them out to keep these resolver files clean.
var db = database.Connect()
```

## 18) Setelah itu go mod tidy

```
go mod tidy
```

## 19) Lalu go run server.go

```
go run server.go
```

hingga muncul seperti ini

![image](https://github.com/kerjabhakti/WS/assets/98022263/7b0c6c90-728a-4a7d-acd3-1645acb811f2)







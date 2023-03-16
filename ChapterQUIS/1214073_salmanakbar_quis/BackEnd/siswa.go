package datasiswa

import (
	"context"
	"fmt"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"gopkg.in/mgo.v2/bson"
)

var MongoString string = os.Getenv("MONGOSTRING")

func MongoConnect(dbname string) (db *mongo.Database) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(MongoString))
	if err != nil {
		fmt.Printf("MongoConnect: %v\n", err)
	}
	return client.Database(dbname)
}

func InsertOneDoc(db string, collection string, doc interface{}) (insertedID interface{}) {
	insertResult, err := MongoConnect(db).Collection(collection).InsertOne(context.TODO(), doc)
	if err != nil {
		fmt.Printf("InsertOneDoc: %v\n", err)
	}
	return insertResult.InsertedID
}

func InsertAbsen(long float64, lat float64, lokasi string, phonenumber string, checkin string, biodata Siswa) (InsertedID interface{}) {
	var absen Absen
	absen.Latitude = long
	absen.Longitude = lat
	absen.Location = lokasi
	absen.Phone_number = phonenumber
	absen.Datetime = primitive.NewDateTimeFromTime(time.Now().UTC())
	absen.Checkin = checkin
	absen.Biodata = biodata
	return InsertOneDoc("adorable", "absen", absen)
}

func GetKaryawanFromPhoneNumber(phone_number string) (staf Absen) {
	karyawan := MongoConnect("adorable").Collection("presensi")
	filter := bson.M{"phone_number": phone_number}
	err := karyawan.FindOne(context.TODO(), filter).Decode(&staf)
	if err != nil {
		fmt.Printf("getKaryawanFromPhoneNumber: %v\n", err)
	}
	return staf
}

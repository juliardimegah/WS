#Chapter QUIS PEMROGRAMAN III (WEBSERVICE)

````

#FRONT END

~~~~ Dibawah ini merupakan source code form register untuk test API form register

Source Code :

```go
    <!DOCTYPE html>
<html lang="en">
<head>
    <title>Page title</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap">
    <link rel="stylesheet" href="css/tailwind/tailwind.min.css">
    <link rel="icon" type="image/png" sizes="32x32" href="shuffle-for-tailwind.png">
    <script src="js/main.js"></script>
</head>
<body class="antialiased bg-body text-body font-body">
    <div class="">

      <section class="relative pt-16 pb-36 bg-gradient-gray2 overflow-hidden">
        <img class="absolute top-0 transform left-1/2 -translate-x-1/2" src="gradia-assets/elements/sign-up/radial2.svg" alt="">
        <div class="relative z-10 container mx-auto px-4">
          <img class="mx-auto mb-40" src="gradia-assets/logos/gradia-name-black.svg" alt="">
          <div class="flex flex-wrap -m-6">
            <div class="w-full p-6">
              <div class="md:max-w-xl text-center mx-auto">
                <h2 class="mb-4 font-heading font-bold text-gray-900 text-6xl sm:text-7xl">Ready to get started?</h2>
                <p class="mb-11 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
                <div class="flex flex-wrap max-w-md mx-auto -m-2 mb-5">
                  <div class="w-full p-2">
                    <input id = "namalengkap" class="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" type="text" placeholder="Full name" name="full-name">
                  </div>
                  <div class="w-full p-2">
                    <input id = "email" class="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" type="text" placeholder="Email address" name="email">
                  </div>
                  <div class="w-full p-2">
                    <input id = "password" class="w-full px-5 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none focus:ring-4 focus:ring-indigo-500 border border-gray-200 rounded-lg" type="password" placeholder="Password" name="password">
                  </div>
                  <div class="w-full p-2">
                    <div class="group relative">
                      <div class="absolute top-0 left-0 w-full h-full bg-gradient-blue opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
                      <button class="p-1 w-full font-heading font-medium text-base text-white overflow-hidden rounded-md">
                        <div class="relative py-4 px-9 bg-gradient-blue overflow-hidden rounded-md">
                          <div class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"></div>
                          <p  onclick="PushButton()" id="tombol" class="relative z-10">Sign Up</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <p class="text-base text-gray-600">
                  <span>Already have an account?</span>
                  <a class="text-gray-900 hover:text-gray-700" href="#">Login now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
        <script src="./js/first.js"></script>

</body>
</html>
```

Hasil dari tampilan Front End

![image](https://github.com/AdrianBhp43/WS/blob/main/ChapterQUIS/1214074_adrianbhp_QUIS/foto/Dashboard%20UI.png?raw=true)

Hasil dari tampilan Pipedream

![image](![image](https://github.com/AdrianBhp43/WS/blob/main/ChapterQUIS/1214074_adrianbhp_QUIS/foto/Dashboard%20UI.png?raw=true)

#Selanjutnya, dibawah ini merupakan source code dari file first.js yang berfungsi untuk menarik API

```go
function PostSignUp(namalengkap,email,password){
       var myHeaders = new Headers();
       myHeaders.append("Login", "rollygantengsekali");
       myHeaders.append("Content-Type", "application/json");

       var raw = JSON.stringify({
           "namalengkap": namalengkap,
           "email": email,
           "password": password
       });

       var requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
       };

       fetch("https://eobdc7imwva8gel.m.pipedream.net", requestOptions)
           .then(response => response.text())
           .then(result => console.log(result))
           .catch(error => console.log('error', error));
}
 function PushButton(){
       namalengkap = document.getElementById("namalengkap").value;
       email=document.getElementById("email").value;
       password=document.getElementById("password").value;
       PostSignUp(namalengkap,email,password);
 }
```

#Membuat database menggunakan MongoDB Compass dan MongoDB

Output dari MongoDB Compass
![image](https://github.com/AdrianBhp43/WS/blob/main/ChapterQUIS/1214074_adrianbhp_QUIS/foto/Berhasil.png?raw=true)

Output dari MongoDB

![image](https://github.com/AdrianBhp43/WS/blob/main/ChapterQUIS/1214074_adrianbhp_QUIS/foto/Dashboard%20UI.png?raw=true)

# Membuat Backend menggunakan Go

Setelah berhasil membuat Front-End dan Database, selanjutnya dilanjutkan membuat struct, package, testing, dan publish package

Source Code :

1. Struct

```go
package adrianbhp

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Karyawan struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Nama         string             `bson:"nama,omitempty" json:"nama,omitempty"`
	Phone_number string             `bson:"phone_number,omitempty" json:"phone_number,omitempty"`
	Jabatan      string             `bson:"jabatan,omitempty" json:"jabatan,omitempty"`
	Jam_kerja    []JamKerja         `bson:"jam_kerja,omitempty" json:"jam_kerja,omitempty"`
	Hari_kerja   []string           `bson:"hari_kerja,omitempty" json:"hari_kerja,omitempty"`
}

type JamKerja struct {
	Durasi     int      `bson:"durasi,omitempty" json:"durasi,omitempty"`
	Jam_masuk  string   `bson:"jam_masuk,omitempty" json:"jam_masuk,omitempty"`
	Jam_keluar string   `bson:"jam_keluar,omitempty" json:"jam_keluar,omitempty"`
	Gmt        int      `bson:"gmt,omitempty" json:"gmt,omitempty"`
	Hari       []string `bson:"hari,omitempty" json:"hari,omitempty"`
	Shift      int      `bson:"shift,omitempty" json:"shift,omitempty"`
	Piket_tim  string   `bson:"piket_tim,omitempty" json:"piket_tim,omitempty"`
}

type Presensi struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Longitude    float64            `bson:"longitude,omitempty" json:"longitude,omitempty"`
	Latitude     float64            `bson:"latitude,omitempty" json:"latitude,omitempty"`
	Location     string             `bson:"location,omitempty" json:"location,omitempty"`
	Phone_number string             `bson:"phone_number,omitempty" json:"phone_number,omitempty"`
	Datetime     primitive.DateTime `bson:"datetime,omitempty" json:"datetime,omitempty"`
	Checkin      string             `bson:"checkin,omitempty" json:"checkin,omitempty"`
	Biodata      Karyawan           `bson:"biodata,omitempty" json:"biodata,omitempty"`
}

type Lokasi struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Nama     string             `bson:"nama,omitempty" json:"nama,omitempty"`
	Batas    Geometry           `bson:"batas,omitempty" json:"batas,omitempty"`
	Kategori string             `bson:"kategori,omitempty" json:"kategori,omitempty"`
}

type Geometry struct {
	Type        string      `json:"type" bson:"type"`
	Coordinates interface{} `json:"coordinates" bson:"coordinates"`
}

``` sh
go mod tidy github.com/AdrianBhp43/
WS/ChapterQUIS/1214074_adrianbhp_QUIS
/backend
```

selanjutnya membuat type.go

2. Function

``` go
package adrianbhp

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

func InsertPresensi(long float64, lat float64, lokasi string, phonenumber string, checkin string, biodata Karyawan) (InsertedID interface{}) {
	var presensi Presensi
	presensi.Latitude = long
	presensi.Longitude = lat
	presensi.Location = lokasi
	presensi.Phone_number = phonenumber
	presensi.Datetime = primitive.NewDateTimeFromTime(time.Now().UTC())
	presensi.Checkin = checkin
	presensi.Biodata = biodata
	return InsertOneDoc("adorable", "presensi", presensi)
}

func GetKaryawanFromPhoneNumber(phone_number string) (staf Presensi) {
	karyawan := MongoConnect("adorable").Collection("presensi")
	filter := bson.M{"phone_number": phone_number}
	err := karyawan.FindOne(context.TODO(), filter).Decode(&staf)
	if err != nil {
		fmt.Printf("getKaryawanFromPhoneNumber: %v\n", err)
	}
	return staf
}
```


3. Test

```go
package adrianbhp

import (
	"fmt"
	"testing"
)

func TestInsertPresensi(t *testing.T) {
	long := 98.345345
	lat := 123.561651
	lokasi := "rumah"
	phonenumber := "6811110023231"
	checkin := "masuk"
	biodata := Karyawan{
		Nama:         "ujang",
		Phone_number: "6284564562",
		Jabatan:      "tukang sapu",
	}
	hasil := InsertPresensi(long, lat, lokasi, phonenumber, checkin, biodata)
	fmt.Println(hasil)

}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "6811110023231"
	biodata := GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}
```
#Output Golang

![image](https://github.com/AdrianBhp43/WS/blob/main/ChapterQUIS/1214074_adrianbhp_QUIS/foto/Output%20Golang.png?raw=true)

````

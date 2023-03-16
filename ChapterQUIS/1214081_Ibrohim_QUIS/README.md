# Lokasi File

![1](https://user-images.githubusercontent.com/93715182/225523369-40b7c1e5-3045-49ad-be53-6ffbdee21db2.png)

Folder "Foto Bukti" berisi foto yang membuktikan bahwa aplikasi ini berjalan dengan baik, folder "SourceCode" berisi source code yang digunakan dalam membuat aplikasi ini

![2](https://user-images.githubusercontent.com/93715182/225523633-04d13b27-8f9d-45e0-a849-a7136714af6e.png)

Dalam folder "SourceCode" terdapat folder "public", folder tersebut adalah lokasi file index.html, javascript, dan golang berada

![3](https://user-images.githubusercontent.com/93715182/225523849-50d8b3ea-ae50-4d15-b540-5ddf9083e2cf.png)

Javascript yang terhubung dengan pipedream terdapat pada folder "js" dengan nama "lol.js", sedangkan golang yang terhubung dengan mongodb terdapat pada folde "golang"

# index.html
berikut adalah source code dari file index.html
```go
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page title</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link rel="stylesheet" href="css/tailwind/tailwind.min.css">
    <link rel="icon" type="image/png" sizes="32x32" href="shuffle-for-tailwind.png">
    <script src="js/main.js"></script>
</head>
<body class="antialiased bg-body text-body font-body">
    <div class="">
                
      <section class="relative py-20">
        <img class="hidden lg:block absolute top-0 left-0 mt-16 z-10" src="zeus-assets/icons/dots/blue-dot-left-bars.svg" alt="">
        <img class="hidden lg:block absolute bottom-0 right-0 mb-16" src="zeus-assets/icons/dots/yellow-dot-right-shield.svg" alt="">
        <div class="absolute top-0 left-0 lg:bottom-0 h-128 lg:h-auto w-full lg:w-8/12 bg-gray-50"></div>
        <div class="relative container px-4 mx-auto">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div class="max-w-lg">
                <h2 class="mb-10 text-4xl font-semibold font-heading">Organisasi Mahasiswa</h2>
                <p class="text-xl text-gray-500">Bergabungla dengan kami agar anda dapat mengetahui info terbaru mengenai berita - berita kampus ULBI.</p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="lg:max-w-md p-6 lg:px-10 lg:py-12 bg-white text-center border rounded-xl">
                <form action="#">
                  <span class="inline-block mb-4 text-xs text-blue-400 font-semibold">Sign Up</span>
                  <h3 class="mb-12 text-3xl font-semibold font-heading">Create new account</h3>
                  <div class="relative flex flex-wrap mb-6">
                    <input class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded" id="email" type="email" placeholder="ibrohim@gmail.com">
                    <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">Your email address</span>
                  </div>
                  <div class="relative flex flex-wrap mb-6">
                    <input class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded" id="password" type="password" placeholder="******">
                    <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">Password</span>
                  </div>
                  <button onclick="Daftar()" class="w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200">Get Started</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
<script src="js/lol.js"></script>
  </body>
</html>
```

berikut adalah tampilan index.html setelah dijalankan menggunakan live server

![4](https://user-images.githubusercontent.com/93715182/225524419-b06b12a2-c907-41cb-9007-56147375a6ab.png)

# lol.js

```go
function Daftar(){
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(email,password);
  }
  
  function PostSignUp(email,password){
    var myHeaders = new Headers();
myHeaders.append("Login", "asalasallogin");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eoz9iiqe1jrod42.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  
  function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
}
```

Source code di atas berguna untuk mengirimkan data ke pipedream setelah onclick Daftar() diaktifkan dan juga memunculkan console.log

![5](https://user-images.githubusercontent.com/93715182/225524766-96044595-4e7d-4fc5-b884-ffc0d10c8ca8.png)

Gambar di atas adalah contoh setelah mengaktifkan fungsi Daftar

# mongodb

Untuk menghubungkan mongodb dengan komputer kita perlu menambahkannya pada system environment kita

![6](https://user-images.githubusercontent.com/93715182/225526808-f8f4a8cf-5a09-4a99-942a-60302b32255d.png)

kita menambahkan "GOPROXY" dan "MONGOSTRING", value MONGOSTRING dapat kita ambil dari mongo atlas kita masing masing dan sesuaikan passwordnya

# golang

Selanjutnya melakukan instalasi pada folder golang

```sh
go mod init github.com/kerjabhakti/WS/ChapterQUIS/1214078_Ibrohim_QUIS/SourceCode/public/golang
```
Selanjutnya membuat file type.go yang berisi source code berikut

```go
package ibrohim

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
```

Setelah itu jalankan perintah berikut untuk instal module

```sh
go mod tidy
```

Setelah itu buat file func.go yang berisikan source code berikut

```go
package ibrohim

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
	return InsertOneDoc("chapterquiz", "testing", presensi)
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

Setelah itu jalankan perintah berikut untuk instal module

```sh
go mod tidy
```

Terakhir buat file for_test.go yang berisikan source code berikut

```go
package ibrohim

import (
	"fmt"
	"testing"
)

func TestInsertPresensi(t *testing.T) {
	long := 98.345345
	lat := 123.561651
	lokasi := "Kampus"
	phonenumber := "081271720763"
	checkin := "masuk"
	biodata := Karyawan{
		Nama:         "Ibrohim",
		Phone_number: "081271720763",
		Jabatan:      "Mahasiwa TI",
	}
	hasil := InsertPresensi(long, lat, lokasi, phonenumber, checkin, biodata)
	fmt.Println(hasil)

}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "081271720763"
	biodata := GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}
```

Kemudian jalan kan perintah ini untuk menjalankannya

```sh
go test
```

# TUGAS 1 JS

Hasil pengerjaan mengerjakan membuat front end menggunakan tailwaind dan memunculkan console.log sudah berhasil dan memunculkan kata sukses
hasil datanya sudah masuk dari si responnya dan data dari pipe dreamnya sudah masuk juga
berikut gambarnya

![image](https://github.com/kerjabhakti/WS/blob/main/ChapterQUIS/1214053-_Raul_QUIZ/foto/RESPONDARIPIPEDREAM.png?raw=true)
kita melakukan get dari html dan memunculakan hasil respon yang kita ke dalam pipe dream dan hasilnya sudah masuk kita melakkukan POST

![image](https://github.com/kerjabhakti/WS/blob/main/ChapterQUIS/1214053-_Raul_QUIZ/foto/muncul%20respon%20pipe%20dream.png?raw=true)
ini adalah gambar hasil dari respon POST yang barusan kita lakukan di gambar di atas isinya nama raul dan alamtnya jalan depok
![image](https://github.com/kerjabhakti/WS/blob/main/ChapterQUIS/pengumpulantugas/1214053-_Raul/foto/console.log%20javascript.png?raw=true)
ini adalah tugas dari pak ronni yang harus memunculkan console log dan hasilnya succees
![image](https://github.com/kerjabhakti/WS/blob/main/ChapterQUIS/pengumpulantugas/1214053-_Raul/foto/consolelogpostsman.png?raw=true)
ini kita melalukan hit api dari post man
# berikut kodingannya dari javascript
function PushButton() {
  nama = document.getElementById("nama").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  country = document.getElementById("country").value;
  city = document.getElementById("city").value;
  PostSignUp(nama, email, password, country, city);
}

function PostSignUp(nama, email, password, country, city) {
  var myHeaders = new Headers();
  myHeaders.append("Login", "jasmine");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    nama: nama,
    email: email,
    password: password,
    country: country,
    city: city, 
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://eon8wce2nn4nck.m.pipedream.net", requestOptions)
    .then((response) => response.text())
    .then((result) => GetResponse(result))
    .catch((error) => console.log("error", error));

}

function GetResponse(result) {
  document.getElementById("formsignup").innerHTML = result;
  console.log(result)
}

## ini htmlnya
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e6e6e6">
    <meta name="msapplication-TileColor" content="#e6e6e6">
    <meta name="theme-color" content="#e6e6e6">

    <meta property="og:image" content="http://tailwindcomponents.com/storage/2335/temp66711.png?v=2023-02-20 21:54:06" />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="640" />
    <meta property="og:image:type" content="image/png" />

    <meta property="og:url" content="https://tailwindcomponents.com/component/simple-registersign-up-form/landing" />
    <meta property="og:title" content="Simple Register/Sign Up Form by Scott Windon" />
    <meta property="og:description" content="Just a simple responsive sign up form with icons" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@TwComponents" />
    <meta name="twitter:title" content="Simple Register/Sign Up Form by Scott Windon" />
    <meta name="twitter:description" content="Just a simple responsive sign up form with icons" />
            <script src="https://cdn.tailwindcss.com"></script>
    </head>
<body class="bg-gray-200">
<div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div class="bg-blue-100 text-purple-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
        <div class="md:flex w-full">
            <div class="h-screen w-1/2 bg-blue-600">
                <img src="" class="h-full w-full" />
            </div>
            <div id="formsignup" class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-black-900">DAFTAR</h1>
                </div>
                <div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Nama</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input id="nama" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-read-500" placeholder="RAUL GANTENG">
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input id="email" type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="raulmahya11@gmail.com">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input id="password" type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="1214053">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                            <label for="" class="text-xs font-semibold px-1">Country</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input id="country" type="country" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Indonesia">
                            </div>
						</div>
                    </div>
							 <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                            <label for="" class="text-xs font-semibold px-1">City</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input id="city" type="city" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="BANDUNG">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button onclick="PushButton()" id="tombol" class="block w-full max-w-xs mx-auto bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700 text-black rounded-lg px-3 py-3 font-semibold">DAFTAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="./gj.js"></script>
</body>
</html>





# TUGAS 2 GOLANG

MEMUNCULKAN HASIL PUBLISH PACKAGE struct, package, testing,
BERIKUT GAMBARNYA  

![image](https://github.com/kerjabhakti/WS/blob/main/ChapterQUIS/1214053-_Raul_QUIZ/foto/struck.png?raw=true)
ini adlaha struck yang kita buat berisi 5 element ada karyawan,jamkerja,presensi,lokasi,geometry
![image](https://github.com/kerjabhakti/WS/blob/main/ChapterQUIS/1214053-_Raul_QUIZ/foto/testgolang.png?raw=true)
kita melakukan testing menggunakan GO test dan berhasil
![image](https://github.com/kerjabhakti/WS/blob/main/ChapterQUIS/1214053-_Raul_QUIZ/foto/hasilfolder.png?raw=true)
berikut hasil go tests barusan sudah masuk kedalam mongo dbnya
![image](https://github.com/kerjabhakti/WS/blob/main/ChapterQUIS/1214053-_Raul_QUIZ/foto/hasil%20test%20masuk%20ke%20mongo.png?raw=true)
dan ini hasilnya masukkkk

berikut kodingannyanya dan isi importnya
#  func main
package struck

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
#SETELAH DI COOPY JGN LUPA go mod tidy

# json.go
package struck

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
#SETELAH DI COOPY JGN LUPA go mod tidy


# file terakhir namanya main_test.go

package struck

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
## semuah nya menggunakna go mod tidy setelahnya langung go test dan cek ke mongo dbnyanyaaaaaa

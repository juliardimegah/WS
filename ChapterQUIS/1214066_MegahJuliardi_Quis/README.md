1. Membuat Folder dengan nama NPM_NAMA_QUIS
    Dapat dilihat bahwa nama folder ini sudah sesuai dengan format
    
2. Buat tampilan frontend simpan sebagai index.html
    Tampilan telah dibuat dengan nama index.html. File tersebut dapat dijalankan dengan menggunakan local server divs code, berikut tampilan yang telah dibuat
    ![image](https://user-images.githubusercontent.com/98504755/225503293-d6d2a1f7-8962-4aa8-b16d-191196971633.png)
    Dalam page index diatas telah dilakukan test API dimana data telah ditampilkkan pada page diatas dengan menggunakan api dari link berikut "https://jsonplaceholder.typicode.com/users" Ketia dicoba dengan menggunaan postman muncul tampilan seperti berikut:
    ![image](https://user-images.githubusercontent.com/98504755/225504279-ac29dc7f-5e5d-480d-b5f6-887a853f14fe.png)

    Jika tombol daftar dibawah ditekan maka akan diredirect ke daftar.html dimana tampilannya akan seperti berikut
    ![image](https://user-images.githubusercontent.com/98504755/225503613-46a76fd0-4231-4be4-aa18-3cf93d3fa332.png)
    Dalam page diatas, pada saat tombol register ditekan maka method post akan dijalankan sehingga test post api tersebut dapat dilihat di pipe dream dengan tampilan seperti berikut:
    ![Pipedream](https://user-images.githubusercontent.com/98504755/225504500-026a944f-1995-42cf-98a7-f7a51667986a.png)
    
3. Buatlah database menggunakan mongodb.
  Berikut adalah tammpilan saat membuat db di mongodb
  ![image](https://user-images.githubusercontent.com/98504755/225504855-37e2b716-1a6d-4301-9fd6-f98fc1e4add1.png)
  kemudian connect ke mongodb compass untuk memeriksa apakah data sudah masuk atau belum, apabila sudah maka tampilan akan seperti berikut
  ![Mongo Success](https://user-images.githubusercontent.com/98504755/225505077-c4f4039d-2f46-4bbb-833d-9d5f00f3fab9.png)
  
4. Buatlah Struct, Package, Testing dan publish package mengakses database yang telah dibuat.
  file telah dibuat dengan ekstensi .go dengan nama file type.go, megah.go, dan megah_test.go
  setelah membuat seluruh file diatas, lakukan inisialisasi package dengan menjalankan perintah berikut di terminal
  
  go mod init github.com/kerjabhakti/WS/Chapter03/coba
  
  Maka akan muncul file go.mod pada lokasi filenya, setelah itu isikan 3 file tersebut dengan source code yang dibutuhkan. kemudian lakukan kompilasi depedensi dengan menggunakan :
  
  go mod tidy
  
  Setelah melakukan kompilasi depedensi maka akan muncul file go.sum. Kemudian lakukan testing dengan menggunakan perintah
  
  go test
  
  Lalu tunggu hingga proses testing selesai. Apabila test berhasil maka akan muncul respon seperti berikut :
![image](https://user-images.githubusercontent.com/98504755/225506381-d5fcd773-4bcc-4890-b8e4-72dbfe8a4ff0.png)

  Apa bila gagal maka aan muncul respon sebagai berikut :  
  ![terminal error db](https://user-images.githubusercontent.com/98504755/225506458-0fd1c77b-2fc2-468d-928b-2bc64d805a26.png)
  
  
  
  Source code:
  1. Index.html
  
  <!DOCTYPE html>
<!-- This site was created in Webflow. https://www.webflow.com --><!-- Last Published: Thu Mar 16 2023 02:07:18 GMT+0000 (Coordinated Universal Time) -->
<html
  data-wf-domain="test-site-a4d249.webflow.io"
  data-wf-page="6411814033dc41772bc695af"
  data-wf-site="641172b76a7d95b7fca3b066"
>
  <head>
    <meta charset="utf-8" />
    <title>Quiz</title>
    <meta content="pricing" property="og:title" />
    <meta content="pricing" property="twitter:title" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="Webflow" name="generator" />
    <link
      href="https://uploads-ssl.webflow.com/641172b76a7d95b7fca3b066/css/test-site-a4d249.webflow.9f9a6589f.css"
      rel="stylesheet"
      type="text/css"
    />
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link
      href="https://fonts.gstatic.com"
      rel="preconnect"
      crossorigin="anonymous"
    />
    <script
      src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
      type="text/javascript"
    ></script>
    <script type="text/javascript">
      WebFont.load({
        google: {
          families: [
            "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
          ],
        },
      });
    </script>
    <!--[if lt IE 9
      ]><script
        src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"
        type="text/javascript"
      ></script
    ><![endif]-->
    <script type="text/javascript">
      !(function (o, c) {
        var n = c.documentElement,
          t = " w-mod-";
        (n.className += t + "js"),
          ("ontouchstart" in o ||
            (o.DocumentTouch && c instanceof DocumentTouch)) &&
            (n.className += t + "touch");
      })(window, document);
    </script>
    <link
      href="https://uploads-ssl.webflow.com/img/favicon.ico"
      rel="shortcut icon"
      type="image/x-icon"
    />
    <link
      href="https://uploads-ssl.webflow.com/img/webclip.png"
      rel="apple-touch-icon"
    />
  </head>
  <body>
    <div class="navbar-logo-left wf-section">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        class="navbar-logo-left-container w-nav"
      >
        <div class="container-3">
          <div class="navbar-wrapper">
            <nav role="navigation" class="nav-menu-wrapper w-nav-menu">
              <ul role="list" class="nav-menu-two w-list-unstyled">
                <li class="mobile-margin-top-12">
                  <a href="#" class="button-primary-3 w-button"
                    ><strong>QUIZ</strong></a
                  >
                </li>
              </ul>
            </nav>
            <div class="menu-button-3 w-nav-button">
              <div class="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fn-section wf-section">
      <div class="fn-container-grid">
        <div
          id="w-node-_3096f740-9ca1-0a8d-a7f0-a8ae7cb99e72-2bc695af"
          class="fn-column"
        >
          <h2 class="fn-heading-2">Data</h2>
          <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100" id="konten">
        
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="fn-section wf-section">
      <div class="fn-container-grid">
        <a href="./daftar.html">daftar</a>
      </div>
    </div>
    <script
      src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=641172b76a7d95b7fca3b066"
      type="text/javascript"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://uploads-ssl.webflow.com/641172b76a7d95b7fca3b066/js/webflow.a8129f74c.js"
      type="text/javascript"
    ></script>

    <script src="./test.js"></script>
    <!--[if lte IE 9
      ]><script src="//cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script
    ><![endif]-->
  </body>
</html>

2. test.js
 
 var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
 
hasil=""
txt=""
txt1=""

fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
    .then(response => response.text())
    .then(result => tampilkan(result))
    .catch(error => console.log('error', error));

function tampilkan(result){
    console.log(result);
    hasil=JSON.parse(result);
    txt=hasil.forEach(isitabel);
}

function isitabel(value){
    txt= txt+trnyatabel.replace("#TEXT#","Name: "+value.name);
    txt= txt+trnyatabel.replace("#TEXT#","Email: "+value.email+"");
    txt= txt+trnyatabel.replace("#TEXT#","Website: "+value.website+"");
    txt= txt+trnyatabel.replace("#TEXT#","Phone: "+value.phone+"");
    txt= txt+trnyatabel.replace("#TEXT#","Username: "+value.username+"");
  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
  
  3. daftar.html
  
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
    <div class="bg-blue-100 text-black-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
        <div class="md:flex w-full">
            <div class="h-screen w-1/2 bg-blue-600">
                <img src="https://media.istockphoto.com/id/1175268677/vector/blue-curves-and-the-waves-of-the-sea-range-from-soft-to-dark-vector-background-flat-design.jpg?s=612x612&w=0&k=20&c=17sESFiB3XNNDkE2HsLL_Tnisk8QZmA-uSbsN9XzENU=" class="h-full w-full" />
            </div>
            <div id="formsignup" class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-black-900">DAFTAR</h1>
                </div>
                <div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input id="nama" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-read-500" placeholder="Abby">
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input id="email" type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="name@example.com">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input id="password" type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                            <label for="" class="text-xs font-semibold px-1">Country</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input id="country" type="country" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Country">
                            </div>
						</div>
                    </div>
							 <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                            <label for="" class="text-xs font-semibold px-1">City</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input id="city" type="city" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="City">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button onclick="PushButton()" id="tombol" class="block w-full max-w-xs mx-auto bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700 text-black rounded-lg px-3 py-3 font-semibold">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="./coba.js"></script>
</body>
</html>

4. coba.js

function PushButton(){
    nama=document.getElementById("nama").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    country=document.getElementById("country").value;
    city=document.getElementById("city").value;
    PostSignUp(nama,email,password,country,city);
  }
  
  function PostSignUp(nama,email,password,country,city){
    var myHeaders = new Headers();
    myHeaders.append("Login", "jasmine");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
    "nama": nama,
    "email": email,
    "password": password,
    "country": country,
    "city": city
    });
  
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
  
    fetch("https://eottty3vi7alxch.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => GetResponse(result))
    .catch(error => console.log('error', error));
  }
  
  function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
}

5. type.go

package megah

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

6. megah.go

package megah

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

7. megah_test.go

package megah

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

# BAGIAN 1        Cara Membuat Form Register Agar datanya Bisa tampil Pada PipeDream
## 1.Membuat Folder FrontEnd 
Membuat Folder FrontEnd pada ChapterQUIS/npm_nama

## 2.Membuat File Index HTML 
Index HTML berfungsi untuk membuat kerangka Form Registernya, berikut ini adalah File index HTML
```
<html lang="en"><head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0ed3cf">
  <meta name="msapplication-TileColor" content="#0ed3cf">
  <meta name="theme-color" content="#0ed3cf">

  <meta property="og:image" content="http://tailwindcomponents.com/storage/5386/conversions/temp37039-ogimage.jpg?v=2023-03-16 02:21:55">
  <meta property="og:image:width" content="1280">
  <meta property="og:image:height" content="640">
  <meta property="og:image:type" content="image/png">

  <meta property="og:url" content="https://tailwindcomponents.com/component/form-12/landing">
  <meta property="og:title" content="form by atikur-rabbi">
  <meta property="og:description" content="form demo">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@TwComponents">
  <meta name="twitter:title" content="form by atikur-rabbi">
  <meta name="twitter:description" content="form demo">
  <meta name="twitter:image" content="http://tailwindcomponents.com/storage/5386/conversions/temp37039-ogimage.jpg?v=2023-03-16 02:21:55">

  <title>form Register . </title>

          <script src="https://cdn.tailwindcss.com"></script>
  <style>/* ! tailwindcss v3.2.6 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed{position:fixed}.bottom-0{bottom:0px}.left-0{left:0px}.right-0{right:0px}.z-40{z-index:40}.mt-2{margin-top:0.5rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.min-h-screen{min-height:100vh}.w-1\/2{width:50%}.w-11\/12{width:91.666667%}.w-full{width:100%}.cursor-pointer{cursor:pointer}.appearance-none{-webkit-appearance:none;appearance:none}.place-items-center{place-items:center}.justify-between{justify-content:space-between}.gap-3{gap:0.75rem}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-12{padding:3rem}.p-3{padding:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.text-center{text-align:center}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:0.75rem;line-height:1rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.tracking-widest{letter-spacing:0.1em}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.hover\:bg-gray-900:hover{--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.hover\:text-black:hover{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}.hover\:shadow-none:hover{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.focus\:bg-gray-300:focus{--tw-bg-opacity:1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}.focus\:shadow-inner:focus{--tw-shadow:inset 0 2px 4px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 640px){.sm\:w-8\/12{width:66.666667%}}@media (min-width: 768px){.md\:w-1\/2{width:50%}}@media (min-width: 1024px){.lg\:w-5\/12{width:41.666667%}}</style><script src="chrome-extension://ajdpfmkffanmkhejnopjppegokpogffp/assets/prompt.js"></script></head>
<body class="bg-gray-200">

  <div id="formsignup" class="w-full md:w-1/2 py-10 px-5 md:px-10">
    <div class="text-center mb-10" >
        <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
        <p>Enter your information to register</p>
    </div>
    <div>
        <div class="flex -mx-3">
            <div class="w-1/2 px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1">First name</label>
                <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                    <input id="firstname" type="text" name="firstname" placeholder="Johi hunter ganteng" autocomplete="given-name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" required >
                </div>
            </div>
            <div class="w-1/2 px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1">Last name</label>
                <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                    <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" required>
                </div>
            </div>
        </div>
        <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1">Email</label>
                <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                    <input id="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com">
                </div>
            </div>
        </div>
        <div class="flex -mx-3">
            <div class="w-full px-3 mb-12">
                <label for="" class="text-xs font-semibold px-1">Password</label>
                <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                    <input id="password" type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************">
                </div>
            </div>
        </div>
        <div class="flex -mx-3">
            <div class="w-full px-3 mb-12">
                <label for="" class="text-xs font-semibold px-1">Password</label>
                <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                    <input id="confirm_password" type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************">
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
<script src="Program.js"></script>
</body></html>
```
Dibawah terdapat script javascript, script java script tersebut berfungsi untuk menghubungkan Html ke dalam pipedream. Berikut tampilan kode html diatas

![](Pict/1.png)

## 3.Mengintegrasikan HTML Dan JavaScript
### 3.1 Membuat File javascript didalam folder FontEnd
Membuat file js dengan nama Program.Js 
Setelah itu Masuk kedalam Pipedream buat New WorkFlows di pipedream
![](pict/pipedream.png)
Pilih New HTTP/WebHook Request. Setelah itu ganti Event data menjadi Raw Request
![](Pict/pipedream2.png)

Selanjunya Save,  setelah di save copy code pada pipedream lalu buka postman
![](Pict/Screenshot%202023-03-16%20153822.png)

### 3.2 Mengisikan Script Pada File Program.Js
Untuk Mengintegrasikan inputan data agar bisa terkirim dan tersimpan dari index.html kedalam pipedream. bukalah Postman
lalu tempelkan kode dari pipedream yang tadi sudah di dapatkan

![](Pict/postman.png)
salin source code javascriptnya lalu masukan kedalam Program.js. setelah itu sesuaikan dengan index.htmlnya setiap variablenya

```
function PostSignUp(firstname,lastname,email,password,confirm_password){
  var myHeaders = new Headers();
  myHeaders.append("Register", "daftar jadi ganteng");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
      "namadepan": firstname,
      "namabelakang": lastname,
      "email": email,
      "password": password,
      "confirm_password": confirm_password
  });
```
Buatlah function PostSignUp terlebih dahulu, lalu sesuaikan variable/ id yang ada pada html.

```
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://eofo278xbofxnve.m.pipedream.net", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));}

```
Berikutnya tempelkan kode javascript yang sudah di dapatkan di postman

```
      function PushButton(){
        firstname=document.getElementById("firstname").value;
        lastname=document.getElementById("lastname").value;
        email=document.getElementById("email").value;
        password=document.getElementById("password").value;
        confirm_password=document.getElementById("confirm_password").value;
        PostSignUp(firstname,lastname,email,password,confirm_password);
      }
      function GetResponse(result){
        document.getElementById("formsignup").innerHTML = result;
    }
```
yang terakhir membuat function Pushbutton.  
jika sudah jalankan Live servernya pada index html, maka menampilkan halaman seperti berikut ini

![](pict/1.png)
Lalu cek ke pipedream, apakah data yang sudah inputkan sudah 
masuk apa belum.
![](Pict/2.png)

Pada Pipedream terdapat data yang masuk, Buka lebih dalam kembali sampai seperti gambar dibawah ini
![](Pict/3.png)

# BAGIAN 2 Membuat Struct dan menghubungkan Kedalam Database MongoDB Menggunakan GoLang

## 1. Sign In MongoDB
Buka Halaman https://account.mongodb.com/account/login  login dengan akun Github/goole yang kita miliki
![](Pict/mongodb.png)

## 2. Koneksikan MongoDB atlas ke MongoDB compass
setelah berhasil masuk kedalam mongodb, pilih connect
![](Pict/mongodb2.png)
Lalu Pilih Connect Using MongoDb Compass
![](Pict/mongodb3.png/)

setelah salin kodenya 
![](Pict/mongodb4.png)

Masuk kedalam MongoDb Compass, lalu pastekan kode yang baru disalin di mongodb atlas ke mongo dbcompass
![](Pict/Screenshot%202023-03-16%20202935.png)
Pilih connect

## 3.Membuat Folder Backend dan file Go
Buatlah Folder Backend untuk membuat struct agar bisa di sambungkan kedalam mongodb, Jika sudah Buka terminal 
lalu mencoba untuk bisa terhubung dengan perintah
```
go mod init github.com/AkbarHasballah/WS/chapterQUIS/1214073_salmanakbar_quis/BackEnd
```
Jika sudah Buatlah file type.go yang berisikan struct, disini akan membuat struct tentang datasiswa
```
package datasiswa

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Siswa struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Nama         string             `bson:"nama,omitempty" json:"nama,omitempty"`
	Phone_number string             `bson:"phone_number,omitempty" json:"phone_number,omitempty"`
	Jabatan      string             `bson:"jabatan,omitempty" json:"jabatan,omitempty"`

	Hari_kerja []string `bson:"hari_kerja,omitempty" json:"hari_kerja,omitempty"`
}

type JamKelas struct {
	Durasi     int      `bson:"durasi,omitempty" json:"durasi,omitempty"`
	Jam_masuk  string   `bson:"jam_masuk,omitempty" json:"jam_masuk,omitempty"`
	Jam_keluar string   `bson:"jam_keluar,omitempty" json:"jam_keluar,omitempty"`
	Gmt        int      `bson:"gmt,omitempty" json:"gmt,omitempty"`
	Hari       []string `bson:"hari,omitempty" json:"hari,omitempty"`
	Shift      int      `bson:"shift,omitempty" json:"shift,omitempty"`
	Piket_tim  string   `bson:"piket_tim,omitempty" json:"piket_tim,omitempty"`
}

type Absen struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Longitude    float64            `bson:"longitude,omitempty" json:"longitude,omitempty"`
	Latitude     float64            `bson:"latitude,omitempty" json:"latitude,omitempty"`
	Location     string             `bson:"location,omitempty" json:"location,omitempty"`
	Phone_number string             `bson:"phone_number,omitempty" json:"phone_number,omitempty"`
	Datetime     primitive.DateTime `bson:"datetime,omitempty" json:"datetime,omitempty"`
	Checkin      string             `bson:"checkin,omitempty" json:"checkin,omitempty"`
	Biodata      Siswa              `bson:"biodata,omitempty" json:"biodata,omitempty"`
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
nah jika sudah, langkah selanjutnya kita mengkompilasi dengan perintah
```
go mod tidy
```
maka Ouputannya seperti ini
![](picture/../Pict/go.png)
setelah membuat type.go, berikutnya membuat file siswa.go 
```
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

```
package "datasiswa" yang mendefinisikan berbagai fungsi untuk berinteraksi dengan database MongoDB.

Berikutnya melakukan go mod tidy lagi

langkah berikutnya membuat go test degan membuat file siswa_test.go 
```
package datasiswa

import (
	"fmt"
	"testing"
)

func TestInsertAbsen(t *testing.T) {
	long := 98.345345
	lat := 123.561651
	lokasi := "rumah"
	phonenumber := "6811110023231"
	checkin := "masuk"
	biodata := Siswa{
		Nama:         "Bos Raull",
		Phone_number: "6284564562",
		Jabatan:      "Kepala Suku",
	}
	hasil := InsertAbsen(long, lat, lokasi, phonenumber, checkin, biodata)
	fmt.Println(hasil)

}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "6811110023231"
	biodata := GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}
```
kode diatas untuk menghubungkan atau mengkoneksikan kedalam database, setelah itu save semua proses lalu buka terminal dan jalankan dengan perintah 
```
go test
```
maka hasil diterminalnya seperti berikut ini
![](Pict/4.png)

Jika berhasil Kita harus buka Mongodb Compass dan liat, apakah ada data yang masuk atau tidak, jika ada maka hasilnya seperti ini
![](Pict/5.png)

Sekian Penjelasan dari proses pengerjaan Quis Terimakasih


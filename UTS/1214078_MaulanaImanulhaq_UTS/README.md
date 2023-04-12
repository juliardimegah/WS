# Buat Tampilan Frontend menggunakan Componen pada Tailwinds

![image](https://user-images.githubusercontent.com/98022263/228729543-9e7b97a1-1ea5-4ff4-b77e-4aaf53d76b71.png)

# Berikut Codingan Front End HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page title</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
    <link rel="stylesheet" href="./src/css/tailwind/tailwind.min.css">
    <link rel="icon" type="image/png" sizes="32x32" href="../src/assets/maulanafoto.png">
    <script src="./src/js/charts-demo.js"></script>
</head>
<body class="antialiased bg-body text-body font-body">
    <div class="">         
      <div>
        <!-- mengatur navbar kiri -->
        <div class="mx-auto lg:ml-2">

      <section>
        <div class="pt-5 pb-6 px-8 bg-gray-700">
          <div class="flex flex-wrap items-center justify-between -mx-2">
            <div class="w-full lg:w-auto px-2 mb-6 lg:mb-0">
              <h4 class="text-2xl font-bold text-white tracking-wide leading-7 mb-1">UTS</h4>
              <p class="text-xs text-gray-300">Pemrograman</p>
            </div>
            <div class="w-full lg:w-auto px-2">
              <div class="sm:flex items-center">
                <div class="w-full sm:w-auto mb-6 sm:mb-0 sm:mr-4">
                  <div class="flex flex-wrap items-center -mb-2">
                    
                    
                  </div>
                </div>
                <div class="w-full sm:w-auto">
                  <a class="inline-flex items-center justify-center py-2 pl-2 pr-3 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full" href="#">
                    <img class="h-8 w-8 mr-3 rounded-full object-cover" src="../src/assets/maulanafoto.png" alt="">
                    <h4 class="text-white font-extrabold tracking-wide mr-5">Maulana Imanulhaq</h4>
                    <svg width="10" height="6" viewbox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#3D485B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100" id="konten">
    
          
        </tbody>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100" id="kontenz">
    
          
        </tbody>
      </table>
     
      
      </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="./src/js/main.js"></script>
    <script src="./ambilAPI.js"></script>
</body>
</html>

```

# Berikut Codingan JS

```
var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

hasil=""
txt=""
txt1=""

fetch("https://ibnux.github.io/data-indonesia/provinsi.json", requestOptions)

// fetch("https://dev.farizdotid.com/api/daerahindonesia/provinsi/32", requestOptions)

  .then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

function tampilkan(result){
  console.log(result);
  hasil=JSON.parse(result);
  txt=hasil.forEach(isitabel);
//   document.getElementById("nama").innerHTML(result);
}

function isitabel(value){
    const id = "ID : "
    const nama = "Nama Provinsi : "
    const pembatas = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    

    txt= txt+trnyatabel.replace("#TEXT#","ID Provinsi: "+value.id);
    txt= txt+trnyatabel.replace("#TEXT#",nama+value.nama+"");
    txt= txt+trnyatabel.replace("#TEXT#",pembatas);
      
    document.getElementById("konten").innerHTML=txt;
    }
    trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
  ```
  
# Api Publik Pengujian Postman
  
![3  API Publik pengujian Postman](https://user-images.githubusercontent.com/98022263/228729958-834d4c81-c1ca-4aed-ab40-e33780072ddb.png)
  
# Request catcher dari postman dan pipedream
  
![4  request catcher dari postman dan pipedream](https://user-images.githubusercontent.com/98022263/228729989-c698663b-b19d-4f99-87ed-442fbb5d03bd.png)
  
# Endpoint postman dari Pipedream
  
![5  Endpoint postman dari Pipedream](https://user-images.githubusercontent.com/98022263/228730012-35eb56a5-4104-48df-bec6-9d8a018eb215.png)
   
# Pipedream
  
![5 1  Pipedream](https://user-images.githubusercontent.com/98022263/228730040-137a44f7-25b2-4c63-b87a-c45eb5ed278a.png)
 
# Hasil endpoint postman dari pipedream
  
![5 2  Hasil endpoint postman dari pipedream](https://user-images.githubusercontent.com/98022263/228730065-1cbfae9a-c62f-40cf-9543-fe45ec20900a.png)
  
# Tampilan Signup

![6  Tampilan Signup](https://user-images.githubusercontent.com/98022263/228730097-861d6992-2472-48f3-b2e0-a2ddc0d849c4.png)

# Codingan HTML

```
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
        <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
            <div class="md:flex w-full">
                
                <div id="formsignup" class="w-full md:w-1/2 py-10 px-5 md:px-10">
                    <div class="text-center mb-10">
                        <h1 class="font-bold text-3xl text-gray-900">DAFTAR</h1>
                        <p>Silakan Lakukan Register Disini!!!</p>
                    </div>
                    <div>
                        <div class="flex -mx-3">
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Nama Depan</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input id="namadepan" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Maulana">
                                </div>
                            </div>
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Nama Belakang</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input id="namabelakang" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Imanulhaq">
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Alamat Email</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input id="alamatemail" type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="maulana.utspemrograman@gmail.com">
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-12">
                                <label for="" class="text-xs font-semibold px-1">Kata Sandi</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input id="katasandi" type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************">
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <button onclick="PushButton()" id="tombol" class="block w-full max-w-xs mx-auto bg-yellow-400 hover:bg-yellow-400 focus:bg-yellow-400 text-white rounded-lg px-3 py-3 font-semibold">Daftar Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hidden md:block w-1/2 bg-yellow-300 py-10 px-10">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="300pt" height="300pt" viewBox="0 0 1067.000000 1067.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1067.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M5185 10620 c-1038 -71 -1896 -871 -2030 -1895 -12 -94 -15 -244 -15
                        -786 l0 -669 103 55 c160 88 338 171 519 243 l166 66 5 490 c4 461 5 497 26
                        591 81 367 290 678 585 877 489 327 1100 333 1591 13 310 -201 522 -513 606
                        -893 20 -90 22 -132 26 -589 l5 -492 46 -17 c215 -79 530 -223 680 -312 29
                        -18 55 -32 57 -32 10 0 5 1328 -5 1415 -45 403 -213 802 -471 1123 -89 109
                        -249 265 -367 355 -358 275 -755 424 -1217 457 -151 11 -147 11 -310 0z"/>
                        <path d="M5000 7249 c-469 -47 -878 -163 -1295 -369 -370 -182 -649 -378 -941
                        -662 -598 -582 -964 -1314 -1069 -2138 -23 -175 -31 -535 -16 -711 64 -770
                        342 -1447 840 -2044 100 -121 322 -340 451 -448 475 -395 1048 -668 1650 -786
                        271 -53 414 -66 730 -66 315 0 459 13 727 66 1414 276 2551 1368 2863 2749 68
                        302 85 467 85 810 -1 237 -5 313 -23 450 -90 667 -345 1262 -764 1788 -131
                        163 -397 429 -560 560 -539 430 -1160 693 -1858 788 -147 20 -669 28 -820 13z
                        m410 -2107 c0 -95 56 -228 145 -347 25 -33 104 -124 175 -201 177 -192 233
                        -264 284 -365 58 -114 73 -201 57 -322 -13 -101 -45 -194 -92 -273 -32 -52
                        -136 -160 -186 -194 l-22 -15 -20 -729 -20 -729 -31 -63 c-51 -104 -149 -171
                        -285 -195 -174 -30 -362 62 -428 209 -19 44 -22 86 -43 765 -12 395 -24 719
                        -26 721 -151 105 -213 190 -268 361 -32 99 -39 304 -16 441 47 279 190 561
                        380 750 104 104 169 150 282 199 108 47 114 47 114 -13z"/>
                        </g>
                        </svg>
                </div>

            </div>
        </div>
    </div>



<script src="./assets/js/app.js"></script>
<script src="./assets/js/particles.js"></script>
<script src="./assets/js/pipeDREAM.js"></script>
</body>
</html>
```

# Codingan JS

```
function PushButton(){
    namadepan=document.getElementById("namadepan").value;
    namabelakang=document.getElementById("namabelakang").value;
    alamatemail=document.getElementById("alamatemail").value;
    katasandi=document.getElementById("katasandi").value;
    PostSignUp(namadepan,namabelakang,alamatemail,katasandi);
}

function PostSignUp(namadepan,namabelakang,alamatemail,katasandi){
    var myHeaders = new Headers();
    myHeaders.append("Login", "rollygantengsekali");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "namadepan": namadepan,
        "namabelakang": namabelakang,
        "alamatemail": alamatemail,
        "katasandi": katasandi
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://eoj0o69oewxht68.m.pipedream.net", requestOptions)
        .then(response => response.text())
        .then(result => GetResponse(result))
        .catch(error => console.log('error', error));
    }
    function GetResponse(result) {
        document.getElementById("formsignup").innerHTML = result;

        console.log(result)
      }
```

# Codingan Fungsi PostSignup

```
function PostSignUp(namadepan,namabelakang,alamatemail,katasandi){
    var myHeaders = new Headers();
    myHeaders.append("Login", "rollygantengsekali");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "namadepan": namadepan,
        "namabelakang": namabelakang,
        "alamatemail": alamatemail,
        "katasandi": katasandi
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://eoj0o69oewxht68.m.pipedream.net", requestOptions)
        .then(response => response.text())
        .then(result => GetResponse(result))
        .catch(error => console.log('error', error));
    }
```

# Fungsi Push Button

![7  Fungsi PushButton](https://user-images.githubusercontent.com/98022263/228730399-65044191-b650-4861-aff7-e3f2de20b6b4.png)

```
function PushButton(){
    namadepan=document.getElementById("namadepan").value;
    namabelakang=document.getElementById("namabelakang").value;
    alamatemail=document.getElementById("alamatemail").value;
    katasandi=document.getElementById("katasandi").value;
    PostSignUp(namadepan,namabelakang,alamatemail,katasandi);
}
```

# Menggunakan Attribut OnClick

![7 1  Menggunakan Attribut Onclick](https://user-images.githubusercontent.com/98022263/228730458-b5d4069b-02c7-48fd-b864-45bc48b1f2e7.png)

# Di Jalankan dengan menggunakan live server

![8  Di Jalankan dengan menggunakan live server](https://user-images.githubusercontent.com/98022263/228730542-43015ea9-3939-496a-95c6-d0262285860c.png)

# Ketika Sukses Daftar

![8 1  Ketika Sukses Daftar](https://user-images.githubusercontent.com/98022263/228730582-b61105b6-4118-4c9f-bf5f-7e13a39168d4.png)

# Dapat Dilihat Sukses Pada Console

![8 2  Dapat Dilihat Sukses Pada Console](https://user-images.githubusercontent.com/98022263/228730625-5ecca75d-3349-4dac-a729-52009bbf5141.png)

# Pipedream

![PipeDream](https://user-images.githubusercontent.com/98022263/228730633-629a891b-f710-4d1d-ac8e-1059ac854245.png)

# Respon pada pipedream ketika sukses daftar

![Respon pada pipedream ketika sukses daftar](https://user-images.githubusercontent.com/98022263/228730660-edd6c35e-e4c0-4cf4-85ac-e2fe86687da0.png)

# Respon Pada Pipe Dream

![Respon pada pipedream](https://user-images.githubusercontent.com/98022263/228730752-4a52ec98-d86f-4cf5-b975-510f441d34ea.png)

![Screenshot Pipedream](https://user-images.githubusercontent.com/98022263/228730779-1816db03-1402-4f31-8299-a2003db340e0.png)


# Screenshot Live Server

![Screenshot Live Server](https://user-images.githubusercontent.com/98022263/228730771-0a056f3e-43bc-43e9-8049-405cb056e15b.png)

# Screenshot Github Pages

![image](https://user-images.githubusercontent.com/98022263/228731677-96114a1b-a64b-44b4-9ecf-9a75df2ec6d3.png)

![image](https://user-images.githubusercontent.com/98022263/228731722-149962d1-ab04-4ac8-9486-f0b25542067b.png)

# LINK GITHUB PAGES

ambilAPI = https://fancyyy21.github.io/1214078_Maulana.github.io/ambilAPI/

signup_pipedream = https://fancyyy21.github.io/1214078_Maulana.github.io/signup_pipedream/

# SELESAI



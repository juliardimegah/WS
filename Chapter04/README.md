# Deployment Aplikasi Backend

Disini kita akan melakukan :

1. Mendaftarkan diri ke github student pack
2. Menyatukan backend menjadi satu repositori
3. Menyatukan frontend menjadi satu repositori
4. Testing deployment boiler plate dari framework iteung
5. Mengatasi error dan kendala masalah umum yang terjadi pada deployment

## Github Student Pack

Student pack berguna untuk mendapatkan beberapa benefit gratis dari github. Untuk mendapatkan student pack. kita mendaftarkan diri dahulu ke alamat https://education.github.com/pack
![image](https://user-images.githubusercontent.com/15622730/224492801-b2b3b169-0eb0-4ab3-900e-7e9d86558e0b.png)

Disana terlihat beberapa Experiences yang bisa kita coba secara gratis atau free trial. 
untuk mendaftarkan diri klik Explore Student Programs. Kemudian pilih Student.

![image](https://user-images.githubusercontent.com/15622730/224492856-5f2903f0-ca00-4a7f-bade-ff9d1a74183a.png)

Kemudian pilih email kampus ULBI, jika belum memiliki akun email ULBI, bisa meminta ke TIK di ruang Audit Lt.1. 
Selanjutnya adalah melengkapi keterangan mahasiswa dengan melakukan upload KTM, yang bisa diminta ke Iteung.

![image](https://user-images.githubusercontent.com/15622730/224492875-5f753028-d0a6-4caf-b8e4-2b15283dcf24.png)

## Heroku Student offer
Heroku merupakan layanan cloud yang berguna untuk deployment atau pemasangan aplikasi berbasis web yang kita buat. Cara pemasangan aplikasi di Heroku cukup mudah, tinggal hubungkan saja dengan repositori github yang sudah ada.Untuk menikmati layanan heroku secara gratis hubungkan dengan akun github anda yang sudah diaktifkan student pack pada link https://www.heroku.com/github-students

![image](https://user-images.githubusercontent.com/15622730/224492911-af5578b3-3855-4655-bbfa-7e6d43b223f6.png)

Kemudian klik Get student offer. Gunakan email kampus anda, dan lanjutkan untuk mendaftarkan diri. Jika dibutuhkan verifikasi pembayaran dengan kartu kredit, bisa menggunakan Virtual Credit Card atau Virtual Debit Card atau Debit Card kartu dari Bank Digital yang bisa didapatkan dengan install aplikasi di handphone. Opsional sebagai pelengkap keamanan akun. Install juga aplikasi Google Authenticator https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&pli=1

![image](https://user-images.githubusercontent.com/15622730/224492935-0d389e2e-7e29-42f4-a27e-552682287053.png)

## Dashboard Heroku dan Heroku cli
Setelah login, masuk ke laman https://dashboard.heroku.com/apps. Maka akan muncul list aplikasi yang sudah kita buat. Klik New dan pilih Create new app untuk melakukan deployment aplikasi baru kita.

![image](https://user-images.githubusercontent.com/15622730/224493517-e927b3b9-9eac-4c8e-b574-aa864eb436be.png)

Masukkan nama aplikasi kita, dan pilih lokasi server kita apakah amerika atau eropa. Kemudian klik Create app.
![image](https://user-images.githubusercontent.com/15622730/224493617-2c9f1499-3f81-4206-bfb9-97b34757e122.png)

Lakukan instalasi Heroku CLI, untuk menghubungkan komputer kita dengan server heroku. Link Instalasi https://devcenter.heroku.com/articles/heroku-cli
![image](https://user-images.githubusercontent.com/15622730/224493750-9a04105b-0c76-4674-aeae-1f18e67d5ee0.png)

https://devcenter.heroku.com/articles/heroku-cli#cli-architecture
![image](https://user-images.githubusercontent.com/15622730/224493929-7a01c350-b750-47c6-a309-c5bcc53c894e.png)

![image](https://user-images.githubusercontent.com/15622730/224493952-f621a851-bcbb-45ea-80e8-46d78a979848.png)

Lanjutkan sampai selesai langkah instalasinya

![image](https://user-images.githubusercontent.com/15622730/224493999-d208a079-df02-4bcf-b6f6-618c52414d54.png)

Login menggunakan akun Heroku dan verifikasi code dari google authenticatornya
![image](https://user-images.githubusercontent.com/15622730/225248671-e91c4dda-cfdb-4c54-b9b7-4409a135af2d.png)
berhasil
![image](https://user-images.githubusercontent.com/15622730/225248887-237d1444-65ff-4178-bf5e-3b897921d5a6.png)
![image](https://user-images.githubusercontent.com/15622730/225249039-8a08ead2-47a1-4635-9f34-b03507ca4cac.png)
Masukan SSH Key
![image](https://user-images.githubusercontent.com/15622730/225249193-595fc085-0722-47c5-b66e-9d272fa27dd9.png)

## Deployment Boiler Plate

Disini kita akan mencoba testing deployment ke Heroku. Aplikasi web yang akan dilakukan deploymeny adalah Boiler Plate iTeung yang berada di repo https://github.com/aiteung/iteung
![image](https://user-images.githubusercontent.com/15622730/225252220-d8e3c3ed-721f-4768-bc47-fd77f7b8964d.png)
Kita lakukan fork ke repositori kita, kita beri nama sesuai dengan nama aplikasi di heroku. Kemudian, lakukan clone repo ke komputer kita.

Setelah di clone menggunakan git bash kemudian masuk ke direktori repo di PC kita. Lakukan add remote heroku sesuai nama aplikasi yang sudah kita buat di heroku dengan perintah

![image](https://user-images.githubusercontent.com/15622730/225250979-5ad92c7f-15e6-47c7-8a4c-d2daf8ce01cf.png)
```sh
heroku git:remote -a gocroot
```

```sh
test
```







# BAB XI
# MENGAPA HARUS MENGGUNAKAN GRAPHQL

GolangGraphQL (gqlgen) adalah alat yang populer untuk membangun server GraphQL menggunakan bahasa pemrograman Go. Berikut adalah beberapa alasan mengapa Anda mungkin ingin mempertimbangkan menggunakan GolangGraphQL daripada solusi lain:

### Kinerja yang Tinggi: 
Golang (Go) dikenal karena kinerjanya yang tinggi. Dengan menggunakan GolangGraphQL, Anda dapat membangun server GraphQL yang sangat responsif dan efisien. Bahasa Go secara alami memiliki performa yang baik dan dapat menangani beban tinggi dengan baik.

### Mudah Digunakan dan Produktivitas Tinggi: 
GolangGraphQL (gqlgen) menyederhanakan pengembangan server GraphQL. Alat ini memungkinkan Anda untuk menghasilkan resolver otomatis, validasi skema, dan dokumentasi interaktif dengan sedikit usaha. Selain itu, Go memiliki sintaks yang sederhana dan mudah dipelajari, yang dapat meningkatkan produktivitas pengembangan.

### Integrasi yang Baik dengan Lingkungan Go: 
GolangGraphQL dapat dengan mudah diintegrasikan dengan ekosistem Go yang luas. Anda dapat menggunakan pustaka dan modul Go yang ada untuk mengatasi kebutuhan spesifik Anda dalam pengembangan aplikasi GraphQL. Selain itu, Go memiliki dukungan yang baik untuk manajemen dependensi dengan Go Modules.

### Tingkat Skalabilitas yang Tinggi: 
GolangGraphQL dirancang untuk menangani beban yang tinggi dan bersifat skalabel secara alami. Dengan pengelolaan memori yang efisien dan model konkurensi goroutine yang kuat, Anda dapat membangun server GraphQL yang dapat dengan mudah menangani banyak permintaan secara bersamaan.

### Ekosistem dan Komunitas yang Aktif: 
Golang memiliki ekosistem dan komunitas yang berkembang pesat. Ada banyak modul, pustaka, dan alat yang tersedia untuk membantu dalam pengembangan dengan GolangGraphQL. Selain itu, Go memiliki dokumentasi yang baik dan komunitas yang aktif, yang berarti Anda dapat dengan mudah menemukan sumber daya dan dukungan yang Anda butuhkan.

Namun, penting untuk diingat bahwa pemilihan teknologi harus didasarkan pada kebutuhan proyek dan preferensi tim pengembang. Ada banyak solusi lain yang baik untuk membangun server GraphQL, seperti Node.js dengan Apollo Server, Python dengan Graphene, atau Ruby dengan GraphQL-Ruby. Pastikan untuk mempertimbangkan kebutuhan proyek, pengetahuan dan keahlian tim pengembang, serta faktor-faktor lain yang relevan sebelum membuat keputusan.
 
### Twitch: 
Twitch, platform streaming langsung yang populer, menggunakan Golang dalam beberapa layanan backend mereka. Mereka juga menggunakan Vue.js dalam pengembangan antarmuka pengguna mereka.

### Alibaba: 
Alibaba, perusahaan e-commerce terbesar di Tiongkok, menggunakan Golang dalam berbagai proyek internal. Mereka juga menggunakan Vue.js dalam beberapa proyek front-end.

### Dailymotion: 
Dailymotion, platform berbagi video, menggunakan Golang untuk sistem backend mereka. Vue.js juga digunakan dalam beberapa bagian antarmuka pengguna mereka.

### The New York Times: 
The New York Times menggunakan Golang dalam beberapa sistem backend mereka, termasuk sistem pengiriman konten. Mereka juga menggunakan Vue.js dalam pengembangan antarmuka pengguna.

### CloudFlare: 
CloudFlare, penyedia layanan jaringan dan keamanan, menggunakan Golang dalam infrastruktur mereka. Vue.js juga digunakan dalam beberapa aplikasi internal.

Perlu diingat bahwa ini hanya beberapa contoh perusahaan yang menggunakan Golang dan Vue.js, dan masih banyak perusahaan lain yang menggunakan kombinasi teknologi tersebut dalam pengembangan perangkat lunak mereka.

## Apa itu graphql
GraphQL adalah bahasa query dan lingkungan runtime yang digunakan untuk mengambil dan memanipulasi data dari server. Ini adalah teknologi yang dikembangkan oleh Facebook dan dirilis secara terbuka pada tahun 2015. GraphQL menyediakan antarmuka yang fleksibel dan efisien antara klien dan server, di mana klien dapat menentukan dengan tepat data apa yang mereka butuhkan dan server memberikan hanya data yang diminta tersebut.

## Berikut adalah beberapa komponen utama GraphQL dan fungsi-fungsinya:

### Skema (Schema):
Skema dalam GraphQL mendefinisikan struktur tipe data yang tersedia di server. Skema terdiri dari tipe-tipe objek, tipe skalar, tipe enumerasi, dan tipe lainnya. Ini menyediakan kontrak yang jelas antara klien dan server tentang data yang dapat dikirim dan diterima.

### Operasi (Operation):
Operasi dalam GraphQL mengacu pada tindakan yang ingin dilakukan oleh klien, yaitu query, mutation, dan subscription.

### Query: 
Digunakan untuk mengambil data dari server. Klien dapat mendefinisikan struktur data yang dibutuhkan dalam querynya dan server akan mengembalikan data sesuai dengan permintaan tersebut.
### Mutation: 
Digunakan untuk mengubah atau memodifikasi data di server. Klien dapat mengirim permintaan untuk membuat, mengupdate, atau menghapus data di server.
### Subscription: 
Digunakan untuk membuat sambungan real-time antara klien dan server, sehingga server dapat mengirimkan pembaruan data secara langsung kepada klien saat ada perubahan.
### Resolver: 
Resolver adalah fungsi yang bertanggung jawab untuk mengeksekusi operasi yang didefinisikan dalam skema. Setiap bidang dalam skema memiliki resolver terkait yang menentukan bagaimana data harus diambil atau diproses. Resolver ini digunakan untuk menghubungkan permintaan klien dengan sumber data yang sesuai di server.
### Tipe Scalar:
GraphQL mendukung tipe data skalar seperti String, Int, Float, Boolean, dan ID. Tipe scalar memungkinkan klien dan server untuk bertukar data primitif dengan mudah.
### Validasi Skema:
GraphQL memiliki mekanisme validasi skema yang kuat. Saat operasi dikirim ke server, skema akan diverifikasi untuk memastikan bahwa operasi tersebut sesuai dengan struktur dan tipe data yang telah didefinisikan.
### Graf (Graph):
GraphQL menggunakan representasi data dalam bentuk graf. Dengan menggunakan graf, klien dapat dengan mudah menentukan relasi antar tipe dan mengambil data yang berkaitan.

Dalam pengembangan dengan Golang dan GraphQL, kita menggunakan paket dan pustaka Go yang telah dibuat untuk mempermudah pembangunan server GraphQL. Contohnya, gqlgen adalah alat yang populer yang memungkinkan kita untuk menghasilkan boilerplate code dan resolver otomatis berdasarkan skema GraphQL yang didefinisikan.

Dengan menggunakan GraphQL dalam pengembangan dengan Golang, kita dapat membangun API yang efisien, fleksibel, dan tanggap terhadap kebutuhan klien. GraphQL memungkinkan klien untuk secara presisi meminta data yang dibutuhkan dan menghindari over-fetching atau under-fetching data. Selain itu, dengan tipe-tipe yang didefinisikan dalam skema, dokumentasi yang kuat, dan validasi skema, GraphQL membantu dalam membangun dan memelihara sistem yang terdokumentasi dengan baik dan konsisten.


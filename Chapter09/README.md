# Fiber
**Fiber** adalah kerangka web yang terinspirasi oleh [Express](https://github.com/expressjs/express) yang dibangun di atas [Fasthttp](https://github.com/valyala/fasthttp) , mesin HTTP tercepat untuk Go . Dirancang untuk memudahkan pengembangan tanpa alokasi memori yang besar dan performa yang terbaik.

**Fiber** adalah sebuah framework web open source yang ditulis dalam bahasa pemrograman Go atau disebut juga Golang. Framework ini dirancang dengan fokus pada kecepatan, efisiensi, dan kemudahan penggunaan. Fiber juga dilengkapi dengan fitur-fitur modern seperti middleware, routing, handling request dan response, serta dukungan untuk WebSocket.

Dokumen ini untuk **Fiber v2** , yang dirilis pada **15 September 2020** 
Dalam bahasa pemrograman Go, "fiber" dapat diartikan sebagai "serat" atau "benang", yang menggambarkan sifat ringan dan cepat dari framework ini. Fiber didesain untuk mempercepat pengembangan aplikasi web yang efisien dan dapat diandalkan dengan menggunakan bahasa pemrograman Go yang ringan dan efisien dalam penggunaan sumber daya.
Dalam perkembangannya, Fiber menjadi salah satu framework web yang populer di komunitas pengembang Go karena performa dan kemudahan penggunaannya.

## Instalasi
Instalasi dilakukan dengan menggunakan go get sbb:
```go
go get github.com/gofiber/fiber/v2
```

Beberapa nilai yang dikembalikan dari **fiber.Ctx** tidak dapat diubah secara default.
Karena fiber dioptimalkan untuk performa tinggi , nilai yang dikembalikan dari **fiber.Ctx** tidak dapat diubah secara default dan akan digunakan kembali di seluruh permintaan. Sebagai aturan praktis, Anda hanya boleh menggunakan nilai konteks di dalam handler, dan Anda tidak boleh menyimpan referensi apa pun.
``` go
func handler(c *fiber.Ctx) error {
    // Variable is only valid within this handler
    result := c.Params("foo") 

    // ...
}
```

Jika Anda perlu mempertahankan nilai tersebut di luar handler, buat salinan dari buffer yang mendasarinya menggunakan salinan bawaan. Berikut adalah contoh untuk mempertahankan string:

``` go
func handler(c *fiber.Ctx) error {
    // Variable is only valid within this handler
    result := c.Params("foo")

    // Make a copy
    buffer := make([]byte, len(result))
    copy(buffer, result)
    resultCopy := string(buffer) 
    // Variable is now valid forever

    // ...
}
```

 membuat fungsi khusus **CopyString** yang melakukan hal di atas dan tersedia di bawah [gofiber/utils](https://github.com/gofiber/fiber/tree/master/utils) .
 ``` go
 app.Get("/:foo", func(c *fiber.Ctx) error {
    // Variable is now immutable
    result := utils.CopyString(c.Params("foo")) 

    // ...
})
```

Kemudian gunakan **Immutable**. intinya sih untuk membuat semua nilai yang dikembalikan dari konteks agar tidak berubah
``` go
app := fiber.New(fiber.Config{
    Immutable: true,
})
```

## Membuat Helloworld
Contoh script sederhana
``` go
package main

import "github.com/gofiber/fiber/v2"

func main() {
    app := fiber.New()

    app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello, World!")
    })

    app.Listen(":3000")
}
```
Jalankan pake ieu
``` go
go run server.go
```

## Routingnya
Untuk mengetahui bagaimana aplikasi merespons permintaan klien ke endpoint, yang merupakan PATH dan metode requestnya seperti HTTP **( GET, PUT, POST, dll.)**
### Definisikan routesnya
``` go
// Function signature
app.Method(path string, ...func(*fiber.Ctx) error)
```

### Routes sederhananya begini
``` go
// Respond with "Hello, World!" on root path, "/"
app.Get("/", func(c *fiber.Ctx) error {
    return c.SendString("Hello, World!")
})
```
### Parameters
``` go
// GET http://linknyaapa? (buka pakai live server)

app.Get("/:value", func(c *fiber.Ctx) error {
    return c.SendString("value: " + c.Params("value"))
    // => Get request with value: hello world
})
```
### Parameter Opsional
``` go
// GET http://linknyaapa? (buka pakai live server)

app.Get("/:name?", func(c *fiber.Ctx) error {
    if c.Params("name") != "" {
        return c.SendString("Hello " + c.Params("name"))
        // => Hello john
    }
    return c.SendString("Where is john?")
})
```

### Wildcrads
``` go
// GET http://localhost:3000/api/user/john

app.Get("/api/*", func(c *fiber.Ctx) error {
    return c.SendString("API path: " + c.Params("*"))
    // => API path: user/john
})
```











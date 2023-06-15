package main

import (
	"tb-new/bootstrap"
	"tb-new/repository"

	"github.com/gofiber/fiber/v2"
)

type Repository repository.Repository

func main() {
	app := fiber.New()
	bootstrap.InitializeApp(app)
}

package fakers

import (
	"time"

	"1.ProjectGo/app/models"
	"github.com/bxcodec/faker/v3"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

func Pengguna_boongan(db *gorm.DB) *models.User {
	return &models.User{
		ID:            uuid.New().String(),
		FirstName:     faker.FirstName(),
		LastName:      faker.LastName(),
		Email:         faker.Email(),
		Password:      "S2y$10$92IXUNpkjO0rQ5byNi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi", //password
		RememberToken: "",
		CreatedAt:     time.Time{},
		UpdatedAt:     time.Time{},
		DeletedAt:     gorm.DeletedAt{},
	}
}

//selesai

package adamquis

import (
	"fmt"
	"testing"
)

func TestInsertPresensi(t *testing.T) {
	long := 98.345345
	lat := 123.561651
	lokasi := "Gedung"
	phonenumber := "89673581578"
	checkin := "Ya"
	biodata := Karyawan{
		Nama:         "Adam",
		Phone_number: "89673581578",
		Jabatan:      "Developer",
	}
	hasil := InsertPresensi(long, lat, lokasi, phonenumber, checkin, biodata)
	fmt.Println(hasil)

}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "89673581578"
	biodata := GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}

package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		// Upgrade HTTP connection to WebSocket
		conn, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			log.Println("Failed to upgrade connection to WebSocket:", err)
			return
		}
		defer conn.Close()

		for {
			// Read message from client
			_, msg, err := conn.ReadMessage()
			if err != nil {
				log.Println("WebSocket read error:", err.Error())
				break
			}

			// Echo the message back to the client
			err = conn.WriteMessage(websocket.TextMessage, msg)
			if err != nil {
				log.Println("WebSocket write error:", err.Error())
				break
			}
		}
	})

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("public")))

	fmt.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}

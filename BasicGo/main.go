package main

import (
	P8 "GoProject/Napaping"

	"fmt"

	"github.com/google/uuid"
)

func main() {
	fmt.Println("Hello, World!")
	P8.HelloPing()
	fmt.Println(P8.Add(1, 2))

	id := uuid.New()
	fmt.Println("UUID:", id)
}

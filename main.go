package main

import (
	"github.com/deltafund/charts-test/chart"
	"github.com/deltafund/charts-test/server"
)

func main() {

	line := chart.NewMockLineChart() //grafico opciones
	hub := server.NewHub(line)

	hub.StartServer("5000")
}

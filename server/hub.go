package server

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/go-echarts/go-echarts/v2/charts"
)

type Hub struct {
	server *gin.Engine
}

func NewHub(line *charts.Line) *Hub {
	server := gin.Default()

	server.Use(static.Serve("/", static.LocalFile("./client/build", true)))

	server.GET("/chart", func(c *gin.Context) {
		line.Render(c.Writer)
	})

	return &Hub{server: server}
}

func (h *Hub) StartServer(port string) {
	h.server.Run(":" + port)
}

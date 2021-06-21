package main

import (
	"github.com/deltafund/charts-test/chart"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()

	server.Use(static.Serve("/", static.LocalFile("./client/build", true)))

	//api := server.Group("/api")

	line := chart.NewMockLineChart()

	// {
	// 	api.GET("/chart", func(c *gin.Context) {
	// 		c.JSON(http.StatusOK, gin.H{
	// 			"message": "pong",
	// 		})
	// 	})
	// }

	server.GET("/chart", func(c *gin.Context) {
		line.Render(c.Writer)
	})

	// server.GET("/", func(ctx *gin.Context) {
	// 	ctx.JSON(200, videoController.FindAll())
	// })

	server.Run(":5000")
}

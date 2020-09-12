package main

import (
  "cpustats/pkg/sys"
  "github.com/leaanthony/mewn"
  "github.com/wailsapp/wails"
)

func basic() string {
  return "Hello World!"
}

func main() {

  js := mewn.String("./frontend/dist/app.js")
  css := mewn.String("./frontend/dist/app.css")
  stats := &sys.Stats{}
  app := wails.CreateApp(&wails.AppConfig{
    Width:  1024,
    Height: 768,
    Title:  "CPUStats",
    JS:     js,
    CSS:    css,
    Colour: "#131313",
  })
  app.Bind(stats)
  app.Run()
}

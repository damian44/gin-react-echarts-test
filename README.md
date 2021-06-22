# gin-react-echarts-test
Test web app with server implemented in go using gin-gonic framework and client using react framework.

The app is a simple client that shows one line chart from github.com/echarts library that implements Apache echarts.

## How to Run 
On package.json `set PORT:5000` react port is changed to fit server port.

Change name of `client-build` to `client`.

Inside client folder:

```
npm run build
```

On main.go directory:

```
go run main.go
```

By default the app runs on localhost:5000

## More Info 
https://echarts.apache.org/en/index.html <br />
https://github.com/go-echarts/go-echarts
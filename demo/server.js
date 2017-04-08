var resolve = require('path').resolve,
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('../webpack.config')

var app = new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  stats: {
   colors: true,
   chunks: false
 }
})

app.get('/', function (req, res, next) {
  console.log('hello')
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})


const port = process.env.PORT || 8080
app.listen(port, 'localhost', function (err, result) {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})

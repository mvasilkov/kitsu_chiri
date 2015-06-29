var express = require('express')
var logger = require('morgan')

var app = express()

app.use(logger('dev'))

var server = app.listen(3000, function () {
    var a = server.address()
    var host = a.address
    var port = a.port
    if (a.family == 'IPv6')
        host = '[' + host + ']'
    console.log('listening on http://%s:%s', host, port)
})

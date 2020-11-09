const http = require('http')
const url = require('url')
const queryString = require('querystring')

const pathsStation = [
  '/api/stations/'
]

function start(handlers, route) {
  function onResponse(request, response) {

    const pathname = url.parse(request.url).pathname
    
    switch (request.method) {
      case 'POST':
        let postParams = {}
        let body = ''
        request.on('data', (data) => {
          body += data
        })
        request.on('end', () => {
          postParams = queryString.parse(body)
          // TODO!!!! postParams for forgotPassword is in wrong format!!
          const content = route(handlers, pathname, postParams)
          let httpCode = 200
          if (content && content.error) {
            httpCode = 400
          }

          response.writeHead(httpCode, {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*'
          })
          response.write(JSON.stringify(content))
          response.end()
        })
        break
      default:
        const content = route(handlers, pathname)
        let httpCode = content ? 200 : 404

        response.writeHead(httpCode, {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*'
        })
        response.write(JSON.stringify(content))
        response.end()
        break
    }
  }

  http.createServer(onResponse).listen(8990)
}

exports.start = start

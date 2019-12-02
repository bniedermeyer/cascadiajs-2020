// Add simple, fast, scalable persistence: https://docs.begin.com/en/data/begin-data/
// let data = require('@begin/data')

// Add secure sessions, middleware, and more: https://docs.begin.com/en/functions/http/
// let arc = require('@architect/functions')

// TODO: modify the body object!
let body = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>CascadiaJS 2020</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  </head>
  <body>

    <h1 class="center-text">
      Get Excited for CascadiaJS 2020!
    </h1>

    <p><img width="100%" src="${process.env.BEGIN_STATIC_ORIGIN}/banner-sunriver.jpg"></p>

    <p class="center-text">Information on tickets, location, lodging and more coming soon! See you in Cascadia!</p>

    <p class="center-text">Sign-up for our <a href="http://eepurl.com/dPmCkT">mailing list</a> to hear about Early Bird tickets when they go on sale!</p>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153510023-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-153510023-1');
    </script>

  </body>
</html>
`

exports.handler = async function http(req) {
  return {
    headers: {
  'content-type': 'text/html; charset=utf8',
  'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
  },
    body
  }
}

// Example responses

/* Forward requester to a new path
exports.handler = async function http (req) {
  return {
    statusCode: 302,
    headers: {'location': '/about'}
  }
}
*/

/* Respond with successful resource creation, CORS enabled
let arc = require('@architect/functions')
exports.handler = arc.http.async (http)
async function http (req) {
  return {
    statusCode: 201,
    headers: {'content-type': 'application/json; charset=utf8'},
    body: JSON.stringify({ok: true}),
    cors: true,
  }
}
*/

/* Deliver client-side JS
exports.handler = async function http (req) {
  return {
    headers: {'content-type': 'text/javascript; charset=utf8'},
    body: 'console.log("Hello world!")',
  }
}
*/

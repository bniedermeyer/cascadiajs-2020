let head = require('./head')
let footer = require('./footer')
let bodyScripts = require('./scripts')

module.exports = function Layout ({title, content, socialUrl = 'https://2020.cascadiajs.com/images/cjs19-family.jpg', scripts = []}) {
  // expand title
  title = `CascadiaJS 2020${ title ? ' - ' + title : '' }`

  return /*html*/`
  <!doctype html>
  <html lang=en>
    ${ head({ title, content, socialUrl })}
    <body>
      <div id="root">
        <header>
          <section class="alert">
            <i class="fas fa-hand-point-right"></i> <a href="https://ti.to/event-loop/cascadiajs-2020/">More tickets released</a>, including online-only tickets for $59 <i class="fas fa-hand-point-left"></i>
          </section>
          <nav>
            <div class="wide">
              <div id="logo"><a href="/"><img src="/images/icon-green.svg" alt="logo"/></a></div>
              <div><span><a href="/">CascadiaJS</a></span></div>
              <div class="push"><a href="/schedule">Schedule</a></div>
              <div class="spacer"><a href="/workshops">Workshops</a></div>
              <div class="spacer"><a href="/accessibility">Accessibility</a></div>
              <div class="spacer"><a href="/faq">FAQ</a></div>
              <div class="spacer"><a href="/coc">Code of Conduct</a></div>
              <div class="spacer"><a href="https://ti.to/event-loop/cascadiajs-2020/" class="buy">Tickets</a></div>
            </div>
          </nav>
        </header>
        <div id="content">
          ${ content }
        </div>
        ${ footer() }
      </div>
      ${ bodyScripts({ scripts })}
    </body>
  </html>
`
}

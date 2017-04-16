import fs from 'fs'
import MarkovChain from 'markovchain'
// import logger from 'logger'

var total = 0,
    top = 0,
    settings = 0,
    projects = 0

export default function anticipage (req, res, next) {
  if (req.path === '/favicon.ico') {
    next()
    return
  }

  console.log(req.path)

  var quotes = new MarkovChain(fs.readFileSync('./user1.txt', 'utf8')),
      nextRoute = quotes.start(req.url).end(1).process().split(' ')[1]

  if (nextRoute === '/top') top++
  else if (nextRoute === '/settings') settings++
  else if (nextRoute === '/projects') projects++
  total++

  console.log('Settings: ' + settings / total)
  console.log('Projects: ' + projects / total)
  console.log('Top: ' + top / total)

  next()
}

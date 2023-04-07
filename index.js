const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4000

app.enable('trust proxy')
app.use(express.static('public'))
app.use('/styles', express.static(__dirname + 'public/styles'))
app.use('/img', express.static(__dirname + 'public/images'))
app.use('/static', express.static(__dirname + 'public/static'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))

if (process.env.NODE_ENV === 'production') {
	app.use(function (request, response, next) {
		if (!request.secure) {
			return response.redirect(
				'https://' + request.headers.host + request.url
			)
		}

		next()
	})
}

app.set('views', './public/views')
app.set('view engine', 'ejs')

const renderPage = (URL, file, title) => {
	app.get('/' + URL, (req, res) => {
		res.render(file, {
			title: `Paymenterra | ${title}`,
			file: file,
		})
	})
}

renderPage('', 'index', 'Home')
renderPage('terms', 'terms', 'Terms')
renderPage('privacy', 'privacy', 'Privacy')

app.listen(PORT, () => console.log(`Listening on ${PORT}`))


module.exports = app
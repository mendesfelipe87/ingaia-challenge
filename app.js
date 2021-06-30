const express = require('express')
const axios = require('axios')
const metroQuadrado = require('./metroQuadrado')
const utils = require('./utils')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const port = process.env.PORT

const axiosInstance = axios.create({
  baseURL: process.env.BASEURL,
  timeout: 1000
});

var app = express()
app.use(express.json())
app.get('/', (req, res) => res.json({ message: 'Funcionando v2!' }))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.get('/valorMetroQuadrado', metroQuadrado.buscarValorMetroQuadrado)
app.post('/calcularValorMetroQuadrado', utils.validaContentTypeBody, utils.validaCampos, (req, res) => metroQuadrado.calcularValorMetroQuadrado(req, res, axiosInstance))

if (require.main === module) {
	app.listen(port, '0.0.0.0')
}

module.exports = app
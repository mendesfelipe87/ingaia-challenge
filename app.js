const express = require('express')
const axios = require('axios')
const sql = require('./sqlCommands')
const utils = require('./utils')
const port = 3000

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000
});

var app = express()
app.use(express.json())
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }))
app.get('/valorMetroQuadrado', buscarValorMetroQuadrado)
app.post('/calcularValorMetroQuadrado', utils.validaContentTypeBody, utils.validaCampos, calcularValorMetroQuadrado)

async function buscarValorMetroQuadrado (req, res) {
	try {
		await sql.conectarBancoDeDados()
		const valorMetroQuadrado = await sql.pesquisarValorMetroQuadrado()

		res.status(200).send({
			valorMetroQuadrado
		})
		return
	}
	catch (error) {
		res.status(400).send({
			error: [
				"Houve um problema ao pesquisar o valor do metro quadrado", error
			]
		})
		return
	}
}

async function calcularValorMetroQuadrado(req, res) {
	const metroQuadrado = parseFloat(req.body.metroQuadrado)
	const result = await axiosInstance.get('valorMetroQuadrado')

	const valorMetroQuadradoCalculado = metroQuadrado * result.data.valorMetroQuadrado

	res.status(200).send({
		valorMetroQuadradoCalculado: parseFloat(valorMetroQuadradoCalculado.toFixed(2))
	})
	return
}

if (require.main === module) {
	app.listen(port)
}

module.exports = app
const sql = require('../../utils/sqlCommands')

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

module.exports = buscarValorMetroQuadrado
async function calcularValorMetroQuadrado(req, res, axiosInstance) {
	const metroQuadrado = parseFloat(req.body.metroQuadrado)
	const result = await axiosInstance.get('valorMetroQuadrado')

	const valorMetroQuadradoCalculado = metroQuadrado * result.data.valorMetroQuadrado

	res.status(200).send({
		valorMetroQuadradoCalculado: parseFloat(valorMetroQuadradoCalculado.toFixed(2))
	})
	return
}

module.exports = calcularValorMetroQuadrado
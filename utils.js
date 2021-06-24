function validaContentTypeBody(req, res, next) {
  const reqHeader = req.header('Content-Type')
  if (reqHeader !== 'application/json') {
    res.status(400).send({
      error: [
        "Content-Type do header precisa ser do tipo application/json",
        "Requisição aceita somente JSON como body"
      ]
    })
    return
  }

  next()
}

function validaCampos(req, res, next) {
  const metroQuadrado = parseFloat(req.body.metroQuadrado)

  if (Number.isNaN(metroQuadrado)) {
    res.status(400).send({
      error: [
        `Valor do metro quadrado precisa ser decimal`
      ]
    })

    res.end()
  }

  if (metroQuadrado < 10 || metroQuadrado > 10000) {
    res.status(400).send({
      error: [
        `Valor do metro quadrado precisa ser entre 10 e 10 mil mentros quadrados`
      ]
    })

    res.end()
  }

  next()
}

module.exports = {
  validaContentTypeBody,
  validaCampos
}
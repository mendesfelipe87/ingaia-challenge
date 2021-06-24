const utils = require('../utils')

test('validaContentTypeBody', async () => {
  const req = {
    header: jest.fn().mockReturnValue('application/json')
  }
  const res = {
    status: jest.fn().mockReturnValue(200),
    send: jest.fn().mockReturnValue({
      error: [
        "Content-Type do header precisa ser do tipo application/json",
        "Requisição aceita somente JSON como body"
      ]
    })
  }
  const next = jest.fn()

  utils.validaContentTypeBody(req, res, next)

  expect(next).toHaveBeenCalled();
})

test('validaContentTypeBody with Error', async () => {
  const req = {
    header: jest.fn().mockReturnValue('raw')
  }
  const send = jest.fn().mockReturnValue({
    error: [
      "Content-Type do header precisa ser do tipo application/json",
      "Requisição aceita somente JSON como body"
    ]
  })
  const res = {
    status: jest.fn((value) => {

      return {
        statusCode: value,
        send: send
      }
    })
  }
  const next = jest.fn()

  utils.validaContentTypeBody(req, res, next)

  expect(res.status).toHaveBeenCalled();
  expect(send).toHaveBeenCalled();
})

test('validaCampos', async () => {
  const req = {
    body: {
      metroQuadrado: 20
    }
  }

  const send = jest.fn().mockReturnValue({
    error: [
      "Content-Type do header precisa ser do tipo application/json",
      "Requisição aceita somente JSON como body"
    ]
  })

  const res = {
    status: jest.fn((value) => {

      return {
        statusCode: value,
        send: send
      }
    })
  }

  const next = jest.fn()

  utils.validaCampos(req, res, next)

  expect(next).toHaveBeenCalled();
})

test('validaCampos with not decimal value', async () => {
  const req = {
    body: {
      metroQuadrado: 'd'
    }
  }

  const send = jest.fn().mockReturnValue({
    error: [
      "Content-Type do header precisa ser do tipo application/json",
      "Requisição aceita somente JSON como body"
    ]
  })

  const res = {
    status: jest.fn((value) => {

      return {
        statusCode: value,
        send: send
      }
    }),
    end: jest.fn()
  }

  const next = jest.fn()

  utils.validaCampos(req, res, next)

  expect(res.status).toHaveBeenCalled();
  expect(send).toHaveBeenCalled();
  expect(res.end).toHaveBeenCalled();
})

test('validaCampos with value below 10', async () => {
  const req = {
    body: {
      metroQuadrado: 8
    }
  }

  const send = jest.fn().mockReturnValue({
    error: [
      "Content-Type do header precisa ser do tipo application/json",
      "Requisição aceita somente JSON como body"
    ]
  })

  const res = {
    status: jest.fn((value) => {

      return {
        statusCode: value,
        send: send
      }
    }),
    end: jest.fn()
  }

  const next = jest.fn()

  utils.validaCampos(req, res, next)

  expect(res.status).toHaveBeenCalled();
  expect(send).toHaveBeenCalled();
  expect(res.end).toHaveBeenCalled();
})

test('validaCampos with value above 10000', async () => {
  const req = {
    body: {
      metroQuadrado: 11000
    }
  }

  const send = jest.fn().mockReturnValue({
    error: [
      "Content-Type do header precisa ser do tipo application/json",
      "Requisição aceita somente JSON como body"
    ]
  })

  const res = {
    status: jest.fn((value) => {

      return {
        statusCode: value,
        send: send
      }
    }),
    end: jest.fn()
  }

  const next = jest.fn()

  utils.validaCampos(req, res, next)

  expect(res.status).toHaveBeenCalled();
  expect(send).toHaveBeenCalled();
  expect(res.end).toHaveBeenCalled();
})
const supertest = require('supertest')
const axios = require('axios')
const app = require('../app')

jest.mock('axios', () => {
  return {
    create: jest.fn().mockReturnValue({
      get: jest.fn().mockReturnValue({
        data: {
          valorMetroQuadrado: 5
        }
      })
    })
  }
})

test('testeChamadaAPIOnline', async () => {
  const response = await supertest(app).get('/')

  expect(response.statusCode).toEqual(200);
  expect(response.body.message).toEqual('Funcionando! v2');
})

test('buscarValorMetroQuadrado', async () => {
  const response = await supertest(app).get('/valorMetroQuadrado')

  expect(response.statusCode).toEqual(200);
  expect(response.body.valorMetroQuadrado).toEqual(5);
})

test('calcularValorMetroQuadrado', async () => {
  const response = await supertest(app)
    .post('/calcularValorMetroQuadrado')
    .send({ metroQuadrado: 20 })
    .expect('Content-Type', /json/)

  expect(response.statusCode).toEqual(200);
  expect(response.body.valorMetroQuadradoCalculado).toEqual(100);
})
const sql = require('mssql')
const connStr = "Server=XXX;Database=XXX;User Id=XXX;Password=XXX;"
const conn = null

async function conectarBancoDeDados() {
  // código de conexão com o banco de dados
  try {
    //conn = sql.connect(connStr)
    console.log('conectou ao bando de dados')
  }
  catch (error) {
    throw "erro de conexão com o banco de dados " + error
  }
}

async function pesquisarValorMetroQuadrado() {
  const valorMetroQuadrado = await execSQLQuery('SELECT valorMetroQuadrado FROM TabelaValorMetroQuadrado WHERE ID = 1')
  return valorMetroQuadrado
}

async function execSQLQuery(sqlQry) {
  try {
    // linhas para execução da query e retorno do valor
    // const queryResult = await global.conn.request().query(sqlQry)
    // return queryResult.recordset
    console.log('Query Executada: ' + sqlQry)
    return 5
  }
  catch (error) {
    throw error
  }
}

module.exports = {
  conectarBancoDeDados,
  pesquisarValorMetroQuadrado
}
const connection = require('../database/connection');

module.exports = {
  async index(request, response){
    const establishments_id = request.headers.authorization;

    const establishments = await connection('shits')
    .where('establishments_id', establishments_id)
    .select('*')

    return response.json(establishments)
  }
}
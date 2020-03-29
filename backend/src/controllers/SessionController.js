const connection = require('../database/connection');

module.exports = {
  async create(request,response){
    const {nick} = request.body;

    const user = await connection('users')
    .where('nick', nick)
    .select('name')
    .first();

    if(!user){
      return response.status(400).json({'error': 'Usuário não existe'})
    }

    return response.json(user)
  }
}
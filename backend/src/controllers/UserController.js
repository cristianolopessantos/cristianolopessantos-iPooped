const bcrypt = require('bcrypt');
const connection = require('../database/connection');

module.exports = {
  async create (request,response) {
    const {name, nick, password} = request.body;
    const password_hash = await bcrypt.hash(password,8)
    
    const user_exist = await connection('users')
    .where('nick',nick)
    .select('nick')
    .first();

    
    if(user_exist && nick === user_exist.nick){
      return response.status(400).json({error: 'User already exists'});
    }

    const [id] = await connection('users').insert({
      name,
      nick,
      password_hash
    })
    return response.json({id})
  }
}
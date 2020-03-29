const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
  async index(request,response){
    const establishments = await connection('establishments').select('*');
    return response.json(establishments)
  },
  
  async create(request,response){
    const {name, address, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('establishments').insert({
      id,
      name,
      address,
      city,
      uf,
    })
    return response.json({id})
  }
}
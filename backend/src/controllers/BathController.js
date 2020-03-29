const connection = require('../database/connection');

module.exports = {
  async index(request,response){

    const bathrooms = await connection('bathrooms').select('*');
    return response.json(bathrooms)
  },

  async create(request,response){
    const {title, reference} = request.body;

    const [id] = await connection('bathrooms').insert({
      title,
      reference,
    })
    
    return response.json({id});
  },

  async delete(request, response){
    const { id } = request.params;

    await connection('bathrooms').where('id', id).delete();

    return response.status(204).send();

}
}
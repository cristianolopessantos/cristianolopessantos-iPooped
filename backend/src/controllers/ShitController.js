const connection = require('../database/connection');
const date = require('date-fns');
module.exports = {
  async index(request, response){
    const {page=1} = request.query;

    const [count] = await connection('shits').count();

    const shits = await connection('shits')
    .join('bathrooms', 'bathrooms.id', '=', 'shits.bathroom_id')
    .limit(5)
    .offset((page-1)*5)
    .select('shits.*', 'bathrooms.title');

    response.header('X-Total-Count', count['count(*)'])
    return response.json(shits)
  },

  async create(request,response){
    const { title_shit, description} = request.body;
    const { bathroom_id } = request.params;
    const user_id = request.headers.authorization;
    const created_at = date.format(new Date(), 'dd/MM/yyyy'); 
    const updated_at = created_at;
    const [id] = await connection('shits').insert({
      title_shit,
      description,
      user_id,
      bathroom_id,
      created_at,
      updated_at
    })
    return response.json({id})
  },

  async delete(request, response){
      const { id } = request.params;
      // const establishments_id = request.headers.authorization;

      // const shits = await connection('shits')
      // .where('id',id)
      // .select('establishments_id')
      // .first();

      // if(shits.establishments_id !== establishments_id){
      //   return response.status(401).json({error: 'Operation not permitted'})
      // }

      await connection('shits').where('id', id).delete();

      return response.status(204).send();

  }
}
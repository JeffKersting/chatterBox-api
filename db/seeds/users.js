exports.seed = async function(knex) {
  try {
    await knex('messages').del()
    await knex('users').del()

    const userOneId = await knex('users').insert({
      user: 'jeff',
      password: 'password'
    }, 'user')
    const userTwoId= await knex('users').insert({
      user: 'max',
      password: 'password2'
    }, 'user')
    return knex('messages').insert([
      {message: 'hey', user_name: userOneId[0]},
      {message: 'yo', user_name: userTwoId[0]},
      {message: 'whats up', user_name: userOneId[0]},
      {message: 'not much', user_name: userTwoId[0]}
    ])
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};

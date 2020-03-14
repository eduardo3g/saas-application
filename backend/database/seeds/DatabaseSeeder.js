'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Eduardo Santana',
      email: 'eduardosbrasil10@gmail.com',
      password: '123456'
    })

    await user.teams().create({
      name: 'LinkApi',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder

const Model = use('Model')

class Team extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        slug: 'name' // slug - column name on 'teams' table | name - slug will be created based on name column value
      },
      strategy: 'dbIncrement',
      disableUpdates: false // only sets slug when the team is created
    })
  }

  users () {
    return this.belongsToMany('App/Models/User').pivotModel(
      'App/Models/UserTeam'
    )
  }
}

module.exports = Team

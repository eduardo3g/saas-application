'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('users', 'UserController.store').validator('User')

Route.group(() => {
  Route.get('roles', 'RoleController.index')

  Route.resource('teams', 'TeamController')
    .apiOnly()
    .validator(
      new Map(
        [
          [
            ['teams.store', 'teams.update'], // only applies 'Team' validator for these methods
            ['Team']
          ]
        ]
      )
    )
}).middleware('auth')

Route.group(() => {
  Route.post('invites', 'InviteController.store').validator('Invite').middleware('can:invites_create')

  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(
      new Map(
        [
          [
            ['projects.store', 'projects.update'], // only applies 'Project' validator for these methods
            ['Project']
          ]
        ]
      )
    )
    .middleware(
      new Map([
        [['projects.store', 'projects.update'], ['can:projects_create']]
      ])
    )

  Route.get('members', 'MemberController.index')
  Route.put('members/:id', 'MemberController.update').middleware('is:administrator')

  Route.get('permissions', 'PermissionController.show')
}).middleware(['auth', 'team'])

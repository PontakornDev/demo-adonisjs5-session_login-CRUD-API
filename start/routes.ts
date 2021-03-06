/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('login', 'LoginController.signUp')
Route.post('register','LoginController.register')
Route.get('users','LoginController.users')
Route.delete('logout','LoginController.logout')

Route.group(() => {
  Route.get('/getdata', 'CRUDController.index')
  Route.get('/getedit/:id', 'CRUDController.edit')
  Route.put('/update/:id', 'CRUDController.update')
  Route.post('/add', 'CRUDController.create')
  Route.delete('/delete/:id','CRUDController.delete')
}).prefix('/api')

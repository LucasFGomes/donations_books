'use strict'

const User = use('App/Models/User');

class UserController {
  async register({ request }) {

    const data = request.only(['name', 'username', 'email', 'password', 'credits', 'points']);

    const user = await User.create(data);

    return user;
  }

  async auth({ request, auth }) {

    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }
}

module.exports = UserController

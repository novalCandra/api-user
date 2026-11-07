
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: 'database_interview_test',
      user: 'root',
      password: '',
    },
    migrations : {
      directory : "./migrations"
    }
  }

};

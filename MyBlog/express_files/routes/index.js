var express = require('express');
var router = express.Router();

const connection = require("../db/pool");

router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM blog_content", function (error, result) {
    if (error) {
      throw error;
    }
    res.status(200).json({
      data: result.rows,
    });
    posts = rows
    res.render('index', {title: 'Express', posts: posts});
  });
});

module.exports = router;

{% extends 'layout.twig' %}

{% block body %}
  <h1>{{title}}</h1>
  <p>Welcome to {{title}}</p>
  <p>Hello World</p>

  {% for post in posts %}
    <p>{{ post.title }}</p>
    <p>{{ post.content }}</p>
  {% endfor %}
{% endblock %}

// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('my_blog', 'root', process.env.MYSQL_ROOT_PASSWORD, {
//   host: 'db',
//   dialect: 'mysql',
//   // dialectOptions: {
//   //   socketPath: '/var/run/mysqld/mysqld.sock'
//   // }
// });


/* GET home page. */
// router.get('/', async (req, res, next) => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
//   res.send('respond with a resource');
// });

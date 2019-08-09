const Sequelize = require('sequelize');
const db = require('./index');

const TodoModel = db.define('todos', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

TodoModel  
    .sync()
    .then(() => console.log("We Synced up fam!!!"))
    .catch(err => console.error(err))

module.exports = TodoModel;
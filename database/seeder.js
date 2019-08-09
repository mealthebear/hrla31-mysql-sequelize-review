const Todo = require('./models');

const data = [
    {
        name: "go shopping"
    },
    {
        name: "pass the TA"
    },
    {
        name: "get a job"
    },
    {
        name: "bling operator loop infinite"
    }
]

Todo.bulkCreate(data)
    .then(() => console.log("Todos were seeded properly"))
    .catch(err => console.error(err));
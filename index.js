const express = require('express');
const mongoose = require('mongoose');
const app = express();
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');


PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(todoRoutes);
app.use(express.static('static'));

async function start() {
    try {
        await mongoose.connect('mongodb+srv://test:yarik2006@outline.cu3vd.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log('Server has been started!');
        });
    } catch (e) {
        console.log(e);
    }
}


start();
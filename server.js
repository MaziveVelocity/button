
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./controller');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(router);
// app.get('/', (req, res) => {
//     res.render('button');
//     console.log('on the main page')
//     // res.json({message: 'On the main page'})
// })

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Application is running on port ${PORT}`);
    })
})
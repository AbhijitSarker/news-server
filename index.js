const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Spread the News!')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(news => parseInt(news.category_id) === id)
        res.send(categoryNews)
    }
})



app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {

    const id = req.params.id;
    // console.log(id)
    const selectedNews = news.find(news => news._id === id);
    res.send(selectedNews)

})



app.listen(port, () => {
    console.log(`Spread The News listening on port ${port}`)
})
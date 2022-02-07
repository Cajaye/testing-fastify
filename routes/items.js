const { getAllItems, getItemById } = require('../controllers/items')
const { getItemsOpts } = require('../schemas/items')

const itemRoutes = (fastify, options, done) => {
    fastify
        .get('/items', getItemsOpts, getAllItems)
        .get('/items/:id', getItemById)

    done()
}

module.exports = itemRoutes
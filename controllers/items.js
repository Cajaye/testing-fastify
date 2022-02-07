const items = require('../items')


const getAllItems = (request, reply) => {
    reply.status(200).send(items)
}


const getItemById = (request, reply) => {
    const { id } = request.params
    const getSingleItem = items.find(item => item.id === Number(id))
    if (!getSingleItem) {
        return reply.status(404).send(`Cannot find item with the id of ${id}`)
    }
    reply.status(200).send(getSingleItem)
}

module.exports = { getAllItems, getItemById }
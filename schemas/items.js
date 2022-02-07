//options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        name: { type: 'string' }
                    }
                }
            }
        }
    }
}
module.exports = { getItemsOpts };
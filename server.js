const fastify = require('fastify')({ logger: true })
require('dotenv').config()
const mongoDBconnect = require('./db/connect')

fastify.register(require('./routes/items'))



const port = process.env.PORT || 5000;
const start = async () => {
    try {
        await mongoDBconnect(process.env.MONGO_URI)
        await fastify.listen(port)
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}
start()
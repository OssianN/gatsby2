const getProducts = require('./getProducts');

module.exports.handlers = async event => {
    if (event.httpMethod === 'GET') {
        return await getProducts(event);
    }
}
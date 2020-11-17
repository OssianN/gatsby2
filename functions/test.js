// const getProducts = require('./getProducts');

exports.handler = async (event, context, callback) => {
    // console.log(event, 'THis is event =======')
    // if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({msg: 'This works!'})
        };
    // }
}

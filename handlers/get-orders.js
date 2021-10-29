const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function getOrders(orderId) {
    if (typeof orderId === 'undefined') {
        return docClient.scan({
            TableName: 'pizza-orders',
        }).promise()
            .then(result => result.Items)
            .catch((e) => {
                throw e
            })
    }

    return docClient.scan({
        TableName: 'pizza-orders',
        Key: {
            orderId: orderId
        }
    }).promise()
        .then(result => result.Items)
        .catch((e) => {
            throw e
        })
}


module.exports = getOrders

function deleteOrder(id) {
    if (!id) {
        throw new Error('Order ID is required for deleting Order')
    }
    return {}
}

module.exports = deleteOrder;

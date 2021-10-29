function updateOrder(id, updates) {
    if (!id || !updates) {
        throw new Error("Order id and updates objects are required for updating order.")
    }
    return {
        message: `Order ${id} was successfully updated.`
    }
}

module.exports = updateOrder;

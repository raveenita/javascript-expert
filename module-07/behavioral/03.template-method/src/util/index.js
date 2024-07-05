import OrderBusiness from "../business/orderBusiness";
import Order from "../entities/order";

const order = new Order({
    customerId: '123',
    amount: 100,
    products: [{ description: 'ferrari'}]
});

const orderBusiness = new OrderBusiness();
const result = orderBusiness.create(order);


import BaseBusiness from "./base/baseBusiness";

export default class OrderBusiness extends BaseBusiness {
    #order = new Set();

    _validateRequiredFields(data) {
        return !!data.customerId && !!data.products.length;
    }
    
    _create(data) {
        this.#order.add(data);

        return true;
    }
}
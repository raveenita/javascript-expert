const { default: Marketing } = require("./events/observers/marketing");
const { default: Shipment } = require("./events/observers/shipment");
const { default: PaymentSubject } = require("./events/subjects/paymentSubject");

const subject = new PaymentSubject();
const marketing = new Marketing();

subject.subscribe(marketing);

const shipment = new Shipment();
subject.subscribe(shipment);

const payment = new Payment(subject);
payment.creditCard({ username: 'raveenita', id: Date.now() });

subject.unsubscribe(marketing);

payment.creditCard({ username: 'raveenita', id: Date.now() });
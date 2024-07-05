import { expect, describe, test, jest } from '@jest/globals';
import PaymentSubject from '../src/events/subjects/paymentSubject';
import Payment from '../src/events/payment';
import Shipment from '../src/events/observers/shipment';
import Marketing from '../src/events/observers/marketing';

describe('Test Suite for Observer Pattern', () => {
    beforeAll(() => {
        jest.spyOn(console, 'log').mockImplementation(() => { });
    });
    test('#paymentSubject notify observer', () => {
        const subject = new PaymentSubject();
        const data = 'some data';

        const observer = {
            update: jest.fn()
        };

        subject.subscribe(observer);
        subject.notify(data);

        expect(observer.update).toBeCalledWith(data);

    });
    test('#paymentSubject should not notify unsubscribed observer', () => {
        const subject = new PaymentSubject();
        const data = 'some data';

        const observer = {
            update: jest.fn()
        };

        subject.subscribe(observer);
        subject.unsubscribe(observer);
        subject.notify(data);
        
        expect(observer.update).not.toHaveBeenCalled();
    })
    test('#payment should notify subject after a credit card transaction', () => {
        const subject = new PaymentSubject();
        const payment = new Payment(subject);

        const paymentSubjectNotifierSpy = jest.spyOn(
            payment.paymentSubject,
            payment.paymentSubject.notify.name
        );

        const data = { username: 'raveenita', id: Date.now() }

        payment.creditCard(data);

        expect(paymentSubjectNotifierSpy).toHaveBeenNthCalledWith(data);



    });
    test('#all should notify subscribers after a credit card payment', () => {
       const subject = new paymentSubject();
       const shipment = new Shipment();
       const marketing = new Marketing();

       const shipmentSpy = jest.spyOn(shipment, shipment.update.name);
       const marketingSpy = jest.spyOn(marketing, marketing.update.name);

       subject.subscribe(shipment);
       subject.subscribe(marketing);

       const payment = new Payment(subject);
       const data = { username: 'raveenita', id: Date.now() }

       payment.creditCard(data);

       expect(shipmentSpy).toHaveBeenCalledWith(data);
       expect(marketingSpy).toHaveBeenCalledWith(data);
 

    });
});
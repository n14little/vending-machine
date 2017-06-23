import PaymentProcessor from '../../main/views/payment-processor';

import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
chai.should();

const colaValue = 1.00;
const chipsValue = 0.50;
const candyValue = 0.65;
const items = {
  cola: { name: 'Cola', value: colaValue },
  chips: { name: 'Chips', value: chipsValue },
  candy: { name: 'Candy', value: candyValue }
};

test('should display THANK YOU result message when enough money is in machine', () => {
  const purchase = items.cola;
  const currentBalance = colaValue;

  const paymentProcessor = shallow(<PaymentProcessor purchase={purchase} currentBalance={currentBalance}/>);
  const resultMessage = paymentProcessor.find('p');

  resultMessage.should.have.lengthOf(1);
  resultMessage.text().should.equal('THANK YOU');
});

test('should display price of the item if not enough money in the machine', () => {
  const purchase = items.chips;
  const currentBalance = chipsValue - 0.1;

  const paymentProcessor = shallow(<PaymentProcessor purchase={purchase} currentBalance={currentBalance}/>);
  const resultMessage = paymentProcessor.find('p');

  resultMessage.should.have.lengthOf(1);
  resultMessage.text().should.equal('PRICE: $0.50');
});

import PaymentProcessor from '../../main/views/payment-processor';
import actions from '../../main/constants/actions';

import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);
const sandbox = sinon.sandbox.create();

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

test('should include a button that dismisses dialog and removes the purchase from state when enough money', () => {
  const purchase = items.chips;
  const currentBalance = chipsValue;
  const dispatch = sandbox.stub();

  const paymentProcessor = shallow(<PaymentProcessor purchase={purchase} currentBalance={currentBalance} dispatch={dispatch}/>);
  const dismissButton = paymentProcessor.find('button[type="button"]');

  dismissButton.should.have.lengthOf(1);
  dismissButton.text().should.equal('OK');

  dismissButton.simulate('click');

  dispatch.should.have.been.calledOnce;
  dispatch.should.have.been.calledWith({
    type: actions.SUCCESSFUL_PURCHASE,
  });
});

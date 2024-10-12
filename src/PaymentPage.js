import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
`;

const RadioGroup = styled.div`
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const PaymentDetails = styled.div`
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Component
const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <Container>
      <h1>Checkout Form</h1>
      <Form onSubmit={handleSubmit}>
        <Section>
          <h2>Address</h2>
          <InputLabel>
            Address:
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </InputLabel>
        </Section>

        <RadioGroup>
          <h2>Select Payment Method</h2>
          <RadioLabel>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={handlePaymentMethodChange}
            />
            Credit/Debit Card
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentMethodChange}
            />
            UPI Payment
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={handlePaymentMethodChange}
            />
            Cash on Delivery
          </RadioLabel>
        </RadioGroup>

        {paymentMethod === 'card' && (
          <PaymentDetails>
            <h2>Credit/Debit Card Details</h2>
            <InputLabel>
              Card Number:
              <Input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              Expiry Date:
              <Input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              CVV:
              <Input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </InputLabel>
          </PaymentDetails>
        )}

        {paymentMethod === 'upi' && (
          <PaymentDetails>
            <h2>UPI Payment Details</h2>
            <InputLabel>
              UPI ID:
              <Input
                type="text"
                name="upiId"
                value={formData.upiId}
                onChange={handleChange}
                required
              />
            </InputLabel>
          </PaymentDetails>
        )}

        {paymentMethod === 'cod' && (
          <PaymentDetails>
            <h2>Cash on Delivery</h2>
            <p>Please have the exact amount ready for delivery.</p>
          </PaymentDetails>
        )}

        <SubmitButton type="submit">Submit Payment</SubmitButton>
      </Form>
    </Container>
  );
};

export default PaymentPage;


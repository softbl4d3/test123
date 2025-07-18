import React from 'react';
import { Panel, Typography, Button, Flex } from '@maxhub/max-ui';
import Cart from '../components/Cart';
import OrderForm from '../components/OrderForm';

const CheckoutPage = ({ 
  cartItems, 
  updateQuantity, 
  removeFromCart, 
  totalPrice, 
  onBackToMenu,
  onOrderSubmit,
  showOrderForm,
  onShowOrderForm
}) => {
  const handleOrderSubmit = (formData) => {
    const orderData = {
      items: cartItems,
      customerInfo: formData,
      totalPrice: totalPrice,
      orderTime: new Date().toISOString()
    };
    
    onOrderSubmit(orderData);
  };

  return (
    <Panel mode="primary" padding="m">
      <Flex direction="column" gap={20}>
        <Flex justify="space-between" align="center">
          <Typography.Title size="l">
            🛒 Оформление заказа
          </Typography.Title>
          
          <Button 
            mode="secondary" 
            size="m"
            onClick={onBackToMenu}
          >
            ← Назад к меню
          </Button>
        </Flex>
        
        {!showOrderForm ? (
          <Cart
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            totalPrice={totalPrice}
            onCheckout={onShowOrderForm}
          />
        ) : (
          <OrderForm
            cartItems={cartItems}
            totalPrice={totalPrice}
            onSubmit={handleOrderSubmit}
            onCancel={() => onShowOrderForm(false)}
          />
        )}
      </Flex>
    </Panel>
  );
};

export default CheckoutPage;
import React, { useState } from 'react';
import { Container, Typography, Button, Flex } from '@maxhub/max-ui';
import { useCart } from './hooks/useCart';
import MenuPage from './pages/MenuPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('menu');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);
  
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    addToCart(product);
  };

  const handleGoToCart = () => {
    setCurrentPage('checkout');
    setShowOrderForm(false);
  };

  const handleBackToMenu = () => {
    setCurrentPage('menu');
    setShowOrderForm(false);
  };

  const handleShowOrderForm = (show = true) => {
    setShowOrderForm(show);
  };

  const handleOrderSubmit = (orderData) => {
    console.log('Order submitted:', orderData);
    setLastOrder(orderData);
    setOrderSuccess(true);
    clearCart();
    setCurrentPage('menu');
    setShowOrderForm(false);
    
    // Скрыть уведомление через 5 секунд
    setTimeout(() => {
      setOrderSuccess(false);
    }, 5000);
  };

  const handleNewOrder = () => {
    setOrderSuccess(false);
    setLastOrder(null);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {orderSuccess && lastOrder && (
        <Container style={{ 
          margin: '16px', 
          marginBottom: '0',
          padding: '16px',
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '8px',
          color: '#155724'
        }}>
          <Flex justify="space-between" align="center">
            <div>
              <Typography.Text weight="medium">
                ✅ Заказ успешно оформлен!
              </Typography.Text>
              <br />
              <Typography.Text size="s">
                Заказ на сумму {lastOrder.totalPrice} ₽ принят в обработку
              </Typography.Text>
            </div>
            <Button size="s" mode="tertiary" onClick={handleNewOrder}>
              ✕
            </Button>
          </Flex>
        </Container>
      )}
      
      {currentPage === 'menu' && (
        <MenuPage
          onAddToCart={handleAddToCart}
          cartItemsCount={getTotalItems()}
          onGoToCart={handleGoToCart}
        />
      )}
      
      {currentPage === 'checkout' && (
        <CheckoutPage
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          totalPrice={getTotalPrice()}
          onBackToMenu={handleBackToMenu}
          onOrderSubmit={handleOrderSubmit}
          showOrderForm={showOrderForm}
          onShowOrderForm={handleShowOrderForm}
        />
      )}
    </div>
  );
};

export default App;
import React from 'react';
import { Container, Typography, Button, Flex, IconButton } from '@maxhub/max-ui';

const Cart = ({ cartItems, updateQuantity, removeFromCart, totalPrice, onCheckout }) => {
  if (cartItems.length === 0) {
    return (
      <Container style={{ 
        border: '1px solid #e0e0e0', 
        borderRadius: '12px', 
        padding: '16px',
        backgroundColor: '#fff'
      }}>
        <Typography.Text color="secondary" align="center">
          Корзина пуста
        </Typography.Text>
      </Container>
    );
  }

  return (
    <Container style={{ 
      border: '1px solid #e0e0e0', 
      borderRadius: '12px', 
      padding: '16px',
      backgroundColor: '#fff'
    }}>
      <Flex direction="column" gap={16}>
        <Typography.Title size="m">
          Корзина ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </Typography.Title>
        
        <Flex direction="column" gap={12}>
          {cartItems.map(item => (
            <Container 
              key={item.id} 
              style={{ 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                padding: '12px',
                backgroundColor: '#fafafa'
              }}
            >
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={8}>
                  <span style={{ fontSize: '24px' }}>{item.image}</span>
                  <Flex direction="column">
                    <Typography.Text size="s" weight="medium">
                      {item.name}
                    </Typography.Text>
                    <Typography.Text size="xs" color="secondary">
                      {item.price} ₽
                    </Typography.Text>
                  </Flex>
                </Flex>
                
                <Flex align="center" gap={8}>
                  <IconButton 
                    size="s" 
                    mode="tertiary"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </IconButton>
                  
                  <Typography.Text size="s" weight="medium">
                    {item.quantity}
                  </Typography.Text>
                  
                  <IconButton 
                    size="s" 
                    mode="tertiary"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </IconButton>
                  
                  <IconButton 
                    size="s" 
                    mode="destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑️
                  </IconButton>
                </Flex>
              </Flex>
            </Container>
          ))}
        </Flex>
        
        <Flex justify="space-between" align="center">
          <Typography.Title size="m">
            Итого: {totalPrice} ₽
          </Typography.Title>
          
          <Button 
            mode="primary" 
            size="m"
            onClick={onCheckout}
            disabled={cartItems.length === 0}
          >
            Оформить заказ
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Cart;
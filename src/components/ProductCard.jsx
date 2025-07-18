import React from 'react';
import { Container, Typography, Button, Flex } from '@maxhub/max-ui';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Container 
      style={{ 
        border: '1px solid #e0e0e0', 
        borderRadius: '12px', 
        padding: '16px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      <Flex direction="column" gap={12}>
        <div style={{ fontSize: '48px', textAlign: 'center' }}>
          {product.image}
        </div>
        
        <Flex direction="column" gap={4}>
          <Typography.Title size="s">
            {product.name}
          </Typography.Title>
          
          <Typography.Text size="s" color="secondary">
            {product.description}
          </Typography.Text>
          
          <Typography.Title size="m" color="accent">
            {product.price} ₽
          </Typography.Title>
        </Flex>
        
        <Button 
          mode="primary" 
          size="s"
          onClick={() => onAddToCart(product)}
          style={{ marginTop: 'auto' }}
        >
          В корзину
        </Button>
      </Flex>
    </Container>
  );
};

export default ProductCard;
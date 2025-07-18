import React, { useState } from 'react';
import { Panel, Typography, Flex, Grid, Button } from '@maxhub/max-ui';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const MenuPage = ({ onAddToCart, cartItemsCount, onGoToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <Panel mode="primary" padding="m">
      <Flex direction="column" gap={20}>
        <Flex justify="space-between" align="center">
          <Typography.Title size="l">
            🍽️ Меню
          </Typography.Title>
          
          <Button 
            mode="secondary" 
            size="m"
            onClick={onGoToCart}
            disabled={cartItemsCount === 0}
          >
            🛒 Корзина {cartItemsCount > 0 && `(${cartItemsCount})`}
          </Button>
        </Flex>
        
        <Flex gap={8} wrap>
          {categories.map(category => (
            <Button
              key={category.id}
              mode={activeCategory === category.id ? 'primary' : 'secondary'}
              size="s"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon} {category.name}
            </Button>
          ))}
        </Flex>
        
        <Grid gap={16} cols={1} colsTablet={2} colsDesktop={3}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </Grid>
        
        {filteredProducts.length === 0 && (
          <Typography.Text color="secondary" align="center">
            В этой категории пока нет товаров
          </Typography.Text>
        )}
      </Flex>
    </Panel>
  );
};

export default MenuPage;
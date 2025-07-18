import React, { useState } from 'react';
import { Container, Typography, Button, Flex, Input, Textarea } from '@maxhub/max-ui';

const OrderForm = ({ cartItems, totalPrice, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = formData.name && formData.phone && formData.address;

  return (
    <Container style={{ 
      border: '1px solid #e0e0e0', 
      borderRadius: '12px', 
      padding: '16px',
      backgroundColor: '#fff'
    }}>
      <Flex direction="column" gap={20}>
        <Typography.Title size="l">
          Оформление заказа
        </Typography.Title>
        
        <Container style={{ 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px', 
          padding: '12px',
          backgroundColor: '#fafafa'
        }}>
          <Flex direction="column" gap={8}>
            <Typography.Text size="s" weight="medium">
              Ваш заказ:
            </Typography.Text>
            {cartItems.map(item => (
              <Flex key={item.id} justify="space-between">
                <Typography.Text size="s">
                  {item.name} x {item.quantity}
                </Typography.Text>
                <Typography.Text size="s">
                  {item.price * item.quantity} ₽
                </Typography.Text>
              </Flex>
            ))}
            <Flex justify="space-between" style={{ borderTop: '1px solid #eee', paddingTop: '8px' }}>
              <Typography.Text size="s" weight="medium">
                Итого:
              </Typography.Text>
              <Typography.Text size="s" weight="medium">
                {totalPrice} ₽
              </Typography.Text>
            </Flex>
          </Flex>
        </Container>
        
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap={16}>
            <Input
              label="Имя"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Введите ваше имя"
              required
            />
            
            <Input
              label="Телефон"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+7 (999) 123-45-67"
              required
            />
            
            <Textarea
              label="Адрес доставки"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Введите адрес доставки"
              rows={3}
              required
            />
            
            <Textarea
              label="Комментарий к заказу"
              value={formData.comment}
              onChange={(e) => handleInputChange('comment', e.target.value)}
              placeholder="Дополнительные пожелания (необязательно)"
              rows={2}
            />
            
            <Flex gap={12}>
              <Button 
                mode="primary" 
                size="m"
                type="submit"
                disabled={!isFormValid}
                style={{ flex: 1 }}
              >
                Подтвердить заказ
              </Button>
              
              <Button 
                mode="secondary" 
                size="m"
                onClick={onCancel}
                style={{ flex: 1 }}
              >
                Отмена
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Container>
  );
};

export default OrderForm;
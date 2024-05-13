import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDeleteItem() {
    console.log('handleDeleteItem');
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="primary" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}
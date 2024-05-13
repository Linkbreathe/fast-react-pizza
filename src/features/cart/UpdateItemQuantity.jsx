import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemQuantity,
  decreaseItemQuantity,
  getCurrentQuantityById,
} from './cartSlice';
export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  function handleAddItemQuantity() {
    dispatch(addItemQuantity(pizzaId));
  }
  function handleDecreaseItemQuantity() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleAddItemQuantity}>
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
    </div>
  );
}

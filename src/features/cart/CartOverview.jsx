import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartPrice || !totalCartQuantity) return;

  return (
    <div
      className="f flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6
    md:text-base
    "
    >
      <p className=" space-x-4 font-semibold text-stone-200 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>$ {formatCurrency(totalCartPrice)} </span>
      </p>
      <Link to="/cart">Open cart</Link>
    </div>
  );
}

export default CartOverview;

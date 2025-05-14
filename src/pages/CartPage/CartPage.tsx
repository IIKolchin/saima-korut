import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Корзина</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.title} — {item.quantity} шт — {item.price * item.quantity} €
          <button onClick={() => removeFromCart(item.id)}>Удалить</button>
        </div>
      ))}
      <button onClick={clearCart}>Очистить корзину</button>
    </div>
  );
};

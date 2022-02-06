import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 30 ? 0 : 7;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <aside className="block1">
      <h2>Podsumowanie:</h2>
      <hr></hr>
      <hr></hr>
      <div>
        {cartItems.length === 0 && <div>Koszyk jest pusty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price}zł
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr><hr></hr>
            <div className="row">
              <div className="col-2">Cena produktów</div>
              <div className="col-1 text-right">{itemsPrice}zł</div>
            </div>
            <div className="row">
              <div className="col-2">Cena przesyłki</div>
              <div className="col-1 text-right">
                {shippingPrice}zł
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Cena do zapłaty</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice}zł</strong>
              </div>
            </div>
            <hr />
            <hr></hr>
            <div className="row">
              <button onClick={() => alert('Zrealizowaleś zamówienie')}>
                Zapłać
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
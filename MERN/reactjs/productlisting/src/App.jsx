import { useContext, useEffect, useState } from "react";
import Display from "./Display";
import Filter from "./Filter";
import Cart from "./Cart";
import { CartContext } from "./Context/CartContextHolder";

function App() {
  const {cart} = useContext(CartContext);
  const [activeCat, setActiveCat] = useState(null);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [rating, setRating] = useState(null);
  const [apply, setApply] = useState(false);
  const [showCart, setShowCart] = useState(false);



  function clearFilter() {
    setFrom(0);
    setTo(0);
    setActiveCat(null);
    setApply(false)
    setRating(null);
  }

  return (
    <div className="container">
      <div className="row justify-content-center sticky-top">
        <button className="btn mx-auto block btn-primary" onClick={() => setShowCart(!showCart)}>
          {showCart == true ? 'Hide Cart' : 'Show Cart'} ({cart.length})
        </button>
      </div>
      <div className="row">
        {
          showCart == true
            ? <Cart />
            :
            <>
              <Filter rating={rating} setRating={setRating} clearFilter={clearFilter} setApply={setApply} range={
                { from: parseInt(from), to: parseInt(to), setFrom, setTo }
              } activeCat={activeCat} setActiveCat={setActiveCat} />
              <Display rating={rating} apply={apply} range={
                { from: parseInt(from), to: parseInt(to), setFrom, setTo }
              } activeCat={activeCat} />
            </>
        }
      </div>
    </div >
  );
}

export default App;

import { useState } from 'react'



const Cart = ({removeCartItem, cartItems}) => {
  return (
    <section className="main-container">
      <h2>Startsida</h2>
      {loggedInUser ? (
        <div> {loggedInUser.username} är inloggad.</div>
      ) : (
        <p>Logga in via menyn för att köpa och sälja böcker</p>
      )}
      <div className="book-container">
        <ul className="book">
          {cartItems?.map((book, i) => (
            <li key={book.id}>
              <h4>{book.title}</h4>

              <div className="book-buttons-container">
                <button
                  className="lp-buttons"
                  onClick={() => {
                    removeCartItem({books})
                  }}
                >
                  Ta bort från varukorgen
                  {isBasketPopUpOpen && i == currentOpenBook && (
                    <PopUp
                      content={
                        <>
                          <h4>{book.title} är tillagd i varukorgen!</h4>
                          <p>Forsätt handla genom att trycka på krysset.</p>
                          <p>
                            Obs, endast visuellt. Kod för detta är ej skrivet...
                          </p>
                        </>
                      }
                      handleClose={togglePopUpAddToBasket}
                    />
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
//lista böcker i varukorgen
//böcker ska kunna läggas till och tas bort ut varukorgen
//varukorgen ska kunna skicka user vidare till betalning
export default Cart;

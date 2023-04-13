import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, tittle: "Product 1", quantity: 1 },
      { id: 1, tittle: "Product 1", quantity: 1 },
    ],
  });
  const handleClick = () => {
    /*setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );*/
    //setGame({ ...game, player: { ...game.player, name: "Bob" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  /*<ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => console.log("clicked")}
      />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <Button color="primary" onClick={handleClick}>
        Click me
      </Button> 
      
      
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      */

  return (
    <div>
      <ExpandableText maxChars={10}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
        praesentium delectus recusandae earum expedita error ea veniam quo eius,
        ut, vel amet, repellat sapiente? Voluptatibus animi eligendi ab ex.
        Suscipit ipsa omnis quod enim, ipsam ratione quam libero? Ullam possimus
        id asperiores aliquid nobis! Quas assumenda fugiat minima amet
        exercitationem officiis dolores iure voluptas nulla consequatur
        similique dicta architecto ipsam velit vel, ab modi obcaecati excepturi?
        Reprehenderit, quis et porro maxime qui, distinctio ipsum harum fugiat
        dolor eveniet rem dicta voluptatibus suscipit nemo aliquid tempore
        pariatur praesentium exercitationem illum unde quam sit deserunt
        nostrum! Soluta ab sed provident facilis quo?
      </ExpandableText>
    </div>
  );
}

export default App;

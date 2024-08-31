import burger1 from "../../../assets/images/burger1.jpg";
import burger2 from "../../../assets/images/burger2.jpg";
import burger3 from "../../../assets/images/burger3.jpg";
import { MenuCard } from "./MenuCard";

import "./menu.scss";

const Menu = () => {
  const addToCartHandler = (itemNum: number) => {
    console.log(itemNum);
  };

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title="Veg Cheese Burger"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={1800}
          title="Cheese Burger with French Fries"
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
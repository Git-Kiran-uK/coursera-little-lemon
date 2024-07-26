import React from "react";
import Button from  "../Button";
import SpecialItem from "../SpecialItem";
import greeksalad from  "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.jpg";
import Lemondessert from "../../assets/lemon dessert.jpg";
import '../../styles/Specials.css';

function Specials() {
  return (
    <section className="specials">
      <div className="special">
        <div className="special-content">
          <h2>Specials</h2>
          <Button>Order Online</Button>
        </div>
        <div className="special-items">
          <SpecialItem title="Greek salad" image={greeksalad} price="12.99">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </SpecialItem>
          <SpecialItem title="Bruchetta" image={bruchetta} price="5.99">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </SpecialItem>
          <SpecialItem title="Lemon dessert" image={Lemondessert} price="5.00">
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </SpecialItem>
        </div>
      </div>
    </section>
  );
}

export default Specials;

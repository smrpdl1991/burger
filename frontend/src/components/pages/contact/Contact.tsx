
import burger from "../../../assets/images/burger1.jpg";
import './contact.scss'

export const Contact = () => {
  return (
    <section className="contact">
      <form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />

        <textarea placeholder="Message..." ></textarea>

        <button type="submit">Send</button>
      </form>

      <div
        className="formBorder"
        
      >
        <div
          
        >
          <img src={burger} alt="Burger" />
        </div>
      </div>
    </section>
  );
};
import './founder.scss'
import me from "../../../assets/images/pp.jpg";

const Founder = () => {

  return (
    <section className="founder">
      <div>

        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Abhishek Singh</h3>

        <p>
          Hey, Everyone I am Abhishek Singh, the founder of MBA Burger Wala.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </div>
      
    </section>
  );
};

export default Founder;
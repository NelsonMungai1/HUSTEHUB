import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, ratings, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, magni harum consequatur maiores pariatur praesentium rem tempora vel laborum, iure dolorem ipsa illo, ex perspiciatis porro. Aut laborum illo magnam?
          </p>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">Ratings: {ratings}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;

import { AiFillStar } from "react-icons/ai";
import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Ratings</h2>
        <Input
          handleChange={handleChange}
          value="5"
          title={<><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /></>}
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="4"
          title={<><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /></>}
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="3"
          title={<><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /></>}
          name="test1"
          
        />

        <Input
          handleChange={handleChange}
          value="2"
          title={<><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /></>}
          name="test1"
          
        />
        <Input
          handleChange={handleChange}
          value="1"
          title={<><AiFillStar className="rating-star" /></>}
          name="test1"
          
        />
      </div>
    </>
  );
};

export default Colors;

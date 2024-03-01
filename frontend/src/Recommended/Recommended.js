import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="buttons-container">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Professions" />
          <Button onClickHandler={handleClick} value="Mover" title="Mover" />
          <Button onClickHandler={handleClick} value="Plumber" title="Plumber" />
          <Button onClickHandler={handleClick} value="Carpenter" title="Carpenter" />
          <Button onClickHandler={handleClick} value="Electrician" title="Electrician" />
          <Button onClickHandler={handleClick} value="Laundry" title="Laundry" />
        </div>
      </div>
    </>
  );
};

export default Recommended;

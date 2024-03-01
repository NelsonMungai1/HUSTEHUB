import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Laundry"
          title="Laundry"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Electrician"
          title="Electrician"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Carpenter"
          title="Carpenter"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Plumber"
          title="Plumber"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Mover"
          title="Mover"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;

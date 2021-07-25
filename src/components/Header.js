import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ mode, tasks }) => {
  return (
    <>
      <header>
        <FontAwesomeIcon icon="list-alt" color="#117bc2" className="iconH" />
        <div>
          <p>Todo List</p>
          <div className="mode">
            <input
              type="checkbox"
              id="toggle"
              className="toggle--checkbox"
              onChange={(event) => {
                event.target.checked ? mode("night") : mode("day");
              }}
            />
            <label htmlFor="toggle" className="toggle--label">
              <span className="toggle--label-background"></span>
            </label>
            <div className="background"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

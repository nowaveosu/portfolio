import { Link } from "react-router-dom";
function Education() {
    return (
      <div>
        2
        <button>
          <Link to="/">go prev</Link>
        </button>
        <button>
          <Link to="/evaluation">go next</Link>
        </button>
      </div>
    );
  }
  
  export default Education;
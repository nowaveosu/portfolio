import { Link } from "react-router-dom";

function Experience() {
    return (
      <div>
        4
        <button>
          <Link to="/evaluation"> go prev</Link>
        </button>
        <button>
          <Link to="/projects"> go next</Link>
        </button>
      </div>
    );
  }
  
  export default Experience;
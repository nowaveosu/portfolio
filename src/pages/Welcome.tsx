import { Link } from "react-router-dom";
import next_button from "../images/next_button.png"
import "../WelcomeStyle.css"

function Welcome() {
  return (
    <div>
      <Link to="/introduction"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      <div className="coffeeBlock">
        <div className="coffee">
            <div className="vapour">
                <span className="vapour-span vapour-span-1"></span>
                <span className="vapour-span vapour-span-2"></span>
                <span className="vapour-span vapour-span-5"></span>
                <span className="vapour-span vapour-span-4"></span>
                <span className="vapour-span vapour-span-6"></span>
                <span className="vapour-span vapour-span-1"></span>
                <span className="vapour-span vapour-span-7"></span>
                <span className="vapour-span vapour-span-8"></span>
                <span className="vapour-span vapour-span-9"></span>
                <span className="vapour-span vapour-span-10"></span>
                <span className="vapour-span vapour-span-11"></span>
                <span className="vapour-span vapour-span-18"></span>
            </div>
        </div>
        <div className="lid"></div>
        <div className="cup">
          <div className="handle"></div>
        </div>
        <div className="bottom"></div>
        
    </div>
      
    </div>
  );
}

export default Welcome;

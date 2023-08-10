import { React } from "react";
import "../Landing/index.css";
function Landing() {
  return (
    <div className="more">
      <div>
        <h1 className="h1">Increase your customers Loyalty and satisfaction</h1>
        <h2 className="h2">
          we help businesses like yours earn more customers, stand out from
          competitors, make more money
        </h2>
        <h3 className="h3">Input your email address and get started now</h3>
      </div>
      <form>
        <input type="email" placeholder="Emailaddress" />
      </form>
      <button className="button"> Get Started now</button>
    </div>
  );
}

export default Landing;

import { useState } from "react";
import "./Form.scss";
import gif from "./globe.gif";

const Form = () => {
  const [formData, setFormData] = useState({
    State: "",
    District: "",
    Pincode: "",
  });

  const { State, District, Pincode } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      State: "",
      District: "",
      Pincode: "",
    });
    console.log(formData);
  };

  const buttonMessage = "Fetch Data";

  return (

    <div>
      <div className="services__inner">
        <div className="services__top">
    <div className="title">Know Your Land's Fertility</div>
          <div className="form-hea">
            <div className="sub">
              Explore your land's potential with precision. Enter your location
              to unlock satellite <br /> insights, revealing the fertility of
              your soil at a glance
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="input-row">
              <div className="side">
                <label htmlFor="State">Your State</label>
                <input
                  placeholder="Enter State"
                  name="State"
                  id="State"
                  type="text"
                  value={State}
                  onChange={onChange}
                />
              </div>

              <div className="side">
                <label htmlFor="District">Your District</label>
                <input
                  placeholder="Enter District"
                  name="District"
                  id="District"
                  type="text"
                  required
                  value={District}
                  onChange={onChange}
                />
              </div>
              <div className="side">
                <label htmlFor="Pincode">Your Pincode</label>
                <input
                  placeholder="Enter Pincode"
                  name="Pincode"
                  id="Pincode"
                  type="text"
                  required
                  value={Pincode}
                  onChange={onChange}
                />
              </div>
            </div>
            <button className="btn" type="submit">
              {buttonMessage}
            </button>
          </form>
        </div>
      </div>
      <img src={gif} alt="gif" className="globe-gif" />
    </div>
  );
};

export default Form;

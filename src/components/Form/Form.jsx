import { useState } from "react";
import "./Form.scss";
import gif from "./globe.gif";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/fetch.context";



const Form = () => {

  const {fetchData} = useContext(Context);

  var date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  let today_date = dd + "-" + mm + "-" + yyyy;

  const [formData, setFormData] = useState({
    State: "",
    District: "",
    Datee: today_date
  });



  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
console.log(formData)};
  
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const buttonMessage = "Fetch Data";

  return (
    <div>
      <div className="services__inner">
        <div className="services__top">
          <div className="title">Know What to Grow</div>
          <div className="form-hea">
            <div className="sub">
              Explore your land's potential with precision. Enter your location
              to unlock satellite <br /> insights, revealing the true potential of 
              your soil at a glance
              <span>{fetchData}</span>
              
            </div>
          </div>
          
          <form onSubmit={onSubmit}>
            <label className="dropdown-header" for="state">
              Choose your State
            </label>
            <select
              onChange={onChange}
              className="dropdown"
              name="State"
              id="elements"
              placeholder="Select State"
            >
              <optgroup label="Select State">
                <option value="select">-select your state-</option>
                <option value="Andra Pradesh">Andra Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Chattisgarh">Chattisgarh</option>
                <option value="Haryana">Haryana</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Punjab">Punjab</option>
              </optgroup>
            </select>
            <br />

            <label id="category" className="dropdown-header" for="district">
              Choose your District
            </label>
            <select
              onChange={onChange}
              className="dropdown"
              name="District"
              id="district"
              placeholder="Select District"
            >
                <option value="select">-select your district-</option>

              <optgroup label="Andra Pradesh">
                <option value="Anantapur">Anantapur</option>
                <option value="Chittoor">Chittoor</option>
                <option value="East Godavari">East Godavari</option>
                <option value="Guntur">Guntur</option>
                <option value="Krishna">Krishna</option>
                <option value="Kurnool">Kurnool</option>
                <option value="Prakasam">Prakasam</option>
                <option value="Srikakulam">Srikakulam</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
                <option value="West Godavari">West Godavari</option>
              </optgroup>
              <optgroup label="Assam">
                <option value="Dibrugarh">Dibrugarh</option>
                <option value="Guwahati">Guwahati</option>
                <option value="Jorhat">Jorhat</option>
                <option value="Kamrup">Kamrup</option>
                <option value="Karbi Anglong">Karbi Anglong</option>
                <option value="Lakhimpur">Lakhimpur</option>
                <option value="Nagaon">Nagaon</option>
                <option value="Sivasagar">Sivasagar</option>
                <option value="Sonitpur">Sonitpur</option>
                <option value="Tinsukia">Tinsukia</option>
              </optgroup>
              <optgroup label="Chattisgarh">
                <option value="Bastar">Bastar</option>
                <option value="Bilaspur">Bilaspur</option>
                <option value="Dantewada">Dantewada</option>
                <option value="Dhamtari">Dhamtari</option>
                <option value="Janjgir-Champa">Janjgir-Champa</option>
                <option value="Jashpur">Jashpur</option>
                <option value="Kanker">Kanker</option>
                <option value="Korba">Korba</option>
                <option value="Raigarh">Raigarh</option>
                <option value="Raipur">Raipur</option>
              </optgroup>

              <optgroup label="Haryana">
                <option value="Karnal">Karnal</option>
                <option value="Kurukshetra">Kurukshetra</option>
                <option value="Ambala">Ambala</option>
                <option value="Hisar">Hisar</option>
                <option value="Sirsa">Sirsa</option>
                <option value="Fatehabad">Fatehabad</option>
                <option value="Rohtak">Rohtak</option>
                <option value="Jind">Jind</option>
                <option value="Bhiwani">Bhiwani</option>
                <option value="Panipat">Panipat</option>
              </optgroup>
              <optgroup label="Gujarat">
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Bhavnagar">Bhavnagar</option>
                <option value="Junagadh">Junagadh</option>
                <option value="Gandhinagar">Gandhinagar</option>
                <option value="Anand">Anand</option>
                <option value="Bharuch">Bharuch</option>
                <option value="Patan">Patan</option>
              </optgroup>
              <optgroup label="Madhya Pradesh">
                <option value="Bhopal">Bhopal</option>
                <option value="Indore">Indore</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Gwalior">Gwalior</option>
                <option value="Ujjain">Ujjain</option>
                <option value="Sagar">Sagar</option>
                <option value="Dewas">Dewas</option>
                <option value="Satna">Satna</option>
                <option value="Ratlam">Ratlam</option>
                <option value="Rewa">Rewa</option>
              </optgroup>
              <optgroup label="Punjab">
                <option value="Ludhiana">Ludhiana</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Jalandhar">Jalandhar</option>
                <option value="Firozpur">Firozpur</option>
                <option value="Hoshiarpur">Hoshiarpur</option>
                <option value="Bathinda">Bathinda</option>
                <option value="Patiala">Patiala</option>
                <option value="Gurdaspur">Gurdaspur</option>
                <option value="Sangrur">Sangrur</option>
                <option value="Kapurthala">Kapurthala</option>
              </optgroup>
            </select>
            <br />

            <label id="category" className="dropdown-header" for="district">
              Date
            </label>
            <select
              className="dropdown"
              name="Datee"
              id="date"
              placeholder="Select Date"
            >
              <option value="1">{today_date}</option>
            </select>
          <Link to='/Predict' className="predict btn submit-form" type="submit">
            {buttonMessage}
          </Link>
          </form>
        </div>
      </div>
      <img src={gif} alt="gif" className="globe-gif" />
    </div>
  );
};




export default Form;


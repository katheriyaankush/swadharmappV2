import React, { useState } from 'react'
import Logo from '../Images/logo.png';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './FormData.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './Spinner/Spinner'
import Success  from './Success/Success';
import AdminLogin from './/AdminLogin/AdminLogin'




const FormData = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isworkshop, setIsworkshop] = useState("");
  const [duration, setDuration] = useState("");
  const [volunteer, setVolunteer] = useState("");
  const [otherhelp, setOtherhelp] = useState("");
  const [response, setResponse] = useState("");
  const [errors, setErrors] = useState({});
  const [isSpinner, setIsSpinner]  = useState(false);
  const [api, setApi]=useState(false);
  const [login, setLogin]=useState(false);


  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors["name"] = "Please fill in the name";
    }
    if (!number) {
      formIsValid = false;
      errors["number"] = "Please fill in the number";
    }
    if (!dob) {
      formIsValid = false;
      errors["dob"] = "Please fill in the DOB";
    }
    if (!country) {
      formIsValid = false;
      errors["country"] = "Please fill in the country";
    }
    if (!state) {
      formIsValid = false;
      errors["state"] = "Please fill in the state";
    }
    if (!city) {
      formIsValid = false;
      errors["city"] = "Please fill in the city";
    }
    setErrors({ ...errors, errors: errors });
    return formIsValid;
  }


  const submitHandler = (event) => {
    event.preventDefault();

    let updateNumber = number.replace(/[^\w ]/, '');
    let isCondition = handleValidation()
  if(updateNumber<10){
 isCondition =false;
  }
    if (isCondition) {
        const allData = {
        name: name,
        number: number,
        dob: dob,
        country: country,
        state: state,
        city: city,
        isworkshop: isworkshop,
        volunteer: volunteer,
        duration: duration,
        otherhelp: otherhelp,
      };
setIsSpinner(true)
      axios.post('https://aqueous-anchorage-48352.herokuapp.com', allData)
      .then(response => {
        setResponse(response.data)
        setIsSpinner(false)
        }).catch((err)=>{
        setApi(true);
      });
        setNumber("");
        setCity("");
        setCountry("");
        setDob("");
        setDuration("");
        setIsworkshop("");
        setName("");
        setOtherhelp("");
        setState("");
        setVolunteer("");
    }
  }


  const handleChange = (e) => {
    e.persist();
    setIsworkshop(e.target.value);
  };
  const handleChangeV = (e) => {
    e.persist();
    setVolunteer(e.target.value);
  };
  const handleChangeH = (e) => {
    e.persist();
    setOtherhelp(e.target.value);
  };

  const redirectHandle = () => {
    setResponse("");
  }
  return (
  

    <div>
    {response? <Success message={response} redirectHandle={redirectHandle} />:
    login?<AdminLogin  setLogin={setLogin}/> :
      <form onSubmit={submitHandler}>
        <section className="mt-4 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <div className="detail-bg">
                  <button type="button" onClick={()=>setLogin(true)} className="LoginClass">Admin Login</button>
                  <div className="text-center"><img src={Logo} alt="" style={{ height: "124px" }} /> </div>
                  <h3 className="text-center main-heading">SwaDharm: Registration Form</h3>
                  {api ? <h2 style={{color: 'red'}}>Something is wrong.</h2>: isSpinner? <Spinner/>:
                  <div>
                  <div className="fill-text">
                    <label><i className="fa fa-user"></i> Name:*</label>
                    <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} className="form-control" placeholder="Name" />
                    <span style={{ color: "red" }}>{errors["name"]}</span>

                  </div>
                  <div className="fill-text">
                    <label><i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp No:*</label>
                    <input value={number} type="number" onChange={(event) => setNumber(event.target.value) } className="form-control" placeholder="Number" />
                    <span style={{ color: "red" }}>{errors["number"]}</span>
                  </div>
                  <div className="fill-text">
                    <label><i className="fa fa-calendar" aria-hidden="true"></i> Date of Birth:*</label>
                    <input value={dob} type="date" onChange={(event) => { setDob(event.target.value) }} className="form-control" placeholder="DOB" />
                    <span style={{ color: "red" }}>{errors["dob"]}</span>

                  </div>
                  <div className="fill-text">
                    <label><i className="fa fa-globe" aria-hidden="true"></i> Country:*</label>
                    <input type="text" value={country} onChange={(event) => { setCountry(event.target.value) }} className="form-control" placeholder="Country" />
                    <span style={{ color: "red" }}>{errors["country"]}</span>
                  </div>
                  <div className="fill-text">
                    <label><i className="fa fa-map" aria-hidden="true"></i> State:*</label>
                    <input type="text" value={state} onChange={(event) => { setState(event.target.value) }} className="form-control" placeholder="State" />
                    <span style={{ color: "red" }}>{errors["state"]}</span>
                  </div>
                  <div className="fill-text">
                    <label><i className="fa fa-map-marker" aria-hidden="true"></i> City:*</label>
                    <input type="text" value={city} onChange={(event) => { setCity(event.target.value) }} className="form-control" placeholder="City" />
                    <span style={{ color: "red" }}>{errors["city"]}</span>

                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <p><strong><i className="fa fa-circle"></i>  Would you like to attend the shivir in workshop format?</strong></p>
                      <span className="box">
                        <Form.Group controlId={isworkshop}>
                          <Form.Check
                            inline
                            value="Yes"
                            type="radio"
                            label="Yes"
                            onChange={handleChange}
                            checked={isworkshop === "Yes"}
                          />
                          <Form.Check
                            inline
                            value="No"
                            type="radio"
                            label="No"
                            onChange={handleChange}
                            checked={isworkshop === "No"}
                          />
                        </Form.Group>
                      </span>
                    </div>
                  </div>
                  <br />


                  <div className="row">
                    <div className="col-sm-12">
                      <div>
                        <h6><strong> How much time would be able to devote per day during paryushan:  </strong></h6>
                      <select className="form-control-sm"  onChange={(event) => { setDuration(event.target.value) }} >
                          <option value="2 hours">2 hours  </option>
                          <option value="2-4 hours">2-4 hours  </option>
                          <option value="4-6 hours">4-6 hours  </option>
                          <option value="time no bar">time no bar  </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <p><strong> <i className="fa fa-circle"></i> Would you like to volunteer for the shivir? </strong></p>
                      <span className="box">
                        <Form.Group controlId={volunteer}>
                          <Form.Check
                            inline
                            value="Yes"
                            type="radio"
                            label="Yes"
                            onChange={handleChangeV}
                            checked={volunteer === "Yes"}
                          />
                          <Form.Check
                            inline
                            value="No"
                            type="radio"
                            label="No"
                            onChange={handleChangeV}
                            checked={volunteer === "No"}
                          />
                        </Form.Group>
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-12">
                      <p><strong> Would you like to interact with and help others during Shivir? </strong></p>
                      <span className="box">
                        <Form.Group controlId={otherhelp}>
                          <Form.Check
                            inline
                            value="Yes"
                            type="radio"
                            label="Yes"
                            onChange={handleChangeH}
                            checked={otherhelp === "Yes"}
                          />
                          <Form.Check
                            inline
                            value="No"
                            type="radio"
                            label="No"
                            onChange={handleChangeH}
                            checked={otherhelp === "No"}
                          />
                        </Form.Group>
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-12">
                      <div>
                        <br />     
                        <button type="submit" name="submit" className="btn btn-danger">Submit</button>
                      </div>
                    </div>
                  
                  </div>
                </div>
}
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </section>
      </form>
      }
    </div>
  )
}

export default FormData;
import { useState } from "react";
import "./App.css";

function App() {
  
  const[formData, setformData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    number:"",
    country:"India",
    streetAddress:"",
    city:"",
    state:"",
    postalCode:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
  });

  function changeHandler(event) {
    const {name ,value , checked , type} = event.target;
    setformData((prev) =>({...prev,[name] :type === "checkbox" ? checked : value}))
  };

  function submitHandler(event){
    event.preventDefault();
    console.log("finally Printing the value of form data");
    console.log({formData})

  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First name</label>
      <br/>
        <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Rounish"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline w-[50vw] h-[4vh] mb-3 mt-1"
         
        />


      <br/>
      <label htmlFor="lastName">Last name</label>
      <br/>
        <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Chandra"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
        />


      <br/>
      <label htmlFor="email">Email Address</label>
      <br/>
        <input
        type="email"
        name="email"
        id="email"
        placeholder="RounishChandra@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
        />

      
      <br/>
      <label htmlFor="number">Contact No.</label>
      <br/>
        <input
        type="text"
        name="number"
        id="number"
        placeholder="97xxxxxxxx"
        value={formData.number}
        onChange={changeHandler}
        className="outline"
        />
        
        <br/>
        <label htmlFor="country">Country</label>
        <br/>
        <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline"
        >
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

      <br/>
      <label htmlFor="streetAddress">Street Address</label>
      <br/>
        <input
        type="streetAddress"
        name="streetAddress"
        id="streetAddress"
        placeholder="B25-C"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
        />
      
      <br/>
      <label htmlFor="city">City</label>
      <br/>
        <input
        type="city"
        name="city"
        id="city"
        placeholder="Etah"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
        />


      <br/>
      <label htmlFor="state">State/Province</label>
      <br/>
        <input
        type="state"
        name="state"
        id="state"
        placeholder="UttarPradesh"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
        />

      <br/>
      <label htmlFor="postalCode">Postal Code</label>
      <br/>
        <input
        type="text"
        name="postalCode"
        id="postalCode"
        placeholder="207001"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
        />

<br/>
<br/>
      <fieldset>
        <legend>By Email</legend>

        <div className="flex flex-row">
        <input
          id="comments"
          name="comments"
          type="checkbox"
          checked={formData.comments}
          onChange={changeHandler}

        />
        <div>
          <label htmlFor="comments">Comments</label>
          <p>Get notified when someone posts a comment on a posting.</p>
        </div>
        </div>

        <div className="flex flex-row">
        <input
          id="candidates"
          name="candidates"
          type="checkbox"
          checked={formData.candidates}
          onChange={changeHandler}

        />
        <div>
          <label htmlFor="candidates">Candidates</label>
          <p>Get notified when a candiadate applies for a job.</p>
        </div>
        </div>

        <div className="flex flex-row">
        <input
          id="offers"
          name="offers"
          type="checkbox"
          checked={formData.offers}
          onChange={changeHandler}

        />
        <div>
          <label htmlFor="offers">Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer.</p>
        </div>
        </div>


      </fieldset>
      <br/>

    <fieldset>
      <legend>Push Notifications</legend>
      <p>These are dilevered via SMS to your mobile phone.</p>
    
    <input
    type="radio"
    id="pushEverything"
    name="pushNotifications"
    value="Everything"
    onChange={changeHandler}
    />

    <label htmlFor="pushEverything">Everything</label>
    <br/>
    
    <input
    type="radio"
    id="pushEmail"
    name="pushNotifications"
    value="Same as Email"
    onChange={changeHandler}
    />

    <label htmlFor="pushEmail">Same as Email</label>
    <br/>

    <input
    type="radio"
    id="pushNothing"
    name="pushNotifications"
    value="No Push Notifications"
    onChange={changeHandler}
    />

    <label htmlFor="pushNothing">No Push Notifications</label>
  
    </fieldset>

    <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>





      </form>
    </div>
  );
}

export default App;

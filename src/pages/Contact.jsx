import React, {useState} from "react";

const Contact = () => {
  const [formData, setFormData]= useState({name:'', email:'', message:''}); //remember formData is the current value which is useState({name:'', email:'', message:''});(our name, email, message inputs are blanked out intially)

  //setFormData:is the update. once the user interacts with the form

//e is talking about the 'event'.e (often short for event) represents the event object that is passed to the event handler function. This event object contains information about the event that was triggered, such as details about the target element, the type of event, and other properties related to the specific event.
  const [errors, setErrors] = useState({});
  const handleChange =(e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  };//here 'e.target.name' 

  const handleError =(e) => {
    if(!e.target.value){
      setErrors({...errors, [e.target.name]:'You must enter the field, as it is required'})
    }else{
      setErrors({...errors, [e.target.name]:''})
    }
  };

  const handleFormSubmit =(e) => {
    e.preventDefault(); //prevent form submission
  }

  return(
    <section>
      <h2> Contact Me:</h2>
      <form onSubmit= {handleFormSubmit}>
      <div>
        <label>Name</label>
        <input
        type="text"
        name= "name"
        value= {formData.name}
        onChange={handleChange}
        onBlur={handleError}
        />
      </div>
      <div>
        <label>Email</label>
        <input
        type="email"
        name= "email"
        value= {formData.email}
        onChange={handleChange}
        onBlur={handleError}
        />
      </div>
      <div>
      <label>Message</label>
        <input
        name= "message"
        value= {formData.message}
        onChange={handleChange}
        onBlur={handleError}
        /> 
      </div>
      <button type="submit">SUBMIT </button>
      </form>
    </section>
  )
};

export default Contact


import React, {useState} from "react";

const styles={
  container:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    minHeight:'50 vh',
    backgroundColor:'#7ebdc2'
  },
  form:{
    width:'50%',
    maxWidth:'700px',
    backgroundColor:"#e0f7fa",
    padding:'20px',
    borderRadius:'8px',
    color:'teal',
    fontWeight:'bold'
  },

};

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
  setFormData ({name:'', email:'', message:''})//to clear form upon submission
  };


  return(
    <section style={styles.container}>
      <h2> Contact Me:</h2>
      <form onSubmit= {handleFormSubmit} style={styles.form}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
        type="text"
        name= "name"
        value= {formData.name}
        onChange={handleChange}
        onBlur={handleError}
        className="form-control"
        id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
        type="email"
        name= "email"
        value= {formData.email}
        onChange={handleChange}
        onBlur={handleError}
        className="form-control"
        id="name"
        />
      </div>
      <div className="form-group">
      <label htmlFor="message">Message</label>
        <input
        name= "message"
        value= {formData.message}
        onChange={handleChange}
        onBlur={handleError}
        className="form-control"
        id="name"
        /> 
      </div>
      <button type="submit" className="btn btn-outline-info">SUBMIT </button>
      </form>
    </section>
  )
};

export default Contact


import React from "react";
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: () => {
      alert("Login successful")
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = "Field Required";
      if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) errors.emailVal = "Username should be an email";
      if (!values.password) errors.password = "Field Required";
      return errors;
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input 
          id="emailField"
          name="email" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.email}
        />
        {formik.errors.email ? <div id="emailError">{formik.errors.email}</div> : (formik.errors.emailVal ? <div id="emailError">{formik.errors.emailVal}</div> : null)}
        
        <div>Password</div>
        <input 
          id="pswField"
          name="password" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.password}
        />
        {formik.errors.password ? <div id="pswError">{formik.errors.password}</div> : null}
        <div>
          <button type="submit" id="submitBtn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

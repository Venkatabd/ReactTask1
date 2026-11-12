import {useState}from 'react';
import './RegistrationForm.css';

export default function RegistrationForm() {

  const[error, setError] = useState("");
  const [formData, setFormData] = useState(
    {
      Firstname: "",
      Lastname: "",
      Email: "",
      Phoneno: "",
      Password: "",
      ConfirmPassword: "",
      DateOfBirth: "",
      Gender: "",
      Address: "",
      City: ""


    }
  );
  
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};
  
    // if(!formData.Firstname || !formData.Lastname || !formData.Email || !formData.Phoneno || !formData.Password || !formData.ConfirmPassword || !formData.DateOfBirth || !formData.Gender || !formData.Address || !formData.City)
    // {
    //   setError("all fields are required");
    //   return;
    // }
    // if (formData.Firstname!=null && formData.Firstname.trim()=="") {
    //   setError("First name is required");
    //   return;
    // }
    // if (!formData.Phoneno.trim()) {
    //     setError("Phone number is required");
    //     return;
    // }
    // else if (!/^[0-9]{10}$/.test(formData.mobile)) {
    //  setError("Enter a valid 10-digit number")
    // }
    // if(formData.Password !== formData.ConfirmPassword)
    // {
    //   setError("password and confirm password should be same");
    //   return;
    // }
    // setError("");
    // alert("form submitted successfully");

  // Form validation

const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!formData.Firstname.trim()) {
      setError("First name is required");
      return;
    }

    if (!formData.Lastname.trim()) {
      setError("Last name is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      setError("Enter a valid email");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.Phoneno)) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }

    if (formData.Password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (formData.Password !== formData.ConfirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.DateOfBirth) {
      setError("Date of birth is required");
      return;
    }

    if (!formData.Gender.trim()) {
      setError("Gender is required");
      return;
    }

    if (!formData.Address.trim()) {
      setError("Address is required");
      return;
    }

    if (!formData.City.trim()) {
      setError("City is required");
      return;
    }

    alert("Form submitted successfully!");
};

return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
   <h3 style={{ color: 'red' }}>{error}</h3>
   <input type="text" value={formData.Firstname}  name="Firstname"  onChange={handleChange} placeholder='Enter your name'  />
    <input type="text" value={formData.Lastname}  name="Lastname"  onChange={handleChange} placeholder='Enter your name'  />
     <input type="email" value={formData.Email}  name="Email"  onChange={handleChange} placeholder='Enter your email'  />
   <input type="number" value={formData.Phoneno}  name="Phoneno"  onChange={handleChange} placeholder='Enter your phone number'  />
      <input type="password" value={formData.Password}  name="Password"  onChange={handleChange} placeholder='Enter your password'  />
      <input type="password" value={formData.ConfirmPassword}  name="ConfirmPassword"  onChange={handleChange} placeholder='Confirm your password'  />
      <input type="date" value={formData.DateOfBirth}  name="DateOfBirth"  onChange={handleChange} placeholder='Enter your date of birth'  />
      <select value={formData.Gender} name="Gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input type="text" value={formData.Address}  name="Address"  onChange={handleChange} placeholder='Enter your address'  />
      <input type="text" value={formData.City}  name="City"  onChange={handleChange} placeholder='Enter your city'  />
      
      <button type="submit" >Submit</button>
      <button type="reset">Reset</button>
      </form>
    </div>
  )
}

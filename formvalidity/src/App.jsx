import './App.css';
import FormInput from './components/FormInput';
import { useRef, useState } from 'react';

function App() {
  //Causes reRender so
  // const [userName, setUserName] = useState("")
  //We use useRef()
  // const userNameRef = useRef();

  const [values, setValues] = useState({
    firstName: "",
    lastName:"",
    email: "",
    phone: "",
    createPassword: "",
    reTypePassword: "",
    Gender: "",
    Country: ""
  })

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name"

    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder:"Last Name",
      label: "Last Name"
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder:"Email",
      label: "Email"
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      placeholder:"Phone",
      label: "Phone"
    },
    {
      id: 5,
      name: "createPassword",
      type: "text",
      placeholder:"Create Password",
      label: "Create Password"
    },
    {
      id: 6,
      name: "reTypePassword",
      type: "text",
      placeholder:"Retype password",
      label: "Retype password"
    },
    {
      id: 7,
      name: "Gender",
      type: "radio",
      placeholder:"Gender",
      label: "Gender"
    },
    {
      id: 8,
      name: "Country",
      type: "text",
      placeholder:"Country",
      label: "Country"
    }
  ]

  const handleSubmit = (e) =>{
    //**We should try to prevent the page from reloading */
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  const onChange = (e) => {
    // console.log(e.target.value)
    //e.tr.name: from input and e.tr.value is from the value we enter inside the input
    setValues({...values, [e.target.name] : e.target.value});
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
      <h1>Register</h1>

        {inputs.map((input) => (
          <FormInput 
            key={input.id} 
            {...input}
            value = {values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

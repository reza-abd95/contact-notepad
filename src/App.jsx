import { useState } from 'react'
import Form from './components/Form';
import ContactList from './components/ContactsList';
import './styles/App.css'

function App() {
  const [value,setValue] = useState(''); 
  const [number,setNumber]=useState('');
  const [mail,setMail]=useState('');
  const [contacts,setContacts] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  
  }

  const numberChangeHandler =(e) =>{
    setNumber(e.target.value);
  }
  const mailChangeHandler = (e) =>{
    setMail(e.target.value );


  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    if(value.trim()){
      setContacts([...contacts,{id:contacts.length + 1, name: value , number: number , mail:mail}]);
      setValue('');
      setMail('');
      setNumber('');

    
    }else{
      alert("Please enter a name");
    }
  }

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  }


  return (
    <div className='main'>    
      <div className="container">
        <Form 
          submitFormHandler={submitFormHandler}
          inputChangeHandler={inputChangeHandler}
          numberChangeHandler={numberChangeHandler}
          mailChangeHandler={mailChangeHandler}
          searchHandler={searchHandler}
          value={value}
          number={number}
          mail = {mail}
          searchTerm={searchTerm}/>
        <ContactList contacts={contacts} searchTerm={searchTerm}/>
      </div>
  </div>


  )
}

export default App

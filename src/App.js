import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const[contacts, setContact]=useState([]);
  const addContactHandler = contact => {
    console.log(contact);
    setContact([...contacts,{id:Math.random(), ...contact}]);
  }
const removeContactHandler = id =>{
  const newContactList = contacts.filter(contact => contact.id !== id);
  setContact(newContactList)
}
  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className="ui container">
      <h1>Contact App</h1>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  ); 
}

export default App;

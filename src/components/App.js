import React ,{ useState , useEffect } from 'react';
import {v4 as uuid} from "uuid";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ??[]);
  const addContact=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id: uuid(),...contact}]);
  };

  const removeContact=(id)=>{
    const newContact=contacts.filter((contact)=>{
      return contact.id!==id;
    });
    setContacts(newContact);
  }
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContact={addContact}/>
      <ContactList contacts={contacts} getContactId={removeContact}/>
    </div>
  );
}

export default App;

import React from 'react';
import ContactCard from './ContactCard';

const ContactList=(props)=>{
    const deleteContact =(id)=>{
        props.getContactId(id);
    };
    const renderContact=props.contacts.map((contact)=>{
        return (
        <ContactCard 
            contact={contact} 
            clickHandler={deleteContact} 
            key={contact.id}
            />
        );
    });
    return <div className="ui celled list">{renderContact}</div>;
};

export default ContactList;
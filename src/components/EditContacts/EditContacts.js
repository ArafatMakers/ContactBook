import React, { useState } from 'react';

const EditContacts = (props) => {
    
    let [name, setName] = useState(props.editContact.name);
    let [surname, setSurname] = useState(props.editContact.surname);
    let [phone, setPhone] = useState(props.editContact.phone);

    function handleSaveClick() {
        let contact = {...props.editContact}
        contact.name = name;
        contact.surname = surname;
        contact.phone = phone;

        props.handleSaveEditedContact(contact)
        setName('')
        setSurname('')
        setPhone('')
    }

    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Имя' />
            <input onChange={(e) => setSurname(e.target.value)} value={surname} type='text' placeholder='Фамилия' />
            <input onChange={(e) => setPhone(e.target.value)} value={phone} type='text' placeholder='Номер телефона' />
            <button onClick={handleSaveClick}>Save</button>
        </div>
    );
};

export default EditContacts;
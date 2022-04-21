import React, { useState } from 'react';

const AddContact = (props) => {
    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [phone, setPhone] = useState('')



    function handleClick() {
        let newContact = {
            name,
            surname,
            phone,
            id: Date.now()
        }
        props.handleNewContact(newContact)

        setName('')
        setSurname('')
        setPhone('')
    }

    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Имя' />
            <input onChange={(e) => setSurname(e.target.value)} value={surname} type='text' placeholder='Фамилия' />
            <input onChange={(e) => setPhone(e.target.value)} value={phone} type='text' placeholder='Номер телефона' />
            <button onClick={handleClick}>Add AddContact</button>
        </div>
    );
};

export default AddContact;
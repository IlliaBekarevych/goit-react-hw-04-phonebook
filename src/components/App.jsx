import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
const shortid = require('shortid');

function App() {
  const [contacts, setContscts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parseContacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (parseContacts) {
      setContscts(parseContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      return alert(`${name} is alredy in contacts`);
    }

    const findNumber = contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContscts(contacts => [...contacts, newContact]);
  };
  const deleteContact = id => {
    setContscts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className="main">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={onChangeFilter} />
      <ContactList
        visibleContacts={getVisibleContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
}
export default App;

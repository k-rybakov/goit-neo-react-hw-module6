import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initContacts from "./initContacts.json";
import { nanoid } from "nanoid";

function App() {
  const CONACTS_KEY = "contacts";

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem(CONACTS_KEY);
    return savedContacts ? JSON.parse(savedContacts) : initContacts;
  });

  const [filter, setFilter] = useState("");

  const deleteHandler = (id) => {
    setContacts(() => contacts.filter((contact) => contact.id != id));
  };

  const addContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.phone,
    };

    setContacts(() => [...contacts, newContact]);
    actions.resetForm();
  };

  useEffect(() => {
    window.localStorage.setItem(CONACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={filter} filterHandler={setFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteHandler={deleteHandler}
        />
      </div>
    </>
  );
}

export default App;

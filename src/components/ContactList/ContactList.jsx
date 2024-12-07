import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, deleteHandler }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} deleteHandler={deleteHandler} />
        </li>
      ))}
    </ul>
  );
}

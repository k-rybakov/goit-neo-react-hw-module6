import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div>
        <div className={css.detail}>
          <FaUser />
          <span>{name}</span>
        </div>
        <div className={css.detail}>
          <FaPhoneAlt />
          <span>{number}</span>
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
}

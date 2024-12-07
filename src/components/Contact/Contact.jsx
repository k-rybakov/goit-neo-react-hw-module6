import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({
  contact: { id, name, number },
  deleteHandler,
}) {
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
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
}

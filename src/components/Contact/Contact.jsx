import css from "./Contact.module.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ data: { name, phone, id } }) {
  const dispatch = useDispatch();

  const removeContact = (payload) => {
    dispatch(deleteContact(payload));
    console.log(payload);
  };

  return (
    <>
      <ul className={css.contactDetailsList}>
        <li className={css.contactDetailsItem}>
          <PersonIcon className={css.icon} />
          <p>{name}</p>
        </li>
        <li className={css.contactDetailsItem}>
          <PhoneIcon className={css.icon} />
          <p>{phone}</p>
        </li>
      </ul>
      <button
        className={css.buttonRed}
        type="button"
        onClick={() => removeContact(id)}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;

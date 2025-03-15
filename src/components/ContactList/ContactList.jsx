import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

function ContactList() {
  const { loading, error, errorMessage } = useSelector(selectContacts);
  const filtered = useSelector(selectFilteredContacts);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{errorMessage}</p>}
      <ul className={css.contactsList}>
        {filtered?.map((contactData) => (
          <li className={css.contactCard} key={contactData.id}>
            <Contact data={contactData} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

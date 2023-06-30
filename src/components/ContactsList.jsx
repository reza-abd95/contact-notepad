import ContactItem from "./ContactItem";

const ContactList = ({contacts,searchTerm}) => {
    return ( 
        <ul>
            {contacts
            .filter(({name}) => name.includes(searchTerm))
            .map(({id,name,number,mail}) => <ContactItem key={id} name={name} number={number} mail={mail} searchTerm={searchTerm}/>)}
            
      </ul>
     );
}
 
export default ContactList;
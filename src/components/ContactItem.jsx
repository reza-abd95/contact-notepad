import '../styles/ContactItem.css'


const ContactItem = ({name,number,searchTerm , mail}) => {
    const index = name.indexOf(searchTerm);

    return ( 
        <li>
            { index === -1 ? name :
                <p>
                    Name : 
                    <span> {name.slice(0,index)}</span>
                    <span style={{backgroundColor:"#ff8000ac"}}>
                        {name.slice(index,index + searchTerm.length)}
                    </span>
                    <span>{name.slice(index + searchTerm.length)}</span>

                   
                </p>
            }
                    <p>Phone : <span>{number}</span> </p>
                    <p>E-Mail : <span>{mail}</span></p>
        </li>
     );
}
 
export default ContactItem;


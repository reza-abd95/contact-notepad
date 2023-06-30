import '../styles/Form.css'

const Form = ({submitFormHandler,inputChangeHandler,searchHandler,value , number,mail,searchTerm,numberChangeHandler,mailChangeHandler}) => {
    return ( 
        <form onSubmit={submitFormHandler}>
            <input placeholder='Enter Contact Name' value={value} onChange={inputChangeHandler}/>
            <input type="tel" className='tel' placeholder='Enter Phone Number' value={number} onChange={numberChangeHandler} required/>
            <input type="email" placeholder='Enter E-mail' value={mail} onChange={mailChangeHandler} required/>
            <button type='submit' style={{margin:10}}>Add</button>
            <div>
                <input className='search-box' placeholder='Search' value={searchTerm} onChange={searchHandler}/>
            </div>
      </form>
     );
}
 
export default Form;
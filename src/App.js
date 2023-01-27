import './App.css'; 
 import { useDispatch, useSelector } from 'react-redux'; 
 import { addUsers } from './redux/reducers/users'; 
  
 function App() { 
     const dispatch = useDispatch() 
     const users = useSelector((store) => store.users.users) 
     const usersCount = useSelector((store) => store.users.usersCount) 
   return ( 
     <div className="App"> 
       <h2>users = {usersCount}</h2> 
       <ul> 
         {users.map((item) => ( 
           <li key={item.id}>{item.name} 
            <button onClick={() => {dispatch(deleteTodo(item.id))}}>delete</button>
           </li> 
  
         ))} 
       </ul> 
  
       <form unSubmit={(e) => { 
         e.preventDefault() 
         dispatch(addUsers(e.target[0].value, e.target[1].value)) 
           e.target[0].value = '' 
           e.target[1].value = '' 
  
       }}> 
         <input placeholder='name' type='text'/> 
         <input placeholder='age' type='number'/> 
         <button type='submit'>Добавить</button> 
       </form> 
     </div> 
   ); 
 } 
  
 export default App;
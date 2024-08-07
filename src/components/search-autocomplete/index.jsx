import { useEffect, useState } from "react";
import Suggestions from "./suggesstions";

export default function SearchautoComplete(){
   
    const[loading,setloading]=useState(false);
    const[users,setUsers] = useState([]);
     const[error,setError] = useState(null);
     const[searchParam,setSearchParam]=useState("");
     const[showDropdown,setShowDropdown]=useState(false);
     const[filteredUsers,setFilteredUsers]=useState([]);
      
     function handleChange(event){
        const query =event.target.value.toLowerCase();
        setSearchParam(query);
        if(query.length>1){
            const filteredDate = 
            users&& users.length
            ? users.filter((item) => item.toLowerCase().indexOf(query)>-1)
            :[];
            setFilteredUsers(filteredDate);
            setShowDropdown(true);

        }
        else{
            setShowDropdown(false);
        }
     }
     
     async function fetchListOfUsers(){
        try{
          const response = await fetch('https://dummyjson.com/users');
          const data= await response.json();
          console.log(data);
          if(data&&data.users && data.users.length){
            setUsers(data.users.map(userItem =>userItem.firstName));
            setloading(false);
            setError(null);
          }
        }
        catch(error){
            setloading(false);
            console.log(error);
            setError(error);
        }
     }
   
   useEffect(()=>{
    fetchListOfUsers()
   },[])
   console.log(users,filteredUsers);
    return (
         <div className="search-auto-container">
            {loading?(<h1>Loading !Please wait</h1>):(
                <> 
                <h1>Search anything you want </h1>
                <input 
                value={searchParam}
                name="search-users" 
                placeholder="Search Users here"
                onChange={handleChange}
                />
                </>
            )}
            
    
    {
        showDropdown && <Suggestions data={filteredUsers}></Suggestions>
    }
    
    </div>
    );
}
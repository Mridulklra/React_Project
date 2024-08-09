import {useEffect, useState} from "react";


export default function Scrollindicator({url}){
    const [data,setData] = useState([]);
    const [loading,setLoading]=useState(false);
    const  [errorMessage,seterrorMessage]=useState('')
     async function fetchData(getUrl){
        try{
           setLoading(true);
           const response = await fetch(getUrl);
           const data = await response.json();
           console.log(data);
           
        }catch(e){
            console.log(e);
            seterrorMessage(true);
            
        }
     }
      useEffect(()=>{
       fetchData(url);
      },[url]);
     return <div>
      
     </div>
}
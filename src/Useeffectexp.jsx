import { useEffect,useState } from "react"
const Titles  = () =>{
       const[titles,setTitles] =useState([])
         useEffect(() => {
            const fetchingTitles = () => {
              fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(response => response.json())
                .then((data) => {
                //   const titles = data.map((ele) => ele.title);
                //   setTitles(titles);
                  console.log(data.map((ele) => ele.title));
                })
                .catch(e => {
                  console.log(e);
                });
            };
         
            fetchingTitles();
          }, []);

         useEffect(() => {
            const titlefunc = () => {
              document.title = "Hello";
            };
            titlefunc();
          }, []);
          
         return(
           <>
           <h4>All titles are : </h4>
           <ul>
     {titles.map((element,index) =>(
      <li key = {index}>{element}</li>
     )
    )}
    </ul>
      </>
     )
    }
    export default Titles;

    
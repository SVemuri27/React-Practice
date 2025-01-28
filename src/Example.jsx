function Example (props) {
    let number = props.number
    let iteam = props.iteam
    let filterednums=props.evennums  || []
    let evennums=filterednums.filter(ele=>ele%2===0)
    console.log("filterednums:", evennums)  || []
//   let evenfilterednumbers = evennums.map((ele,index) => <p key = {index}>{ele}</p>)

  let details = props.details;
    return(
        <>
        <ul>
            {number.map((ele,index) =>( <li key  = {index}>{ele}</li>))}
       
        </ul>
<ol>
    {iteam.map((ele, index)=>(<li key = {index}>{ele}</li>))}
</ol>
<ol>
{/* {evenfilterednumbers} */}
{ evennums.map((ele,index) => <li key = {index}>{ele}</li>)}
</ol>


{details.map((ele, index) => ( <div key={index}>
  {ele.firstName} {ele.lastName}
{ele.phone}
   {ele.address}
          </div>
        ))}
  
        </>
    )
}
export default Example ;
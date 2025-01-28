
import React from 'react';

function MyButton(props) {


    const { name, age, place } = props;


    const number = props.number || []
    const numList = number.map((ele, index) => <li key={index}>{ele}</li>);

    // const number1= props.number1
    // const numberList = number1.map ((ele,index)=><li key ={index}>{ele}</li>);
    return (
        <>
            {/* // <button onClick={shoot}>Take the shot!</button> */}
            {/* { numList.length > 0 ? <ul>{numList}</ul> : <p>No numbers</p> } */}

            {/* {numList} */}
            {/* {numberList} */}
            <div className='detail'>
                <h2>User Details</h2>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Place: {place}</p>
            </div>

        </>
    );

}
function Hello() {
    return (
        // <h2 className='hlo'>Hello</h2>
        <form>
    name<input type='text'/>
</form>
    );
}
// function FavoriteColor() {
//     const [color, setColor] = useState("red");
  
//     return <h1>My favorite color is {color}!</h1>
//   }
// export {FavoriteColor}
export { Hello };
export default MyButton;


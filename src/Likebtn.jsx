import {useState} from "react";

export default function Likebtn() {
 let[isLike , setisLike] = useState(false);
 let[count , setCount] = useState(0);

let toggleLike = () =>{
    setisLike(!isLike);
    setCount(count+1);
};

let likeStyle = {color :"red"};


return (
    <div>
       
        <p>Beats ={count}</p>
        <p onClick ={toggleLike}>
            {isLike ?(
                <i className="fa-solid fa-heart" style={likeStyle}></i>
           ) :(
                <i class="fa-regular fa-heart"></i>
            )}
        </p>
    </div>
)
 }





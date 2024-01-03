import { useEffect } from 'react';
import {getMovies, searchMovie} from '../Api'

const Card = () => {

    useEffect (()=>{
        getMovies()
    },[])
    return (      
        <>
        {}
            <div className="items-center w-52 bg-black h-64 text-white m-10 rounded-lg">
            
            <div className="flex">
                <img src="" alt="" />
            </div>
            <div className="m-3">
                <h1 className="font-bold text-lg text-yellow-500"></h1>
                <h1>Descriptions</h1>
            </div>
           
        </div>
        </>
     );
}
 
export default Card;
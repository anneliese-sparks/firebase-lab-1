
import { useEffect, useState } from "react";
import ShoutOut from "../model/Shoutout";
import { readAllShoutouts } from "../service/ShoutoutApiService";
import ShoutOutCard from "./ShoutOutCard";


function ShoutOutList() {
    const[shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);
    const[shoutOutsLoaded, setShoutOutsLoaded] = useState(false);

useEffect(() => {
    loadShoutOuts();
}, []);

function loadShoutOuts() {
    readAllShoutouts().then(shoutOutsFromApi => {
        setShoutOuts(shoutOutsFromApi);
        setShoutOutsLoaded(true);
    });
}
return (
    <div className="ShoutOutList">
        { !shoutOutsLoaded ?
            <p className="ShoutOutList_message">Loading...</p>
            : shoutOuts.length === 0?
            <p className="ShoutOutList_message">No Shout Outs</p>
            : 
            shoutOuts.map(eachShoutOut =>
            <ShoutOutCard key={eachShoutOut._id} shoutout={eachShoutOut} />)}
        
    </div>
)
}
export default ShoutOutList;
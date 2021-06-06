
import { useEffect, useState } from "react";
import ShoutOut from "../model/Shoutout";
import { readAllShoutouts, createShoutout } from "../service/ShoutoutApiService";
import ShoutOutCard from "./ShoutOutCard";
import ShoutOutForm from "./ShoutOutForm";
import "./ShoutOutList.css"


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

function handleAddShoutOut(shoutOut: ShoutOut): void {
    createShoutout(shoutOut).then(loadShoutOuts)
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
            <h2>Add Shout Out</h2>
            <ShoutOutForm onSubmit={handleAddShoutOut}/>
    </div>
)
}
export default ShoutOutList;
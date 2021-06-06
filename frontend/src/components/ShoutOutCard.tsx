import ShoutOut from "../model/Shoutout"
import './ShoutOutCard.css'

interface Props {
    shoutout: ShoutOut;
}

function ShoutOutCard({ shoutout }: Props) {
    return (
    <div className="ShoutOutCard">
        <h3 className="ShoutOutTo">Shout out to {shoutout.to}</h3>
        <p className="ShoutOutFrom">From: {shoutout.from}</p>
        <p className="ShoutOutMessage">{ shoutout.message}</p>
</div>
);
}


export default ShoutOutCard;
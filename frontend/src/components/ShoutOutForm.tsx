import { useState, FormEvent, ChangeEvent } from "react";
import ShoutOut from "../model/Shoutout"

interface Props {
    onSubmit: (shoutOut: ShoutOut) => void
}

function ShoutOutForm({onSubmit}: Props) {
    const [ to, setTo ] = useState("");
    const [ from, setFrom ] = useState("");
    const [ message, setMessage ] = useState("");
  
    function handleSubmit(event:FormEvent): void {
      const shoutout: ShoutOut = {
        to: to,
        from: from,
        message: message
      }

      event.preventDefault();
      onSubmit(shoutout);
      
      // clear form
      setTo("");
      setFrom("");
      setMessage("");
    }
  
  
    return (
            <form className="ShoutOutForm" onSubmit={handleSubmit}>
              <p>
                <label htmlFor="ShoutOutForm_to">To</label>
                <input id="ShoutOutForm_name" value={to} onChange={e => setTo(e.target.value)} required />
              </p>
              <p>
                <label htmlFor="ShoutOutForm_from">From</label>
                <input id="ShoutOutForm_from" value={from} onChange={e => setFrom(e.target.value)} required />
              </p>
              <p>
                <label htmlFor="ShoutOutForm_message">Message</label>
                <input id="ShoutOutForm_message" value={message} onChange={e => setMessage(e.target.value)} required />
              </p>
              <p>
                <button type="submit">Add ShoutOut</button>
              </p>
            </form>
          );
        }
    
        export default ShoutOutForm;
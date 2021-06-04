import axios  from "axios";
import ShoutOut from "../model/Shoutout"

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl) {
  console.error("REACT_APP_API_URL environment variable not set.");
}

export function readAllShoutouts():Promise<ShoutOut[]> {
  return axios.get(baseUrl).then(res => res.data);
}

export function createShoutout(shoutout: ShoutOut):Promise<ShoutOut> {
    return axios.post(baseUrl, shoutout).then(res => res.data);
  }

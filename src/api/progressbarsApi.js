import axios from 'axios';
import config from "../config";

let barsApiURL = config.apiGateway.URL + "/bars";

export const getBarsData = async () => {
    const res = await axios.get(barsApiURL);
    return res.data;
};


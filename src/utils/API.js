import axios from "axios";

const BASEURL = "https://randomapi.com/api/?";
const APIKEY = "key=" + process.env.REACT_APP_API_KEY;
const REF = "&ref=" + "yz1sf340"
const RESULTS = "&results=" + 10;

// Export an object with a "search" method that searches RandomAPI for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + REF + RESULTS );
  }
};

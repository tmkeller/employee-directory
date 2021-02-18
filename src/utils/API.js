import axios from "axios";

// Export an object with a "search" method that searches RandomAPI for the passed query
export default {
  search: function() {
    return axios.get( "https://randomuser.me/api/?inc=id,picture,name,phone,email,dob&results=200&nat=us&seed=kitties" );
  }
};

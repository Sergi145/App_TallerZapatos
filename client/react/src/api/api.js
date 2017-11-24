const axios=require('axios')

const Api={

  deleteReparation:function(_id){
   return axios.delete(`https://pure-caverns-39521.herokuapp.com/api/reparation/${_id}`)
      .then((response)=> {
           console.log(response);
           return response
         })
         .catch(function(error) {
           console.log(error);
         });

  },
  deleteProduct:function(_id){
    return axios.delete(`https://pure-caverns-39521.herokuapp.com/api/product/${_id}`)
       .then((response)=> {
           console.log(response);
           return response
         })
         .catch(function(error) {
           console.log(error);
         });

  },

  deleteClient:function(_id){
    return axios.delete(`https://pure-caverns-39521.herokuapp.com/api/client/${_id}`)
     .then((response)=> {
           console.log(response);
           return response
         })
         .catch(function(error) {
           console.log(error);
         });

  },

  createProduct:function(name,price,workshop){
   return  axios.post(`https://pure-caverns-39521.herokuapp.com/api/product`,{name,price,workshop})
     .then((response)=> {
           console.log(response);
           return response
         })
         .catch(function(error) {
           console.log(error);
         });

  },
  createClient:function(name,surnames,address,image,email,telephone,workshop){

    return axios.post(`https://pure-caverns-39521.herokuapp.com/api/client`,{name,surnames,address,image,email,telephone,workshop})
     .then((response)=> {
           console.log(response);
           return response
         })
         .catch(function(error) {
           console.log(error);
         });

  },

  createReparation:function(title,client,description,date,responsable,price){
  
    return axios.post(`https://pure-caverns-39521.herokuapp.com/api/reparation`,{title,client,description,date,responsable,price})
     .then((response)=> {
           console.log(response);
           return response
         })
         .catch(function(error) {
           console.log(error);
         });

  },
   editProduct:function(_id,name,price){
   return axios.put(`https://pure-caverns-39521.herokuapp.com/api/product/${_id}`,{name,price})
     .then((response)=> {
           console.log(response);
           return response
         })
         .catch(function(error) {
           console.log(error);
         });

  },
   editClient:function(_id,name,surnames,address,image,email,telephone){
    return axios.put(`https://pure-caverns-39521.herokuapp.com/api/client/${_id}`,{name,surnames,address,image,email,telephone})
     .then((response)=> {
           console.log(response);
           return response
         })
         .catch(function(error) {
           console.log(error);
         });
  }
  
}


export default Api

 
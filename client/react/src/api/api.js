const axios=require('axios')

const Api={

	deleteReparation:function(_id){
		axios.delete(`http://localhost:8001/api/reparation/${_id}`)
			.then((response)=> {
    			console.log(response);

  			})
  			.catch(function(error) {
    			console.log(error);
  			});

	},
	deleteProduct:function(_id){
		axios.delete(`http://localhost:8001/api/product/${_id}`)
			.then((response)=> {
    			console.log(response);

  			})
  			.catch(function(error) {
    			console.log(error);
  			});

	},

  deleteClient:function(_id){
    axios.delete(`http://localhost:8001/api/client/${_id}`)
      .then((response)=> {
          console.log(response);

        })
        .catch(function(error) {
          console.log(error);
        });

  },

	createProduct:function(name,price,workshop){
		axios.post(`http://localhost:8001/api/product`,{name,price,workshop})
			.then((response)=> {
    			console.log(response);

  			})
  			.catch(function(error) {
    			console.log(error);
  			});

	},
	createClient:function(name,surnames,address,image,email,telephone,workshop){

		axios.post(`http://localhost:8001/api/client`,{name,surnames,address,image,email,telephone,workshop})
			.then((response)=> {
    			console.log(response);

  			})
  			.catch(function(error) {
    			console.log(error);
  			});

	},

  createReparation:function(title,client,description,date,responsable,price){
  
    axios.post(`http://localhost:8001/api/reparation`,{title,client,description,date,responsable,price})
      .then((response)=> {
          console.log(response);

        })
        .catch(function(error) {
          console.log(error);
        });

  },
   editProduct:function(_id,name,price){
    axios.put(`http://localhost:8001/api/product/${_id}`,{name,price})
      .then((response)=> {
          console.log(response);

        })
        .catch(function(error) {
          console.log(error);
        });

  },
   editClient:function(_id,name,surnames,address,image,email,telephone){
    axios.put(`http://localhost:8001/api/client/${_id}`,{name,surnames,address,image,email,telephone})
      .then((response)=> {
          console.log(response);

        })
        .catch(function(error) {
          console.log(error);
        });

  }
	
}


export default Api


 
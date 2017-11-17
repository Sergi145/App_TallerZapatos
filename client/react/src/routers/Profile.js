import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Profile extends Component {
    render() {
        return (

          <main className="main col">
             <div className="row">
                    <div className="columna col-lg-12">



<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#smallShoes">
Click Me
</button>


<div class="modal fade" id="smallShoes" tabindex="-1" role="dialog" aria-labelledby="modalLabelSmall" aria-hidden="true">
<div class="modal-dialog modal-sm">
<div class="modal-content">

<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
<h4 class="modal-title" id="modalLabelSmall">Small Shoes</h4>
</div>

<div class="modal-body">
Small shoes are typically worn by people with small feet.
</div>

</div>
</div>
</div>
                    
                    
                  </div>
                 
              </div>

    </main>
       )
    }
}


export default Profile

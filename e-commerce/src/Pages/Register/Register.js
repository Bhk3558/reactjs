import "./Register.css"

function Register (){
var user ={};
function handleFormSubmit(event){
  
}
    return(

        <div className="register-form">
            <h3>Please Register</h3>
            <hr />
            <form onSubmit={handleFormSubmit} action="">

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Email
                    </label>
                    <input className="form-control" type="email"/>
                </div>
            <div className="row">
                <div className="mb-3 col-4">
                    <label htmlFor="" className="form-label">
                      SurclassName
                    </label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="" className="form-label">
                      First className
                    </label>
                    <input className="form-control" type="text"/>
                </div>
 
                <div className="mb-3 col-4">
                    <label htmlFor="" className="form-label">
                     Last className
                    </label>
                    <input className="form-control" type="text"/>
                </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      User className
                    </label>
                    <input className="form-control" type="text"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label" type="password">
                    Password
                    </label>
                    <input className="form-control" type="password"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                    Phone Number
                    </label>
                    <input className="form-control" type="text"/>
                </div>
                <h3>Address</h3>
                <hr />
                <div className="mb-3">
                    <input className="form-control" placeholder="Address" type="text"/>
                </div>



            <div className="row">

                <div className="mb-3 col-6">
                    <input className="form-control" placeholder="city" type="text"/>
                </div>

                <div className="mb-3 col-6">
                    <input className="form-control" placeholder="street" type="text"/>
                </div>
            </div>



            <div className="row">

                <div className="mb-3 col-6">
                    <input className="form-control" placeholder="Flat Number" type="text"/>
                </div>

                <div className="mb-3 col-6">
                    <input className="form-control" placeholder="zipcode" type="text"/>
                </div>
            </div>
            <button className="float-end btn btn-success">Register</button>
            </form>
        </div>
    );

}
export default Register;
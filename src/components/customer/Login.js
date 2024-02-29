import '../../css/login.css'
const Login = () => {


    return ( 

        <div className="loginFormContainer ">
            <div className="loginHeading ">
            <h1>Sign In</h1>
            </div>
            

            <form className='loginForm my-4 ' >
                <div className="inp"></div>

                <label htmlFor="username" className="inpLable " >User Name </label>
                <input className="finp " type="text" name="username" id="username" />

                <label className="inpLable " htmlFor="username" >Password </label>
                <input className=" finp" type="text" name="password" id="password" />

                <div className="form-check form-switch my-4 rCheck text-start">
                <input className=" form-check-input" role="switch" type="checkbox" name="rChek" id="flexSwitchCheckDefault" />
                <label class="form-check-label " htmlFor="flexSwitchCheckDefault">Remember Me</label>
                </div>

                <input className=" sub" type="Submit" name="sumbit" id="submit" value="Submit" />
                                                
            </form>
        </div>

     );
}
 
export default Login;
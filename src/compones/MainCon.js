import React from "react";
function Main()
{
    return (
        <>
        <div class="main">
        <div class="login">
        <h1> Login to Your Account</h1>
        <h3>Login using Social Network</h3>
       
        < p id="logo">
        <img src="/assets/img/facebook-icon.png" name="facebook" alt="facebook"/>
        <img src="/assets/img/g+icon.png" name="facebook" alt="g+"/>
        <img src="/assets/img/linkdin.png" name="facebook" alt="linkdin"/>
        </p>
        <p>-------------------------or-------------------------</p>
        <form name="sing" action="#">
            <table>
                <tr>
                <td>
                    <input type="text" name="email" placeholder="email" required/>
                </td>
                </tr>
                <tr>
                <td>
                    <input type="password" name="password" placeholder="password" required/>
                </td>
                </tr>
                <tr>
                    <th>
                        <input type="submit"/>
                    </th>
                </tr>

            </table>
        </form>
    </div>
    <h1 class="new"> New Here?</h1>
    <h2> Sign up and discover a great <br/>amount of new opportunities</h2>
    <p class="sign">
    <input type="submit" name="submit" value="Sign up" id="sign"/>
    </p>
    </div>
        </>
    )
}
export default Main;
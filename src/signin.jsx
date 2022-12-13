import React from 'react';

export default function SignIn() {
  return (
    <div>
      <section className="header_menu" id="header_menu">
        <div className="container-fluid px-0 shadow">
          <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 ">
            <a className="navbar-brand pl-5 pl-small-0" href="index">
              <img
                src="Photos\logo.png"
                className="img img-fluid"
                width="100px"
                alt="LOGO"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index"><b>Home&emsp;&emsp;&emsp;</b>
                    <span
                      className="sr-only"
                    >(current)
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="logIn"><b>Sign in&emsp;&emsp;&emsp;</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="SignUp"><b>Sign up&emsp;&emsp;&emsp;</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about"><b>About Us&emsp;&emsp;&emsp;</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact"><b>Contact Us</b></a>
                </li>
              </ul>
              <div className="search mr-3">
                <a href="/">
                  <i className="fas fa-car-duotone fa-3x" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <div className="bg-img"> </div>

      <div className="content">
        <img src="Photos\logo.png" />
        <br />
        <br />
        <header>Login </header>
        <form action="#">
          <div className="field">
            <span className="fa fa-user" />
            <input type="text" required Placeholder="Email or phone no" />
          </div>
          <div className="field space">
            <span className="fa fa-lock" />
            <input type="password" className="Password" required Placeholder="Password" />
            <span className="show">SHOW</span>
          </div>
          <div className="pass">
            <a href="/">Forgot Password?</a>
          </div>
          <a href="dashboard" className="btn btn-primary btn-block">LOGIN</a>
          <br />
          <div className="signup">Don&apost have account?
            <a href="SignUp"><b> SignUp Now</b></a>

          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";


class Header extends React.Component {


    render() {

        return (
            <header>
                <div className="colorlib-navbar-brand">
                    <a className="colorlib-logo" href="index.html">Look<br/><span>Model Agency</span></a>
                </div>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
            </header>
        )
            ;
    }
}


export default Header;

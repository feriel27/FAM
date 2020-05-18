import React, {Component} from 'react';
import '../../App.css';
import {Col, Row} from "react-bootstrap";


class Nav extends Component {


    render() {

        return (
            <nav id="colorlib-main-nav" role="navigation">
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
                <div className={"logoMenu"}>
                    <h1 className="col-md-6 " style={{}}>
                        <a href="#" className="logo">
                            <div style={{
                                marginLeft:'25px',
                                display:'flex',justifyContent:'center',flexDirection:'row'}}>
                                <span className="menu">MENU</span>
                            </div>
                        </a>
                    </h1>
                </div>
                <div className="js-fullheight colorlib-table">
                    <div className="colorlib-table-cell ">
                        <div className="row no-gutters ">
                            <div className="col-md-6 flex flex-row justify-content-lg-start ">
                                <ul>
                                    <li className="active " >
                                        <a href="/" >
                                                <span className="Shop"> HOME</span></a>
                                    </li>
                                    <li><a href="/collections" ><span className="Videos">Collection</span></a></li>
                                    <li><a href="/gallery" ><span className="Look-book">GALLERY</span></a></li>
                                    <li><a href="/supportUS" ><span className="Resume">SUPPORT US</span></a></li>
                                    <li><a href="/aboutUS" ><span className="Contact">ABOUT US</span></a></li>
                                    <li>
                                        <img
                                            src={require('../pages/assets/img/Groupe 34@2x.png')}
                                            srcSet="../pages/assets/img/Groupe 34.png"
                                            className={"image-logo"} alt="logoFAM"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div   id="image-menu" >
                        <hr className={"inclined-line"}/>
                    </div>
                </div>
                <div className={"down-menu"}>
                    <Row className="col-12" style={{width:'800px'}}>
                        <h1 className="col-lg-4" style={{textAlign:'left',marginLeft:'0px'}}>
                            <a href="#" className="YoutubeMenu" >
                                <span>Youtube</span></a>
                            <a href="#" className=" InstagramMenu" >
                                <span>Instagram</span></a>
                        </h1>

                        <h1 className="col-lg-8" style={{textAlign:'right'}}>
                            <a href="#"  className="SubscribeMenu "><span>Subscribe</span></a>
                        </h1>
                    </Row>
                </div>
            </nav>
        )
            ;
    }
}


export default Nav;

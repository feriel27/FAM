import React, {Component} from 'react';

import {Col, Row} from "react-bootstrap";

class AboutUS extends Component {


    render() {

        return (
            <React.Fragment>
                <div className="page">

                    <nav id="colorlib-main-nav" role="navigation">
                        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
                        <div className={"logoMenu"}>
                            <h1 className="col-md-6 " style={{}}>
                                <a href="#" className="logo">
                                    <div style={{
                                        marginLeft: '25px',
                                        display: 'flex', justifyContent: 'center', flexDirection: 'row'
                                    }}>


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
                                            <li>
                                                <a href="/">
                                                    <span className="Shop"> HOME</span></a>
                                            </li>
                                            <li><a href="/collections"><span className="Videos">Collection</span></a>
                                            </li>
                                            <li><a href="/gallery"><span className="Look-book">GALLERY</span></a></li>
                                            <li><a href="/supportUS"><span className="Resume">SUPPORT US</span></a></li>
                                            <li className="active"><a href="/aboutUS"><span
                                                className="Contact">ABOUT US</span></a></li>
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
                            <div id="image-menu" className="">
                                <hr className={"inclined-line"}/>
                            </div>
                        </div>
                        <div className={"down-menu"}>
                            <Row className="col-12" style={{width: '800px'}}>
                                <h1 className="col-lg-4" style={{textAlign: 'left', marginLeft: '0px'}}>
                                    <a href="#" className="YoutubeMenu">
                                        <span>Youtube</span></a>
                                    <a href="#" className=" InstagramMenu">
                                        <span>Instagram</span></a>
                                </h1>

                                <h1 className="col-lg-8" style={{textAlign: 'right'}}>
                                    <a href="#" className="SubscribeMenu "><span>Subscribe</span></a>
                                </h1>
                            </Row>
                        </div>
                    </nav>

                    <div id="colorlib-page">
                        <header>
                            <div className="colorlib-navbar-brand js-colorlib-navbar-toggle colorlib-nav-toggle row "
                                 style={{
                                     display: 'flex',
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                 }}>
                                <Col className="col-lg-5"
                                     style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row',

                                     }}>
                                    <a className="colorlib-logo" href="#">
                                        <div style={{display: 'flex', justifyContent: 'center',
                                            flexDirection: 'row',
                                            marginTop: '10px'}}>
                                            <span className="Shop-Now ">SHOP ART</span>

                                        </div>
                                    </a>
                                </Col>
                                <Col className="col-lg-5 "
                                     style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>

                                    <img
                                        src={require('../pages/assets/img/Composant 31 – 20.png')}
                                        srcSet="../pages/assets/img/Composant 31 – 20@2x.png"
                                        className={"logo-home"} alt="logoFAM"/>

                                </Col>
                                <Col className="col-lg-2" style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    flexDirection: 'row',

                                }}>
                                    <a className="colorlib-logo" href="#" style={{}}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            marginTop: '10px'

                                        }}>
                                            <span className="cart">TICKETS</span>

                                        </div>
                                    </a>
                                </Col>
                            </div>
                            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                        </header>
                        <section className="home-slider owl-carousel">
                            <div className="slider-item Trac-170 imgBACK"

                                >
                                <div className="col-lg-12" style={{height: '0px'}}></div>
                                {/*div fel west*/}
                                <div className="col-lg-12" style={{height: '0px'}}>
                                    <div className="row ">
                                        <div className="col-md-12"
                                             style={{
                                                 display: 'flex',
                                                 justifyContent: 'start',
                                                 flexDirection: 'column', height: '110px'
                                             }}>



                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12" style={{height: '580px'}}>
                                    <Row>


                                        <div className="col-md-12"
                                             style={{
                                                 display: 'flex',
                                                 justifyContent: 'start',
                                                 flexDirection: 'column',
                                                 marginTop: '230px'
                                             }}>

                                            <Row>
                                                <Col className="col-lg-1"></Col>
                                                <Col className="col-lg-6 ">

                                                    <h1 className="Live-Videos ">
                                                        About
                                                        FAM
                                                    </h1>

                                                </Col>
                                                <Col className={"col-lg-5"}>
                                                    <Col className={"col-lg-12"}>
                                                        <h6 className="Enjoy-the-beauty-of"
                                                            style={{

                                                                marginLeft: '100px',
                                                                textAlign: 'left',
                                                                letterSpacing: '26px', color: 'white'
                                                            }}>
                                                            LEARN MORE<br/>
                                                            ABOUT US
                                                        </h6>
                                                    </Col>
                                                    <Col className={"col-lg-12 "} style={{
                                                        marginLeft: '20px',
                                                        marginTop: '-33px',
                                                        color: 'white',
                                                        textAlign: 'right'
                                                    }}>

                                                        <Row className={"listIconsAbout"}>
                                                            <Col className={"col-lg-10"}>
                                                            </Col>
                                                            <Col
                                                                className={"col-lg-2 ftco-footer-social list-unstyled"}>

                                                                <Col className={"col-lg-3 pb-2 pt-0 "}>
                                                                    <span className="icon-twitter p-1 Trac-233"></span>
                                                                </Col>
                                                                <Col className={"col-lg-3 pb-2"}>
                                                                    <span className="icon-twitter p-1 Trac-233"></span>
                                                                </Col>
                                                                <Col className={"col-lg-3 pb-2 "}>
                                                                    <span className="icon-twitter p-1 Trac-233"></span>
                                                                </Col>
                                                                <Col className={"col-lg-3 pb-2 "}>
                                                                    <span className="icon-twitter p-1 Trac-233"></span>
                                                                </Col>
                                                            </Col>
                                                            {/*<i className="col-lg-3 fab fa-facebook-f"></i><br/>*/}
                                                            {/*<i className="col-lg-3 fab fa-facebook-f"></i><br/>*/}
                                                            {/*<i className="col-lg-3 fab fa-facebook-f"></i><br/>*/}
                                                            {/*<i className="col-lg-3 fab fa-facebook-f"></i>*/}
                                                        </Row>
                                                    </Col>


                                                </Col>


                                            </Row>


                                        </div>
                                    </Row>
                                </div>
                                {/*end div fel west*/}

                                {/*div lienet*/}
                                <div className="col-lg-12 divLinks"
                                     style={{
                                         display: 'flex',
                                         flexDirection: 'row',
                                         justifyContent: 'space-around',
                                         marginTop: '10px', marginLeft: '0px', marginRight: '20px'
                                     }}>

                                    <h6 className="col-lg-1" style={{textTransform: 'capitalize'}}
                                        data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                                        <a href="#"
                                           style={{
                                               paddingTop: '40px',
                                           }}>
                                            <span className="Youtube">Youtube</span>
                                        </a>
                                    </h6>
                                    <h6 className="col-lg-1"
                                        style={{textAlign: 'left', textTransform: 'capitalize'}}>
                                        <a href="#" className="logo"
                                           style={{paddingLeft: '24px', color: 'white', textTransform: 'capitalize'}}>
                                            <span
                                                className="Instagram"
                                            >Instagram</span>
                                        </a>
                                    </h6>
                                    <h6 className="col-lg-10"
                                        style={{textAlign: 'right', textTransform: 'capitalize'}}
                                        data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                                        <a href="#" className="logo"
                                           style={{paddingRight: '30px', color: 'white', textTransform: 'capitalize'}}>
                                            <span className="Subscribe">Contact</span>
                                        </a>
                                    </h6>


                                </div>
                                {/*end div lienet*/}
                            </div>
                        </section>

                        {/*section youtube video*/}
                        <section className="ftco-section-2 ">
                            <div className="responsive">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/X4t0JxiBeO0"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>

                                <div className="col-lg-12 " style={{paddingTop: '300px'}}>
                                    <Row>
                                        <h1 className="col-lg-1"></h1>
                                        <h1 className="col-lg-7 textVideo">
                                            <span>Check The Lastest</span><br/>
                                            <span> Edition Video Recap</span>
                                        </h1>
                                    </Row>
                                </div>
                            </div>

                        </section>

                        {/*end section youtube video*/}


                        {/*div fam statistics*/}
                        <section className="ftco-section-2 pt-5 pb-5">
                            <div className="container">

                            <div className="section-2-blocks-wrapper d-flex row no-gutters">

                                    <Col className={"col-lg-12 pl-2"} style={{textAlign: 'justify'}}>
                                        <Row>
                                            <h1 className="col-lg-2 ">
                                                <span className="View-All-My-Videos-Static">Fam statistics</span>
                                            </h1>
                                            <h1 className="col-lg-3"></h1>
                                            <h1 className="col-lg-6 pt-4 pl-5 Browse-our-latest-works-Static">
                                                OUR FESTIVAL<br/>
                                                in numbers
                                            </h1>
                                        </Row>
                                    </Col>
                                <div className="container2 ">
                                    <Row className="col-lg-12 ml-lg-5  d-flex flex-row justify-content-center">

                                        <Col className={"col-lg-3 "}>
                                            <Col className={"col-lg-12 "}>
                                                <span className="des-Artistes-Plasticiens pl-lg-5"> Parcours</span><br/>
                                                <span
                                                    className="des-Artistes-Plasticiens"> des Artistes Plasticiens</span>
                                            </Col>
                                            <div className={" col-lg-12  d-flex flex-row  justify-content-start"}
                                                 style={{height: '127.3px'}}>
                                                <h1 className={"col-lg-4"}></h1>
                                                <h1 className={"col-lg-2 Trac-217 "}></h1>
                                            </div>
                                            <h6 className={"col-lg-12 pl-lg-5 ml-lg-4"}>
                                                <span className="NumberPart">50</span><br/>
                                            </h6>
                                            <h6 className={"col-lg-12 "}>
                                                <span className="Artistes pl-lg-5">Artistes</span><br/>
                                            </h6>

                                            <span className="Artistes">
                                                (Portraitistes,peintures,
                                                caricaturistes,scuplpteurs,
                                                ceramistes)

                                            </span>
                                        </Col>
                                        <Col className={"col-lg-3 ml-lg-5"} style={{}}>
                                            <Col className={"col-lg-12 "}>
                                                <span className="des-Artistes-Plasticiens pl-lg-5"> Parcours</span><br/>
                                                <span
                                                    className="des-Artistes-Plasticiens"> des Artistes Plasticiens</span>
                                            </Col>
                                            <div className={" col-lg-12  d-flex flex-row  justify-content-start"}
                                                 style={{height: '127.3px'}}>
                                                <h1 className={"col-lg-4"}></h1>
                                                <h1 className={"col-lg-2 Trac-217 "}></h1>
                                            </div>
                                            <h6 className={"col-lg-12 pl-lg-5 ml-lg-4"}>
                                                <span className="NumberPart">50</span><br/>
                                            </h6>
                                            <h6 className={"col-lg-12 "}>
                                                <span className="Artistes pl-lg-5">Artistes</span><br/>
                                            </h6>

                                            <span className="Artistes">
                                                (Portraitistes,peintures,
                                                caricaturistes,scuplpteurs,
                                                ceramistes)

                                            </span>
                                        </Col>
                                        <Col className={"col-lg-3 ml-lg-5"} style={{}}>
                                            <Col className={"col-lg-12 "}>
                                                <span className="des-Artistes-Plasticiens pl-lg-5"> Parcours</span><br/>
                                                <span
                                                    className="des-Artistes-Plasticiens"> des Artistes Plasticiens</span>
                                            </Col>
                                            <div className={" col-lg-12  d-flex flex-row  justify-content-start"}
                                                 style={{height: '127.3px'}}>
                                                <h1 className={"col-lg-4"}></h1>
                                                <h1 className={"col-lg-2 Trac-217 "}></h1>
                                            </div>
                                            <h6 className={"col-lg-12 pl-lg-5 ml-lg-4"}>
                                                <span className="NumberPart">50</span><br/>
                                            </h6>
                                            <h6 className={"col-lg-12 "}>
                                                <span className="Artistes pl-lg-5">Artistes</span><br/>
                                            </h6>

                                            <span className="Artistes">
                                                (Portraitistes,peintures,
                                                caricaturistes,scuplpteurs,
                                                ceramistes)

                                            </span>
                                        </Col>
                                    </Row>

                                    <Row className="mt-lg-5   d-flex flex-row justify-content-lg-between">


                                        <Col className={"col-lg-3 "}>
                                            <Col className={"col-lg-12 "}>
                                                <span className="des-Artistes-Plasticiens pl-lg-5"> Parcours</span><br/>
                                                <span
                                                    className="des-Artistes-Plasticiens"> des Artistes Plasticiens</span>
                                            </Col>
                                            <div className={" col-lg-12  d-flex flex-row  justify-content-start"}
                                                 style={{height: '127.3px'}}>
                                                <h1 className={"col-lg-4"}></h1>
                                                <h1 className={"col-lg-2 Trac-217 "}></h1>
                                            </div>
                                            <h6 className={"col-lg-12 pl-lg-5 ml-lg-4"}>
                                                <span className="NumberPart">50</span><br/>
                                            </h6>
                                            <h6 className={"col-lg-12 "}>
                                                <span className="Artistes pl-lg-5">Artistes</span><br/>
                                            </h6>

                                            <span className="Artistes">
                                                (Portraitistes,peintures,
                                                caricaturistes,scuplpteurs,
                                                ceramistes)

                                            </span>
                                        </Col>
                                        <Col className={"col-lg-3 "}>
                                            <Col className={"col-lg-12 "}>
                                                <span className="des-Artistes-Plasticiens pl-lg-5"> Parcours</span><br/>
                                                <span
                                                    className="des-Artistes-Plasticiens"> des Artistes Plasticiens</span>
                                            </Col>
                                            <div className={" col-lg-12  d-flex flex-row  justify-content-start"}
                                                 style={{height: '127.3px'}}>
                                                <h1 className={"col-lg-4"}></h1>
                                                <h1 className={"col-lg-2 Trac-217 "}></h1>
                                            </div>
                                            <h6 className={"col-lg-12 pl-lg-5 ml-lg-4"}>
                                                <span className="NumberPart">50</span><br/>
                                            </h6>
                                            <h6 className={"col-lg-12 "}>
                                                <span className="Artistes pl-lg-5">Artistes</span><br/>
                                            </h6>

                                            <span className="Artistes">
                                                (Portraitistes,peintures,
                                                caricaturistes,scuplpteurs,
                                                ceramistes)

                                            </span>
                                        </Col>
                                        <Col className={"col-lg-3"}>
                                            <Col className={"col-lg-12 "}>
                                                <span className="des-Artistes-Plasticiens pl-lg-5"> Parcours</span><br/>
                                                <span
                                                    className="des-Artistes-Plasticiens"> des Artistes Plasticiens</span>
                                            </Col>
                                            <div className={" col-lg-12  d-flex flex-row  justify-content-start"}
                                                 style={{height: '127.3px'}}>
                                                <h1 className={"col-lg-4"}></h1>
                                                <h1 className={"col-lg-2 Trac-217 "}></h1>
                                            </div>
                                            <h6 className={"col-lg-12 pl-lg-5 ml-lg-4"}>
                                                <span className="NumberPart">50</span><br/>
                                            </h6>
                                            <h6 className={"col-lg-12 "}>
                                                <span className="Artistes pl-lg-5">Artistes</span><br/>
                                            </h6>

                                            <span className="Artistes">
                                                (Portraitistes,peintures,
                                                caricaturistes,scuplpteurs,
                                                ceramistes)

                                            </span>
                                        </Col>
                                        <Col className={"col-lg-3"}>
                                            <Col className={"col-lg-12 "}>
                                                <span className="des-Artistes-Plasticiens pl-lg-5"> Parcours</span><br/>
                                                <span
                                                    className="des-Artistes-Plasticiens"> des Artistes Plasticiens</span>
                                            </Col>
                                            <div className={" col-lg-12  d-flex flex-row  justify-content-start"}
                                                 style={{height: '127.3px'}}>
                                                <h1 className={"col-lg-4"}></h1>
                                                <h1 className={"col-lg-2 Trac-217 "}></h1>
                                            </div>
                                            <h6 className={"col-lg-12 pl-lg-5 ml-lg-4"}>
                                                <span className="NumberPart">50</span><br/>
                                            </h6>
                                            <h6 className={"col-lg-12 "}>
                                                <span className="Artistes pl-lg-5">Artistes</span><br/>
                                            </h6>

                                            <span className="Artistes">
                                                (Portraitistes,peintures,
                                                caricaturistes,scuplpteurs,
                                                ceramistes)

                                            </span>
                                        </Col>

                                    </Row>

                                </div>
                            </div>
                            </div>
                        </section>
                        {/*end div fam statisrics*/}
                        {/*section history*/}
                        {/*div fam history louta*/}


                        <section className="ftco-section-2 pt-5 pb-5 sectionHistoryAbout"
                                 style={{backgroundColor: 'black'}}>
                            <div className="container">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                    <Col className={"col-lg-12 pl-2"} style={{textAlign: 'justify'}}>
                                        <Row>
                                            <h1 className="col-lg-2">
                                                <span className="View-All-My-Videos">Fam history</span>
                                            </h1>
                                            <h1 className="col-lg-3"></h1>
                                            <h1 className="col-lg-6 pt-4 pl-5 Browse-our-latest-works">
                                                OUR FESTIVAL <br/>
                                                PRESENTATION
                                            </h1>
                                        </Row>
                                    </Col>
                                    <Col className={"col-lg-12 pl-2 pt-lg-3 We-are-all-about-new"}>
                                                    Le Festival des Arts de la Méditerranée de Sidi Bou
                                                    Said est le rendez-vous incontournable de l’Art en Tunisie et
                                                    permet d’impliquer amateurs et artistes accomplis, badauds et
                                                    passionnés,
                                                    flâneurs et connaisseurs autours d’un projet commun, d’un rêve,
                                                    d’une histoire d’amour
                                                    et de tolérance caractéristique de ce qu’est l’art mais aussi de
                                                    ce qu’est la Tunisie.<br/>
                                                    Le FAM réuni artistes de tout horizon (des plasticiens, des
                                                    calligraphes, des sculpteurs,
                                                    des céramistes, des photographes, mais aussi des musiciens, des
                                                    poètes, des historiens de l’art,
                                                    des designers, des artisans- créateurs) provenant des deux rives
                                                    de
                                                    la Méditerranée et du reste du monde,
                                                    se mêlant au public, dans les rues du village pendant 4 jours



                                    </Col>

                                </div>
                            </div>
                        </section>
                        {/*end div fam history louta*/}
                        {/*end section history*/}


                        {/*section fam staff*/}
                        <section className="ftco-section-2 pt-lg-5 pb-lg-5" style={{backgroundColor: '#E8E8E8'}}>
                            <div className="container">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                    <Col className={"col-lg-12 "} style={{textAlign: 'justify'}}>
                                        <Row>
                                            <h1 className="col-lg-3">
                                                <span className="From-my-Model-Sets">Fam Staff</span>
                                            </h1>
                                            {/*<h1 className="col-lg-3"></h1>*/}
                                            {/*<h1 className="col-lg-6 pt-4 pl-5 Browse-our-latest-works">*/}
                                            {/*    OUR FESTIVAL <br/>*/}
                                            {/*    PRESENTATION*/}
                                            {/*</h1>*/}
                                        </Row>
                                    </Col>
                                    <Row className={"col-lg-12 pl-2 pr-5 pt-lg-5"}>
                                            <Col className={"col-lg-3"} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                        <Col className={"col-lg-3"} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                        <Col className={"col-lg-3"} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                        <Col className={"col-lg-3"} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                    </Row>
                                    <Row className={"col-lg-12 pl-2 pr-5 pt-lg-5"}>

                                        <Col className={"col-lg-2 "} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                        <Col className="col-lg-1"></Col>
                                        <Col className={"col-lg-2 "} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                        <Col className="col-lg-1"></Col>
                                        <Col className={"col-lg-2"} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                        <Col className="col-lg-1"></Col>
                                        <Col className={"col-lg-2 "} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                    </Row>
                                    <Row className={"col-lg-12 pl-2 pr-5 pt-lg-5"}>

                                        <Col className={"col-lg-2"} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                        <Col className="col-lg-1"></Col>
                                        <Col className={"col-lg-2"} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                        <Col className="col-lg-1"></Col>
                                        <Col className={"col-lg-2"} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                        <Col className="col-lg-1"></Col>
                                        <Col className={"col-lg-2"} style={{}}>
                                            <img src={require('../../assets/img/bg_5.jpg')}
                                                 style={{
                                                     background: 'white url(\'../../assets/img/bg_5.jpg\') 0% 0% no-repeat padding-box'
                                                 }}
                                                 alt="Logo"
                                                 className={"image-contact"}/>
                                            <h6 className=" FOULEN-FOULENI-KHEDMTOU-EN-DETAILS p-3">
                                                FOULEN FOULENI<br/> KHEDMTOU EN DETAILS
                                            </h6>
                                        </Col>
                                    </Row>


                                </div>
                            </div>
                        </section>
                        {/*end section fam staff*/}
                        {/*div contact louta*/}
                        <section className="ftco-section-2 pt-5 pb-5 sectionContactAbout">
                            <div className="container">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                    <Col className={"col-lg-12 "} style={{textAlign: 'justify'}}>
                                        <Row>
                                            <h1 className="col-lg-3">
                                                <span className="From-my-Model-Sets">Fam contact</span>
                                            </h1>
                                            {/*<h1 className="col-lg-3"></h1>*/}
                                            {/*<h1 className="col-lg-6 pt-4 pl-5 Browse-our-latest-works">*/}
                                            {/*    OUR FESTIVAL <br/>*/}
                                            {/*    PRESENTATION*/}
                                            {/*</h1>*/}
                                        </Row>
                                    </Col>

                                    <Col className="col-lg-12  pt-2  We-are-all-about-new-Contact">
                                                    Adelaide Fringe Office<br/>
                                                    Opening Hours: 9am – 5pm, Monday – Friday.<br/>
                                                    136 Frome St Adelaide SA 5000 Australia<br/>
                                                    Email: buzz@adelaidefringe.com.au<br/>
                                                    Phone: +61 8 8100 2000

                                    </Col>

                                </div>
                            </div>
                        </section>
                        {/*end div contact louta*/}


                        {/*footer section*/}
                        <section className="ftco-quote6 ftco-animate fadeInUp ftco-animated">
                            <div className="col-lg-12">
                                <Row>
                                    <div className="col-lg-1">
                                    </div>
                                    <div className="col-lg-2 pr-2 py-5 img">

                                        <img src={require('./assets/img/Footer1.png')}
                                             srcSet={require('./assets/img/Footer2x.png')}
                                             className="image-little-down"/>
                                    </div>
                                    <div className="col-lg-7">

                                    </div>
                                    <div className="col-lg-2 pl-lg-5">
                                            <img
                                                src={require('../pages/assets/img/Composant 31 – 20.png')}
                                                srcSet="../pages/assets/img/Composant 31 – 20@2x.png"
                                                className={"logo-footer"} alt="logoFAM"/>
                                    </div>


                                </Row>
                            </div>
                        </section>

                        <footer className="ftco-footer footersection">
                            {/*<div className="overlay"></div>*/}
                            <div className="container">
                                <div className="row " style={{height: '176px', paddingTop: '55px'}}>
                                    <div className="col-lg-4 ">
                                        <h6 className={"col-lg-12 check-out-some-more"}>
                                            CHECK OUT <br/>
                                            SOME MORE<br/>
                                            INFO
                                        </h6>
                                    </div>
                                    <div className="col-md-8">
                                        <Row style={{height: '100%'}}>
                                            <div className="col-lg-3"></div>

                                            <img src={require('./assets/img/FooterSec2x.png')}
                                                 srcSet={require('./assets/img/FooterSec1x.png')}

                                                 className={"image-footer1  col-lg-3 "}/>

                                        </Row>
                                    </div>
                                </div>
                            </div>
                            <div className="container " style={{marginTop: '100px'}}>
                                <Row>
                                    <div className="col-md-4">

                                    </div>
                                    <div className="col-md-8 ">
                                        <div className={"col-lg-12"}>
                                            <h1 className="col-md-6" style={{fontSize: '10px'}}>
                                                <a href="#">
                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        flexDirection: 'row'
                                                    }}>
                                                          <span className="menuFooter">
                                                              MENU
                                                          </span>
                                                    </div>
                                                </a>
                                            </h1>
                                        </div>
                                        <div className={"col-lg-12"}
                                             style={{textAlign: 'center'}}>

                                            <div className="col-md-6 flex flex-row justify-content-lg-start ">
                                                <ul style={{
                                                    listStyleType: 'none'
                                                }}>
                                                    <li><a href="/"><span
                                                        className="ShopFooter"
                                                    >HOME</span></a>
                                                    </li>
                                                    <li><a href="/collections"><span
                                                        className="VideosFooter"
                                                    >THE SHOW</span></a></li>
                                                    <li className={"active"}><a href="/gallery"><span
                                                        className="Look-bookFooter"
                                                    >GALLERY</span></a>
                                                    </li>
                                                    <li><a href="/supportUS"><span
                                                        className="ResumeFooter"
                                                    >SUPPORT US</span></a></li>
                                                    <li><a href="/aboutUS"><span
                                                        className="ContactFooter"
                                                    >ABOUT US</span></a></li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </Row>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: '10px',
                                marginLeft: '0px',
                                marginRight: '20px'
                            }}>


                                <h1 className="col-lg-4 pl-5" style={{textAlign: 'left', marginLeft: '0px'}}>
                                    <a href="#" className="YoutubeMenu">
                                        <span>Youtube</span></a>
                                    <a href="#" className="InstagramMenu" style={{
                                        marginLeft: '30px'
                                    }}>
                                        <span>Instagram</span></a>


                                </h1>
                                <h1 className="col-lg-8 " style={{textAlign: 'right'}}>
                                    <a href="#" style={{}} className="SubscribeMenu"><span>Contact</span></a>
                                </h1>

                            </div>
                        </footer>
                        {/*end footer section*/}
                        {/*loader*/}
                        <div id="ftco-loader" className="show fullscreen">
                            <svg className="circular" width="48px" height="48px">
                                <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4"
                                        stroke="#eeeeee"/>
                                <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4"
                                        stroke-miterlimit="10" stroke="#F96D00"/>
                            </svg>
                        </div>


                    </div>


                </div>

            </React.Fragment>
        )
            ;
    }
}

export default AboutUS;

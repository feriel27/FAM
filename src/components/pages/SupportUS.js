import React, {Component} from 'react';
import Nav from '../layouts/Nav';
import Header from '../layouts/Header';
import {Col, Row} from "react-bootstrap";

class SupportUS extends Component {


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
                                            <li><a href="/collections" ><span className="Videos">Collection</span></a></li>
                                            <li><a href="/gallery"><span className="Look-book">GALLERY</span></a></li>
                                            <li className="active"><a href="/supportUS"><span className="Resume">SUPPORT US</span></a></li>
                                            <li ><a href="/aboutUS"><span
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
                        <div className={"down-menu-sg"}>
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
                            <div className="slider-item Trac-170 imgBACKSupport" >
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

                                            <Row className="">
                                                {/*row left prog*/}
                                                <Col className="col-lg-7" style={{marginTop: '140px'}}>
                                                    <Row>
                                                        <Col className="col-md-3"
                                                             style={{
                                                                 textAlign: 'left',
                                                                 width: '0px',
                                                                 marginTop: '23px'
                                                             }}>
                                                        </Col>
                                                        <Col className="col-md-9"
                                                             style={{

                                                                 textAlign: 'left',
                                                                 width: '0px',
                                                                 marginTop: '23px',
                                                             }}>


                                                        </Col>
                                                    </Row>
                                                </Col>
                                                {/*end row left prog*/}

                                                {/*row right date*/}
                                                <Col className="col-lg-5 " style={{

                                                    marginTop: '150px'
                                                }}>
                                                    <h6 className={"col-lg-12"}>
                                                        <span className="Explore-whats-trend-support">SOME WAYS</span>
                                                    </h6>
                                                    <h6 className={"col-lg-12"} style={{



                                                    }}>
                                                        <span className="Explore-whats-trend-support">ABOUT HELPING</span>
                                                    </h6>
                                                    <h6 className={"col-lg-12"} style={{

                                                    }}>
                                                        <span className="Explore-whats-trend-support">US</span>
                                                    </h6>
                                                </Col>
                                                {/*end row right date*/}

                                            </Row>

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

                                                    <h1 className="All-Support ">
                                                        Support FAM
                                                    </h1>

                                                </Col>
                                                <Col className={"col-lg-5"}>
                                                    <Col className={"col-lg-12"}>
                                                        <h6
                                                            style={{

                                                                marginLeft: '100px',
                                                                textAlign: 'left', visibility: 'hidden',
                                                                letterSpacing: '26px', color: 'white'
                                                            }}>
                                                            <span>LEARN MORE</span><br/><br/>
                                                            <span>ABOUT US</span>
                                                        </h6>
                                                    </Col>
                                                    <Col className={"col-lg-12 pt-5"} style={{
                                                        marginLeft: '20px',
                                                        marginTop: '0px',
                                                        color: 'white',
                                                        textAlign: 'right'
                                                    }}>

                                                        <Row className={"listIcons"}>
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


                        {/*section all about*/}

                        <section className="ftco-section-2 pt-5 sectionAllAbout  "
                                 style={{}}>
                            <div className="container-fluid">
                                <div className="row d-flex no-gutters pl-lg-2">
                                    <div className=" d-flex flex-column justify-content-between">
                                        <Row className={"col-lg-12 pl-2"}>
                                            <Col className="col-lg-2   img">
                                                <img src={require('../pages/assets/img/ImageSupp2x.png')}
                                                     srcSet={require('../pages/assets/img/ImageSupp1x.png')}
                                                     alt="Logo"
                                                     className={"image-section-6"}/>
                                            </Col>
                                            <Col className="col-lg-10 colAbout" style={{
                                                paddingTop: '50px'
                                            }}>
                                                <Row className="col-lg-12">
                                                    <Col className="col-lg-5"></Col>
                                                    <Col className="col-lg-7">
                                                        <h6 className="All-About">
                                                            <span>all about</span>
                                                        </h6>
                                                    </Col>
                                                </Row>
                                                <Row
                                                    className="col-lg-12"
                                                    style={{
                                                        paddingLeft: '180px', paddingTop: '80px   '
                                                    }}>
                                                    <h1 className="col-lg-12   ">
                                                        <span className="Hey-Im-Sarah-Support">Hey, We're FAM —</span>
                                                    </h1>
                                                </Row>
                                                <Row
                                                    className="col-lg-12 ">
                                                    <h1 className="col-lg-12  ">
                                                            <span
                                                                className="a-fashion-designer-a">A Contemporary Art Festival</span>
                                                    </h1>

                                                </Row>
                                                <Row style={{height: '80px'}}>
                                                    <Col className="col-lg-5"></Col>
                                                    <Col className="col-lg-5 supports">
                                                        <Row>

                                                            <h1>
                                                                <span className="More">MORE</span>
                                                            </h1>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row className="" style={{
                                                    height: '40px'

                                                }}>
                                                    <Col className="col-lg-5"></Col>
                                                    <Col className="col-lg-4 pl-lg-5">
                                                        <div className="vl"></div>
                                                    </Col>

                                                </Row>
                                                <Row>
                                                    <Col className="col-lg-2"></Col>
                                                    <Col className="col-lg-7 pt-lg-5   ">
                                                        <Row>
                                                        <span className="Throughout-the-last">
                                                            As a non-for-profit organisation, FAM works with Partners and Donors to help bring our
                                                            festival to life and enables artists, venues and audiences have the world class Fringe experience
                                                            they live for each year. <br/>Find out more about how you can partner with us,
                                                            or the many ways to donate to our artists through the FAM Artist Fund today.
                                                        </span>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </div>
                        </section>

                        {/*image all about right*/}
                        <section className="ftco-quote-right ftco-animate fadeInUp ftco-animated">
                            <div className="col-lg-12">
                                <Row>
                                    <div className="col-lg-9">
                                    </div>
                                    <div className="col-lg-2  img" style={{}}>
                                        <img src={require('../pages/assets/img/ImageSuppSghira1x.png')}
                                             srcSet={require('../pages/assets/img/ImageSuppSghira2x.png')}
                                             alt="Logo"
                                             className={"image-section-right"}/>
                                    </div>


                                </Row>
                            </div>
                        </section>
                        {/*end image all about right*/}

                        {/*end section all about*/}
                        <section className="ftco-quote7 ftco-animate fadeInUp ftco-animated"
                                 style={{marginLeft: '-54px'}}>
                            <div className="col-lg-12">
                                <Row>
                                    <div className="col-lg-1">
                                    </div>
                                    <div className="col-lg-2 pr-2 py-5 img">
                                        <img
                                            src={require('../pages/assets/img/ImageSuppQuote2x.png')}
                                            srcSet={require('../pages/assets/img/ImageSuppQuote1x.png')}
                                            alt="Logo"
                                             className={"image-section-2"}/>
                                    </div>


                                </Row>
                            </div>
                        </section>

                        {/*div support us*/}

                        <section className="ftco-section-2  pb-5 sectionSupport"
                                 style={{backgroundColor: 'black',}}>
                            <div className="container-fluid" style={{marginTop: '-53px'}}>
                                <div className="section-2-blocks-wrapper d-flex row no-gutters ">
                                    <div className="container" style={{marginTop: '70px'}}>
                                        <Row  className="rowSUPPORTUS">
                                            <h1 className="col-lg-3"></h1>
                                            <h1 className="col-lg-6 pl-lg-5 " >
                                                <span className="Experience">SUPPORT US</span>
                                            </h1>
                                            <Col className="col-lg-3">
                                                    <img
                                                        src={require('../pages/assets/img/ImageSghayraSec2x.png')}
                                                        srcSet={require('../pages/assets/img/ImageSghayraSec1x.png')}
                                                        alt="Logo"
                                                         className={"image-section-right-supportUS"}/>
                                            </Col>
                                        </Row>
                                        <Row
                                            className="rowCONTENT"
                                           >
                                            <h1 className=" col-lg-12 mt-5 pb-lg-5 d-flex flex-row justify-content-center">
                                                <span className=" pl-lg-5  Designer">Partner With US</span>
                                            </h1>
                                            <p className=" col-lg-12 Having-graduated">
                                                As a Partner As a non-for-profit organisation, Adelaide Fringe works
                                                with Partners to bring our festival to
                                                life and enables artists, venues and audiences have the world class
                                                Fringe experience they live for each year.
                                                We are proud to hold our position as a national contributor to the
                                                cultural vibrancy of
                                                our state and our nation and we love sharing this with our family of
                                                Fringe Partners who help make it all possible
                                            </p>
                                            <Row className=" col-lg-12 RowMargin " >
                                                <h1 className=" col-lg-8"></h1>
                                                <h1 className=" col-lg-4">
                                                    <span className="our-partners paddingPart"> our partners</span>
                                                </h1>
                                            </Row>
                                        </Row>

                                        <Row className={""}>
                                            <h1 className=" col-lg-12 mt-5 pb-lg-4  d-flex flex-row justify-content-center">
                                                <span className=" pl-lg-5  Designer">Make A Donation</span>
                                            </h1>
                                            <p className=" col-lg-12 Social-networks">
                                                Donations
                                                The Adelaide Fringe Artist Fund has been developed to provide financial assistance to Australian artists registering their work in the Adelaide Fringe, and to help disadvantaged people experience to Fringe shows.

                                                As an open access arts festival, many artists, producers and venues self-present their work in the Adelaide Fringe using their own funds. They are creative entrepreneurs, not only creating the work but then taking the financial risk of presenting that work themselves. Many receive no government funding, and often just a small amount of financial assistance can mean the world of difference.


                                            </p>
                                            <Row className=" col-lg-12  RowMargin1D" >
                                                <h1 className=" col-lg-9"></h1>
                                                <h1 className=" col-lg-3">
                                                    <span className="our-partners"> Donate now</span>
                                                </h1>
                                            </Row>
                                        </Row>


                                        <Row className={""}>
                                            <h1 className=" col-lg-12 mt-5 pb-lg-4  d-flex flex-row justify-content-center">
                                                <span className="Designer">Become an Artist Host</span>
                                            </h1>
                                            <p className=" col-lg-12 During-the-universit">
                                                Want to earn extra cash for Fringe-ing?

                                                For artists, a large proportion of the cost of bringing their work to Adelaide goes towards accommodation; if they're doing a full season, they need to find affordable accommodation for a full month!

                                                This is where you can help. If you have a spare room or know someone who does and wouldn't mind having a Fringe artist around, we'd love to hear from you.

                                                Fringe artists can make great housemates and come with some fantastic perks; they can give you free tickets, can take you as a plus one to the exclusive Fringe Club or could teach you acrobatics, juggling or could help you to create the stand up comedy routine you always knew you had in you.


                                            </p>
                                            <Row className=" col-lg-12 RowBecome ">
                                                <h1 className=" col-lg-9"></h1>
                                                <h1 className=" col-lg-3">
                                                    <span className="our-partners"> Email US !</span>
                                                </h1>
                                            </Row>
                                        </Row>


                                    </div>


                                </div>
                            </div>
                        </section>

                        {/*end div support us*/}
                        <section className="ftco-quote9 ftco-animate fadeInUp ftco-animated"
                                 style={{}}>
                            <div className="col-lg-12">
                                <Row>
                                    <div className="col-lg-1">
                                    </div>
                                    <div className="col-lg-2 pr-2 py-5 img">
                                        <img
                                            src={require('../pages/assets/img/ImageSuppQuote2x.png')}
                                            srcSet={require('../pages/assets/img/ImageSuppQuote1x.png')}
                                            alt="Logo"
                                             className={"image-section-3"}/>
                                    </div>


                                </Row>
                            </div>
                        </section>

                        {/*section talk to us*/}
                        {/*section talk to us*/}
                        <section className="ftco-section-2  sectiontalkSupport">
                            <div className="container-fluid">
                                <div className="row d-flex no-gutters">
                                    <div className="container ">
                                        <Row className="pb-5">
                                            <Col className="col-lg-6"></Col>
                                            <Col className="col-lg-6 ">
                                                <h6 className="hey">
                                                    HEY
                                                </h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-lg-3"></Col>
                                            <Col className="col-lg-7 talktoUS">
                                                <h1 className="Talk-to-me">
                                                    <span>Talk to US</span>
                                                </h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-lg-12 ">
                                                <h1 className="col-lg-12 pl-lg-5 ">
                                                    <span className="if-you-have-someSupport">if you have some ideas for</span>
                                                </h1>
                                            </Col>
                                        </Row>
                                        <Row style={{
                                            marginLeft: '40px'
                                        }}>
                                            <Col className="col-lg-5"></Col>
                                            <Col className="col-lg-7  supports">
                                                <Row >
                                                    <h1 className="col-lg-3 thirdColSupp pt-lg-3 ">
                                                        <a href="#"><span className="Any">ANY</span></a>
                                                        <hr className=" row RectangleMore"/>

                                                    </h1>
                                                    <h1 className="col-lg-9">
                                                        <span className="collaborations ">Support </span>
                                                    </h1>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/*end section talk to us*/}

                        {/*end section talk to us*/}


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

export default SupportUS;
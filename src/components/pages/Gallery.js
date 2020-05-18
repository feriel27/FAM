import React, {Component} from 'react';
import '../../App.css';
import {Col, Row} from "react-bootstrap";
import Nav from '../layouts/Nav';

class Gallery extends Component {


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
                                            <li className="active"><a href="/gallery"><span
                                                className="Look-book">GALLERY</span></a></li>
                                            <li><a href="/supportUS"><span className="Resume">SUPPORT US</span></a></li>
                                            <li><a href="/aboutUS"><span className="Contact">ABOUT US</span></a></li>
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
                                     style={{
                                         display: 'flex', justifyContent: 'flex-start', flexDirection: 'row',

                                     }}>
                                    <a className="colorlib-logo" href="#">
                                        <div style={{
                                            display: 'flex', justifyContent: 'center',
                                            flexDirection: 'row',
                                            marginTop: '10px'
                                        }}>
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
                            <div className="slider-item Trac-170 imgBACKGallery">
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
                                                <Col className="col-lg-6" style={{marginTop: '140px'}}>
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
                                                <Col className="col-lg-6"
                                                     style={{marginTop: '150px', marginLeft: '0px',}}>
                                                    <h6 className={"col-lg-12"} style={{

                                                        marginLeft: '40px',

                                                    }}>
                                                        <span className="Explore-whats-trend">SHOP</span>
                                                    </h6>
                                                    <h6 className={"col-lg-12"} style={{

                                                        marginLeft: '40px',

                                                    }}>
                                                        <span className="Explore-whats-trend">ART PIECES</span>
                                                    </h6>
                                                    <h6 className={"col-lg-12"} style={{
                                                        marginLeft: '40px',

                                                    }}>
                                                        <span className="Explore-whats-trend">FROM OUR FESTIVAL</span>
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
                                                <Col className="col-lg-6 pt-lg-5">

                                                    <h1 className="All-Collections ">
                                                        Gallery
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

                        {/*END slider*/}

                        <section className="ftco-section-2  ">
                            <div className="container-fluid">
                                <div className="row d-flex no-gutters">
                                    <div
                                        className="col-md-12 d-flex align-items-center heading-section ftco-animate ">
                                        <Row style={{width: '100%'}}>
                                            <div className="col-lg-12">
                                                <div className="pt-5">
                                                    <Row>
                                                        <h1 className="col-lg-12 Fam-department">Fam department</h1>
                                                    </Row>

                                                </div>
                                                <div className={"col-lg-12 pt-3"} style={{textAlign: 'center'}}>
                                                    <Row style={{verticalItems: 'middle'}}>

                                                        <h2 className="pl-3"></h2>
                                                        <h2 className="col-lg-1">
                                                            <a href="#art" className="Collections">Art</a></h2>
                                                        <h2 className="col-lg-1"><a href="#music"
                                                                                    className="Collaborations">Music</a>
                                                        </h2>
                                                        <h2 className="col-lg-2 ml-5"><a href="#dance"
                                                                                         className="VideosLinks"

                                                        >Dance</a></h2>
                                                        <h2 className="col-lg-2"><a href="#fashion"
                                                                                    className="Artworks"
                                                        >Fashion</a></h2>
                                                        <h2 className="col-lg-3"><a href="#visualArts"
                                                                                    className="Artworks"
                                                            // style={{
                                                            //     color: '#000000',
                                                            //     fontSize: '20px',
                                                            //     textAlign: 'center',
                                                            //     fontFamily: 'Regular,  Fjalla One',
                                                            //     letterSpacing: '10px',
                                                            //     paddingLeft: '-20px',
                                                            //     textTransform: 'uppercase',
                                                            //     opacity: '1',
                                                            // }}
                                                        >Visual Arts</a></h2>
                                                        <h2 className="col-lg-2"><a href="#spectacles"
                                                                                    className="Artworks"
                                                            // style={{
                                                            //     color: '#000000',
                                                            //     fontSize: '20px',
                                                            //     textAlign: 'center',
                                                            //     fontFamily: 'Regular,  Fjalla One',
                                                            //     letterSpacing: '10px',
                                                            //     paddingLeft: '-20px',
                                                            //     textTransform: 'uppercase',
                                                            //     opacity: '1',
                                                            // }}
                                                        >Spectacles</a></h2>
                                                    </Row>

                                                </div>
                                                <div className={"col-lg-12"} style={{textAlign: 'center'}}>
                                                    <Row style={{verticalItems: 'middle'}} className="pt-3">
                                                        <h2 className="col-md-4"></h2>
                                                        <h2 className="col-lg-5">
                                                            <a href="#workTalk" className="Artworks"
                                                                // style={{
                                                                //     color: '#000000',
                                                                //     fontSize: '20px',
                                                                //     textAlign: 'center',
                                                                //     fontFamily: 'Regular,  Fjalla One',
                                                                //     letterSpacing: '10px',
                                                                //     paddingLeft: '-20px',
                                                                //     textTransform: 'uppercase',
                                                                //     opacity: '1',
                                                                // }}
                                                            >
                                                                Workshops & Talks
                                                            </a></h2>


                                                    </Row>

                                                </div>
                                            </div>


                                        </Row>

                                    </div>

                                </div>

                            </div>
                        </section>
                        {/*section bitha loula*/}

                        {/*image saghrouna*/}
                        <section className=" ftco-quote1 ftco-animate fadeInUp ftco-animated">
                            <div className="col-lg-12">
                                <Row>
                                    <div className="col-lg-9 ">
                                    </div>
                                    <div className="col-lg-2 pl-lg-5 py-5 img">
                                        <img src={require('./assets/img/Ayda Kchaou_Tunisia_2017.png')}
                                             srcSet="../../assets/img/Ayda Kchaou_Tunisia_2017@2x.png,
                                                                 ../../assets/img/Ayda Kchaou_Tunisia_2017@3x.png"
                                             className="Ayda-Kchaou_Tunisia_2017" alt="aydaRight-little"/>

                                    </div>


                                </Row>
                            </div>
                        </section>
                        {/*end image saghrouna*/}
                        {/*carousel sur layer*/}
                        <section className="ftco-section-2  " style={{
                            zIndex: '5',
                            position: 'absolute',
                            backgroundColor: 'transparent',
                            marginTop: '166px'
                        }}>
                            <div className="container d-flex flex-row">
                                <div
                                    className="col-lg-12 d-flex flex-row align-items-right heading-section ftco-animate ">
                                    <Row style={{height: '330px'}}>

                                        {/*<Col className="col-lg-6"></Col>*/}
                                        {/*    carousel second layer*/}
                                        <Col id="carousel-example-2z"
                                             className="carousel  col-lg-5  slide carousel-fade"
                                             data-ride="carousel"
                                             style={{marginLeft: '345px'}}
                                        >

                                            <div className="carousel-inner" role="listbox">
                                                <div className="carousel-item active">
                                                    <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                         srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                         alt="Logo"
                                                         className={"image-carousel-layer"}/>
                                                </div>

                                                <div className="carousel-item">
                                                    <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                         srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                         alt="Logo"
                                                         className={"image-carousel-layer"}/>
                                                </div>

                                                <div className="carousel-item">
                                                    <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                         srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                         alt="Logo"
                                                         className={"image-carousel-layer"}/>
                                                </div>
                                            </div>
                                            {/*Slides*/}
                                            {/*Controls*/}
                                            <div className="carousel-indicators"
                                                 style={{marginLeft: '34%', marginRight: '34%',marginBottom:'6%'}}
                                            >
                                                <a className="carousel-control-prev" href="#carousel-example-2z"
                                                   role="button"
                                                   data-slide="prev"
                                                   style={{alignItems: 'flex-end'}}
                                                >
                                                                    <span style={{fontSize: '31px'}}>
                                                                        <img src={require('./assets/img/Arrow Left Black.png')}
                                                                             alt="slide"/>
                                                                        {/*<i*/}
                                                                        {/*className="fas fa-arrow-left"></i>*/}
                                                                    </span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="carousel-control-next" href="#carousel-example-2z"
                                                   role="button"
                                                   style={{alignItems: 'flex-end'}}
                                                   data-slide="next">
                                                                    <span style={{fontSize: '31px'}}>
                                                                        <img src={require('./assets/img/Arrow Right Black.png')}
                                                                             alt="slide"/>

                                                                    </span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                            {/*Controls*/}

                                        </Col>
                                        {/* carousel second layer*/}
                                        <Col className="col-lg-6"></Col>
                                    </Row>
                                </div>
                            </div>
                        </section>
                        {/* end carousel sur layer*/}
                        <section className="ftco-section-2 sectionWhiteFirst">
                            <div className="container-fluid">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">

                                    <div id="carousel-example-1z"
                                         className="col-lg-4 ml-lg-5 carousel slide carousel-fade"
                                         data-ride="carousel">
                                        {/*Indicators*/}
                                        <ol className="carousel-indicators" style={{
                                            bottom: '50px'
                                        }}>
                                            <li data-target="#carousel-example-1z" data-slide-to="0"
                                                class="active"></li>
                                            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                                            <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                                        </ol>
                                        {/*Indicators*/}
                                        {/*Slides*/}
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active" style={{height: '100%'}}>


                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>

                                            <div className="carousel-item">

                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>

                                            <div className="carousel-item">

                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text col-lg-2"></div>
                                    <div className="col-lg-5 " style={{
                                        paddingTop: '100px', paddingLeft: '50px'
                                    }}>

                                        <span className=" What-else col-lg-12">Aida kchaou</span>
                                        <p className={"col-lg-12 pt-lg-5 Together-with-my-fri"}>
                                            TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            UPCOMING SPRING OF 2019. TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            UPCOMING SPRING OF 2019. UPCOMING SPRING OF 2019.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*image saghrouna louta*/}
                        <section className=" ftco-quote2 ftco-animate fadeInUp ftco-animated"
                                 style={{}}>
                            <div className="container">
                                <Row>
                                    <div className="col-lg-4 ">
                                    </div>
                                    <div className="col-lg-2 pl-lg-5 py-5 img">
                                        <img src={require('./assets/img/Ayda Kchaou2_Tunisia_2018.png')}
                                             srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018@2x.png,
                 ./assets/img/Ayda Kchaou2_Tunisia_2018@3x.png"
                                             className="Ayda-Kchaou2_Tunisia_2018"/>
                                    </div>


                                </Row>
                            </div>
                        </section>
                        {/*end image saghrouna louta*/}

                        {/*end section bitha loula*/}

                        {/*section noir  loula*/}

                        {/*carousel sur layer*/}
                        <section className="ftco-section-2  carousel-noir1 " style={{
                            zIndex: '5',
                            position: 'absolute', backgroundColor: 'transparent',
                            // marginTop: '300px'
                        }}>
                                    <div
                                        className=" col-lg-12 ftco-animate fadeInUp ftco-animated d-flex flex-row-reverse">
                                        <Row style={{height: '330px',marginLeft:'460px'}}>
                                            <Col className="col-lg-4"></Col>
                                            {/*    carousel second layer*/}
                                            <Col id="carousel-example-2z"
                                                 className="carousel  col-lg-8  slide carousel-fade "
                                                 data-ride="carousel"
                                                 style={{marginRight: '0px'}}
                                            >

                                                <div className="carousel-inner" role="listbox">
                                                    <div className="carousel-item active">
                                                        <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                             srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                             alt="Logo"
                                                             className={"image-carousel-layer"}/>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                             srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                             alt="Logo"
                                                             className={"image-carousel-layer"}/>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                             srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                             alt="Logo"
                                                             className={"image-carousel-layer"}/>
                                                    </div>
                                                </div>
                                                {/*Slides*/}
                                                {/*Controls*/}
                                                <div className="carousel-indicators"
                                                     style={{marginLeft: '34%', marginRight: '34%',marginBottom:'6%'}}
                                                >
                                                    <a className="carousel-control-prev" href="#carousel-example-2z"
                                                       role="button"
                                                       data-slide="prev"
                                                       style={{alignItems: 'flex-end'}}
                                                    >
                                                                    <span style={{fontSize: '31px'}}>
                                                                          <img src={require('./assets/img/Arrow Left Black.png')}
                                                                               alt="slide"/>
                                                                    </span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                    <a className="carousel-control-next" href="#carousel-example-2z"
                                                       role="button"
                                                       style={{alignItems: 'flex-end'}}
                                                       data-slide="next">
                                                                    <span style={{fontSize: '31px'}}>
                                                                          <img src={require('./assets/img/Arrow Right Black.png')}
                                                                               alt="slide"/>
                                                                    </span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </div>
                                                {/*Controls*/}

                                            </Col>
                                            {/* carousel second layer*/}
                                            <Col className="col-lg-4"></Col>
                                        </Row>
                                    </div>


                        </section>
                        {/* end carousel sur layer*/}
                        <section className="ftco-section-2 pt-5 sectionNoirFirst "
                                 style={{}}>
                            {/*image saghrouna*/}
                            <section className=" ftco-quote3 ftco-animate fadeInUp ftco-animated">
                                <div className="col-lg-12">
                                    <Row>

                                        <div className="col-lg-2 pl-2 py-5 img">


                                            <img
                                                src={require('./assets/img/Abdelgader Badr2_Libya_2018.png')}
                                                srcset="./assets/img/Abdelgader Badr2_Libya_2018@2x.png,
                                                    ./assets/img/Abdelgader Badr2_Libya_2018@3x.png"
                                                class="Abdelgader-Badr2_Libya_2018" alt="abdelkader"/>


                                        </div>
                                        <div className="col-lg-10 ">
                                        </div>

                                    </Row>
                                </div>
                            </section>
                            {/*end image saghrouna*/}
                            <div className="container-fluid" style={{marginTop: '-50px'}}>
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">

                                    <div className="pl-lg-5  ">
                                    </div>


                                    <div className="col-lg-5 " style={{
                                        paddingTop: '100px', paddingLeft: '50px'
                                    }}>

                                        <span className=" What-else col-lg-12">Aida kchaou</span>
                                        <p className={"pt-lg-5 col-lg-12 Together-with-my-fri-white"}>
                                            TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            UPCOMING SPRING OF 2019. TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            UPCOMING SPRING OF 2019. UPCOMING SPRING OF 2019.
                                        </p>

                                    </div>
                                    <div className="text col-lg-2"></div>


                                    <div id="carousel-example-7z"
                                         className="col-lg-4 mr-lg-5 carousel slide carousel-fade"
                                         data-ride="carousel"
                                    >
                                        {/*Indicators*/}
                                        <ol className="carousel-indicators" style={{
                                            bottom: '50px'
                                        }}>
                                            <li data-target="#carousel-example-7z" data-slide-to="0"
                                                className="active"></li>
                                            <li data-target="#carousel-example-7z" data-slide-to="1"></li>
                                            <li data-target="#carousel-example-7z" data-slide-to="2"></li>
                                        </ol>
                                        {/*Indicators*/}
                                        {/*Slides*/}
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active" style={{height: '100%'}}>


                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018_3.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018_3@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018_3@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>

                                            <div className="carousel-item">

                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018_3.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018_3@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018_3@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>

                                            <div className="carousel-item">

                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018_3.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018_3@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018_3@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>
                                        </div>
                                        {/*Slides*/}


                                    </div>

                                </div>
                                {/*image saghrouna*/}
                                <section className=" ftco-quote4 ftco-animate fadeInUp ftco-animated">
                                    <div className="col-lg-12">
                                        <Row>

                                            <div className="col-lg-2 pl-lg-3 py-3 img">
                                                <img
                                                    src={require('./assets/img/Abdelgader Badr4_Libya_2018.png')}
                                                    srcSet="./assets/img/Abdelgader Badr4_Libya_2018@2x.png,
                                                    ./assets/img/Abdelgader Badr4_Libya_2018@3x.png"
                                                    className="Abdelgader-Badr4_Libya_2018" alt="abdelkader"/>
                                            </div>
                                            <div className="col-lg-3 ">
                                            </div>


                                        </Row>
                                    </div>
                                </section>
                                {/*end image saghrouna*/}
                            </div>
                        </section>

                        {/*image saghrouna*/}
                        <section className=" ftco-quote5 ftco-animate fadeInUp ftco-animated">
                            <div className="col-lg-12">
                                <Row>
                                    <div className="col-lg-4">
                                    </div>
                                    <div className="col-lg-3  img">

                                        <img
                                            src={require('./assets/img/Abdelgader Badr3_Libya_2018.png')}
                                            srcSet="./assets/img/Abdelgader Badr3_Libya_2018@2x.png,
                                                    ./assets/img/Abdelgader Badr3_Libya_2018@3x.png"
                                            className="Abdelgader-Badr3_Libya_2018" alt="abdelkader"/>

                                    </div>


                                </Row>
                            </div>
                        </section>
                        {/*end image saghrouna*/}

                        {/*end section noir loula*/}

                        <div className="pt-5">
                        </div>
                        {/*section bitha thenia*/}
                        {/*carousel sur layer*/}
                        <section className="ftco-section-2  carousel2" style={{
                            zIndex: '5',
                            position: 'absolute', backgroundColor: 'transparent',
                            marginTop: '223px',
                        }}>
                            <div className="container-fluid" style={{}}>
                                <div className="row d-flex no-gutters">
                                    <div
                                        className="col-lg-12 d-flex align-items-center heading-section ftco-animate ">
                                        <Row style={{height: '330px'}}>

                                            <Col className="col-lg-4"></Col>
                                            {/*    carousel second layer*/}
                                            <Col id="carousel-example-10z"
                                                 className="carousel  col-lg-5  slide carousel-fade"
                                                 data-ride="carousel"
                                                 style={{marginLeft: '345px'}}
                                            >

                                                <div className="carousel-inner" role="listbox">
                                                    <div className="carousel-item active">
                                                        <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                             srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                             alt="Logo"
                                                             className={"image-carousel-layer"}/>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                             srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                             alt="Logo"
                                                             className={"image-carousel-layer"}/>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                             srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                             alt="Logo"
                                                             className={"image-carousel-layer"}/>
                                                    </div>
                                                </div>
                                                {/*Slides*/}
                                                {/*Controls*/}
                                                <div className="carousel-indicators"
                                                     style={{marginLeft: '34%', marginRight: '34%',marginBottom:'6%'}}
                                                >
                                                    <a className="carousel-control-prev" href="#carousel-example-10z"
                                                       role="button"
                                                       data-slide="prev"
                                                       style={{alignItems: 'flex-end'}}
                                                    >
                                                                <span style={{fontSize: '31px'}}>
                                                                      <img src={require('./assets/img/Arrow Left Black.png')}
                                                                           alt="slide"/>
                                                                </span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                    <a className="carousel-control-next" href="#carousel-example-10z"
                                                       role="button"
                                                       style={{alignItems: 'flex-end'}}
                                                       data-slide="next">
                                                                <span style={{fontSize: '31px'}}>
                                                                      <img src={require('./assets/img/Arrow Right Black.png')}
                                                                           alt="slide"/>
                                                                </span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </div>
                                                {/*Controls*/}

                                            </Col>
                                            {/* carousel second layer*/}
                                            <Col className="col-lg-6"></Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* end carousel sur layer*/}


                        <section className="ftco-section-2 pb-4 pt-lg-5 sectionWhiteSecond">
                            <div className="container-fluid">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">

                                    <div id="carousel-example-18z"
                                         className="col-lg-4 ml-lg-5 carousel slide carousel-fade"
                                         data-ride="carousel">
                                        {/*Indicators*/}
                                        <ol className="carousel-indicators" style={{
                                            bottom: '50px'
                                        }}>
                                            <li data-target="#carousel-example-18z" data-slide-to="0"
                                                className="active"></li>
                                            <li data-target="#carousel-example-18z" data-slide-to="1"></li>
                                            <li data-target="#carousel-example-18z" data-slide-to="2"></li>
                                        </ol>
                                        {/*Indicators*/}
                                        {/*Slides*/}
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active" style={{height: '100%'}}>


                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018_2.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018_2@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018_2@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>

                                            <div className="carousel-item">

                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018_2.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018_2@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018_2@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>

                                            <div className="carousel-item">
                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018_2.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018_2@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018_2@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>
                                        </div>
                                        {/*Slides*/}


                                    </div>

                                    <div className="text col-lg-2"></div>
                                    <div className="col-lg-5 " style={{
                                        paddingTop: '100px', paddingLeft: '50px'
                                    }}>

                                        <span className=" What-else col-lg-12">Aida kchaou</span>
                                        <p className={"pt-lg-5 Together-with-my-fri col-lg-12"}>
                                            TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            UPCOMING SPRING OF 2019. TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            UPCOMING SPRING OF 2019. UPCOMING SPRING OF 2019.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*end section bitha thenia*/}
                        <div className="pt-5" style={{backgroundColor: 'black'}}>
                        </div>
                        {/*section noir  thenia*/}
                        {/*carousel sur layer*/}

                        <section className="ftco-section-2 pb-lg-5  carousel2"
                                 id="workTalk"
                                 style={{
                                     zIndex: '5',
                                     position: 'absolute', backgroundColor: 'transparent',
                                     marginTop: '190px'
                                 }}>
                                    <div
                                        className=" col-lg-12 ftco-animate fadeInUp ftco-animated d-flex flex-row-reverse">
                                        <Row style={{height: '330px',marginLeft:'460px'}}>

                                            <Col className="col-lg-4"></Col>                                            {/*    carousel second layer*/}
                                            <Col id="carousel-example-12z"
                                                 className="carousel  col-lg-8 slide carousel-fade"
                                                 data-ride="carousel"
                                                 style={{marginRight: '0px'}}>

                                                <div className="carousel-inner" role="listbox">
                                                    <div className="carousel-item active">
                                                        <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                             srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                             alt="Logo"
                                                             className={"image-carousel-layer"}/>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                             srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                             alt="Logo"
                                                             className={"image-carousel-layer"}/>
                                                    </div>

                                                    <div className="carousel-item">
                                                        <img src={require('../pages/assets/img/ImageAyda@2x.png')}
                                                             srcSet={require('../pages/assets/img/ImageAyda.png')}
                                                             alt="Logo"
                                                             className={"image-carousel-layer"}/>
                                                    </div>
                                                </div>
                                                {/*Slides*/}
                                                {/*Controls*/}
                                                <div className="carousel-indicators"
                                                     style={{marginLeft: '34%', marginRight: '34%',marginBottom:'6%'}}
                                                >
                                                    <a className="carousel-control-prev" href="#carousel-example-12z"
                                                       role="button"
                                                       data-slide="prev"
                                                       style={{alignItems: 'flex-end'}}
                                                    >
                                                                        <span style={{fontSize: '31px'}}>
                                                                              <img src={require('./assets/img/Arrow Left Black.png')}
                                                                                   alt="slide"/>
                                                                        </span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                    <a className="carousel-control-next" href="#carousel-example-12z"
                                                       role="button"
                                                       style={{alignItems: 'flex-end'}}
                                                       data-slide="next">
                                                                        <span style={{fontSize: '31px'}}>
                                                                              <img src={require('./assets/img/Arrow Right Black.png')}
                                                                                   alt="slide"/>
                                                                        </span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </div>
                                                {/*Controls*/}

                                            </Col>
                                            {/* carousel second layer*/}
                                            <Col className="col-lg-6"></Col>
                                        </Row>
                                    </div>


                        </section>
                        {/* end carousel sur layer*/}
                        <section className="ftco-section-2 pt-lg-5 sectionBlackSecond ">
                            <div className="container-fluid" style={{marginTop: '0px'}}>
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">

                                    <div className="pl-lg-5  ">
                                    </div>


                                    <div className="col-lg-5 " style={{
                                        paddingTop: '100px', paddingLeft: '50px'
                                    }}>

                                        <span className=" What-else col-lg-12">Aida kchaou</span>
                                        <p className={"pt-lg-5 Together-with-my-fri-white col-lg-12"}>
                                            TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            UPCOMING SPRING OF 2019. TOGETHER WITH MY FRIENDS - STYLISTS, WE HAVE
                                            COLLECTED SOME OF THE HOTTEST PIECES OF THIS
                                            UPCOMING SPRING OF 2019. UPCOMING SPRING OF 2019.
                                        </p>

                                    </div>
                                    <div className="text col-lg-2"></div>


                                    <div id="carousel-example-15z" style={{
                                        height: '726px'
                                    }}
                                         className="col-lg-4 mr-lg-5 carousel slide carousel-fade"
                                         data-ride="carousel"
                                    >
                                        {/*Indicators*/}
                                        <ol className="carousel-indicators" style={{
                                            bottom: '50px'
                                        }}>
                                            <li data-target="#carousel-example-15z" data-slide-to="0"
                                                className="active"></li>
                                            <li data-target="#carousel-example-15z" data-slide-to="1"></li>
                                            <li data-target="#carousel-example-15z" data-slide-to="2"></li>
                                        </ol>
                                        {/*Indicators*/}
                                        {/*Slides*/}
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">


                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018_4.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018_4@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018_4@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>

                                            <div className="carousel-item">

                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018_4.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018_4@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018_4@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>

                                            <div className="carousel-item">

                                                <img src={require('./assets/img/Ayda Kchaou_Tunisia_2018_4.jpg')}
                                                     srcSet="./assets/img/Ayda Kchaou2_Tunisia_2018_4@2x.png,./assets/img/Ayda Kchaou2_Tunisia_2018_4@3x.png)"

                                                     className="Ayda-Kchaou_Tunisia_2018" alt={"ayda"}/>
                                            </div>
                                        </div>
                                        {/*Slides*/}


                                    </div>

                                </div>
                            </div>
                        </section>
                        {/*end section noir thenia*/}


                        {/*footer section*/}

                        <div className="" style={{height: '30px', backgroundColor: 'white'}}>
                        </div>
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
                                    <div className="col-lg-2  ">
                                        <img
                                            src={require('../pages/assets/img/Composant 31 – 20.png')}
                                            srcSet="../pages/assets/img/Composant 31 – 20@2x.png"
                                            className={"logo-footer "} alt="logoFAM"/>
                                    </div>


                                </Row>
                            </div>
                        </section>

                        */}
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

export default Gallery;

import React, {Component} from 'react';
import '../../App.css';
import classnames from 'classnames';
import {
    TabContent, TabPane, NavLink, Label, Card, CardBody,
} from "reactstrap";
import {Button, Col, Row} from "react-bootstrap";
import DetailItem from "./DetailItem";

import Modal from 'react-responsive-modal';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link1: true,
            link2: false,
            link3: false,
            value_opacity1: 0.4,
            value_opacity2: 1,
            value_opacity3: 1,

            imageColor: ' url(\'images/bg_4.jpg\')',
            activeTab: '1',
            hover: false,
            hover1: false,
            hover2: false,
            hover3: false,
            hover4: false,
            hover5: false,
            hover6: false,
            clicked: false,
            clicked1: false,
            clicked2: false,
            clicked3: false,
            clicked4: false,
            clicked5: false,
            clicked6: false,
            colorIcon: 'black',
            colorIcon1: 'black',
            colorIcon2: 'black',
            colorIcon3: 'black',
            colorIcon4: 'black',
            colorIcon5: 'black',
            colorIcon6: 'black',
            image_over1: ' url(\'images/bg_4.jpg\')',
            open: false,


        };

        this.toggle = this.toggle.bind(this);

    }

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    onClickLink1 = (e) => {

        const opacity = 1;
        const newVal = e === true ? false : e === false ? true : null;


        console.log(this.state.link1)
        console.log(this.state.link2)

    }

    //taswira loula
    hoverOn = () => {
        this.setState({hover: true});
    }
    hoverOff = () => {
        this.setState({hover: false});
    }

    changeOnClick = () => {
        this.setState(prevState => ({
            colorIcon: 'green',
            clicked: true
        }));
    }

    //taswira thenia
    hoverOn2 = () => {
        this.setState({hover2: true});
    }
    hoverOff2 = () => {
        this.setState({hover2: false});
    }

    changeOnClick2 = () => {
        this.setState(prevState => ({
            colorIcon2: 'green',
            clicked2: true
        }));
    }


    toggle(tab) {
        console.log(tab)
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        const {open} = this.state;

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
                        <div className="js-fullheight colorlib-table" style={{}}>
                            <div className="colorlib-table-cell ">
                                <div className="row no-gutters ">
                                    <div className="col-md-6 flex flex-row justify-content-lg-start ">
                                        <ul>
                                            <li>
                                                <a href="/">
                                                    <span className="Shop"> HOME</span></a>
                                            </li>
                                            <li className="active"><a href="/collections"><span
                                                className="Videos">Collection</span></a></li>

                                            <li><a href="/gallery"><span className="Look-book">GALLERY</span></a></li>
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
                            <div className="slider-item Trac-170 imgBACKCollections">
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
                                                <Col className="col-lg-6 ">

                                                    <h1 className="All-CollectionsShow ">
                                                        All
                                                        Collections
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

                        <section className="ftco-section-2 pt-5 pb-5 collectionText1" style={{}}>
                            <div className="container">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                    <Col className={"col-lg-12 pl-2"} style={{}}>
                                        <Row>
                                            <Col>
                                                <img
                                                    className="col-lg-5"
                                                    src={require('./assets/img/Search.png')}
                                                    alt="icon-chariot"

                                                    style={{
                                                        maxWidth: '9.4444%',
                                                        marginLeft: '-16px'
                                                    }}
                                                    // className={
                                                    //     this.state.clicked ? 'fas fa-heart ' :
                                                    //         this.state.hover ?
                                                    //             "fas fa-heart" :
                                                    //             "far fa-heart "
                                                    //
                                                    // }
                                                    onClick={this.changeOnClick}
                                                    onMouseEnter={this.hoverOn}
                                                    onMouseLeave={this.hoverOff}

                                                />
                                            </Col>
                                        </Row>
                                        <Row className={"pt-lg-5"}>
                                            <Col className="col-lg-6 ">
                                                <h1 className="Shop-by-Collections">

                                                    Shop by

                                                    Collections

                                                </h1>

                                            </Col>
                                            <Col className="col-lg-6">
                                                <h6 className="You-are-here-to-find"
                                                    style={{paddingTop: '30px', paddingLeft: '6px'}}>

                                                    YOU ARE HERE <br/>
                                                    TO FIND WHAT<br/>
                                                    YOU NEED
                                                </h6>
                                            </Col>


                                        </Row>
                                        <Row>
                                            <Col>

                                                    <img
                                                        className="col-lg-5"
                                                        src={require('./assets/img/+.png')}
                                                        alt="icon-chariot"

                                                        style={{
                                                            marginTop: '-70px',
                                                            maxWidth: '10.4444%',
                                                            marginLeft: '-29px'
                                                        }}
                                                        // className={
                                                        //     this.state.clicked ? 'fas fa-heart ' :
                                                        //         this.state.hover ?
                                                        //             "fas fa-heart" :
                                                        //             "far fa-heart "
                                                        //
                                                        // }
                                                        onClick={this.changeOnClick}
                                                        onMouseEnter={this.hoverOn}
                                                        onMouseLeave={this.hoverOff}

                                                    />

                                            </Col>
                                        </Row>
                                    </Col>


                                </div>
                            </div>
                        </section>


                        {/*section first 2 pic*/}
                        <section className="ftco-section-2 ">
                            <div className="container-fluid">



                                <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                    <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                       style={{
                                           backgroundImage: 'url(\'images/ImageCol1.png\')',
                                           backgroundSize: '630px 660px',
                                           height: '660px'

                                       }}>
                                    </a>
                                    <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                       style={{
                                           backgroundImage: 'url(\'images/ImageCol2.png\')',
                                           backgroundSize: '630px 660px',
                                           height: '660px'

                                       }}>
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="ftco-section-2 pt-5 pb-5" style={{}}>
                            <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                <Col className={"col-lg-12 "} style={{}}>
                                    <Row>
                                        <Col className="col-lg-6 " style={{
                                            paddingLeft: '80px'
                                        }}>
                                            <Row>
                                                <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive">
                                                       Fafi el quattan
                                                  </span>
                                                    <span className="Elegant-glass-candle">Bashayer el quattan</span>
                                                </h1>


                                                {
                                                    this.state.clicked ?
                                                        <img
                                                            className=" icon-chariot"
                                                            src={require('./assets/img/local_grocery_store_green.png')}
                                                            alt="icon-chariot"

                                                            style={{
                                                                // marginTop: '20px',
                                                                // maxWidth: '12.6667%',
                                                                // height: '51px',
                                                                color: this.state.colorIcon,
                                                            }}
                                                            // className={
                                                            //     this.state.clicked ? 'fas fa-heart ' :
                                                            //         this.state.hover ?
                                                            //             "fas fa-heart" :
                                                            //             "far fa-heart "
                                                            //
                                                            // }
                                                            onClick={this.changeOnClick}
                                                            onMouseEnter={this.hoverOn}
                                                            onMouseLeave={this.hoverOff}

                                                        /> :
                                                        this.state.hover ?
                                                            <img
                                                                className=" icon-chariot"
                                                                src={require('./assets/img/local_grocery_store-plus.png')}
                                                                alt="icon-chariot"

                                                                style={{
                                                                    // marginTop: '20px',
                                                                    // maxWidth: '12.6667%',
                                                                    // height: '51px',
                                                                    color: this.state.colorIcon,
                                                                }}
                                                                // className={
                                                                //     this.state.clicked ? 'fas fa-heart ' :
                                                                //         this.state.hover ?
                                                                //             "fas fa-heart" :
                                                                //             "far fa-heart "
                                                                //
                                                                // }
                                                                onClick={this.changeOnClick}
                                                                onMouseEnter={this.hoverOn}
                                                                onMouseLeave={this.hoverOff}

                                                            />
                                                            :
                                                            <img
                                                                className=" icon-chariot"
                                                                src={require('./assets/img/local_grocery_store.png')}
                                                                alt="icon-chariot"

                                                                style={{
                                                                        // marginTop: '20px',
                                                                        // maxWidth: '12.6667%',
                                                                        // height: '51px',
                                                                    color: this.state.colorIcon,
                                                                }}
                                                                // className={
                                                                //     this.state.clicked ? 'fas fa-heart ' :
                                                                //         this.state.hover ?
                                                                //             "fas fa-heart" :
                                                                //             "far fa-heart "
                                                                //
                                                                // }
                                                                onClick={this.changeOnClick}
                                                                onMouseEnter={this.hoverOn}
                                                                onMouseLeave={this.hoverOff}

                                                            />
                                                }

                                            </Row>
                                        </Col>
                                        <Col className="col-lg-6 " style={{
                                            paddingLeft: '80px'
                                        }}>
                                            <Row>
                                                <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive ">
                                                       Ayda Kchaou
                                                  </span>
                                                    <span className="Elegant-glass-candle">
                                                       Long sleeves & rounded hem
                                                    </span>
                                                </h1>
                                                {
                                                    this.state.clicked ?
                                                        <img
                                                            className=" icon-chariot"
                                                            src={require('./assets/img/local_grocery_store_green.png')}
                                                            alt="icon-chariot"

                                                            style={{
                                                                // marginTop: '20px',
                                                                // maxWidth: '12.6667%',
                                                                // height: '51px',
                                                                color: this.state.colorIcon,
                                                            }}
                                                            // className={
                                                            //     this.state.clicked ? 'fas fa-heart ' :
                                                            //         this.state.hover ?
                                                            //             "fas fa-heart" :
                                                            //             "far fa-heart "
                                                            //
                                                            // }
                                                            onClick={this.changeOnClick}
                                                            onMouseEnter={this.hoverOn}
                                                            onMouseLeave={this.hoverOff}

                                                        /> :
                                                        this.state.hover ?
                                                            <img
                                                                className=" icon-chariot"
                                                                src={require('./assets/img/local_grocery_store-plus.png')}
                                                                alt="icon-chariot"

                                                                style={{
                                                                    // marginTop: '20px',
                                                                    // maxWidth: '12.6667%',
                                                                    // height: '51px',
                                                                    color: this.state.colorIcon,
                                                                }}
                                                                // className={
                                                                //     this.state.clicked ? 'fas fa-heart ' :
                                                                //         this.state.hover ?
                                                                //             "fas fa-heart" :
                                                                //             "far fa-heart "
                                                                //
                                                                // }
                                                                onClick={this.changeOnClick}
                                                                onMouseEnter={this.hoverOn}
                                                                onMouseLeave={this.hoverOff}

                                                            />
                                                            :
                                                            <img
                                                                className=" icon-chariot"
                                                                src={require('./assets/img/local_grocery_store.png')}
                                                                alt="icon-chariot"

                                                                style={{
                                                                    // marginTop: '20px',
                                                                    // maxWidth: '12.6667%',
                                                                    // height: '51px',
                                                                    color: this.state.colorIcon,
                                                                }}
                                                                // className={
                                                                //     this.state.clicked ? 'fas fa-heart ' :
                                                                //         this.state.hover ?
                                                                //             "fas fa-heart" :
                                                                //             "far fa-heart "
                                                                //
                                                                // }
                                                                onClick={this.changeOnClick}
                                                                onMouseEnter={this.hoverOn}
                                                                onMouseLeave={this.hoverOff}

                                                            />
                                                }
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                        </section>
                        {/*end section first 2 pic*/}


                        {/*section second 2 pic*/}
                        <section className="ftco-section-2 pt-lg-5 " style={{
                            marginTop: '60px'
                        }}>
                            <div className="container-fluid">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                    <a href="/itemdetail" onClick={this.onOpenModal}
                                       className="img col-md-6  ftco-animate"
                                       style={{
                                           backgroundImage: 'url(\'images/ImageCol3.png\')',
                                           backgroundSize: '630px 660px',
                                           height: '660px'
                                       }}>
                                    </a>
                                    <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                       style={{
                                           backgroundImage: 'url(\'images/ImageCol4.png\')',
                                           backgroundSize: '630px 660px',
                                           height: '660px'

                                       }}>
                                    </a>

                                </div>
                            </div>
                        </section>
                        <section className="ftco-section-2 pt-5 pb-5" style={{}}>
                            <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                <Col className={"col-lg-12 "} style={{}}>
                                    <Row>

                                        <Col className="col-lg-6 " style={{
                                            paddingLeft: '80px'
                                        }}>
                                            <Row>
                                                <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive">
                                                       Fafi el quattan
                                                  </span>
                                                    <span className="Elegant-glass-candle">Bashayer el quattan</span>
                                                </h1>

                                                {
                                                    this.state.clicked ?
                                                        <img
                                                            className=" icon-chariot"
                                                            src={require('./assets/img/local_grocery_store_green.png')}
                                                            alt="icon-chariot"

                                                            style={{
                                                                // marginTop: '20px',
                                                                // maxWidth: '12.6667%',
                                                                // height: '51px',
                                                                color: this.state.colorIcon,
                                                            }}
                                                            // className={
                                                            //     this.state.clicked ? 'fas fa-heart ' :
                                                            //         this.state.hover ?
                                                            //             "fas fa-heart" :
                                                            //             "far fa-heart "
                                                            //
                                                            // }
                                                            onClick={this.changeOnClick}
                                                            onMouseEnter={this.hoverOn}
                                                            onMouseLeave={this.hoverOff}

                                                        /> :
                                                        this.state.hover ?
                                                            <img
                                                                className=" icon-chariot"
                                                                src={require('./assets/img/local_grocery_store-plus.png')}
                                                                alt="icon-chariot"

                                                                style={{
                                                                    // marginTop: '20px',
                                                                    // maxWidth: '12.6667%',
                                                                    // height: '51px',
                                                                    color: this.state.colorIcon,
                                                                }}
                                                                // className={
                                                                //     this.state.clicked ? 'fas fa-heart ' :
                                                                //         this.state.hover ?
                                                                //             "fas fa-heart" :
                                                                //             "far fa-heart "
                                                                //
                                                                // }
                                                                onClick={this.changeOnClick}
                                                                onMouseEnter={this.hoverOn}
                                                                onMouseLeave={this.hoverOff}

                                                            />
                                                            :
                                                            <img
                                                                className=" icon-chariot"
                                                                src={require('./assets/img/local_grocery_store.png')}
                                                                alt="icon-chariot"

                                                                style={{
                                                                    // marginTop: '20px',
                                                                    // maxWidth: '12.6667%',
                                                                    // height: '51px',
                                                                    color: this.state.colorIcon,
                                                                }}
                                                                // className={
                                                                //     this.state.clicked ? 'fas fa-heart ' :
                                                                //         this.state.hover ?
                                                                //             "fas fa-heart" :
                                                                //             "far fa-heart "
                                                                //
                                                                // }
                                                                onClick={this.changeOnClick}
                                                                onMouseEnter={this.hoverOn}
                                                                onMouseLeave={this.hoverOff}

                                                            />
                                                }

                                            </Row>
                                        </Col>
                                        <Col className="col-lg-6 " style={{
                                            paddingLeft: '80px'
                                        }}>
                                            <Row>
                                                <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive ">
                                                       Ayda Kchaou
                                                  </span>
                                                    <span className="Elegant-glass-candle">
                                                       Long sleeves & rounded hem
                                                    </span>
                                                </h1>
                                                {
                                                    this.state.clicked ?
                                                        <img
                                                            className=" icon-chariot"
                                                            src={require('./assets/img/local_grocery_store_green.png')}
                                                            alt="icon-chariot"

                                                            style={{
                                                                // marginTop: '20px',
                                                                // maxWidth: '12.6667%',
                                                                // height: '51px',
                                                                color: this.state.colorIcon,
                                                            }}
                                                            // className={
                                                            //     this.state.clicked ? 'fas fa-heart ' :
                                                            //         this.state.hover ?
                                                            //             "fas fa-heart" :
                                                            //             "far fa-heart "
                                                            //
                                                            // }
                                                            onClick={this.changeOnClick}
                                                            onMouseEnter={this.hoverOn}
                                                            onMouseLeave={this.hoverOff}

                                                        /> :
                                                        this.state.hover ?
                                                            <img
                                                                className=" icon-chariot"
                                                                src={require('./assets/img/local_grocery_store-plus.png')}
                                                                alt="icon-chariot"

                                                                style={{
                                                                    // marginTop: '20px',
                                                                    // maxWidth: '12.6667%',
                                                                    // height: '51px',
                                                                    color: this.state.colorIcon,
                                                                }}
                                                                // className={
                                                                //     this.state.clicked ? 'fas fa-heart ' :
                                                                //         this.state.hover ?
                                                                //             "fas fa-heart" :
                                                                //             "far fa-heart "
                                                                //
                                                                // }
                                                                onClick={this.changeOnClick}
                                                                onMouseEnter={this.hoverOn}
                                                                onMouseLeave={this.hoverOff}

                                                            />
                                                            :
                                                            <img
                                                                className=" icon-chariot"
                                                                src={require('./assets/img/local_grocery_store.png')}
                                                                alt="icon-chariot"

                                                                style={{
                                                                    // marginTop: '20px',
                                                                    // maxWidth: '12.6667%',
                                                                    // height: '51px',
                                                                    color: this.state.colorIcon,
                                                                }}
                                                                // className={
                                                                //     this.state.clicked ? 'fas fa-heart ' :
                                                                //         this.state.hover ?
                                                                //             "fas fa-heart" :
                                                                //             "far fa-heart "
                                                                //
                                                                // }
                                                                onClick={this.changeOnClick}
                                                                onMouseEnter={this.hoverOn}
                                                                onMouseLeave={this.hoverOff}

                                                            />
                                                }
                                            </Row>
                                        </Col>

                                    </Row>

                                </Col>


                            </div>

                        </section>
                        {/*end section second 2 pic*/}


                        {/*second section text*/}
                        <section className="ftco-section-2 pt-5 collectionText2" style={{marginTop: '100px'}}>
                            <div className="container">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                    <Col className={"col-lg-12 pl-2"}>
                                        <Row>
                                            <Col className="col-lg-6 ">
                                                <h1 className="Sarahs-Choise">
                                                    FAM’s

                                                    Choise
                                                </h1>

                                            </Col>
                                            <Col className="col-lg-6">
                                                <h6 className="everything-is-almost"
                                                    style={{paddingTop: '30px', paddingLeft: '6px'}}>

                                                    EVERYTHING
                                                    IS ALMOST
                                                    HERE

                                                </h6>
                                            </Col>


                                        </Row>
                                        <Row style={{marginTop: '40px'}}>

                                            <Col className="col-lg-3">
                                                <NavLink
                                                    className={classnames({active: this.state.activeTab === '4'})}
                                                    onClick={() => {
                                                        this.toggle('1');
                                                    }}>
                                                    <a
                                                        className="Vintage-objects"
                                                        tabindex="1"
                                                    >
                                                        VINTAGE OBJECTS

                                                    </a>
                                                </NavLink>
                                            </Col>
                                            <Col className="col-lg-1">
                                                <NavLink
                                                    className={classnames({active: this.state.activeTab === '2'})}
                                                    onClick={() => {
                                                        this.toggle('2');
                                                    }}>
                                                    <a className="Vintage-objects"
                                                       tabindex="2"

                                                    >GIFTS

                                                    </a>
                                                </NavLink>
                                            </Col>
                                            <Col className="col-lg-1">
                                                <NavLink
                                                    className={classnames({active: this.state.activeTab === '3'})}
                                                    onClick={() => {
                                                        this.toggle('3');
                                                    }}>
                                                    <a className="Vintage-objects"
                                                       tabindex="3"
                                                    >PAINTINGS</a>
                                                </NavLink>
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                            </div>
                        </section>
                        {/*end second section text*/}
                        <TabContent activeTab={this.state.activeTab} id={"table"}>
                            <TabPane tabId="1">
                                {/*third section image*/}
                                <section className="ftco-section-2 pt-lg-4">
                                    <div className="container-fluid">
                                        <div className="section-2-blocks-wrapper d-flex row no-gutters">


                                            <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                               style={{
                                                   backgroundImage: 'url(\'images/bg_5.jpg\')',
                                                   backgroundSize: '630px 660px',
                                                   height: '660px'

                                               }}>
                                            </a>
                                            <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                               style={{
                                                   backgroundImage: 'url(\'images/bg_4.jpg\')',
                                                   backgroundSize: '630px 660px',
                                                   height: '660px'

                                               }}>
                                            </a>


                                        </div>
                                    </div>
                                </section>
                                <section className="ftco-section-2 pt-5 pb-lg-5" id="GIFTS">
                                    <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                        <Col className={"col-lg-12 "} style={{}}>


                                            <Row>

                                                <Col className="col-lg-6 " style={{
                                                    paddingLeft: '80px'
                                                }}>
                                                    <Row>
                                                        <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive">
                                                       Fafi el quattan
                                                  </span>
                                                            <span
                                                                className="Elegant-glass-candle">Bashayer el quattan</span>
                                                        </h1>

                                                        <h1 className="col-lg-3 "
                                                            style={{
                                                                // backgroundColor: '#1d1d1d',
                                                            }}
                                                        >
                                                            <i style={{
                                                                marginTop: '20px',
                                                                // width: '56px',
                                                                // height: '56px',
                                                                color: this.state.colorIcon,
                                                            }}
                                                               className={
                                                                   this.state.clicked ? 'fas fa-heart ' :
                                                                       this.state.hover ?
                                                                           "fas fa-heart" :
                                                                           "far fa-heart "

                                                               }
                                                               onClick={this.changeOnClick}
                                                               onMouseEnter={this.hoverOn}
                                                               onMouseLeave={this.hoverOff}

                                                            ></i>
                                                        </h1>

                                                    </Row>
                                                </Col>
                                                <Col className="col-lg-6 " style={{
                                                    paddingLeft: '80px'
                                                }}>
                                                    <Row>
                                                        <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive ">
                                                       Ayda Kchaou
                                                  </span>
                                                            <span className="Elegant-glass-candle">
                                                       Long sleeves & rounded hem
                                                    </span>
                                                        </h1>
                                                        <h1 className="col-lg-3 "
                                                            style={{
                                                                // backgroundColor: '#1d1d1d',
                                                            }}
                                                        >
                                                            <i style={{
                                                                marginTop: '20px',
                                                                // width: '56px',
                                                                // height: '56px',
                                                                color: this.state.colorIcon2,
                                                            }}
                                                               className={
                                                                   this.state.clicked2 ? 'fas fa-heart ' :
                                                                       this.state.hover2 ?
                                                                           "fas fa-heart" :
                                                                           "far fa-heart "

                                                               }
                                                               onClick={this.changeOnClick2}
                                                               onMouseEnter={this.hoverOn2}
                                                               onMouseLeave={this.hoverOff2}

                                                            ></i>
                                                        </h1>
                                                    </Row>
                                                </Col>

                                            </Row>


                                        </Col>


                                    </div>

                                </section>
                                {/*end third section image*/}
                            </TabPane>
                            <TabPane tabId="2">
                                {/*third section image*/}
                                <section className="ftco-section-2 pt-lg-4">
                                    <div className="container-fluid">

                                        <div className="section-2-blocks-wrapper d-flex row no-gutters">


                                            <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                               style={{
                                                   backgroundImage: 'url(\'images/bg_1.jpg\')',
                                                   backgroundSize: '630px 660px',
                                                   height: '660px'

                                               }}>
                                            </a>
                                            <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                               style={{
                                                   backgroundImage: 'url(\'images/bg_2.jpg\')',
                                                   backgroundSize: '630px 660px',
                                                   height: '660px'

                                               }}>
                                            </a>

                                        </div>
                                    </div>
                                </section>
                                <section className="ftco-section-2 pt-5 pb-lg-5" id="GIFTS">
                                    <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                        <Col className={"col-lg-12 "} style={{}}>


                                            <Row>

                                                <Col className="col-lg-6 " style={{
                                                    paddingLeft: '80px'
                                                }}>
                                                    <Row>
                                                        <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive">
                                                       Fafi el quattan
                                                  </span>
                                                            <span
                                                                className="Elegant-glass-candle">Bashayer el quattan</span>
                                                        </h1>

                                                        <h1 className="col-lg-3 "
                                                            style={{
                                                                // backgroundColor: '#1d1d1d',
                                                            }}
                                                        >
                                                            <i style={{
                                                                marginTop: '20px',
                                                                // width: '56px',
                                                                // height: '56px',
                                                                color: this.state.colorIcon,
                                                            }}
                                                               className={
                                                                   this.state.clicked ? 'fas fa-heart ' :
                                                                       this.state.hover ?
                                                                           "fas fa-heart" :
                                                                           "far fa-heart "

                                                               }
                                                               onClick={this.changeOnClick}
                                                               onMouseEnter={this.hoverOn}
                                                               onMouseLeave={this.hoverOff}

                                                            ></i>
                                                        </h1>

                                                    </Row>
                                                </Col>
                                                <Col className="col-lg-6 " style={{
                                                    paddingLeft: '80px'
                                                }}>
                                                    <Row>
                                                        <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive ">
                                                       Ayda Kchaou
                                                  </span>
                                                            <span className="Elegant-glass-candle">
                                                       Long sleeves & rounded hem
                                                    </span>
                                                        </h1>
                                                        <h1 className="col-lg-3 "
                                                            style={{
                                                                // backgroundColor: '#1d1d1d',
                                                            }}
                                                        >
                                                            <i style={{
                                                                marginTop: '20px',
                                                                // width: '56px',
                                                                // height: '56px',
                                                                color: this.state.colorIcon2,
                                                            }}
                                                               className={
                                                                   this.state.clicked2 ? 'fas fa-heart ' :
                                                                       this.state.hover2 ?
                                                                           "fas fa-heart" :
                                                                           "far fa-heart "

                                                               }
                                                               onClick={this.changeOnClick2}
                                                               onMouseEnter={this.hoverOn2}
                                                               onMouseLeave={this.hoverOff2}

                                                            ></i>
                                                        </h1>
                                                    </Row>
                                                </Col>

                                            </Row>


                                        </Col>


                                    </div>

                                </section>
                                {/*end third section image*/}
                            </TabPane>
                            <TabPane tabId="3">
                                {/*third section image*/}
                                <section className="ftco-section-2 pt-lg-4">
                                    <div className="container-fluid">
                                        <div className="section-2-blocks-wrapper d-flex row no-gutters">


                                            <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                               style={{
                                                   backgroundImage: 'url(\'images/bg_4.jpg\')',
                                                   backgroundSize: '630px 660px',
                                                   height: '660px'

                                               }}>
                                            </a>
                                            <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                               style={{
                                                   backgroundImage: 'url(\'images/bg_5.jpg\')',
                                                   backgroundSize: '630px 660px',
                                                   height: '660px'

                                               }}>
                                            </a>


                                        </div>
                                    </div>
                                </section>
                                <section className="ftco-section-2 pt-5 pb-lg-5" id="GIFTS">
                                    <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                        <Col className={"col-lg-12 "} style={{}}>


                                            <Row>

                                                <Col className="col-lg-6 " style={{
                                                    paddingLeft: '80px'
                                                }}>
                                                    <Row>
                                                        <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive">
                                                       Fafi el quattan
                                                  </span>
                                                            <span
                                                                className="Elegant-glass-candle">Bashayer el quattan</span>
                                                        </h1>

                                                        <h1 className="col-lg-3 "
                                                            style={{
                                                                // backgroundColor: '#1d1d1d',
                                                            }}
                                                        >
                                                            <i style={{
                                                                marginTop: '20px',
                                                                // width: '56px',
                                                                // height: '56px',
                                                                color: this.state.colorIcon,
                                                            }}
                                                               className={
                                                                   this.state.clicked ? 'fas fa-heart ' :
                                                                       this.state.hover ?
                                                                           "fas fa-heart" :
                                                                           "far fa-heart "

                                                               }
                                                               onClick={this.changeOnClick}
                                                               onMouseEnter={this.hoverOn}
                                                               onMouseLeave={this.hoverOff}

                                                            ></i>
                                                        </h1>

                                                    </Row>
                                                </Col>
                                                <Col className="col-lg-6 " style={{
                                                    paddingLeft: '80px'
                                                }}>
                                                    <Row>
                                                        <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive ">
                                                       Ayda Kchaou
                                                  </span>
                                                            <span className="Elegant-glass-candle">
                                                       Long sleeves & rounded hem
                                                    </span>
                                                        </h1>
                                                        <h1 className="col-lg-3 "
                                                            style={{
                                                                // backgroundColor: '#1d1d1d',
                                                            }}
                                                        >
                                                            <i style={{
                                                                marginTop: '20px',
                                                                // width: '56px',
                                                                // height: '56px',
                                                                color: this.state.colorIcon2,
                                                            }}
                                                               className={
                                                                   this.state.clicked2 ? 'fas fa-heart ' :
                                                                       this.state.hover2 ?
                                                                           "fas fa-heart" :
                                                                           "far fa-heart "

                                                               }
                                                               onClick={this.changeOnClick2}
                                                               onMouseEnter={this.hoverOn2}
                                                               onMouseLeave={this.hoverOff2}

                                                            ></i>
                                                        </h1>
                                                    </Row>
                                                </Col>

                                            </Row>


                                        </Col>


                                    </div>

                                </section>
                                {/*end third section image*/}
                            </TabPane>
                        </TabContent>

                        {/*third section image*/}
                        <section className="ftco-section-2 pt-lg-5 mt-lg-5" style={{
                            backgroundColor: '#E8E8E8', marginTop: '50px',
                        }}>
                            <div className="container-fluid" style={{
                                paddingTop: '50px'
                            }}>
                                <div className="section-2-blocks-wrapper d-flex row no-gutters">

                                    <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                       style={{
                                           backgroundImage: 'url(\'images/bg_5.jpg\')',
                                           backgroundSize: '630px 660px',
                                           height: '660px'

                                       }}>
                                    </a>
                                    <a href="/itemdetail" className="img col-md-6  ftco-animate"
                                       style={{
                                           backgroundImage: 'url(\'images/bg_3.jpg\')',
                                           backgroundSize: '630px 660px',
                                           height: '660px'

                                       }}>
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="ftco-section-2 pt-5 pb-5" style={{backgroundColor: '#E8E8E8'}}>
                            <div className="section-2-blocks-wrapper d-flex row no-gutters">
                                <Col className={"col-lg-12 "} style={{}}>
                                    <Row>

                                        <Col className="col-lg-6 " style={{
                                            paddingLeft: '80px'
                                        }}>
                                            <Row>
                                                <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive">
                                                       Fafi el quattan
                                                  </span>
                                                    <span className="Elegant-glass-candle">Bashayer el quattan</span>
                                                </h1>

                                                <h1 className="col-lg-3 "
                                                    style={{
                                                        // backgroundColor: '#1d1d1d',
                                                    }}
                                                >
                                                    <i style={{
                                                        marginTop: '20px',
                                                        // width: '56px',
                                                        // height: '56px',
                                                        color: this.state.colorIcon,
                                                    }}
                                                       className={
                                                           this.state.clicked ? 'fas fa-heart ' :
                                                               this.state.hover ?
                                                                   "fas fa-heart" :
                                                                   "far fa-heart "

                                                       }
                                                       onClick={this.changeOnClick}
                                                       onMouseEnter={this.hoverOn}
                                                       onMouseLeave={this.hoverOff}

                                                    ></i>
                                                </h1>

                                            </Row>
                                        </Col>
                                        <Col className="col-lg-6 " style={{
                                            paddingLeft: '80px'
                                        }}>
                                            <Row>
                                                <h1 className="col-lg-9 d-flex flex-column ">
                                                    <span className="Tela-Votive ">
                                                       Ayda Kchaou
                                                  </span>
                                                    <span className="Elegant-glass-candle">
                                                       Long sleeves & rounded hem
                                                    </span>
                                                </h1>
                                                <h1 className="col-lg-3 "
                                                    style={{
                                                        // backgroundColor: '#1d1d1d',
                                                    }}
                                                >
                                                    <i style={{
                                                        marginTop: '20px',
                                                        // width: '56px',
                                                        // height: '56px',
                                                        color: this.state.colorIcon2,
                                                    }}
                                                       className={
                                                           this.state.clicked2 ? 'fas fa-heart ' :
                                                               this.state.hover2 ?
                                                                   "fas fa-heart" :
                                                                   "far fa-heart "

                                                       }
                                                       onClick={this.changeOnClick2}
                                                       onMouseEnter={this.hoverOn2}
                                                       onMouseLeave={this.hoverOff2}

                                                    ></i>
                                                </h1>
                                            </Row>
                                        </Col>

                                    </Row>

                                </Col>


                            </div>

                        </section>
                        {/*end third section image*/}

                        {/*section talk to us*/}
                        <section className="ftco-section-2  sectiontalk">
                            <div className="container-fluid">
                                <div className="row d-flex no-gutters">
                                    <div className="container ">
                                        <Row className="pb-5">
                                            <Col className="col-lg-5"></Col>
                                            <Col className="col-lg-6 ">
                                                <h6 className="hey">
                                                    HEY
                                                </h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-lg-2"></Col>
                                            <Col className="col-lg-7 talktoUS">
                                                <h1 className="Talk-to-me">
                                                    <span>Talk to US</span>
                                                </h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-lg-1"></Col>
                                            <Col className="col-lg-11 ">
                                                <h1 className="col-lg-12 ">
                                                    <span className="if-you-have-some">if you have some Art to</span>
                                                </h1>
                                            </Col>
                                        </Row>
                                        <Row style={{
                                            marginLeft: '40px'
                                        }}>
                                            <Col className="col-lg-2"></Col>
                                            <Col className="col-lg-9  supports">
                                                <Row className="">
                                                    <h1 className="col-lg-2 pt-lg-3  ">
                                                        <a href="#"><span className="Any">ANY</span></a>
                                                        <hr className=" row RectangleMore"/>
                                                    </h1>
                                                    <h1 className="col-lg-10">
                                                        <span className="collaborations ">Sell on our shop </span>
                                                    </h1>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </section>

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

                {/*<button>Open modal</button>*/}

                <Modal open={open} onClose={this.onCloseModal} little>
                    <DetailItem/>
                </Modal>

            </React.Fragment>
        )
            ;
    }
}

export default Show;
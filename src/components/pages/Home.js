import React, {Component, useState} from 'react';
import Nav from '../layouts/Nav';
import {Col, Row} from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Expand from 'react-expand-animated';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped4: false,
            isFlipped: false,
            showText: false,
            showDay1: true,
            colorWhite: 'transparent',
            hideImage: 'url(\'images/bg_5.jpg\')',
        }
        this.handleClickDay4 = this.handleClickDay4.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    state = { open: false };

    toggle = () => {
        this.setState(prevState => ({ open: !prevState.open }));
    };

    handleClickDay4(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped4: !prevState.isFlipped4 }));
    }



    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    operationDayOne() {
        const varImage = this.state.hideImage === 'none' ? 'url(\'images/bg_5.jpg\')' : this.state.hideImage === 'url(\'images/bg_5.jpg\')' ? 'none' : null;
        const colorImage = this.state.colorWhite === 'transparent' ? 'white' : this.state.colorWhite === 'white' ? 'transparent' : null;

        const varshowText = this.state.showText === true ? false : this.state.showText === false ? true : null;
        const varshowDay1 = this.state.showDay1 === false ? true : this.state.showDay1 === true ? false : null;
        console.log(colorImage)


        this.setState(prevState => ({
            hideImage: varImage,
            colorWhite: colorImage,
            showText: varshowText,
            showDay1: varshowDay1,
        }));

        console.log(colorImage)

    }

    render() {

        return (
            <React.Fragment>
                <div className="page">
                    <Nav/>

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
                            <div className="slider-item Trac-170 imgBACKHome" >
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
                                                <Col className="col-lg-6" style={{marginTop: '130px'}}>
                                                    <Row>
                                                        <Col className="col-md-3"
                                                             style={{
                                                                 textAlign: 'right',
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

                                                            <a className="colorlib-logo col-lg-12" href="#"
                                                               style={{color: 'white'}}>

                                                                <h6 className="check-new-look-books" style={{}}>
                                                                 <span style={{

                                                                     // fontSize: '12px',
                                                                     // letterSpacing: '3px'
                                                                 }}>CHECK</span>
                                                                    <br/>
                                                                    <span style={{
                                                                        // marginTop: '-2px',
                                                                        // fontSize: '12px',
                                                                        // letterSpacing: '3px'
                                                                    }}>2020</span><br/>
                                                                    <span style={{
                                                                        // marginTop: '-2px',
                                                                        // fontSize: '12px',
                                                                        // letterSpacing: '3px',

                                                                    }}>
                                                                PROGRAM</span>
                                                                </h6>
                                                            </a>

                                                        </Col>
                                                    </Row>
                                                </Col>
                                                {/*end row left prog*/}

                                                {/*row right date*/}
                                                <Col className="col-lg-6" style={{marginTop: '110px'}}>

                                                    <h6 className={"col-lg-12 meet-the-influencer"} style={{
                                                        marginLeft: '37px',
                                                        marginTop: '50px',

                                                    }}>
                                                        <span
                                                            className="text-style-1">MARCH  26 - 27 - 28 - 29  2020</span><br/>

                                                        <span className="text-style-2">SIDI BOU SAID</span>
                                                    </h6>
                                                </Col>
                                                {/*end row right date*/}

                                            </Row>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 ml-lg-5" style={{paddingLeft: '50px', height: '580px'}}>
                                    <Row>
                                        <div className="col-md-12  d-flex flex-row justify-content-center"
                                             style={{

                                                 marginTop: '230px',
                                                 marginLeft: '27px'

                                             }}>

                                            <Row className="col-lg-11 ">
                                                <Col className="col-lg-11">
                                                    <Row>
                                                       <span style={{
                                                           fontSize: '25px',
                                                           color: '#fff',
                                                           lineHeight: '1.2',
                                                           fontWeight: '400',
                                                           textAlign: 'right',
                                                           letterSpacing: '1px',
                                                           display: 'block',
                                                           position: 'relative',
                                                           marginTop: '58px',
                                                           marginRight: '-17px'
                                                       }}>&#10140;</span>
                                                        <h1 className="col-lg-12"
                                                            style={{
                                                                // textTransform: 'capitalize',
                                                                // color: '#fff',
                                                                // lineHeight: '1.2',
                                                                // fontWeight: '400',
                                                                // letterSpacing: '5px',
                                                                // display: 'block',
                                                                // position: 'relative',
                                                                // fontSize: '65px',
                                                                marginTop: '-71px',
                                                                paddingLeft: '10px'

                                                            }}
                                                        >
                                                                    <span
                                                                        className={"col-lg-12 Sarah-Cornish-presents"}>
                                                                        Un Festival Pas<br/>
                                                                    </span>
                                                            <span className={"col-lg-12 Sarah-Cornish-presents"}>
                                                                          Comme Les Autres
                                                                    </span>
                                                        </h1>
                                                    </Row>
                                                </Col>


                                                <Col className={"col-lg-1 pl-lg-5 pt-lg-5 divlistIconsHome"} style={{}}>

                                                    <Row className={"listIconsHome"}>

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

                                                    </Row>


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


                        {/*section talk to us*/}
                        <section className="ftco-section-2  sectiontalkHome">
                            <div className="container-fluid">
                                <div className="row d-flex no-gutters">
                                    <div className="container ">
                                        <Row className="pb-5">
                                            <Col className="col-lg-5"></Col>
                                            <Col className="col-lg-6 ">
                                                <h6 className="Meet-me">
                                                    JOIN US
                                                </h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-lg-1"></Col>
                                            <Col className="col-lg-11 talktoUS">
                                                <h1 className="col-lg-12 Hey-Im-Molley-">
                                                    Hey, We're FAM —
                                                </h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-lg-1"></Col>
                                            <Col className="col-lg-11 ">
                                                <h1 className="col-lg-12 ">
                                                    <span className="a-fashion-designer-a-home"> join us! to celebrate art</span>
                                                </h1>
                                            </Col>
                                        </Row>
                                        <Row style={{
                                            marginLeft: '40px'
                                        }}>
                                            <Col className="col-lg-1"></Col>
                                            <Col className="col-lg-11  supports">
                                                <Row className="">
                                                    <h1 className="col-lg-2 pt-lg-3   ">
                                                        <a href="#"><span className="More-home">MORE</span></a>
                                                        <hr className=" row RectangleMore"/>

                                                    </h1>
                                                    <h1 className="col-lg-10 ">
                                                        <span className="about-me-home ">, Diversity And Love!  </span>
                                                    </h1>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/*end section talk to us*/}


                        {/*section menu*/}
                        <section className="ftco-section-2  sectionLinksHome">
                            <div className="container-fluid">
                                <div className="row d-flex no-gutters">


                                    <div className=" container-fluid" style={{marginTop: '100px', marginLeft: '64px'}}>
                                        <Row>

                                            <h1 className="col-lg-12 More-homeDepartement ">
                                                Departments
                                            </h1>
                                            <h1 className="col-lg-12 pl-lg-4">
                                                <hr className=" row RectangleHome"/>
                                            </h1>
                                            <h1 className="col-lg-12 Just-a-bit-of-what-home">
                                                JUST A BIT<br/>
                                                OF WHAT WE DO
                                            </h1>

                                        </Row>


                                            <Row className="col-lg-12 pl-lg-4 RowMenu" style={{}}>
                                                <Col  className=" ftco-home1 col-lg-2  img">
                                                        <img
                                                            src={require('./assets/img/homefirst2x.png')}
                                                            srcSet={require('./assets/img/homefirst1x.png')}
                                                            className="Abdelgader-Badr4_Libya_2018" alt="abdelkader"/>
                                                </Col>
                                                <Col className={"col-lg-6 pl-lg-6"}
                                                     style={{textAlign: 'center'}}>

                                                    <ul style={{
                                                        listStyleType: 'none'
                                                    }}>
                                                        <li><a href="/"><span
                                                            className="CollectionsHome"
                                                        >ART</span></a>
                                                        </li>
                                                        <li><a href="/"><span
                                                            className="CollaborationsHome"
                                                        >MUSIC</span></a>
                                                        </li>
                                                        <li><a href="/"><span
                                                            className="VideosHome"
                                                        >DANCE</span></a>
                                                        </li>
                                                        <li><a href="/show"><span
                                                            className="ArtworksFashionHome"
                                                        >FASHION</span></a></li>
                                                        <li className={"active"}><a href="/gallery"><span
                                                            className="ArtworksVisualHome"
                                                        >VISUAL ARTS</span></a>
                                                        </li>
                                                        <li><a href="/supportUS"><span
                                                            className="ArtworksVisualHome"
                                                        >SPECTACLES</span></a></li>
                                                        <li><a href="/aboutUS"><span
                                                            className="ArtworksWorkHome"
                                                        >WORKSHOP & TALKS</span></a></li>

                                                    </ul>

                                                </Col>
                                                <Col  className=" ftco-home2 col-lg-3   img">
                                                    <img
                                                        src={require('./assets/img/homesec2x.png')}
                                                        srcSet={require('./assets/img/homesec1x.png')}
                                                        className="Abdelgader-Badr4_Libya_2018" alt="abdelkader"/>
                                                </Col>
                                            </Row>
                                    </div>
                                </div>


                            </div>
                        </section>
                        {/*end section menu*/}
                        {/*image saghrouna loula louta a gauche*/}
                        {/*<section className=" ftco-home1 ftco-animate fadeInUp ftco-animated" style={{}}>*/}
                        {/*    <div className="col-lg-12">*/}
                        {/*        <Row>*/}
                        
                        {/*            <div className="col-lg-2 pl-lg-3 py-3 img">*/}
                        {/*                <img*/}
                        {/*                    src={require('./assets/img/Abdelgader Badr4_Libya_2018.png')}*/}
                        {/*                    srcSet="./assets/img/Abdelgader Badr4_Libya_2018@2x.png,*/}
                        {/*                            ./assets/img/Abdelgader Badr4_Libya_2018@3x.png"*/}
                        {/*                    className="Abdelgader-Badr4_Libya_2018" alt="abdelkader"/>*/}
                        {/*            </div>*/}
                        {/*            <div className="col-lg-3 ">*/}
                        {/*            </div>*/}
                        
                        
                        {/*        </Row>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                        {/* end image saghrouna loula louta a gauche*/}
                        {/*image saghrouna loula louta a droite*/}
                        {/*<section className=" ftco-home2 ftco-animate fadeInUp ftco-animated" style={{}}>*/}
                        {/*    <div className="col-lg-12">*/}
                        {/*        <Row className="d-flex flex-row-reverse">*/}
                        
                        {/*            <div className="col-lg-2 pl-lg-3 py-3 img">*/}
                        {/*                <img*/}
                        {/*                    src={require('./assets/img/Abdelgader Badr4_Libya_2018.png')}*/}
                        {/*                    srcSet="./assets/img/Abdelgader Badr4_Libya_2018@2x.png,*/}
                        {/*                            ./assets/img/Abdelgader Badr4_Libya_2018@3x.png"*/}
                        {/*                    className="Abdelgader-Badr4_Libya_2018" alt="abdelkader"/>*/}
                        {/*            </div>*/}
                        
                        
                        {/*        </Row>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                        {/* end image saghrouna loula louta a droite*/}

                        {/*section youtube video*/}
                        <section className="ftco-section-2 " style={{marginTop: '0px'}}>
                            <div className=" responsive">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/X4t0JxiBeO0"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                <div className="col-lg-12 " style={{paddingTop: '250px'}}>
                                    <Row>
                                        <Col className="col-lg-1"></Col>
                                        <Col className="col-lg-7 ">
                                            <h1
                                                className=" col-lg-12 my-products">
                                                the location</h1>
                                            <h1 className="col-lg-6 Shop-by-Categories">
                                                sidi bou
                                                said
                                            </h1>
                                        </Col>
                                    </Row>
                                </div>


                            </div>
                        </section>

                        {/*end section youtube video*/}
                        {/*section agenda*/}
                        <section className="ftco-section-2 sectionAgenda">
                            <div
                                className="container  d-flex flex-column justify-content-center div-agenda"
                                style={{}}>
                                <Row className={" col-lg-12 pl-lg-4"} style={{}}>
                                    <Col className={"col-lg-1"}>
                                    </Col>
                                    <Col className="col-lg-11 pl-lg-5 text-center">
                                        <h1 className="col-lg-12 Hey-Im-Molley-Home">
                                            AGENDA—
                                        </h1>
                                    </Col>
                                </Row>
                                <Row className={" col-lg-12 pl-lg-4"}>

                                    <Col className="col-lg-12 ">
                                        <h1 className="a-fashion-designer-agenda">
                                            The 4 Artistic Days
                                        </h1>
                                    </Col>
                                </Row>
                            </div>
                            <Row className=" col-lg-12 d-flex flex-row justify-content-between"
                            style={{
                                margin:'0px 0px 0px 0px',

                            }}
                            >

                                <Flippy
                                    flipOnHover={false} // default false
                                    flipOnClick={true} // default false
                                    flipDirection="horizontal" // horizontal or vertical
                                    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                    /// these are optional style, it is not necessary
                                    style={{
                                        height:'470px',

                                        marginBottom:'20px'
                                    }}
                                >
                                    <FrontSide
                                        onClick={this.toggle}
                                        // onClick={this.handleClickDay4}
                                        className="img  d-flex flex-column "
                                        style={{
                                            backgroundImage: 'url(\'images/Composant 61 – 1.png\') ',
                                            backgroundSize: '100% 100%',
                                            // boxShadow: '0 3px 6px 0 red',
                                            // backgroundPosition: 'center center',

                                        }}>
                                        <Col className={"col-lg-4"}>
                                        </Col>
                                        <Col className={"col-lg-6 pl-lg-3 pt-lg-4  img  d-flex flex-column "}>
                                        
                                            <h4 className="Day-4 ml-4">
                                                {/*Day 1*/}
                                            </h4>
                                            <h5 className="-March-2020">
                                                {/*29 March 2020*/}
                                            </h5>
                                        
                                        </Col>
                                    </FrontSide>
                                    <BackSide
                                        // onClick={this.handleClickDay4}
                                        className="Expanding  pr-1 pl-1   d-flex flex-column "
                                        style={{
                                            backgroundColor:'white'
                                        }}>

                                     <Row className="" style={{ width: '800px'}}>
                                         <Col className={" pt-lg-3 ml-lg-5   d-flex flex-column"}>

                                             <h4 className=" row pb-lg-4" style={{color:'black'}}>
                                                 Samedi 28 Mars 2020
                                             </h4>
                                             <p className=" " style={{color:'black'}}>
                                                 <strong>10h : </strong> Pause cafe cafe feriel fadhloun<br/>
                                                 <strong>10h : </strong> Pause cafe<br/>
                                                 <strong>10h : </strong> Pause cafe<br/>
                                                 <strong>10h : </strong> Pause cafe<br/>
                                             </p>
                                             <p className=" " style={{color:'black'}}>
                                                 <strong>10h : </strong> Pause cafe cafe feriel fadhloun<br/>
                                                 <strong>10h : </strong> Pause cafe<br/>
                                                 <strong>10h : </strong> Pause cafe<br/>
                                                 <strong>10h : </strong> Pause cafe<br/>
                                             </p>

                                         </Col>
                                     </Row>
                                    </BackSide>
                                </Flippy>
                                {/*<Flippy*/}
                                {/*    className=" col-lg-3 "*/}
                                {/*    flipOnHover={false} // default false*/}
                                {/*    flipOnClick={true} // default false*/}
                                {/*    flipDirection="horizontal" // horizontal or vertical*/}
                                {/*    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()*/}
                                {/*    /// these are optional style, it is not necessary*/}
                                {/*    style={{*/}
                                {/*        height:'470px',*/}
                                {/*        marginBottom:'20px'*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    <FrontSide*/}
                                {/*        // onClick={this.handleClickDay4}*/}
                                {/*        className=" img  d-flex flex-column "*/}
                                {/*        style={{*/}
                                {/*            backgroundImage: 'url(\'images/bg_1.jpg\') ',*/}
                                {/*            // backgroundSize: '100% 443px',*/}
                                {/*            boxShadow: '0 3px 6px 0 red',*/}
                                {/*            backgroundPosition: 'center center',*/}
                                {/*            backgroundSize: 'cover'*/}

                                {/*        }}>*/}
                                {/*        <Col className={"col-lg-4"}>*/}
                                {/*        </Col>*/}
                                {/*        <Col className={"col-lg-6 pl-lg-3 pt-lg-4  img  d-flex flex-column "}>*/}

                                {/*            <h4 className="Day-4 ml-4">*/}
                                {/*                Day 1*/}
                                {/*            </h4>*/}
                                {/*            <h5 className="-March-2020">*/}
                                {/*                29 March 2020*/}
                                {/*            </h5>*/}

                                {/*        </Col>*/}
                                {/*    </FrontSide>*/}
                                {/*    <BackSide*/}
                                {/*        // onClick={this.handleClickDay4}*/}
                                {/*        className=" pr-1 pl-1 img  d-flex flex-column Rectangle-13"*/}
                                {/*        style={{*/}
                                {/*            width:'320px',*/}
                                {/*            backgroundColor:'white'*/}
                                {/*        }}>*/}

                                {/*        <Col className={"col-lg-12 pt-lg-3 ml-lg-3 d-flex flex-column"}>*/}

                                {/*            <h4 className=" row " style={{color:'black'}}>*/}
                                {/*                Samedi 28 Mars 2020*/}
                                {/*            </h4>*/}
                                {/*            <p className=" " style={{color:'black'}}>*/}
                                {/*                <strong>10h : </strong> Pause cafe cafe feriel fadhloun<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*            </p>*/}
                                {/*            <p className=" " style={{color:'black'}}>*/}
                                {/*                <strong>10h : </strong> Pause cafe cafe feriel fadhloun<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*            </p>*/}

                                {/*        </Col>*/}
                                {/*    </BackSide>*/}
                                {/*</Flippy>*/}
                                {/*<Flippy*/}
                                {/*    className=" col-lg-3 "*/}
                                {/*    flipOnHover={false} // default false*/}
                                {/*    flipOnClick={true} // default false*/}
                                {/*    flipDirection="horizontal" // horizontal or vertical*/}
                                {/*    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()*/}
                                {/*    /// these are optional style, it is not necessary*/}
                                {/*    style={{*/}
                                {/*        height:'470px',*/}
                                {/*        marginBottom:'20px'*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    <FrontSide*/}
                                {/*        // onClick={this.handleClickDay4}*/}
                                {/*        className=" img  d-flex flex-column "*/}
                                {/*        style={{*/}
                                {/*            backgroundImage: 'url(\'images/bg_1.jpg\') ',*/}
                                {/*            // backgroundSize: '100% 443px',*/}
                                {/*            boxShadow: '0 3px 6px 0 red',*/}
                                {/*            backgroundPosition: 'center center',*/}
                                {/*            backgroundSize: 'cover'*/}

                                {/*        }}>*/}
                                {/*        <Col className={"col-lg-4"}>*/}
                                {/*        </Col>*/}
                                {/*        <Col className={"col-lg-6 pl-lg-3 pt-lg-4  img  d-flex flex-column "}>*/}

                                {/*            <h4 className="Day-4 ml-4">*/}
                                {/*                Day 1*/}
                                {/*            </h4>*/}
                                {/*            <h5 className="-March-2020">*/}
                                {/*                29 March 2020*/}
                                {/*            </h5>*/}

                                {/*        </Col>*/}
                                {/*    </FrontSide>*/}
                                {/*    <BackSide*/}
                                {/*        // onClick={this.handleClickDay4}*/}
                                {/*        className=" pr-1 pl-1 img  d-flex flex-column Rectangle-13"*/}
                                {/*        style={{*/}
                                {/*            width:'320px',*/}
                                {/*            backgroundColor:'white'*/}
                                {/*        }}>*/}

                                {/*        <Col className={"col-lg-12 pt-lg-3 ml-lg-3 d-flex flex-column"}>*/}

                                {/*            <h4 className=" row " style={{color:'black'}}>*/}
                                {/*                Samedi 28 Mars 2020*/}
                                {/*            </h4>*/}
                                {/*            <p className=" " style={{color:'black'}}>*/}
                                {/*                <strong>10h : </strong> Pause cafe cafe feriel fadhloun<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*            </p>*/}
                                {/*            <p className=" " style={{color:'black'}}>*/}
                                {/*                <strong>10h : </strong> Pause cafe cafe feriel fadhloun<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*            </p>*/}

                                {/*        </Col>*/}
                                {/*    </BackSide>*/}
                                {/*</Flippy>*/}
                                {/*<Flippy*/}
                                {/*    className=" col-lg-3 pb-lg-3"*/}
                                {/*    flipOnHover={false} // default false*/}
                                {/*    flipOnClick={true} // default false*/}
                                {/*    flipDirection="horizontal" // horizontal or vertical*/}
                                {/*    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()*/}
                                {/*    /// these are optional style, it is not necessary*/}
                                {/*    style={{*/}
                                {/*        height:'470px',*/}
                                {/*        marginBottom:'20px'*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    <FrontSide*/}
                                {/*        // onClick={this.handleClickDay4}*/}
                                {/*        className=" img  d-flex flex-column "*/}
                                {/*        style={{*/}
                                {/*            backgroundImage: 'url(\'images/bg_1.jpg\') ',*/}
                                {/*            // backgroundSize: '100% 443px',*/}
                                {/*            boxShadow: '0 3px 6px 0 red',*/}
                                {/*            backgroundPosition: 'center center',*/}
                                {/*            backgroundSize: 'cover'*/}

                                {/*        }}>*/}
                                {/*        <Col className={"col-lg-4"}>*/}
                                {/*        </Col>*/}
                                {/*        <Col className={"col-lg-6 pl-lg-3 pt-lg-4  img  d-flex flex-column "}>*/}

                                {/*            <h4 className="Day-4 ml-4">*/}
                                {/*                Day 1*/}
                                {/*            </h4>*/}
                                {/*            <h5 className="-March-2020">*/}
                                {/*                29 March 2020*/}
                                {/*            </h5>*/}

                                {/*        </Col>*/}
                                {/*    </FrontSide>*/}
                                {/*    <BackSide*/}
                                {/*        // onClick={this.handleClickDay4}*/}
                                {/*        className=" pr-1 pl-1 img  d-flex flex-column Rectangle-13"*/}
                                {/*        style={{*/}
                                {/*            width:'320px',*/}
                                {/*            backgroundColor:'white'*/}
                                {/*        }}>*/}

                                {/*        <Col className={"col-lg-12 pt-lg-3 ml-lg-3 d-flex flex-column"}>*/}

                                {/*            <h4 className=" row " style={{color:'black'}}>*/}
                                {/*                Samedi 28 Mars 2020*/}
                                {/*            </h4>*/}
                                {/*            <p className=" " style={{color:'black'}}>*/}
                                {/*                <strong>10h : </strong> Pause cafe cafe feriel fadhloun<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*            </p>*/}
                                {/*            <p className=" " style={{color:'black'}}>*/}
                                {/*                <strong>10h : </strong> Pause cafe cafe feriel fadhloun<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*                <strong>10h : </strong> Pause cafe<br/>*/}
                                {/*            </p>*/}

                                {/*        </Col>*/}
                                {/*    </BackSide>*/}
                                {/*</Flippy>*/}
                            </Row>
                        </section>
                        {/*end section agenda*/}


                        {/*location sidi bou*/}

                        <section className="ftco-section-2  " style={{
                            zIndex: '5',
                            position: 'absolute', backgroundColor: 'transparent',
                            marginTop: '130px'
                        }}>
                            <div className="container" style={{}}>
                                <div className="row d-flex no-gutters">

                                    <Col className="col-lg-10 pl-lg-4">
                                        <h1
                                            className=" col-lg-12 my-productsHome">
                                            the location</h1>
                                        <h1 className="col-lg-12 Shop-by-CategoriesHome">
                                            sidi bou
                                            said
                                        </h1>
                                    </Col>

                                </div>
                            </div>
                        </section>

                        <section className="ftco-section-2 pt-lg-4 sectionLocationHomeSidiBou" style={{}}>
                            <div className="container-fluid" style={{
                                paddingTop: '70px'
                            }}>
                                <div className="section-2-blocks-wrapper d-flex row no-gutters ml-lg-4">


                                    <div className="img col-lg-6   ftco-animate"
                                         style={{
                                             backgroundImage: 'url(\'images/SidiBouLocation.png\')',
                                             backgroundSize: '100% 100%',
                                             height: '982px',
                                             boxShadow: ' 0 3px 6px 0 rgba(0, 0, 0, 0.16)'

                                         }}>
                                    </div>

                                    <div className="text col-lg-6 ">
                                        <p className="col-lg-12 Mais-il-existe-deux-faons pb-lg-1 pl-lg-1">
                                            Mais il existe deux façons de conter Sidi Bou Saïd : celle un peu cliché
                                            mais non moins vraie que connaisse beaucoup de monde : un village
                                            pittoresque suspendu sur une colline dans les faubourgs de Carthage et face
                                            à la mer. Des maisons blanches et bleus enchevêtrées les unes dans les
                                            autres, des jasmins et des bougainvilliers omniprésents, des vues à tous les
                                            coins de ruelles qui se jettent tantôt dans la mer où se laisse glisser vers
                                            Tunis. Des cafés suspendus dans l’espace et le minaret qui vient couronner
                                            un village construit en cône. On peut y rajouter la lumière que filtrent les
                                            ruelles, qui caressent les murs peint à la chaux et vient atterrir sur des
                                            nattes qu’épousent de vieilles marches de café ou de mosquées ; Tout cela
                                            est très vrai, et sans doute en deçà de la beauté des lieux que nulles
                                            paroles ne peut réellement transmettre.
                                            Et puis il y a l’autre Sidi Bou Saïd, cet autre village que seuls certains
                                            ressentent : c’est le village des écorchées, des rêveurs en tous genres, des
                                            artistes, des amoureux, des âmes sensibles trainant avec eux leurs questions
                                            laissées sans réponses. Ceux-là ne visitent pas Sidi Bou Saïd, ils le
                                            vivent. Ils ne s’y promènent pas, ils s’y abandonnent. Ils ne le voient pas,
                                            ils le sentent. Le temps ne s’y écoule plus, il y est comme suspendu. Ils
                                            n’y admirent même plus une succession de maisons, de cafés ou de mosquées
                                            mais un seul temple où se mêlent beauté et spiritualité. Dans ce lieu
                                            suspendu, au-delà même de la patine de l’Histoire et de l’Art qui le
                                            recouvre, c’est celle de nos propres souffrances et désirs et ceux des
                                            anciens habitants sur des siècles qui s’y reflètent et nous interpellent.
                                            Dans ce village enfin, au-delà des rencontres que l’on peut y faire, c’est
                                            soi-même que l’on apprend à mieux connaitre, à mieux aimer.
                                            Cette dualité de description, chemin indispensable pour comprendre le
                                            caractère unique et entier de Sidi Bou Saïd nous permet du coup à expliquer
                                            sans plus de commentaires le pourquoi d’un Festival des Arts de la
                                            Méditerranée dans ce village. Car jamais lieu ne fut plus propice pour
                                            abriter une telle ambition : réunir des artistes du pays et de tous les
                                            coins du monde pour les inviter à s’y rencontrer et à y exprimer leurs
                                            talents.
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </section>
                        {/*end location sidi bou*/}

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

export default Home;
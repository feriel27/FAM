import React, {Component} from 'react';

import {Button, Col, Row} from "react-bootstrap";
import Modal from "react-responsive-modal";
import DetailItem from "./DetailItem";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class CartFull extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };


    render() {
        const {open} = this.state;

        return (
            <React.Fragment>
                <div className="page col-lg-12" style={{
                    backgroundColor: '#E8E8E8'


                }}>


                    <div id="colorlib-page" style={{
                        // backgroundColor:'#E8E8E8'
                    }}>
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
                                    <a className="colorlib-logo Shop-Now" href="#">
                                        <div style={{
                                            display: 'flex', justifyContent: 'center',
                                            flexDirection: 'row',
                                            marginTop: '10px',
                                        }}>
                                            <span style={{
                                                color:'#000000'
                                            }}>SHOP ART</span>

                                        </div>
                                    </a>
                                </Col>
                                <Col className="col-lg-5 "
                                     style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>

                                    <img
                                        src={require('../pages/assets/img/Groupe 34@2x.png')}
                                        srcSet="../pages/assets/img/Groupe 34.png"
                                        className={"logo-home"} alt="logoFAM"/>

                                </Col>
                                <Col className="col-lg-2" style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    flexDirection: 'row',

                                }}>
                                    <a className="colorlib-logo cart" href="#" style={{}}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            marginTop: '10px',

                                        }}>
                                            <span className="" style={{
                                                color:'#000000'
                                            }}>TICKETS</span>

                                        </div>
                                    </a>
                                </Col>
                            </div>
                        </header>
                        <section className="home-slider owl-carousel">
                            <div className="slider-itemCart Trac-171">
                                {/*div fel west*/}
                                <div className="col-lg-12" >
                                    <div className="row ">
                                        <div className="col-md-12 d-flex flex-column justify-content-lg-start"
                                             style={{
                                                 // display: 'flex',
                                                 // justifyContent: 'f',
                                                 // flexDirection: 'row', height: '110px'
                                             }}>

                                            <Row className="col-lg-12">
                                                <Col className="col-lg-6">
                                                    <Row>
                                                        <Col className="col-md-12 your-order">
                                                            Your order
                                                        </Col>

                                                    </Row>
                                                </Col>

                                            </Row>


                                        </div>
                                    </div>
                                </div>

                                {/*end div fel west*/}


                            </div>
                        </section>

                        <section className="ftco-section-2 ">
                            <div className="container-fluid">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters mt-lg-4">
                                    <div className="img col-lg-3 margin-detail "
                                         style={{
                                             backgroundImage: 'url(\'images/ImageCart2x.png\')',
                                             backgroundSize: '100% 100%',
                                             height: '364px',
                                         }}>
                                    </div>


                                    <div className="col-lg-8 d-flex flex-column justify-content-lg-start">
                                        <hr className="new1 col-lg-5"/>
                                        <Row>
                                            <Col className="col-lg-6 pl-lg-4">
                                                <h1 className="col-lg-12 text-left-item">
                                                    Camera
                                                </h1>
                                                <h6 className="col-lg-12 pl-lg-3 text-left-sous-item">
                                                    ECO LEATHER
                                                </h6>
                                            </Col>
                                            <Col className="col-lg-6 pt-lg-2 ">
                                                <h6 className="col-lg-12 text-left-item-money " style={{


                                                }}>
                                                    $560.000
                                                </h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <h1 className="col-lg-12 textMakloub"
                                                style={{


                                                    // float:'left'
                                                }}>
                                                NEW
                                                <br/>

                                                COLLECTION

                                            </h1>
                                        </Row>
                                        <Row>
                                            <Col className="col-lg-2 pl-lg-4">
                                                <a href="#" className="col-lg-12 link-piece">
                                                    1 PIECE


                                                </a>
                                            </Col>
                                            <Col className="col-lg-8 ">
                                                <a href="#" className="col-lg-12 link-piece" style={{
                                                    textAlign: 'left',

                                                }}>
                                                    EDIT
                                                </a>
                                            </Col>
                                            <Col className="col-lg-2  ">
                                                <a href="#" className="col-lg-12 link-piece" style={{
                                                    textAlign: 'right',
                                                    marginLeft: '24px'

                                                }}>
                                                    REMOVE
                                                </a>
                                            </Col>
                                        </Row>
                                        <hr className="new1 col-lg-5"/>

                                    </div>

                                </div>
                            </div>
                        </section>


                        <section className="ftco-section-2 "
                                 style={{
                                     // backgroundColor: '#707070'

                                 }}>
                            <div className="container-fluid">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters mt-lg-4">
                                    <div className="img col-lg-3 margin-detail "
                                         style={{
                                             backgroundImage: 'url(\'images/ImageCartSec1x.png\')',
                                             backgroundSize: '100% 100%',
                                             height: '364px',
                                         }}>
                                    </div>


                                    <div className="col-lg-8 d-flex flex-column justify-content-lg-start">
                                        <hr className="new1 col-lg-5"/>
                                        <Row>
                                            <Col className="col-lg-6 pl-lg-4">
                                                <h1 className="col-lg-12 text-left-item">
                                                    painting X45
                                                </h1>
                                                <h6 className="col-lg-12 pl-lg-3 text-left-sous-item">
                                                    glass
                                                </h6>
                                            </Col>
                                            <Col className="col-lg-6 pt-lg-2 ">
                                                <h6 className="col-lg-12 text-left-item-money " style={{


                                                }}>
                                                    $40.000
                                                </h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <h1 className="col-lg-12 textMakloub"
                                                style={{


                                                    // float:'left'
                                                }}>
                                                holiday
                                                <br/>

                                                special

                                            </h1>
                                        </Row>
                                        <Row>
                                            <Col className="col-lg-2 pl-lg-4">
                                                <a href="#" className="col-lg-12 link-piece">
                                                    1 PIECE


                                                </a>
                                            </Col>
                                            <Col className="col-lg-8 ">
                                                <a href="#" className="col-lg-12 link-piece" style={{
                                                    textAlign: 'left',

                                                }}>
                                                    EDIT
                                                </a>
                                            </Col>
                                            <Col className="col-lg-2  ">
                                                <a href="#" className="col-lg-12 link-piece" style={{
                                                    textAlign: 'right',
                                                    marginLeft: '24px'

                                                }}>
                                                    REMOVE
                                                </a>
                                            </Col>
                                        </Row>
                                        <hr className="new1 col-lg-5"/>

                                    </div>

                                </div>
                            </div>
                        </section>

                        <section className="ftco-section-2 mt-lg-3" style={{
                            height: '250px',
                            // backgroundColor: '#707070'
                        }}>
                            <div className="container-fluid">
                                <div className="section-2-blocks-wrapper d-flex row no-gutters ">


                                    <div className="col-lg-12  d-flex flex-row-reverse pr-lg-3 pl-lg-4">

                                        <Col className="col-lg-3 d-flex flex-column justify-content-end "
                                             style={{
                                                 textAlign: 'right'
                                             }}
                                        >
                                            <Row>

                                                <h6 className="col-lg-4 price-shipping" style={{
                                                    textAlign: 'left'
                                                }}>
                                                    SHIPPING
                                                </h6>
                                                <h6 className="col-lg-8 price-shipping-money">
                                                    $40000
                                                </h6>

                                            </Row>
                                            <Row>

                                                <h6 className="col-lg-4 price-total" style={{
                                                    textAlign: 'left'
                                                }}>
                                                    TOTAL
                                                </h6>
                                                <h6 className="col-lg-8 price-total-money">
                                                    $400000
                                                </h6>

                                            </Row>
                                            <Row className="pl-lg-3 pr-lg-3 pt-lg-3">

                                                <button type="button" className="col-lg-12 btn-check ">
                                                    <h6 className="col-lg-12 name-btn">
                                                        CHECK OUT
                                                    </h6>
                                                </button>

                                            </Row>
                                        </Col>


                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default CartFull;
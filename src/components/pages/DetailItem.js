import React, {Component} from 'react';

import {Button, Col, Row} from "react-bootstrap";
import CartFull from "./CartFull";

import Modal from 'react-responsive-modal';


class DetailItem extends Component {


    state = {
        open: false,
    };


    onCloseModal = () => {
        this.setState({open: false});
    };

    onOpenModal = () => this.setState({open: true})


    render() {
        const {open, size} = this.state;







        return (
            <React.Fragment>
                <div className="page" style={{
                    backgroundColor: '#E8E8E8'


                }}>

                    <div id="colorlib-page">
                        <header>
                            <div className="colorlib-navbar-brand  colorlib-nav-toggle row "
                                 style={{
                                     display: 'flex',
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                     marginTop: '10px'
                                 }}>
                                <Col className="col-lg-5 pl-lg-5 d-flex flex-row justify-content-lg-center ">
                                {/*    <h6 className="" style={{*/}
                                {/*        fontSize: '20px',*/}
                                {/*        textAlign: 'center',*/}

                                {/*    }}>CANDLE HOLDERS</h6>*/}


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


                                        }}>
                                            <span className="cart">CART 0</span>

                                        </div>
                                    </a>
                                </Col>
                            </div>
                            <a href="/show" className="js-colorlib-nav-toggle colorlib-nav-toggle active"
                               style={{}}><i></i></a>
                        </header>
                        <section className="ftco-section-2 padTop">
                            <div className="col-lg-12 row">
                                <div className=" col-lg-6 d-flex flex-row justify-content-lg-between"
                                     style={{
                                         height:'500px'
                                     }}
                                >
                                    <Col className="col-lg-12 pt-lg-4 " style={{
                                        textAlign: 'center'
                                    }}>
                                        <h6 className="candle">
                                            candle holders
                                        </h6>
                                        <h6 className="pt-lg-5 text-camera">
                                            Camera
                                        </h6>
                                        <span className="text-glass">
                                                GLASS
                                            </span>
                                        <h6 className="pt-lg-5 text-upper">
                                            X5.F44.0D
                                        </h6>
                                        <Row className="pt-lg-5 pl-lg-2 d-flex flex-row justify-content-center">

                                            <Col className="col-lg-8 text-para" style={{
                                                // backgroundColor: 'white', height: '60px'
                                            }}>
                                                <p>
                                                    THIS ELEGANT GLASS CAMERA WILL BECOME
                                                    A PERFECT DECOR PIECE FOR YOUR HOUSE.
                                                    THEIR ERGONOMIC FORM WILL BRING
                                                    BALANCE.
                                                </p>
                                            </Col>
                                        </Row>
                                        <p className="price">
                                            $400000
                                        </p>
                                        <Row className="pt-lg-4 d-flex flex-row justify-content-center">

                                            <Col className="col-lg-5 pt-lg-3" style={{
                                                backgroundColor: 'white', height: '60px'
                                            }}>
                                                <Row className={" d-flex flex-row justify-content-between"}>
                                                    <Col className="col-lg-3" style={{
                                                        textAlign: 'center'
                                                    }}>
                                                        <i className="fas fa-minus"></i> </Col>
                                                    <Col className="col-lg-3 number-inc">
                                                        <h6>
                                                            5
                                                        </h6>
                                                    </Col>
                                                    <Col className="col-lg-3">
                                                        <i className="fas fa-plus"></i>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row className=" d-flex flex-row justify-content-center">

                                            <Col className="col-lg-5" style={{
                                                backgroundColor: 'black'
                                            }}>
                                                <button type="button" className="col-lg-12 btn-check "
                                                onClick={this.onOpenModal}
                                                >
                                                    <h6 className="col-lg-12 name-btn">
                                                        BUY NOW
                                                    </h6>
                                                </button>
                                            </Col>
                                        </Row>
                                    </Col>


                                </div>


                                <div className="img col-lg-6  ftco-animate"
                                     style={{
                                         backgroundImage: 'url(\'images/ImagePopup.png\')',
                                         backgroundSize: '100% 644px',
                                         height: '660px',
                                         // marginTop: '-112px',
                                         paddingLeft:'20px'
                                         // border:'2px solid black'
                                     }}>
                                </div>

                            </div>
                        </section>


                    </div>
                </div>




                <Modal open={open} classNames="col-lg-12" onClose={this.onCloseModal} style={{
                    backgroundColor: '#E8E8E8'


                }}>
                    <CartFull/>
                </Modal>
            </React.Fragment>
        )
    }
}

export default DetailItem;
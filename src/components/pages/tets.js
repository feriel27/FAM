import React, {Component} from 'react';
import Nav from '../layouts/Nav';
import Header from '../layouts/Header';
import {Col, Row} from "react-bootstrap";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import Expand from "react-expand-animated";
import '../../App.css';

class Gallery extends Component {

    state = { open: false };

    toggle = () => {
        this.setState(prevState => ({ open: !prevState.open }));
    };
    render() {

        return (
<React.Fragment>
    <section className="ftco-section-2 sectionAgenda">

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
            className="img   d-flex flex-column "
            style={{
                backgroundImage: 'url(\'images/bg_1.jpg\') ',
                // backgroundSize: '100% 443px',
                boxShadow: '0 3px 6px 0 red',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'

            }}>
            <Col className={"col-lg-4"}>
            </Col>
            <Col className={"col-lg-6 pl-lg-3 pt-lg-4  img  d-flex flex-column "}>

                <h4 className="Day-4 ml-4">
                    Day 1
                </h4>
                <h5 className="-March-2020">
                    29 March 2020
                </h5>

            </Col>
        </FrontSide>
        <BackSide
            data-target="#demo"
            // onClick={this.handleClickDay4}
            className=" Expanding  pr-1 pl-1   d-flex flex-column "
            style={{
                backgroundColor:'white'
            }}>

                <Row style={{ width: '800px'}}>
                    <Col className={" pt-lg-3 ml-lg-3 d-flex flex-column"}>

                        <h4 className=" row " style={{color:'black'}}>
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
        </Row>
        {/*<button>Open modal</button>*/}

        {/*<Modal open={open} onClose={this.onCloseModal} little>*/}
        {/*>*/}
        {/*    <CartFull/>*/}
        {/*</Modal>*/}
    </section>
</React.Fragment>

        )
            ;
    }
}

export default Gallery;
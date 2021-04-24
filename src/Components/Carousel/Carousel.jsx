import React, { Component } from 'react'
import { connect } from 'react-redux'

import { DataDanhSachPhim } from '../../Services/QuanLyPhim/QuanLyPhim.js'
import { DivBgBehind, DivImgFrame, DivPosition, SpanLeft, SpanRight, I, DivPositionHeader, DivRowHeader,DivRowFooter, DivDetail, DivLeftAim,DivRightAim, DivFrame } from '../../StyledComponent/Carousel/DivPosition.js'
import { Img, ImgBehind } from '../../StyledComponent/Carousel/Img.js'
import { LinkPlay } from '../../StyledComponent/Carousel/Link.js'
import { P } from '../../StyledComponent/Container/Header.js'


class Carousel extends Component {


    renderCarousel = () => {
        return this.props.danhSachNewPhim.map((movie, index) => {
            return (
                <div className="bgBehind row" style={{ position: 'relative' }}>
                    <Img src={movie.hinhAnh} className="d-block w-100" alt="lat-mat" />
                    <div className="col-md-5 carousel__left" style={{ height: 500 }}>
                        <div className="carousel__img-inner">
                            <div>
                                <Img src={movie.hinhAnh} className="d-block w-100" alt="lat-mat" />
                            </div>
                            <div className="carousel__header">
                                <span>{movie.phatHanh} </span>
                                <span><i className="fa fa-star"></i>{movie.danhGia}</span>
                            </div>
                            <div className="carousel__play">
                                <a href=""><i className="fa fa-play"></i></a>
                            </div>
                            <div className="carousel__detail">
                                <h5>{movie.tenPhim}</h5>
                                <h6>{movie.thongtincoban}</h6>
                                <p>{movie.phatHanh}</p>
                                <p>{movie.Loại}</p>
                            </div>
                            <div className="carousel__footer">
                                <a href="">Detail</a>
                                <a href="">15k view</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 carouse__right ">
                        <div className="carousel-caption d-none d-md-block text-dark">
                            <h2>{movie.tenPhim}</h2>
                            <p>{movie.moTa}.</p>
                            <button className="btn btn-danger">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        console.log(this.renderCarousel()[0])

        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <DivFrame className="bgBehind" style={{ position: 'relative' }}>
                            <DivBgBehind className="carousel__img">
                                <ImgBehind src="/Assets/img/Carousel/lat-mat-48h.png" className="d-block w-100" alt="lat-mat" />
                            </DivBgBehind>
                            <DivPosition className="carousel__content">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-4 carousel__left" >
                                            <div className="carousel__img-inner carousel-caption" style={{ position: 'relative' }}>
                                                <DivImgFrame>
                                                    <Img src="/Assets/img/Carousel/latmat_dung.jpg" className="d-block w-100 h-100" alt="lat-mat" />
                                                </DivImgFrame>
                                                <DivPositionHeader>
                                                    <div className="carousel__header ">
                                                        <DivRowHeader className="row">
                                                            <DivLeftAim className="col-md-6 p-0">
                                                                <SpanLeft bgColor="#f36522">23/04/2021</SpanLeft>
                                                            </DivLeftAim>
                                                            <div className="col-md-6 p-0 ">
                                                                <SpanRight bgColor="transparent" className=" text-right"><I className="fa fa-star"></I>2/10</SpanRight>
                                                            </div>
                                                        </DivRowHeader>
                                                    </div>
                                                    <div className="carousel__play m-5">
                                                        <LinkPlay href=""><i className="fa fa-play"></i></LinkPlay>
                                                    </div>
                                                    <DivDetail className="carousel__detail text-left">
                                                        <h3>Tên Phim</h3>
                                                        <h5>Thể loại</h5>
                                                        <P>Ngày chiếu</P>
                                                        <P>Loai</P>
                                                    </DivDetail>
                                                    <div className="carousel__footer">
                                                        <DivRowFooter className="row" >
                                                            <div className="col-md-6">
                                                                <SpanLeft as="a" href="">Detail</SpanLeft>
                                                            </div>
                                                            <DivRightAim className="col-md-6" style={{paddingLeft:'20%'}}>
                                                                <SpanRight as="a" className="text-right" href="">15k view</SpanRight>
                                                            </DivRightAim>
                                                        </DivRowFooter>
                                                    </div>
                                                </DivPositionHeader>
                                            </div>
                                        </div>
                                        <div className="col-md-8 carouse__right">
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Teen phim</h5>
                                                <p>Mo ta</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DivPosition>
                        </DivFrame>
                    </div>
                    {/* <div className="carousel-item">
                        <img src="/Assets/img/Carousel/ban-tay-diet-quy-evil-expeller.png" className="d-block w-100" alt="ban-tay-diet-quy-evil-expeller" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/Assets/img/Carousel/mortal-kombat.png" className="d-block w-100" alt="mortal-kombat" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div >
        )
    }
}


const mapStateToProps = state => {
    return {
        danhSachNewPhim: state.arrNewPhimReducer.danhSachNewPhim,
    }
}


export default connect(mapStateToProps)(Carousel)

import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { Container, ContainerFluid } from '../../StyledComponent/Container/Container'
import { ImgLarge } from '../../StyledComponent/StyledFooter/Div'
import { NavLinks, Link } from '../../StyledComponent/StyledFooter/NavLink'
// import {Spring, animated } from 'react-spring'
import OwlCarousel from 'react-owl-carousel' // lỗi tên thư viện  Using UNSAFE_componentWillReceiveProps
import '../../Assets/OwlCarousel/owl.carousel.css'
import '../../Assets/OwlCarousel/owl.theme.default.css'


export class Footer extends Component {

    

    render() {
        return (
            <ContainerFluid className=" movie__footer">
                <Container>
                    <div className="row p-5 text-center">
                        <div className="col-sm-6">
                            <h6>TIMETIME</h6>
                            <div className="row">
                                <div className="col-sm-6">
                                    <NavLinks to="/noidung/faq" ><p href="#timetime">FAQ</p></NavLinks>
                                    <NavLinks to="/brand"> <p>Brand Guidelines</p></NavLinks>
                                </div>
                                <div className="col-sm-6">
                                    <NavLinks to="/noidung/thoathuan"><p>Thỏa thuận sử dụng</p></NavLinks>
                                    <NavLinks to="/noidung/baomat"> <p>Chính sách bảo mật</p></NavLinks>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6>MOBILE APP</h6>
                                    <Link target="_blank" rel="noreferrer" href="https://apps.apple.com/"><i className="fab fa-apple"></i></Link>
                                    <Link target="_blank" rel="noreferrer" href="https://play.google.com/"><i className="fab fa-android"></i></Link>
                                </div>
                                <div className="col-sm-6">
                                    <h6>SOCIAL</h6>
                                    <Link target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook"></i></Link>
                                    <Link target="_blank" rel="noreferrer" href="https://chat.zalo.me"><i className="fab fa-twitter"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <OwlCarousel className="row owl-theme" dots={false} items={11} autoplay="true" loop="true" autoplayTimeout="2000">
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/bhd.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/123go.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/cgv.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/cinemax.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/cinestar.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/dcine.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/dongda.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/galaxy.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/lotte.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/megags.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/payoo.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/starlight.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/touch.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/agribank.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/vietcombank.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/vietinbank.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/laban.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/zalopay.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/innovinabank.png" /></a>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src="/Assets/img/icons/zion.png" alt="zion" style={{ width: 150 }} />
                        </div>
                        <div className="col-sm-8">
                            <h6>TimeTime – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN TIME</h6>
                            <p>Địa chỉ: Số 1 Đường Võ Văn Vân, Phường Tân Tạo, Quận Bình Tân, Tp. Hồ Chí Minh, Việt Nam.</p>
                            <p>Giấy chứng nhận đăng ký kinh doanh số: 012456789,</p>
                            <p>đăng ký thay đổi lần thứ 3000, năm 2021 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                            <p>Số Điện Thoại (Hotline): 1900 0000</p>
                            <p>Email: <span><a href="https://www.google.com">support@time.vn</a></span></p>
                        </div>
                        <div className="col-sm-2">
                            <a target="_blank" rel="noreferrer" href="https://www.moit.gov.vn/"><img style={{ width: 150 }} src="/Assets/img/icons/bo-cong-thuong.png" alt="bo-cong-thuong" />
                            </a>
                        </div>
                    </div>
                </Container>
                <div className="container"></div>

            </ContainerFluid>

        )
    }
}

export default Footer

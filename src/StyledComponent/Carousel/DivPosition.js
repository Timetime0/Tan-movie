import styled from 'styled-components'

export const DivPosition = styled.div`
    position: absolute;
    text-align:center;
    top: 0;
    width: 100%; 
    padding: 0 20px;
    overflow:hidden;
`

export const DivPositionHeader = styled(DivPosition)`
    top:60px;
    height: 80%;
`

export const DivBgBehind = styled.div`
    width: 100%;
    &:after{
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(242, 101, 34, 0.51) -18%, rgba(10, 21, 33, 0.9) 75%);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
`

export const DivImgFrame = styled.div`
    margin: 15px;
    margin-top: 25px;
    
`

export const SpanLeft = styled.span`
    display:block;
    background-color :  ${props => props.bgColor || '#060f19'};
    color : #fff;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding: 6px 10px;
    width: 75%;
    transition: all 0.3s;
    font-weight: bold;
    &:hover{
        background-color :#f36522;
        text-decoration:none;
        color: #fff
    }
`

export const SpanLeftAnim = styled(SpanLeft)`
    
`

export const SpanRight = styled.span`
    display:block;
    color : #fff;
    padding: 6px 10px;
    margin-right: 4px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    background-color :  ${props => props.bgColor || '#060f19'};
    transition: all 0.3s;
    font-weight: bold;
    &:hover{
        background-color : ${props => props.bgColor || '#f36522'};
        text-decoration:none;
        color : #fff;
    }

`

export const I = styled.i`
    color :  #f36522;
    padding: 0 3px;
`

export const DivRowHeader = styled.div`
    margin-right: -5px;
    margin-left: -5px;
`
export const DivRowFooter = styled.div`
    margin-right: -24px;
    margin-left: -20px;
    padding-top:50px;
`


export const DivDetail = styled.div`
    padding-left:20px;
    padding-top: 0px;
`

export const DivFrame = styled.div`
    cursor: grab;
`


export const DivLeftAim = styled.div`
  transform: translateX(-120px)

`

export const DivRightAim = styled.div`
  transform: translateX(88px)
`

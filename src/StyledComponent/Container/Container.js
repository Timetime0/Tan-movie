import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.bgPrimaryColor} ;
    width: 80%;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
    margin: auto;
    color: ${props => props.theme.bgColor} ;
`
export const ContainerFluid = styled.div`
    background-color: ${props => props.theme.bgPrimaryColor} ;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
    color: ${props => props.theme.bgColor} ;

`
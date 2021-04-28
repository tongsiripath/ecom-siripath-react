import React from 'react';
import styled from "styled-components";

const SidebarCart = ({isOpentoxxx}) => {    
    

    return (
        <SidebarCartContainer isOpenStyledComponents={isOpentoxxx} >
            <h1>Cart Order</h1>
        </SidebarCartContainer>
    )
}

export default SidebarCart

const SidebarCartContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 50%;
    background: green;  
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpenStyledComponents }) =>(isOpenStyledComponents ? '100%' : '0')}; 
    right: ${({ isOpenStyledComponents }) =>(isOpenStyledComponents ? '0' : '-100%')};

    h1 {
        font-size: 3em;   
        color: ${({ isOpen }) =>(isOpen ? 'red' : 'yellow')};
    }
    
    ${props => props.activeShowcart && `    
        background: red;         
    `}
`;
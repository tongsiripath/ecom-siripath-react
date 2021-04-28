import React, {useState} from 'react';
import styled from "styled-components";
import "./navbar.css";

const Navbar = ({showSidebarCart}) => { 
    const [visible, setVisible] = useState(false)
    const test = () => {
        //console.log("test")
        setVisible(!visible)
        
    }

    return (
        <NavContainer>
            <NavLogo>LOGO</NavLogo>
            <NavToggle   onClick={showSidebarCart} ><A onClick={test}></A></NavToggle>           
            <NavWrap className={`${!visible ? 'menuActive' :'menuDisable'}`}>
            {/* <NavWrap style={{width: "492px"}} > */}
                <NavUl>
                    <NavLi>
                        <NavA>Home</NavA>
                    </NavLi>
                    <NavLi>
                        <NavA>About</NavA>
                    </NavLi>
                    <NavLi>
                        <NavA>Team</NavA>
                    </NavLi>
                    <NavLi>
                        <NavA>Portfolio</NavA>
                    </NavLi>
                    <NavLi>
                        <NavA>Contact</NavA>
                    </NavLi>
                </NavUl>
            </NavWrap> 
        </NavContainer>
        
    )
}

export default Navbar

const A = styled.div`
    width: 70px;
    height: 70px;
    /* background: red; */
`;

const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #fff;
    box-shadow: 0 5px 25px rgba(0,0,0,0.05);
`;
const NavLogo = styled.nav`
    height: 60px;
    line-height: 60px;
    color: teal;
    font-weight: 700;
    font-size: 2em;
    text-decoration: none;
    cursor: pointer;
    padding-left: 20px;
`;
const NavToggle = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    background: #9051ff; 
    top: 0;
    right: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;

    &::before {
        content:"";
        position: absolute;
        width: 28px;
        height: 2px;
        background: #fff;
        transform: translateY(-5px);
        transition: 0.2s;
    }
    &::after {
        content:"";
        position: absolute;
        width: 28px;
        height: 2px;
        background: #fff;
        transform: translateY(5px);
        transition: 0.2s;
    }

     /* &:active {
        background: red;
    } */
    /*&:hover::before {
        transform: translateY(0px) rotate(45deg);
    }
    &:hover::after {
        transform: translateY(0px) rotate(-45deg);
    } */

    /* ${propsx => propsx.active && `    
        background: red;         
    `} */
`;
const NavWrap = styled.div`
    position: relative;
    height: 60px;
    right: 60px;
    background: #fff;
    transition: 0.5s;

    /*** เป็นการซ่อน แสดงเมื่อคลิ๊ก ***/
    /* width: 0px; */
    overflow: hidden;

    //background-color: ${props => props.bg === "black" ? "black" : "blue"};

    /* &:active {
        width: 492px;
    } */

    /* ${props => props.navWrapActive && `    
        width: 492px;
        
    `} */

    
`;
const NavUl = styled.ul`
    position: relative;
    display: flex;
    flex-direction: row;
`;
const NavLi = styled.li`
    list-style: none;
`;
const NavA = styled.a`
    color: #12334e;
    height: 60px;
    display: inline-block;
    line-height:60px;
    font-size: 1.2em;
    text-decoration: none;
    padding: 0 15px;
    letter-spacing: 2px;

    &:hover {
        color: #fff;
        background: #9015ff;
    }
`;


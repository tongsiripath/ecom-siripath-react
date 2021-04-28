import React, {useState} from 'react';
import styled from 'styled-components';
import "../Tutorials/test.css";


const Tutorial = () => {

    const [open, setOpen] = useState(false);
    const clickOnClick = ()=> {
        setOpen(!open)
        console.log(!open)
    }

    return (
        <Navbar className={` ${ !open ? 'navEnable' : 'navDisable'}`}>
            <NavButton onClick={clickOnClick}>Navbar</NavButton>
        </Navbar>
    )
}

export default Tutorial

const Navbar = styled.nav`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:500px;
`;

const NavButton = styled.button`


`
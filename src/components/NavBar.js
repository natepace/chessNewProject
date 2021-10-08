import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const NavBar = () => {
    return (
        <StyledNavbar>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

                <Link to='/'>
                    <div className='navText'><span className='whiteBox'>Player Search</span></div>
                </Link>
                <Link to='/versus'>
                    <div className='navText'><span className='whiteBox'>Player Versus</span></div>
                </Link>

                {/* <Link to='/club'>
                    <div className='navText'><span className='whiteBox'>Club Search</span></div>
                </Link> */}

            </div>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.header`
padding: 20px;
// width: 100%;
background: ${props => props.theme.secondColor};
`
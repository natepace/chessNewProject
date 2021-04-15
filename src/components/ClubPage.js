import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios'

export const ClubPage = () => {
    const initialClub = {
        name: "the crew"
    }
    // useEffect(() => {
    //     axios
    //         .get(`https://anapioficeandfire.com/api/characters`)
    //         .then(res => {
    //             console.log(res.data)
    //         })
    // })

    const [clubData, setClubData] = useState(initialClub)

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .get(`https://api.chess.com/pub/club/the-byu-bruisers`)
            .then(res => {
                console.log(res.data)
                setClubData({ name: res.data.name })
            })
    }
    const handleChanges = (e) => {
        setClubData({
            name: e.target.value
        })
    }
    return (
        <StyledContainer>
            <h1>{clubData.name}</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="ex: 'natepace'"
                    value={clubData.name}
                    onChange={handleChanges}
                />
                <button className="findplayer">find player</button>
                {/* <img className="toggler" src={button} alt='toggle' onClick={() => this.handleSubmit()} /> */}
            </form>
        </StyledContainer>
    )
}


const StyledContainer = styled.div`
display:flex;
width:100%;
// flex-direction:column;
justify-content:center;
`
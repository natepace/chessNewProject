import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import GameCard from './gamecard.js'
// import whitepawn from '../whitepawnpng.png'
// import blackpawn from '../blackpawnpng.png'

const initialGameValues = {
    versus: 'NatePace',
    time_control: '180',
    time_class: 'blitz',
    color: 'white',
    rating: '1000',
    oppRating: '1001',
    link: 'https://www.chess.com/game/live/16413994647',
    result: 'resigned'

}

const PlayerGames = (props) => {

    const [gameValues, setGameValues] = useState(initialGameValues)
    const { playername } = props
    console.log(playername)
    useEffect(() => {
        axios.get(`https://api.chess.com/pub/player/hikaru/games/2021/06`)
            .then(res => {
                const games = Object.values(res.data)
                setGameValues(games[0].reverse())
                console.log(games[0])
                console.log(res.data)
            }).catch(err => {
                console.log(err.Response)
            })

    }, [])
    // console.log(gameValues)

    let d = new Date()
    let y = d.getFullYear()
    let m = d.getMonth() + 1

    y = y.toString()
    m = m.toString()
    if (m.length !== 2) {
        m = '0' + m
    }

    let date = y + '/' + m


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(`https://api.chess.com/pub/player/${playername}/games/${date}`)
            .then(res => {
                const games = Object.values(res.data)
                setGameValues(games[0].reverse())
            })

    }


    console.log(gameValues)
    if (gameValues === initialGameValues) {
        return (<div></div>)
    }
    else {

        return (
            <Gamesdiv>
                <h1>Games</h1>

                <button onClick={handleSubmit}>see all games from this month</button>



                {/* <button onClick={} */}
                <ScrollGames>
                    {gameValues.map(game => {
                        return (
                            <a href={game.url} target={"blank"}>
                                <GameCard game={game} playername={playername} />

                            </a>
                        )
                        // console.log(game.time_class)

                    })}




                </ScrollGames>
            </Gamesdiv>
        )
    }


}

export default PlayerGames

const Gamesdiv = styled.div`
width:500px;
float:right;
`

const ScrollGames = styled.div`
margin:4px, 4px;
padding:4px;
background-color: ${props => props.theme.secondColor};
width: 500px;
height: 400px;
overflow-x: hidden;
overflow-y: auto;
text-align:justify;
::-webkit-scrollbar {
    width: .5em;
}
::-webkit-scrollbar {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius:4px;
}
.gamecard{
    display:flex;
    
}
.playerVS{
    display:flex;
    flex-direction:row;
}
.pawnholder{
    display:flex;
    align-items:center;
}
.blackpawn{
    
    width:20px;
    height:24px;
    
}
`
const StyleGame = styled.div`
border: 1px solid black;
margin: 1px;
border-radius: 2px;
:hover{
    cursor:pointer;
    background-color:${props => props.theme.thirdColor};
}
`
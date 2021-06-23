import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
const PlayerVersus = () => {

    let d = new Date()
    let y = d.getFullYear()
    let m = d.getMonth() + 1
    let m2 = d.getMonth()
    y = y.toString()
    m = m.toString()

    m2 = m.toString()
    if (m2.length !== 2) {
        m2 = '0' + m2
    }
    if (m.length !== 2) {
        m = '0' + m
    }

    let date = y + '/' + m
    let date2 = y + '/' + m2


    const initialPlayers = {
        player1: 'hikaru',
        player2: 'danielnaroditsky'
    }
    const [gameValues, setGameValues] = useState(initialPlayers)
    const [players, setPlayers] = useState(initialPlayers)
    const [formValues, setFormValues] = useState(initialPlayers)
    useEffect(() => {
        axios.get(`https://api.chess.com/pub/player/hikaru/games/2021/06`)
            .then(res => {
                const games = Object.values(res.data)
                setGameValues(games[0].reverse())
                // console.log(games[0])
                // console.log(res.data)
            }).catch(err => {
                console.log(err.Response)
            })

    }, [])

    const handleChanges = (e) => {
        const value = e.target.value
        setFormValues({
            ...formValues,
            [e.target.name]: value

        })
    }
    let newArray = []
    const handleSubmit = (e) => {
        e.preventDefault();
        let one = `https://api.chess.com/pub/player/${players.player1}/games/${date}`
        let two = `https://api.chess.com/pub/player/${players.player1}/games/${date2}`
        const newPlayers = {
            player1: formValues.player1,
            player2: formValues.player2
        }

        setPlayers(newPlayers)
        const reqOne = axios.get(one)
        const reqTwo = axios.get(two)
        axios
            .all([reqOne, reqTwo])
            .then(axios.spread((...reses) => {
                const resOne = Object.values(reses[0].data)
                const resTwo = Object.values(reses[1].data)
                console.log(resTwo[0])
                // setGameValues(resOne[0].reverse, resTwo[0].reverse)
            }))
        axios
            .get(`https://api.chess.com/pub/player/${players.player1}/games/${date}`)

            .then(res => {
                const games = Object.values(res.data)
                setGameValues(games[0].reverse())
                console.log(games[0])
                // for (let i = 0; i < gameValues.length; i++) {
                //     if (gameValues[i].white.username.toLowerCase() === players.player2.toLowerCase() || gameValues[i].black.username.toLowerCase() === players.player2.toLowerCase()) {
                //         newArray.push(gameValues[i])
                //         setGameValues(newArray)
                //     }
                // }
            })
        // axios
        //     .get(`https://api.chess.com/pub/player/${players.player1}/games/${date2}`)
        //     .then(res => {
        //         const games2 = Object.values(res.data)
        //         setGameValues(...gameValues, games2[0].reverse()
        //     })
    }

    // console.log(players.player1, players.player2)

    if (gameValues === initialPlayers) {
        return (<div></div>)
    }
    return (
        <div>

            <form>
                <label>input player 1
                <input
                        type='text'
                        name='player1'
                        value={formValues.player1}
                        onChange={handleChanges}
                    /></label>
                <label>input player 2
                <input
                        type='text'
                        name='player2'
                        value={formValues.player2}
                        onChange={handleChanges}
                    /></label>
                <button onClick={handleSubmit}>compare!</button>
            </form>

            <div>
                <ScrollGames>
                    {gameValues.map(game => {
                        return (
                            <a href={game.url} target={"blank"}>
                                <div>

                                    <p>{game.white.username.toLowerCase() === `${players.player2}` || game.black.username.toLowerCase() === `${players.player2}` ? <p>{game.white.username} {game.white.result} vs {game.black.username} {game.black.result} </p> : null}</p>
                                </div>

                            </a>
                        )
                        // console.log(game.time_class)

                    })}
                </ScrollGames>
            </div>
            <div>

            </div>
        </div>
    )
}

export default PlayerVersus

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
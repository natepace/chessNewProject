import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import dates from '../common/dates.js'
import { PlayerProfileFetch } from '../common/playerprofilefetch.js'

import GameCard from './gamecard.js'

const PlayerVersus = () => {
    let datesArray = dates()
    let date = datesArray[0]
    let date2 = datesArray[1]
    let date3 = datesArray[2]
    let date4 = datesArray[3]
    let date5 = datesArray[4]
    let date6 = datesArray[5]
    let date7 = datesArray[6]
    let date8 = datesArray[7]
    let date9 = datesArray[8]
    let date10 = datesArray[9]
    let date11 = datesArray[10]
    let date12 = datesArray[11]

    // console.log(date, date2, date3, date4, date5, date6, date7, date8, date9, date10, date11, date12)

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
    let yearGames = []
    const handleSubmit = (e) => {
        e.preventDefault();
        let one = `https://api.chess.com/pub/player/${players.player1}/games/${date}`
        let two = `https://api.chess.com/pub/player/${players.player1}/games/${date2}`
        let three = `https://api.chess.com/pub/player/${players.player1}/games/${date3}`
        let four = `https://api.chess.com/pub/player/${players.player1}/games/${date4}`
        let five = `https://api.chess.com/pub/player/${players.player1}/games/${date5}`
        let six = `https://api.chess.com/pub/player/${players.player1}/games/${date6}`
        let seven = `https://api.chess.com/pub/player/${players.player1}/games/${date7}`
        let eight = `https://api.chess.com/pub/player/${players.player1}/games/${date8}`
        let nine = `https://api.chess.com/pub/player/${players.player1}/games/${date9}`
        let ten = `https://api.chess.com/pub/player/${players.player1}/games/${date10}`
        let eleven = `https://api.chess.com/pub/player/${players.player1}/games/${date11}`
        let twelve = `https://api.chess.com/pub/player/${players.player1}/games/${date12}`
        const newPlayers = {
            player1: formValues.player1,
            player2: formValues.player2
        }

        setPlayers(newPlayers)
        const reqOne = axios.get(one)
        const reqTwo = axios.get(two)
        const reqthree = axios.get(three)
        const reqfour = axios.get(four)
        const reqfive = axios.get(five)
        const reqsix = axios.get(six)
        const reqseven = axios.get(seven)
        const reqeight = axios.get(eight)
        const reqnine = axios.get(nine)
        const reqten = axios.get(ten)
        const reqeleven = axios.get(eleven)
        const reqtwelve = axios.get(twelve)

        axios
            .all([
                reqOne, reqTwo, reqthree, reqfour,
                reqfive, reqsix, reqseven, reqeight,
                reqnine, reqten, reqeleven, reqtwelve
            ])
            .then(axios.spread((...reses) => {
                const resOne = Object.values(reses[0].data)
                const resTwo = Object.values(reses[1].data)
                const resThree = Object.values(reses[2].data)
                const resFour = Object.values(reses[3].data)
                const resFive = Object.values(reses[4].data)
                const resSix = Object.values(reses[5].data)
                const resSeven = Object.values(reses[6].data)
                const resEight = Object.values(reses[7].data)
                const resNine = Object.values(reses[8].data)
                const resTen = Object.values(reses[9].data)
                const resEleven = Object.values(reses[10].data)
                const resTwelve = Object.values(reses[11].data)
                yearGames = resOne[0]

                yearGames = yearGames.concat(resTwo[0])
                yearGames = yearGames.concat(resThree[0])
                yearGames = yearGames.concat(resFour[0])
                yearGames = yearGames.concat(resFive[0])
                yearGames = yearGames.concat(resSix[0])
                yearGames = yearGames.concat(resSeven[0])
                yearGames = yearGames.concat(resEight[0])
                yearGames = yearGames.concat(resNine[0])
                yearGames = yearGames.concat(resTen[0])
                yearGames = yearGames.concat(resEleven[0])
                yearGames = yearGames.concat(resTwelve[0])


                setGameValues(yearGames)
            }))
    }



    if (gameValues === initialPlayers) {
        return (<div></div>)
    }
    let player1Wins = 0
    let player2Wins = 0
    let drawCount = 0
    let player1BulletWins = 0
    let player2BulletWins = 0
    let bulletDrawCount = 0

    let testValues = gameValues
    let versusGames = []
    let bulletGames = []
    for (let i = 0; i < testValues.length; i++) {
        // {game.white.username.toLowerCase() === `${players.player2}` || game.black.username.toLowerCase() === `${players.player2}` ?

        if (testValues[i].white.username.toLowerCase() === players.player2.toLowerCase() || testValues[i].black.username.toLowerCase() === players.player2.toLowerCase()) {
            versusGames.push(testValues[i])
            if (testValues[i].white.result === 'agreed' ||
                testValues[i].white.result === 'repetition' ||
                testValues[i].white.result === 'timevsinsufficient' ||
                testValues[i].white.result === 'insufficient' ||
                testValues[i].white.result === 'stalemate') {
                drawCount += 1
            }
            if (testValues[i].white.username.toLowerCase() === players.player1.toLowerCase()) {
                if (testValues[i].white.result === 'win') {
                    player1Wins += 1
                }
            }
            else if (testValues[i].black.username.toLowerCase() === players.player1.toLowerCase()) {
                if (testValues[i].black.result === 'win') {
                    player1Wins += 1
                }
            }
            if (testValues[i].black.username.toLowerCase() === players.player2.toLowerCase()) {
                if (testValues[i].black.result === 'win') {
                    player2Wins += 1
                }
            }
            else if (testValues[i].white.username.toLowerCase() === players.player2.toLowerCase()) {
                if (testValues[i].white.result === 'win') {
                    player2Wins += 1
                }
            }
        }
    }
    for (let i = 0; i < testValues.length; i++) {
        // {game.white.username.toLowerCase() === `${players.player2}` || game.black.username.toLowerCase() === `${players.player2}` ?

        if (testValues[i].white.username.toLowerCase() === players.player2.toLowerCase() || testValues[i].black.username.toLowerCase() === players.player2.toLowerCase()) {
            if (testValues[i].time_class === 'bullet') {


                bulletGames.push(testValues[i])
                if (testValues[i].white.result === 'agreed' ||
                    testValues[i].white.result === 'repetition' ||
                    testValues[i].white.result === 'timevsinsufficient' ||
                    testValues[i].white.result === 'insufficient' ||
                    testValues[i].white.result === 'stalemate') {
                    bulletDrawCount += 1
                }
                if (testValues[i].white.username.toLowerCase() === players.player1.toLowerCase()) {
                    if (testValues[i].white.result === 'win') {
                        player1BulletWins += 1
                    }
                }
                else if (testValues[i].black.username.toLowerCase() === players.player1.toLowerCase()) {
                    if (testValues[i].black.result === 'win') {
                        player1BulletWins += 1
                    }
                }
                if (testValues[i].black.username.toLowerCase() === players.player2.toLowerCase()) {
                    if (testValues[i].black.result === 'win') {
                        player2BulletWins += 1
                    }
                }
                else if (testValues[i].white.username.toLowerCase() === players.player2.toLowerCase()) {
                    if (testValues[i].white.result === 'win') {
                        player2BulletWins += 1
                    }
                }
            }
        }
    }

    return (
        <Window>
            <div className="wrapper">
                <div className="peel">
                    <form className="versusForm">
                        <div>
                            <label>Input Player 1:
                <input
                                    placeholder="ex: Hikaru"
                                    type='text'
                                    name='player1'
                                    value={formValues.player1}
                                    onChange={handleChanges}
                                /></label>
                        </div>
                        <div>
                            <label>Input Player 2:
                <input
                                    placeholder="ex: DanielNaroditsky"
                                    type='text'
                                    name='player2'
                                    value={formValues.player2}
                                    onChange={handleChanges}
                                /></label>
                            <button onClick={handleSubmit}>compare!</button>
                        </div>
                    </form>
                    <VersusContainer>
                        <div className="playerTabs">
                            <PlayerProfileFetch
                                username={formValues.player1}
                            />
                        </div>
                        <div>
                            <ScrollGames>
                                {versusGames.map(game => {
                                    return (
                                        <a href={game.url} target={"blank"}>
                                            <GameCard game={game} />
                                        </a>
                                    )
                                })}
                            </ScrollGames>
                            <div>
                                <h1>Tally</h1>
                                <div className='tallyCard'>
                                    <h2>{players.player1} wins:</h2>
                                    <h2>{player1Wins}</h2>
                                </div>
                                <div className='tallyCard'>
                                    <h2>{players.player2} wins:</h2>
                                    <h2>{player2Wins}</h2>
                                </div>
                                <div className='tallyCard'>
                                    <h2>draws:</h2>
                                    <h2>{drawCount}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="playerTabs">
                            <PlayerProfileFetch
                                username={formValues.player2}
                            />
                        </div>

                    </VersusContainer>
                </div>
            </div>
        </Window>
    )
}

export default PlayerVersus






const Window = styled.div`
display:flex;
width:100%;
justify-content:center;
font-family: 'Sarabun', sans-serif;
.wrapper{
    display:flex;
    


    .peel{
        display:flex;
        flex-direction:column;


        .versusForm{
            display:flex;
            justify-content:space-between;
            align-items:center;
            font-size:20px;
            background:${props => props.theme.secondColor};
            margin-bottom:10px;
            box-shadow: 3px 3px 3px 3px rgba(0.5, 0.5, 0.5, 0.5);
            border-radius:4px;
            label{
                color:${props => props.theme.bodyColor};
                padding-left:4px;
                padding-right:4px;

            }
            input{
                font-size:20px;
                height:30px;
                border-radius:4px;
                border: 1px solid transparent;
                border-top:none;
                border-bottom:1px solid #DDD;
                box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
                text-indent:14px;
                background-color:white;
                :focus { 
                    outline:none;
                    border-color:##296666;
                    box-shadow:0 0 8px #296666;
                    
                }

                
            }
            button{
                border: outset 1px ${props => props.theme.secondColor};
                border-radius:4px;
                font-size:20px;
                height:40px;
                background-color: ${props => props.theme.thirdColor};
                color: ${props => props.theme.fontColor};
                :hover{
                    cursor:pointer;
                    background-color: ${props => props.theme.secondColor};
                    :active{
                        border:4px;
                        border-color: #296666;
                        border-style:inset;
                        
                    }
                }
               
            }
        }
    }
}

`

const VersusContainer = styled.div`
display:flex;
background-color: ${props => props.theme.secondColor};
box-shadow: 3px 3px 3px 3px rgba(0.5, 0.5, 0.5, 0.5);
.tallyCard{
    display:flex;
}
.picborder{
    display:flex;
    width:100%;
    

   
 }
 .profilepic{
   width:100%;  
 }
 .playerTabs{
     margin:20px;
     box-shadow: 0px 3px 3px 3px ${props => props.theme.body};

     h2,h4,h5,p{
         padding-left:4px;
         padding-right:4px;
     }
     h4,h5,p{
         margin:4px;
     }
 }
`

















const ScrollGames = styled.div`
margin:4px, 4px;
padding:4px;
background-color: ${props => props.theme.secondColor};
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
font-family: 'Allerta', sans-serif;
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



import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import GameCard from './gamecard.js'
import dates from '../common/dates.js'
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

    const [gameValues, setGameValues] = useState(initialGameValues)
    // const [gameFilter, setFilter] = useState('all')
    const { playername } = props
    // console.log(playername)
    // const filterToggler = () => {

    // }
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


    let yearGames = []
    const handleSubmit = (e) => {
        e.preventDefault();
        // axios
        //     .get(`https://api.chess.com/pub/player/${playername}/games/${date}`)
        //     .then(res => {
        //         const games = Object.values(res.data)
        //         setGameValues(games[0].reverse())
        //     })
        let one = `https://api.chess.com/pub/player/${playername}/games/${date}`
        let two = `https://api.chess.com/pub/player/${playername}/games/${date2}`
        let three = `https://api.chess.com/pub/player/${playername}/games/${date3}`
        let four = `https://api.chess.com/pub/player/${playername}/games/${date4}`
        let five = `https://api.chess.com/pub/player/${playername}/games/${date5}`
        let six = `https://api.chess.com/pub/player/${playername}/games/${date6}`
        let seven = `https://api.chess.com/pub/player/${playername}/games/${date7}`
        let eight = `https://api.chess.com/pub/player/${playername}/games/${date8}`
        let nine = `https://api.chess.com/pub/player/${playername}/games/${date9}`
        let ten = `https://api.chess.com/pub/player/${playername}/games/${date10}`
        let eleven = `https://api.chess.com/pub/player/${playername}/games/${date11}`
        let twelve = `https://api.chess.com/pub/player/${playername}/games/${date12}`
        // const newPlayers = {
        //     player1: formValues.player1,
        //     player2: formValues.player2
        // }

        // setPlayers(newPlayers)
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
                yearGames = resOne[0].reverse()

                yearGames = yearGames.concat(resTwo[0].reverse())
                yearGames = yearGames.concat(resThree[0].reverse())
                yearGames = yearGames.concat(resFour[0].reverse())
                yearGames = yearGames.concat(resFive[0].reverse())
                yearGames = yearGames.concat(resSix[0].reverse())
                yearGames = yearGames.concat(resSeven[0].reverse())
                yearGames = yearGames.concat(resEight[0].reverse())
                yearGames = yearGames.concat(resNine[0].reverse())
                yearGames = yearGames.concat(resTen[0].reverse())
                yearGames = yearGames.concat(resEleven[0].reverse())
                yearGames = yearGames.concat(resTwelve[0].reverse())


                setGameValues(yearGames)
                // console.log(yearGames)
            }))
            .catch(err => {
                console.log(err.response)
            })

    }
    let bulletGames = []
    const handleBullet = (e) => {
        e.preventDefault();
        // axios
        //     .get(`https://api.chess.com/pub/player/${playername}/games/${date}`)
        //     .then(res => {
        //         const games = Object.values(res.data)
        //         setGameValues(games[0].reverse())
        //     })
        let one = `https://api.chess.com/pub/player/${playername}/games/${date}`
        let two = `https://api.chess.com/pub/player/${playername}/games/${date2}`
        let three = `https://api.chess.com/pub/player/${playername}/games/${date3}`
        let four = `https://api.chess.com/pub/player/${playername}/games/${date4}`
        let five = `https://api.chess.com/pub/player/${playername}/games/${date5}`
        let six = `https://api.chess.com/pub/player/${playername}/games/${date6}`
        let seven = `https://api.chess.com/pub/player/${playername}/games/${date7}`
        let eight = `https://api.chess.com/pub/player/${playername}/games/${date8}`
        let nine = `https://api.chess.com/pub/player/${playername}/games/${date9}`
        let ten = `https://api.chess.com/pub/player/${playername}/games/${date10}`
        let eleven = `https://api.chess.com/pub/player/${playername}/games/${date11}`
        let twelve = `https://api.chess.com/pub/player/${playername}/games/${date12}`
        // const newPlayers = {
        //     player1: formValues.player1,
        //     player2: formValues.player2
        // }

        // setPlayers(newPlayers)
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
                yearGames = resOne[0].reverse()
                yearGames = yearGames.concat(resTwo[0].reverse())
                yearGames = yearGames.concat(resThree[0].reverse())
                yearGames = yearGames.concat(resFour[0].reverse())
                yearGames = yearGames.concat(resFive[0].reverse())
                yearGames = yearGames.concat(resSix[0].reverse())
                yearGames = yearGames.concat(resSeven[0].reverse())
                yearGames = yearGames.concat(resEight[0].reverse())
                yearGames = yearGames.concat(resNine[0].reverse())
                yearGames = yearGames.concat(resTen[0].reverse())
                yearGames = yearGames.concat(resEleven[0].reverse())
                yearGames = yearGames.concat(resTwelve[0].reverse())

                for (let i = 0; i < yearGames.length; i++) {
                    if (yearGames[i].time_class === 'bullet') {
                        bulletGames.push(yearGames[i])
                    }

                }
                // console.log(bulletGames)
                setGameValues(bulletGames)
            }))
            .catch(err => {
                console.log(err.response)
            })

    }
    let blitzGames = []
    const handleBlitz = (e) => {
        e.preventDefault();
        // axios
        //     .get(`https://api.chess.com/pub/player/${playername}/games/${date}`)
        //     .then(res => {
        //         const games = Object.values(res.data)
        //         setGameValues(games[0].reverse())
        //     })
        let one = `https://api.chess.com/pub/player/${playername}/games/${date}`
        let two = `https://api.chess.com/pub/player/${playername}/games/${date2}`
        let three = `https://api.chess.com/pub/player/${playername}/games/${date3}`
        let four = `https://api.chess.com/pub/player/${playername}/games/${date4}`
        let five = `https://api.chess.com/pub/player/${playername}/games/${date5}`
        let six = `https://api.chess.com/pub/player/${playername}/games/${date6}`
        let seven = `https://api.chess.com/pub/player/${playername}/games/${date7}`
        let eight = `https://api.chess.com/pub/player/${playername}/games/${date8}`
        let nine = `https://api.chess.com/pub/player/${playername}/games/${date9}`
        let ten = `https://api.chess.com/pub/player/${playername}/games/${date10}`
        let eleven = `https://api.chess.com/pub/player/${playername}/games/${date11}`
        let twelve = `https://api.chess.com/pub/player/${playername}/games/${date12}`
        // const newPlayers = {
        //     player1: formValues.player1,
        //     player2: formValues.player2
        // }

        // setPlayers(newPlayers)
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
                yearGames = resOne[0].reverse()

                yearGames = yearGames.concat(resTwo[0].reverse())
                yearGames = yearGames.concat(resThree[0].reverse())
                yearGames = yearGames.concat(resFour[0].reverse())
                yearGames = yearGames.concat(resFive[0].reverse())
                yearGames = yearGames.concat(resSix[0].reverse())
                yearGames = yearGames.concat(resSeven[0].reverse())
                yearGames = yearGames.concat(resEight[0].reverse())
                yearGames = yearGames.concat(resNine[0].reverse())
                yearGames = yearGames.concat(resTen[0].reverse())
                yearGames = yearGames.concat(resEleven[0].reverse())
                yearGames = yearGames.concat(resTwelve[0].reverse())

                for (let i = 0; i < yearGames.length; i++) {
                    if (yearGames[i].time_class === 'blitz') {
                        blitzGames.push(yearGames[i])
                    }

                }
                // console.log(blitzGames)
                setGameValues(blitzGames)
            }))
            .catch(err => {
                console.log(err.response)
            })

    }
    let rapidGames = []
    const handleRapid = (e) => {
        e.preventDefault();
        // axios
        //     .get(`https://api.chess.com/pub/player/${playername}/games/${date}`)
        //     .then(res => {
        //         const games = Object.values(res.data)
        //         setGameValues(games[0].reverse())
        //     })
        let one = `https://api.chess.com/pub/player/${playername}/games/${date}`
        let two = `https://api.chess.com/pub/player/${playername}/games/${date2}`
        let three = `https://api.chess.com/pub/player/${playername}/games/${date3}`
        let four = `https://api.chess.com/pub/player/${playername}/games/${date4}`
        let five = `https://api.chess.com/pub/player/${playername}/games/${date5}`
        let six = `https://api.chess.com/pub/player/${playername}/games/${date6}`
        let seven = `https://api.chess.com/pub/player/${playername}/games/${date7}`
        let eight = `https://api.chess.com/pub/player/${playername}/games/${date8}`
        let nine = `https://api.chess.com/pub/player/${playername}/games/${date9}`
        let ten = `https://api.chess.com/pub/player/${playername}/games/${date10}`
        let eleven = `https://api.chess.com/pub/player/${playername}/games/${date11}`
        let twelve = `https://api.chess.com/pub/player/${playername}/games/${date12}`
        // const newPlayers = {
        //     player1: formValues.player1,
        //     player2: formValues.player2
        // }

        // setPlayers(newPlayers)
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
                yearGames = resOne[0].reverse()

                yearGames = yearGames.concat(resTwo[0].reverse())
                yearGames = yearGames.concat(resThree[0].reverse())
                yearGames = yearGames.concat(resFour[0].reverse())
                yearGames = yearGames.concat(resFive[0].reverse())
                yearGames = yearGames.concat(resSix[0].reverse())
                yearGames = yearGames.concat(resSeven[0].reverse())
                yearGames = yearGames.concat(resEight[0].reverse())
                yearGames = yearGames.concat(resNine[0].reverse())
                yearGames = yearGames.concat(resTen[0].reverse())
                yearGames = yearGames.concat(resEleven[0].reverse())
                yearGames = yearGames.concat(resTwelve[0].reverse())

                for (let i = 0; i < yearGames.length; i++) {
                    if (yearGames[i].time_class === 'rapid') {
                        rapidGames.push(yearGames[i])
                    }

                }
                // console.log(rapidGames)
                setGameValues(rapidGames)
            }))
            .catch(err => {
                console.log(err.response)
            })

    }
    // console.log(gameValues)
    if (gameValues === initialGameValues) {
        return (<div></div>)
    }
    else {

        return (
            <Gamesdiv>
                <h1>Games</h1>
                <button onClick={handleSubmit}>see all games</button>
                <button onClick={handleBullet}>see bullet</button>
                <button onClick={handleBlitz}>see blitz</button>
                <button onClick={handleRapid}>see rapid</button>
                <ScrollGames>
                    {gameValues.map(game => {
                        return (
                            <a href={game.url} target={"blank"}>
                                <GameCard game={game} playername={playername} />
                            </a>
                        )
                    })}




                </ScrollGames>
            </Gamesdiv>
        )
    }


}

export default PlayerGames

const Gamesdiv = styled.div`
width:500px;
@media (max-width: 960px) {
    width:100%;
    padding:0;
    
    margin-top:10px;
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
  }
// float:right;

        button{
            border: outset 1px ${props => props.theme.secondColor};
            border-radius:4px;
            font-size:20px;
            margin-left:4px;
            height:40px;
            background-color: ${props => props.theme.thirdColor};
            color: ${props => props.theme.fontColor};
            :hover{
                cursor:pointer;
                background-color: ${props => props.theme.body};
                :active{
                    border:4px;
                    background-color: ${props => props.theme.secondColor};
                    border-color: #296666;
                    border-style:inset;
                    padding:3px;
                }
            }
        }
`

const ScrollGames = styled.div`
@media (max-width: 960px) {
    width:100%;
    padding:0;
    margin-top:10px;
    margin-bottom:10px;
    margin-left:0;
    
    
  }
margin:10px;
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
// const StyleGame = styled.div`
// border: 1px solid black;
// margin: 1px;
// border-radius: 2px;
// :hover{
//     cursor:pointer;
//     background-color:${props => props.theme.thirdColor};
// }
// `
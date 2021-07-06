import React from 'react'
import styled from 'styled-components'
import whitepawn from '../whitepawnpng.png'
import blackpawn from '../blackpawnpng.png'
import crown from '../crownpng.png'
import draw from '../drawpng.png'
import versuslogo from '../versuslogo.jpg'
import bulletpng from '../bulletpng.png'
import blitzpng from '../blitzpng.png'
import rapidpng from '../rapidpng.png'
const GameCard = (props) => {
    const { game } = props
    const whitePlayer = {
        name: game.white.username,
        rating: game.white.rating,
        result: game.white.result
    }
    const blackPlayer = {
        name: game.black.username,
        rating: game.black.rating,
        result: game.black.result

    }
    const op = '('
    const cp = ')'
    if (!game) {
        return (
            <img className="versuspic" src={versuslogo} alt='white pawn' />
        )
    }
    // const firstPlayer = {

    // }
    // const secondPlayer = {

    // }
    // console.log(playername, game.white.username)
    return (
        <StyleGame>
            <div className="gamecard">
                <div className="timeHolder">
                    {game.time_class === 'bullet' ?
                        <img className="timepic" src={bulletpng} alt='bullet' /> :
                        null
                    }
                    {game.time_class === 'blitz' ?
                        <img className="timepic" src={blitzpng} alt='lightning' /> :
                        null
                    }
                    {game.time_class === 'rapid' ?
                        <img className="timepic" src={rapidpng} alt='stopwatch' /> :
                        null
                    }
                </div>
                {/* {game.white.username.toLowerCase() === `${playername}` ? <p>vs {game.black.username}</p> : <p>vs {game.white.username}</p>} */}
                {/* <p>{game.white.username} {game.white.result === "win" ? <p>won vs</p> : <p>lost vs</p>} {game.black.username}</p> */}
                <div className="whitenblack">
                    <div className="player">
                        <img className="blackpawn" src={whitepawn} alt='white pawn' />
                        <p>{whitePlayer.name}{op}{whitePlayer.rating}{cp}</p>
                        {whitePlayer.result === 'agreed' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {whitePlayer.result === 'repetition' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {whitePlayer.result === 'timevsinsufficient' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {whitePlayer.result === 'insufficient' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {whitePlayer.result === 'stalemate' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {whitePlayer.result === 'win' ? <img className="blackpawn" src={crown} alt='crown' /> : null}
                    </div>
                    <div className="player">
                        <img className="blackpawn" src={blackpawn} alt='black pawn' />
                        <p>{blackPlayer.name}{op}{blackPlayer.rating}{cp}</p>
                        {blackPlayer.result === 'agreed' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {blackPlayer.result === 'repetition' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {blackPlayer.result === 'timevsinsufficient' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {blackPlayer.result === 'insufficient' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {blackPlayer.result === 'stalemate' ? <img className="blackpawn" src={draw} alt='draw' /> : null}
                        {blackPlayer.result === 'win' ? <img className="blackpawn" src={crown} alt='crown' /> : null}
                    </div>

                </div>
                {/* <div className="timeHolder">
                    {game.time_class === 'bullet' ?
                        <img className="timepic" src={bulletpng} alt='bullet' /> :
                        null
                    }
                    {game.time_class === 'blitz' ?
                        <img className="timepic" src={blitzpng} alt='lightning' /> :
                        null
                    }
                    {game.time_class === 'rapid' ?
                        <img className="timepic" src={rapidpng} alt='stopwatch' /> :
                        null
                    }
                </div> */}
                <div>

                </div>

            </div>
            {/* <p>{game.white.username} {game.white.result === "win" ? <p>won vs</p> : <p>lost vs</p>} {game.black.username}</p> */}

        </StyleGame>
    )
}
export default GameCard

const StyleGame = styled.div`
border: 1px solid black;
margin: 1px;
border-radius: 2px;
p{
    margin-top:0;
}
:hover{
    cursor:pointer;
    background-color:${props => props.theme.thirdColor};
}
.whitenblack{
    display:flex;
    flex-direction:column;
    align-content:center;
    @media (max-width: 560px) {
        font-size:80%;
    }
}
.player{
    display:flex;
    align-content:center;
    margin-top:8px;
        margin-bottom:8px;
    p{
        margin-bottom:0px;
    }
}
.timeHolder{
    display:flex;
    align-items:center;
    margin-left:3%;
    margin-right:3%;
    .timepic{
    width:50px;
    // margin-left:8%;
    // margin-right:8%;
    opacity:.8;
    @media (max-width: 560px) {
        width:35px;
    }
}
}

`
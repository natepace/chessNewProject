import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
// import PlayerProfileFetch from '../common/playerprofilefetch.js'
import button from '../button.png'
import PlayerGames from './playergames.js'
import PlayerCard from './playercard.js'
// import { handleChanges } from '../handlers/handlers.js';




class ChessComps extends React.Component {

    state = {
        nameplate: '',
        name: '',

        username: '',
        title: '',
        avatar: '',
        chess_rapid: 2800,
        chess_blitz: 3173,
        chess_bullet: 3322,
    }
    componentDidMount() {
        this.setState({

            nameplate: 'hikaru',
            name: 'Hikaru Nakamura',
            title: 'GM',
            avatar: 'https://images.chesscomfiles.com/uploads/v1/user/15448422.90503d66.200x200o.f323efa57fd0.jpeg',
            chess_rapid: 2800,
            chess_blitz: 3173,
            chess_bullet: 3322,
            tactics: 3421,
        })
    }

    handleSubmit = (e) => {

        e.preventDefault();

        let one = `https://api.chess.com/pub/player/${this.state.username}`
        let two = `https://api.chess.com/pub/player/${this.state.username}/stats`

        const requestOne = axios.get(one)
        const requestTwo = axios.get(two)
        axios
            .all([requestOne, requestTwo])
            .then(axios.spread((...responses) => {
                const responseOne = responses[0]
                const responseTwo = responses[1]

                this.setState({

                    name: responseOne.data.name,
                    title: responseOne.data.title,
                    avatar: responseOne.data.avatar,
                    chess_rapid: responseTwo.data.chess_rapid.last.rating,
                    chess_blitz: responseTwo.data.chess_blitz.last.rating,
                    chess_bullet: responseTwo.data.chess_bullet.last.rating,
                    tactics: responseTwo.data.tactics.highest.rating,
                    nameplate: responseOne.data.username,
                })
            })
            )
            .catch(err => {
                console.log(err)
            })
    }

    handleChanges = (e) => {
        this.setState({
            username: e.target.value
        })
    }


    render() {
        return (
            <StyledContainer>
                <div className="wholepage">

                    <div className="searchArea">
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="ex: 'natepace'"
                                value={this.state.username}
                                onChange={this.handleChanges}
                            />
                            <button className="findplayer">find player</button>
                        </form>
                    </div>
                    <div className="usercard">
                        <StyledPlayer>
                            <PlayerCard
                                avatar={this.state.avatar}
                                title={this.state.title}
                                nameplate={this.state.nameplate}
                                name={this.state.name}
                                rapid={this.state.chess_rapid}
                                blitz={this.state.chess_blitz}
                                bullet={this.state.chess_bullet}
                                puzzles={this.state.tactics}
                            />
                            <PlayerGames playername={this.state.nameplate} />
                        </StyledPlayer>

                    </div>


                </div>

            </StyledContainer >
        )
    }
}

const StyledContainer = styled.div`
display:flex;
width:100%;
// flex-direction:column;
justify-content:center;
.wholepage{
    display:flex;
    flex-direction:column;
    width:80%;
    // justify-content:center;
}
  .usercard{
    //   width:80%;
      display:flex;
      justify-content:space-evenly;
    //   flex-direction:column;
    background-color:${props => props.theme.secondColor}

    
  }
.titledisplay{
    width:200px;
}
.userfullname{
    width:200px;
}

  .picborder{
     display:flex;
     width:204px;
     

    
  }
  .searchArea{
    // width:500px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    form{
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
  .findplayer{
      cursor:pointer;
  }
  .ratings{
      width:200px;
      
      
  }
`
const StyledPlayer = styled.div`
display:flex;
flex-direction:row;
width:100%;
justify-content:space-evenly;

`

export default ChessComps;
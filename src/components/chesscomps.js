import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
// import PlayerProfileFetch from '../common/playerprofilefetch.js'
import button from '../button.png'
import PlayerGames from './playergames.js'
// import PlayerCard from './playercard.js'
import { PlayerProfileFetch } from '../common/playerprofilefetch.js'
// import { render } from '@testing-library/react';
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
                    <div className="wrapper">

                        <div className="searchArea">
                            <form onSubmit={this.handleSubmit}>
                                <input placeholder="ex: 'natepace'"
                                    value={this.state.username}
                                    onChange={this.handleChanges}
                                />
                                <button className="findplayer">find player</button>
                            </form>
                        </div>
                        <div className="playerAndGames">
                            {/* <div className="usercard">
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

                    </div> */}
                            <div className="playerTabs">
                                <PlayerProfileFetch
                                    username2={this.state.nameplate}
                                />

                            </div>
                            <PlayerGames playername={this.state.nameplate} />

                        </div>
                    </div>
                </div>
            </StyledContainer >
        )
    }
}

const StyledContainer = styled.div`
display:flex;
width:100%;
justify-content:center;

.wholepage{
    display:flex;
    flex-direction:column;
    width:80%;
    @media (max-width: 560px) {
    width:98%;
    }
}
.wrapper{
    display:flex;
    flex-direction:column;
}
.playerAndGames{
    
    display:flex;
    flex-direction:row;
    background-color: ${props => props.theme.secondColor};
    box-shadow: 3px 3px 3px 3px rgba(0.5, 0.5, 0.5, 0.5);
    justify-content:space-evenly;
    @media (max-width: 960px) {
        flex-direction: column;
        // width:100vw;
        
      }
    .profilepic{
        width:100%;  
      }
    .playerTabs{
        
        margin:20px;
        width:22%;
        box-shadow: 0px 3px 3px 3px ${props => props.theme.body};
    
        h2,h4,h5,p{
            padding-left:4px;
            padding-right:4px;
        }
        h4,h5,p{
            margin:4px;
        }
        @media (max-width: 960px) {
            margin:0;
            
           img{
               width:200px;
               
           }
           width:100%;
           .profileCard{
            display:flex;
            
        }
        
         }    
         @media (max-width: 560px) {
           margin:0;
           display:flex;
           justify-content:center;
          img{
              width:100%;
              
          }
          width:100%;
          .profileCard{
           display:flex;
           flex-direction:row;
           width:100%;
           .picborder{
               width:33%;
           }
           .ratings{
               width:33%;
               font-size:80%;
               
           }
           .titledisplay{
               width:33%;
               font-size:60%;
               height:50%;
               
               
           }
           .userfullname{
               display:none;
               // height:50%;
               
           }
           
       }
        }
    }
}

  .searchArea{
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
        @media (max-width: 560px) {
            display:flex;
           width:100%;
           margin-top:10px;
            flex-direction:column;
            label{
                // font-size:70%;
               display:flex;
               align-items:center;
            }
            input{
                display:flex;
                margin-top:4px;
                margin-bottom:4px;
                align-items:center;
                width:75%;
            }
            .labelbox{
                font-size:65%
            }
            button{
                margin-top:4px;
                margin-bottom:4px;
                margin-left:0;
                margin-right:0;
                
                width:75%;
            }
            
        
         }
  }
  .findplayer{
      cursor:pointer;
  }


  
`



// const StyledPlayer = styled.div`
// display:flex;
// flex-direction:row;
// width:100%;
// justify-content:space-evenly;


// `

export default ChessComps;
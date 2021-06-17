import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import button from '../button.png'
import PlayerGames from './playergames.js'
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
            // nameFirst: 'Hikaru',
            // nameLast: 'Nakamura',
            name: 'Hikaru Nakamura',
            // username: 'Hikaru',
            title: 'GM',
            avatar: 'https://images.chesscomfiles.com/uploads/v1/user/15448422.90503d66.200x200o.f323efa57fd0.jpeg',
            chess_rapid: 2800,
            chess_blitz: 3173,
            chess_bullet: 3322,
            tactics: 3421,
        })
    }
    // const hikaru = {
    //     name: 'Hikaru Nakamura',
    //     username: 'Hikaru',
    //     title: 'GM',
    //     avatar: 'https://images.chesscomfiles.com/uploads/v1/user/15448422.90503d66.200x200o.f323efa57fd0.jpeg',
    //     chess_rapid: 2800,
    //     chess_blitz: 3173,
    //     chess_bullet: 3322,
    // }

    // const [player, setPlayer] = useState(hikaru)


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
                    // username: res.data.username,
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

        // console.log(this.state.username)
        // axios
        //     .get(`https://api.chess.com/pub/player/${this.state.username}`)
        //     .then(res => {
        //         console.log(res)
        //         this.setState({
        //             // username: res.data.username,
        //             name: res.data.name,
        //             title: res.data.title,
        //             avatar: res.data.avatar,
        //             // chess_rapid: res.data.chess_rapid,
        //             // chess_blitz: res.data.chess_blitz,
        //             chess_bullet: res.data.chess_bullet,
        //             nameplate: res.data.username,
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

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
                            <div>
                                <div className="picborder">
                                    <img className="profilepic" src={this.state.avatar} alt='hikaru' />
                                </div>
                                <div className="titledisplay">

                                    <h2>{this.state.title} {this.state.nameplate.charAt(0).toUpperCase() + this.state.nameplate.slice(1)}</h2>
                                </div>
                                <div className="userfullname">
                                    <h5>{this.state.name}</h5>
                                </div>
                                <div className="ratings">
                                    <h4>Ratings</h4>
                                    <p>Rapid: {this.state.chess_rapid}</p>
                                    <p>Blitz: {this.state.chess_blitz}</p>
                                    <p>Bullet: {this.state.chess_bullet}</p>
                                    <p>Puzzles: {this.state.tactics}</p>
                                </div>
                            </div>
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
import React from 'react'
import axios from 'axios';
export class PlayerProfileFetch extends React.Component {
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
        let one = `https://api.chess.com/pub/player/${this.props.username}`
        let two = `https://api.chess.com/pub/player/${this.props.username}/stats`

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
    }




    componentDidUpdate() {
        let one = `https://api.chess.com/pub/player/${this.props.username}`
        let two = `https://api.chess.com/pub/player/${this.props.username}/stats`

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
                console.log(err.response)
            })
    }



    // componentDidMount() {
    //     this.setState({

    //         nameplate: 'hikaru',
    //         name: 'Hikaru Nakamura',
    //         title: 'GM',
    //         avatar: 'https://images.chesscomfiles.com/uploads/v1/user/15448422.90503d66.200x200o.f323efa57fd0.jpeg',
    //         chess_rapid: 2800,
    //         chess_blitz: 3173,
    //         chess_bullet: 3322,
    //         tactics: 3421,
    //     })
    // }

    render() {
        return (
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
        )
    }
}

export default PlayerProfileFetch


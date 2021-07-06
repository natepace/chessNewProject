import React from 'react'


const PlayerCard = props => {
    const { avatar, title, nameplate, name, rapid, blitz, bullet, puzzles } = props
    return (
        <div className="profileCard">
            <div className="picborder">
                <img className="profilepic" src={avatar} alt='hikaru' />
            </div>
            <div className="titledisplay">

                <h2>{title} {nameplate.charAt(0).toUpperCase() + nameplate.slice(1)}</h2>
            </div>
            <div className="userfullname">
                <h5>{name}</h5>
            </div>
            <div className="ratings">
                <h4>Ratings</h4>
                <p>Rapid: {rapid}</p>
                <p>Blitz: {blitz}</p>
                <p>Bullet: {bullet}</p>
                <p>Puzzles: {puzzles}</p>
            </div>
        </div>
    )
}


export default PlayerCard


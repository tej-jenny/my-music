import React from 'react'

const PlayButton = () => {
    return (
        <div>
            <div class="player">
                <button type="button" id="button_bw" className="controlBtn" onclick='buttonBackPress()'>
                <i class="fa fa-backward"></i>
                </button>
                
                <button type="button" id="button_play" className="controlBtn" onclick='buttonPlayPress()'>
                <i class="fa fa-play"></i>
                </button>
                
                <button type="button" id="button_stop" className="controlBtn" onclick='buttonStopPress()'>
                <i class="fa fa-stop"></i>
                </button>
                
                <button type="button" id="button_fw" className="controlBtn" onclick='buttonForwardPress()'>
                <i class="fa fa-forward"></i>
                </button> 
            </div>
        </div>
    )
}

export default PlayButton

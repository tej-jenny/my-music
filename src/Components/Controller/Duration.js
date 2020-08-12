import React from 'react'

const Duration = () => {
    return (
        <div>
            <div id="timeline">
                <span id="current-time">0:00</span>
                <span id="total-time">3:00</span>
                <div className="slider" data-direction="horizontal">
                    <div class="progress">
                        <div class="pin" id="progress-pin" data-method="rewind"></div>
                    </div>
                </div>
            </div>
            <div className="extraControls">
                <i class="fa fa-random" aria-hidden="true"></i>
                <i class="fa fa-refresh" aria-hidden="true"></i>
                <i class="fa fa-bluetooth-b active" id="bluetooth-btn" aria-hidden="true"></i>
                <i class="fa fa-heart-o" id="heart-icon" aria-hidden="true"></i>
            <div>
            </div></div>
        </div>
    )
}

export default Duration

import React from "react";


const Timer= ()=>{

    return(
        <>
            <div className="timer">
                <div className="timer-left">
                    <span>15</span>
                </div>

                <div className="timer-right">
                    <span>15s</span>
                    <span>30s</span>
                    <span>60s</span>
                </div>
            </div>
        </>
    );
}

export default Timer;

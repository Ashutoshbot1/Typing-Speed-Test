import React from "react"


const Buttons=()=>{

    return(
        <>
            <div className="buttons">
                <div className="reload">
                <i class="fa-solid fa-rotate-right"></i>
                </div>
                <div className="reset">
                <button type="button" class="btn btn-light">Esc</button>
                <span>- Reset</span>
                </div>
                <div className="words">
                <button type="button" class="btn btn-light">10</button>
                <button type="button" class="btn btn-light">50</button>
                <button type="button" class="btn btn-light">80</button>
                <button type="button" class="btn btn-light">100</button>
                <span>- no. of words</span>
                </div>
            </div>
        </>
    );
}

export default Buttons;
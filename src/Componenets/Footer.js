import React from "react";

const Footer=()=>{

    return(
        <>
            <div className="footer">
                <div className="links">
                    <a href=""><i class="fa-brands fa-github"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                    <a href=""><i class="fa-solid fa-envelope"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                </div>

                <div className="theme">
                    <select>
                        <option value="">Theme</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default Footer;
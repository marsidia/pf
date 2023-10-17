
function Tv({children}) {
    return(
        <div className="tv">
                <div className="antenna">
                    <div className="horns">
                        <div className="horn horn--1"> 
                            <div className="hrtip"></div>
                            <div className="hr hr1"></div>
                            <div className="hr hr2" />
                            <div className="hr hr3" />
                           

                           
                        </div>
                        <div className="horn horn--2">
                            <div className="hrtip"></div>
                            <div className="hr hr1"></div>
                            <div className="hr hr2" />
                            <div className="hr hr3" />
                        </div>
                    </div>
                    <div className="socle"></div>
                </div>
                <div className="bor">
                    <div className="bigbor">
                        <div className="screensq">
                            <div className="screen">
                                <div className="screen2">
                                  
                                    {children}

                                </div>

                            </div>
                        </div>

                        <div className="control">
                            <div className="switch">
                                <div className="circle">
                                    <div className="circlesm circlesm--1">
                                        <div className="rect">
                                            <div className="rectsm">
                                                
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="circle">
                                <div className="circlesm circlesm--2">
                                        <div className="rect">
                                            <div className="rectsm"></div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="sound">

                            </div>

                        </div>
                    </div>
                </div>
                <div className="papattes">
                    <div className="papatte">

                    </div>
                    <div className="papatte">

                    </div>
                </div>

            </div>

    )
}
export default Tv
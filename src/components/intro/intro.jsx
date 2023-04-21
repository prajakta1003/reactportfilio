import "./intro.css"
import me from "../../img/me.jfif"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className= "i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name"> Prajakta Jamdar</h1>
                    <div className="i-title">
                    <div className= "i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Photographer</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Content Creater</div>

                    </div>
                    </div>
                    <p className="i-desc">
                        I design  and develope services for customers of all sizes, 
                        specializing in creating stylish, modern websites, web services,
                        amd online stores.
                    </p>
                    

                </div>
                
            </div>
            <div className="i-right">
                <div class="i-bg"></div>
                <img src={me} className= "i-img" />
            </div>
            
        </div>
    )
}

export default Intro

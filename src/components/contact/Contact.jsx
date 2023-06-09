import"./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef } from "react"
import { ThemeContext } from "../../context"


const Contact = () => {
    const formRef = useRef()
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
  

    const handleSubmit = (e)=>{
        e.preventDefault();

    }
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone}
                         alt=""
                         className="c-icon"
                          />
                          +1 1234 556 75
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Email}
                         alt=""
                         className="c-icon"
                          />
                          contact.prajaktajamdar@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Address}
                         alt=""
                         className="c-icon"
                          />
                          Shivajinagar, Pune
                    </div>


                </div>


            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>Whats your story?</b> Get in touch, Always available for
                    freelancing if the right projrct comes along. me
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
                    <input  style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact

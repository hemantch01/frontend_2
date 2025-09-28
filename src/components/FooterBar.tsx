import fintaLogo from '../assets/svg/finta_logo.svg';
import linkedn from '../assets/svg/linkedin.svg';
import x from '../assets/svg/x.svg';
import ycombinator from '../assets/svg/y-combinator.svg';
export const FooterBar = ()=>{
    return <div className="footer_bar_container">
        <div className="footer_bar">
            <div className="footer_bar_brothers">
                <div>
                   <img src={fintaLogo} alt="Finta Logo" /> 
                </div>
                <div>
                    Magically simplify accounting and taxes.
                </div>
            </div>
            <div className='footer_bar_brothers'>
                <div>
                    <img src={x} alt="x" />
                </div>
                <div>
                    <img src={linkedn} alt="x" />
                </div>
                <div>
                    <img src={ycombinator} alt="x" />
                </div>
            </div>
        </div>
    </div>
}
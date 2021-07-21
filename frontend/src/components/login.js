import '../styles/login.scss';
import logo from '../images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className="login-container">
            <div className="logo">
                <img alt="logo" src={logo} />
            </div>
            <div className="login-form">
                <form>
                    <div className="profile-image">
                        <input className="file-upload" type="file" />
                        <FontAwesomeIcon className="icon-block" icon={faUser} />
                    </div>
                    <div className="profile-name">
                        <FontAwesomeIcon className="icon-block" icon={faUser} />
                        <input placeholder="Your Name Here!" type="text" name="name" />
                    </div>
                    <input type="submit" className="profile-submit" value="Join Now" />
                </form>
            </div>
        </div>
    )
}

export default Login;
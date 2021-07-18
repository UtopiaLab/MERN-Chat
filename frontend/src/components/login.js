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
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
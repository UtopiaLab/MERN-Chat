import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/profile.scss';
import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';

const Profile = ({handleLogout}) => {
    const userObj = useContext(AuthContext);
    const {profileImg, name} = userObj;
    return (
        <div className="profile">
            <div className="img-container">
                <img alt="profile" src={profileImg} />
            </div>
            {name}
            <div className="action-item" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="logout"/>
            </div>
        </div>
    )
}

export default Profile;
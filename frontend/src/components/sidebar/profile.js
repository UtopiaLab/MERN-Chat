import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/profile.scss';

const Profile = () => {
    return (
        <div className="profile">
            <div className="img-container">
                <img alt="profile" src="https://alrigh.com/wp-content/uploads/2020/06/19-tom-profile-picture.webp" />
            </div>
            <div className="action-item">
                <FontAwesomeIcon icon={faSignOutAlt} className="logout"/>
            </div>
        </div>
    )
}

export default Profile;
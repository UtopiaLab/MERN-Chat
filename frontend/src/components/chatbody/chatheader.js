import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'; 
import '../../styles/chatheader.scss';

const ChatHeader = () => {
    return (
        <div className="chat-header">
            <div className="img-container">
                <img alt="profile" src="https://alrigh.com/wp-content/uploads/2020/06/19-tom-profile-picture.webp" />
            </div>
            <div className="chat-detail">
                <h4 className="title">Sample User</h4>
                <p className="description">Online</p>
            </div>
            <div className="action-buttons">
                <FontAwesomeIcon icon={faEllipsisV} className="icon-block"/>
            </div>
        </div>
    )
}

export default ChatHeader;
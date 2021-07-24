import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faUser} from '@fortawesome/free-solid-svg-icons'; 
import '../../styles/chatlist.scss';
import {shortFormatTime} from './../../utils/helper';

const ChatList = ({friendList}) => {
    console.log(friendList);

    const renderRecentMsg = (data) => {
        let msg = "";
        if(data.recentMsg && data.recentMsg.msg) {
            if(data.recentMsg.msg.type === "message") {
                msg = data.recentMsg.msg.value;
            } else if(data.recentMsg.msg.type === "file") {
                msg = "Media Shared";
            } else if(data.recentMsg.msg.type === "typing") {
                msg = <i style={{color: "#a7a7a7"}}>typing...</i>;
            }else {
                msg = "";
            }
        }
        return msg;
    }

    return (
        <div className="chat-list">
        {Object.keys(friendList).map((key) => (
            <div className="chat-item" key={key}>
                <div className="img-container">
                {friendList[key].profileImg ? (
                    <img alt="profile" src={friendList[key].profileImg} />
                ):(
                    <FontAwesomeIcon className="icon-block" icon={faUser} />
                )}
                </div>
                <div className="chat-detail">
                    <h4 className="chat-title">{friendList[key].name}</h4>
                    <p className="chat-description">{renderRecentMsg(friendList[key])}</p>
                </div>
                <div className="timestamp">
                    {friendList[key].recentMsg && shortFormatTime(friendList[key].recentMsg.time)}
                </div>
                <div className="action-button">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        ))}
        </div>
    )
}

export default ChatList;
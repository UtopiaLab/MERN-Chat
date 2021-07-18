import '../../styles/chat.scss';

const Chat = () => {
    return (
        <div className="chat-section">
            <div className="chat you">
                <span className="name">
                    Sample User
                </span>
                <p className="message">
                    This is a preview of a sample message.
                </p>
                <span className="time">
                    10:20 PM
                </span>
            </div>

            <div className="chat me">
                <span className="name">
                    Sample User
                </span>
                <p className="message">
                    This is a preview of a sample message.
                </p>
                <span className="time">
                    10:20 PM
                </span>
            </div>
        </div>
    )
}

export default Chat;
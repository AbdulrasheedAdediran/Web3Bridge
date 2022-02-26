import React from 'react';
import '../styles/messages/Messages.scss'

function MessageCard({ user, text, timestamp, status, className }) {

    return (
        <div className={`messages`}>
            <div className="message__con">
            <p className={`message__status ${status === 1? 'success' : 'danger'}` }>{user}</p>
            </div>
            <div className={`message__card`}>
                <p className={`message__desc`}>{text}</p>
                <div className={`flex__timestamp`}>
                <p>{timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default MessageCard;

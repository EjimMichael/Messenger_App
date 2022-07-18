import Moment from 'react-moment';
function Message({ msg, index}) {
  return (
    <div>
        <p>
            {msg.text}
            <br />
            <small>
                <Moment fromNow>{msg.createAt.toDate()}</Moment>
            </small>
        </p>
    </div>
  )
}

export default Message;
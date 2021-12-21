import './Post.css'

export default function Post({ post }) {
  const { community, user, title, text, upVotes, downVotes, comments } = post
  const votesTotal = upVotes - downVotes
  const commentsTotal = comments.length;

  return (
    <div className="post">
      <div className='post-votes'>
        { votesTotal }
      </div>
      <div className='post-body'>
        <div className='post-header'>
          <img className='post-avatar' src={user.avatar} alt='post avatar' />
          <span className='post-community'>s/{community}</span>
          <span className='post-user'> &#8226; posted by u/{user.name} </span>
        </div>
        <div className='post-title'>{title}</div>
        <div className='post-content'>
          <p>{text}</p>
        </div>
        <div className='post-footer'>
          {commentsTotal}
        </div>
      </div>
    </div>
  )
}
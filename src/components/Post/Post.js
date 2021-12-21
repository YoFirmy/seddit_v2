import './Post.css'

import React, { useState } from 'react';

import CommentIcon from '../CommentIcon/CommentIcon';
import VoteArrow from '../VoteArrow/VoteArrow'

export default function Post({ post }) {
  const { community, user, title, text, upVotes, downVotes, comments } = post
  const votesTotal = upVotes - downVotes
  const commentsTotal = comments.length;
  const commentsSingleOrPlural = commentsTotal === 1 ? " Comment" : " Comments"
  return (
    <div className="post">
      <div className='post-votes'>
        <VoteArrow className='up-vote-arrow' scale="1" />
        <div className='total-votes'>{ votesTotal }</div>
        <VoteArrow className='down-vote-arrow' scale="-1" />
      </div>
      <div className='post-body'>
        <div className='post-header'>
          <img className='post-avatar' src={user.avatar} alt='post avatar' />
          <span className='post-community'>s/{community}</span>
          <span className='post-user'>&#8226; Posted by u/{user.name} </span>
        </div>
        <h1 className='post-title'>{title}</h1>
        <div className='post-text'>
          {text}
        </div>
        <div className='post-footer'>
          <CommentIcon />
          <span className='post-comments'>{commentsTotal}{commentsSingleOrPlural}</span>
        </div>
      </div>
    </div>
  )
}
import Post from '../Post/Post';

// mock posts data
const posts = [
  {
    "community": "AskSeddit",
    "user": { "name": "user1", "avatar": "https://i.pravatar.cc/100" },
    "title": "Lorem Ipsum",
    "text": "Ut pariatur enim non nulla eiusmod cupidatat amet et non consectetur incididunt culpa esse laborum. Cillum ipsum sint cillum magna consectetur voluptate minim reprehenderit est ex. Esse proident laboris labore minim commodo ipsum. Sunt ex qui proident ut ullamco consectetur ad cillum duis do Lorem incididunt est dolore. Pariatur sint esse nostrud tempor dolor. Cupidatat laboris et velit et occaecat adipisicing do veniam id exercitation magna cupidatat veniam. Sunt fugiat laboris minim ex ullamco ullamco quis pariatur adipisicing exercitation aute nulla mollit quis.",
    "upVotes": 12,
    "downVotes": 2,
    "comments": [
      { 
        "user": { "name": "user2", "avatar": "https://i.pravatar.cc/100" }, 
        "text": "Yeah it is!"
      },
      { 
        "user": { "name": "user3", "avatar": "https://i.pravatar.cc/100"  }, 
        "text": "Nah, definitely not"
      },
    ]
  },
  {
    "community": "MockCommunity",
    "user": { "name": "user2", "avatar": "https://i.pravatar.cc/100" },
    "title": "This is a post",
    "text": "And this is the posts content",
    "upVotes": 55,
    "downVotes": 74,
    "comments": [
      { 
        "user": { "name": "user1", "avatar": "https://i.pravatar.cc/100" }, 
        "text": "here's a comment"
      },
      { 
        "user": { "name": "user3", "avatar": "https://i.pravatar.cc/100"  }, 
        "text": "here's another comment"
      },
      { 
        "user": { "name": "user4", "avatar": "https://i.pravatar.cc/100"  }, 
        "text": "aaaaand another..."
      },
    ]
  },
];

export default function DisplayPosts() {
  return (
    <div className='list-of-posts'>
      {posts.map(p => <Post post={p}/>)}
    </div>
  )
}

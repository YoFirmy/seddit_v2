import Header from './components/Header/Header'

const posts = [
  {
    "community": "AskSeddit",
    "user": { "name": "YoFirmy", "avatar": "fun_avatar.jpeg" },
    "title": "Is this a title?",
    "text": "Is this text?",
    "upvotes": 12,
    "downvotes": 2,
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
    "community": "AskSeddit",
    "user": { "name": "YoFirmy", "avatar": "fun_avatar.jpeg" },
    "title": "This is a post",
    "text": "And this is the posts content",
    "upvotes": 55,
    "downvotes": 74,
    "comments": [
      { 
        "user": { "name": "user2", "avatar": "https://i.pravatar.cc/100" }, 
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

export default function App() {
  return (
    <>
      <Header />
    </>
  );
}

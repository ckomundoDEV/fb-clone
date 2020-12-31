import React, { useState, useEffect} from 'react'
import './Feed.css'
import Post from "./Post.js"
import StoryReal from './StoryReal.js'
import MessageSender from './MessageSender.js'
import  db from './firebase';

function Feed() {
const [ posts, setPosts ] = useState([]);

useEffect(()=> {
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot)=> {
        setPosts(
            snapshot.docs.map((doc)=>({
                id : doc.id,
                data : doc.data()
            }))
        )
    })
},[])

console.log(posts);
    return (
        <div className="feed">
            <StoryReal />
            <MessageSender />

            {  posts.map((post) => (
                <Post 
                    key = {post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
                        
            ))}

        </div>
    )
}

export default Feed

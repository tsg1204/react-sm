import React from 'react';

function CreatePost() {
    return <div>
        <h1>Create New post</h1>
        <form>
            <input 
                type="text"
                placeholder="Add Post Content"
            />
            <input 
                type="file"
            />
            <button type="submit">Submit Post</button>
        </form>
    </div>
}

export default CreatePost;
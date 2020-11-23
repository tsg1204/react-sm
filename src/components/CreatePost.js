import React from 'react';
import { PostContext } from '../App';

function CreatePost({ user }) {
    const { dispatch } = React.useContext(PostContext);
    const [content, setContent] = React.useState('');
    const [image, setImage] = React.useState(null);
    const imageInputRef = React.useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const post = { content, image, user, id: Date.now() };
        //handleAddPost(post);
        // const newPosts = [post, ...posts];
        // setPosts(newPosts);
        dispatch({ type: "ADD_POST", payload: { post }});
        setContent('');
        setImage(null);
        imageInputRef.current.value = '';
    }

    return <div>
        <h1>Create New post</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Add Post Content"
                onChange={event => setContent(event.target.value)}
                value={content}
            />
            <input 
                type="file"
                onChange={event => setImage(event.target.files[0])}
                ref={imageInputRef}
            />
            <button type="submit">Submit Post</button>
        </form>
        <p>{content}</p>
        { image && (<img 
            style={{ height:100, width: 200, objectFit: 'cover' }}
            src={URL.createObjectURL(image)}
        />) }
    </div>
}

export default CreatePost;
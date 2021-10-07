import React from 'react';
import Post from '../Post/Post';
import axios from 'axios';

class Posts extends React.Component {
    state = {
        posts: [],
        id: 101
    };

    async componentDidMount() {
        if (this.state.posts.length === 0) {
            const resp = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const posts = await resp.data;
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', posts);
            this.setState({ posts });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

        // this.state.posts.push(e.target.title.value, e.target.body.value);
        // console.log(this.state.posts);
        const obj = {
            userID: 11,
            id: this.state.id,
            title: e.target.title.value,
            body: e.target.body.value,
        };
        console.log(this.state.id);
        // this.setState({posts: [...this.state.posts, this.state.object] } )
        this.state.id += 1
        this.setState({posts: [...this.state.posts, obj] });
        console.log(this.state.posts);
    };

    render() {
        const { posts } = this.state;
        console.log(posts, 'posts');
        return (
            <div
                style={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 200px',
                }}
            >
                <div>
                    <h1>Posts</h1>
                </div>
                <div>
                    Create New Post
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="title"
                            name="title"
                            placeholder="title..."
                            required
                            onChange={this.handleChange}
                        />
                        <input
                            // style="font-size:16pt;"
                            type="text"
                            name="body"
                            placeholder="body..."
                            required
                            onChange={this.handleChange}
                        />
                        <button onSubmit={this.handleSubmit}>Post</button>
                    </form>
                </div>
                {posts && posts.map(({ ...p }) => <Post key={p.id} {...p} />)}
            </div>
        );
    }
}

export default Posts;

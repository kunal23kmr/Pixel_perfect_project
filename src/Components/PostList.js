import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(responce => {
                console.log(responce)
                this.setState({ posts: responce.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>List Of Posts</h1>
                <p>
                    {
                        posts.length ?
                            posts.map(post => <div key={post.id}>{post.title}</div>) :
                            <h3>Loading....</h3>
                    }
                </p>
            </div>
        )
    }
}

export default PostList
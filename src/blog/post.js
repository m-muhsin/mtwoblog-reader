import React from 'react';

class Post extends React.Component {
    render() {
        if(!this.props.posts)
            return null;
        let currentPost = this.props.posts.filter(post => post.ID === this.props.selected)
        currentPost = currentPost[0];
        if(!currentPost)
            return (
                <div className="post-content pl-5 pr-5 mt-3 mt-md-0">
                    <header><h1>Welcome!</h1></header>
                    <p>
                        This is a project I created to make it easier for my readers to go through my content from a single screen.
                    </p>
                    <p>
                        Appreaciate that you took the time to check this out.
                    </p>
                    <p>
                        I built this project in one day, thanks to my experience with React and WordPress REST API. both of which I am very passionate about!                    
                    </p>
                    <p>
                        It's not very mobile-friendly at the moment but I am working on it.
                    </p>
                    <p>
                        Enjoy!
                    </p>
                    <p>Load time: {this.props.loadTime} seconds</p>
                </div>
            );
        return (
            <div className="post-content pl-5 pr-5 mt-3 mt-md-0">
                <header><h1 dangerouslySetInnerHTML={{ __html: currentPost.title }} /></header>
                <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
            </div>
        )
    }
}   

export default Post;
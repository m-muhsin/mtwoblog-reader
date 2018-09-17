import React from 'react';

const List = ({posts, selected, onSelectPost}) =>  (
    <div className="nav-container">
        <div className="card">
            <div className="card-body">
                <div className="list-group">
                    <div className={`list-group-item pointer ${-1 === selected ? `active` : ``}`} onClick={ () => onSelectPost(-1) }>Home</div>
                    {posts.map(post => <div key={post.id} className={`list-group-item pointer ${post.id === selected ? `active` : ``}`} onClick={ () => onSelectPost(post.id) } dangerouslySetInnerHTML={{ __html: post.title.rendered }} />)}
                </div>
            </div>
        </div>
    </div>
)

export default List;
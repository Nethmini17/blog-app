import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />

      <div className="postInfo">
        <div className="postCat">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        saepe deserunt, aspernatur impedit natus dolores maxime placeat
        molestiae veritatis dolor nesciunt, excepturi, veniam corrupti! Libero
        quam odit similique ipsam hic.
      </p>
    </div>
  );
}

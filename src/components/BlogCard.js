import React from 'react';
import "./BlogCard.scss";
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">30 Dec, 2022</p>
          <h5 className="title">A Beautiful Sunday Morning</h5>
          <p className="desc"> Its a great day to your day visiting our website </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

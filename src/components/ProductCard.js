import React from 'react';
import "./ProductCard.scss";
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const ProductCard = (props) => {

  // const grid = props;
  let location = useLocation();
  console.log( location );


  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${props.grid}` : "col-3"
        } `}
      >
        <Link>
          <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <Link>
                {" "}
                <img src="images/wish.svg" alt="wishlist" />{" "}
              </Link>
            </div>
            <div className="product-image">
              <img src="images/watch.jpg" alt="product" />
              <img src="images/watch-7.jpg" alt="product" />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">
                Classic watches 10 pack multi colored for students
              </h5>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">MWK10,000.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  {" "}
                  <img src="images/prodcompare.svg" alt="compare" />{" "}
                </Link>
                <Link>
                  {" "}
                  <img src="images/view.svg" alt="view" />{" "}
                </Link>
                <Link>
                  {" "}
                  <img src="images/add-cart.svg" alt="addCart" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${props.grid}` : "col-3"
        } `}
      >
        <Link>
          <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <Link>
                {" "}
                <img src="images/wish.svg" alt="wishlist" />{" "}
              </Link>
            </div>
            <div className="product-image">
              <img src="images/watch.jpg" alt="product" />
              <img src="images/watch-7.jpg" alt="product" />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">
                Classic watches 10 pack multi colored for students
              </h5>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">MWK10,000.00</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  {" "}
                  <img src="images/prodcompare.svg" alt="compare" />{" "}
                </Link>
                <Link>
                  {" "}
                  <img src="images/view.svg" alt="view" />{" "}
                </Link>
                <Link>
                  {" "}
                  <img src="images/add-cart.svg" alt="addCart" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;

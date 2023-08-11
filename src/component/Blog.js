import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <section className="BlogVisual">
        <h1>Fast Fashion, And Faster Fashion</h1>
        <p>by ANNY JOHNSON - October 8,2020</p>
        <img src="../img/blog_01.png" alt="" />
      </section>
      <div className="inner">
        <section className="BlogDesc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis.
            <br />
            <br />
            Nunc sed porta augue. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
            sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed
            quis mauris eget arcu facilisis consequat sed eu felis.
          </p>
          <img src="../img/blog_02.png" alt="" />
          <h3>Top trends</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero.
          </p>
          <ol>
            <li>● consectetur adipiscing elit. Aliquam placerat</li>
            <li>● Lorem ipsum dolor sit amet consectetur</li>
            <li>● sapien tortor faucibus augue</li>
            <li>
              ● a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis
            </li>
          </ol>
        </section>
        <section className="BlogShare">
          <div className="Tag">
            <b>Tags</b>
            <span>-Fashion, Style, Season</span>
          </div>
          <div className="Share">
            <b>Share - </b>
            <div>
              <Link to="">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
        </section>
        <section className="BlogReply">
          <h2>Leave a reply</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form>
            <input type="text" placeholder="Enter Your Name*" />
            <input type="email" placeholder="Enter Your Email*" />
            <input type="site" placeholder="Enter Your Site" />
            <div>
              <input type="checkbox" />
              <label>
                Save my name, email, and website in this browser for the next
                time I comment
              </label>
            </div>
            <p>Your Comment*</p>
            <textarea></textarea>
            <button>POST COMMENT</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Blog;

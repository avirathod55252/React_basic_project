import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInfoCircle,
  AiFillInstagram,
} from "react-icons/ai";
export const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> TechyStar </h1>
          <p> solution to all your problems </p>
        </main>
      </div>

      <div className="home2" id="graphics">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            praesentium! Consequuntur, eius suscipit incidunt modi animi rem
            harum deserunt labore sapiente dolore. Perspiciatis dicta vel,
            molestias quae mollitia eveniet at saepe nobis cumque.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1> who we are </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            obcaecati consectetur eius aspernatur similique laborum est dolorem,
            impedit nobis sunt vel quod! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam voluptate natus ratione inventore non. Quis
            harum ipsum dignissimos! Deleniti facere veritatis sed!
          </p>
        </div>
      </div>


      <div className="home4" id="brands">
        <div>
          <h1>Brands </h1>
          <article>

            <div style={{
              animationDelay:"0.3s",
            }}>
              <AiFillGoogleCircle/>
              <p>Google </p>
            </div>

            <div style={{
              animationDelay:"0.5s",
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon  </p>
            </div>

            <div style={{
              animationDelay:"0.7s",
            }}>
              <AiFillYoutube/>
              <p>Youtube </p>
            </div>

            <div style={{
              animationDelay:"0.9s",
            }}>
              <AiFillInstagram/>
              <p>Instagram </p>
            </div>

          </article>
        </div>
      </div>
    </>
  );
};
export default Home;

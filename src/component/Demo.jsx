import React from "react";
import "../App.css";
import "./Demo.css";
import img1 from "../image/Screenshot 2025-07-07 122608.png";
import img2 from "../image/Screenshot 2025-07-07 123030.png";
import img3 from "../image/Screenshot 2025-07-07 123546.png";
import img4 from "../image/Screenshot 2025-07-07 123726.png";
import img5 from "../image/Screenshot 2025-07-07 124015.png";
import img6 from "../image/Screenshot 2025-07-07 124155.png";
import img7 from "../image/Screenshot 2025-07-07 124401.png";
import img8 from "../image/Screenshot 2025-07-07 124631.png";
import img9 from "../image/Screenshot 2025-07-07 124830.png";
import img10 from "../image/Screenshot 2025-07-07 125119.png";
import img11 from "../image/Screenshot 2025-07-07 131514.png";

export const Demo = () => {
  return (
    <div className="demo">
      <h2
        className="text-center title"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-easing="ease-in-sine"
      >
        Projects
      </h2>
      <section className="work section" id="work">
        <h2
          className="section_title"
          data-aos="fade-right"
          data-aos-delay="550"
        >
          Trial Project
        </h2>
        <div className="work_container bd_grid ">
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-easing="ease-in-sine"
          >
            <img src={img1} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3>RPD Food </h3>
            </div>
            <div className="description">
              <p>
                This project is HTML, CSS, JavaScript, Tailwind CSS to develop a
                modern and responsive restaurant website with a menu section,
                about page, and contact form.
              </p>
              <button className="glow-on-hover">
                {/* <a
                  href="https://pramyagit.github.io/wishescard/"
                  target="_blank"
                > */}
                <a
                  href="https://pramyagit.github.io/restaurant-website/"
                  target="_blank"
                >
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-up"
            data-aos-delay="650"
            data-aos-easing="ease-in-sine"
          >
            <img src={img2} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3>Music </h3>
            </div>
            <div className="description">
              <p>
                Design a visually appealing landing page for a fictional
                product, including a hero section, features, testimonials, and
                pricing tables.
              </p>
              <button className="glow-on-hover">
                {/* <a
                  href="https://pramyagit.github.io/tic-tacgame/"
                  target="_blank"
                > */}
                <a
                  href="https://pramyagit.github.io/music-website/"
                  target="_blank"
                >
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="700"
            data-aos-easing="ease-in-sine"
          >
            <img src={img3} className="card-img-top" alt="" />

            <div className="html card-body">
              <h3> Restaurant </h3>
            </div>
            <div className="description">
              <p>
                This project to explore the Hotel website by using the
                html,css,javascript and its fully responsive website . It
                appears gallery section also.
              </p>
              <button className="glow-on-hover">
                <a
                  href="https://pramyagit.github.io/HOTEL-DEMO/"
                  target="_blank"
                >
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-up"
            data-aos-delay="750"
            data-aos-easing="ease-in-sine"
          >
            <img src={img4} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> Petshop </h3>
            </div>
            <div className="description">
              <p>
                This project to i created a Pet Shop Website using HTML and
                Bootstrap, focusing on a clean and responsive design. Using
                Bootstrap's and I ensured smooth navigation and
                mobile-friendliness.This project showcases my front-end
                development skills.
              </p>
              <button className="glow-on-hover">
                <a href="https://pramyagit.github.io/petshop/" target="_blank">
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-easing="ease-in-sine"
          >
            <img src={img5} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> To-Do List</h3>
            </div>
            <div className="description">
              <p>
                I built a To-Do List App using React.js, focusing on a simple
                and interactive UI. The app allows users to add, edit, delete,
                and mark tasks as completed. I used React state and hooks to
                manage tasks dynamically.
              </p>
              <button className="glow-on-hover">
                {/* <a
                  href="https://pramyagit.github.io/nametohexa/"
                  target="_blank"
                > */}
                <a
                  href="https://pramyagit.github.io/mylist-todo/"
                  target="_blank"
                >
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="850"
            data-aos-easing="ease-in-sine"
          >
            <img src={img6} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> Quiz </h3>
            </div>
            <div className="description">
              <p>
                Build a dynamic quiz with multiple-choice questions, a timer,
                and a score tracker by using HTML, CSS, JavaScript.
              </p>
              <button className="glow-on-hover">
                {/* <a
                  href="https://pramyagit.github.io/nametohexa/"
                  target="_blank"
                > */}
                <a href="https://pramyagit.github.io/quiz-/" target="_blank">
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="900"
            data-aos-easing="ease-in-sine"
          >
            <img src={img7} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> WeatherApp </h3>
            </div>
            <div className="description">
              <p>
                Build a dynamic quiz with multiple-choice questions, a timer,
                and a score tracker by using HTML, CSS, JavaScript.
              </p>
              <button className="glow-on-hover">
                {/* <a
                  href="https://pramyagit.github.io/nametohexa/"
                  target="_blank"
                > */}
                <a
                  href="https://pramyagit.github.io/weatherapp-react/"
                  target="_blank"
                >
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-easing="ease-in-sine"
          >
            <img src={img8} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> Gallery </h3>
            </div>
            <div className="description">
              <p>
                Build a responsive photo or project gallery that uses JavaScript
                for filtering and sorting and design by Tailwindcss.
              </p>
              <button className="glow-on-hover">
                <a
                  href="https://pramyagit.github.io/response-gallery/"
                  target="_blank"
                >
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-easing="ease-in-sine"
          >
            <img src={img9} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> Ecommerce</h3>
            </div>
            <div className="description">
              <p>
                This Ecommerce website to create a grid layout for product
                listings, complete with hover effects and responsive design.
              </p>
              <button className="glow-on-hover">
                <a
                  href="https://pramyagit.github.io/ecommerce-grid/"
                  target="_blank"
                >
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-easing="ease-in-sine"
          >
            <img src={img10} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> calcultaor</h3>
            </div>
            <div className="description">
              <p>
                Create a functional calculator with standard operations
                (addition, subtraction, etc.) and a clean UI.complete with hover
                effects and design by html,css,javascript.
              </p>
              <button className="glow-on-hover">
                <a
                  href="https://pramyagit.github.io/calculator/"
                  target="_blank"
                >
                  DEMO
                </a>
              </button>
            </div>
          </div>
          <div
            className="work_img card"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-easing="ease-in-sine"
          >
            <img src={img11} className="card-img-top" alt="" />
            <div className="html card-body">
              <h3> Employee-Dashboard</h3>
            </div>
            <div className="description">
              <p>
                Create a functional and formulas with standard operations
                (addition, subtraction, etc.) and overall information in a
                dashboard .complete with hover effects and design by Excel.
              </p>
              <button className="glow-on-hover">
                <a
                  href="https://github.com/Pramyagit/excel-dashboard/blob/main/Employee_Data.xlsx"
                  target="_blank"
                >
                  DEMO
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import p1 from "../asserts/images/p5.jpg"
import p2 from "../asserts/images/p2.jpg"
import p3 from "../asserts/images/p4.jpg"
import p4 from "../asserts/images/p3.jpg"
import p5 from "../asserts/images/p1.jpg"
import p6 from "../asserts/images/p6.jpg"
import p7 from "../asserts/images/p7.jpg"
import p8 from "../asserts/images/p8.jpg"


function Popular() {
    return (

        <div class="popular">
            <h1 class="popular__title">Most Popular</h1>
            <p class="popular__subtitle">Pick the best fit</p>
            <div class="popular__container">
            <div class="course-card">
                <img src={p1} alt=""></img>
                <h3>2024 Robotics AI Masterclass</h3>
                <p>Col stelle</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>799 <del>1499</del></p>
            </div>
            <div class="course-card">
                <img src={p2} alt=""></img>
                <h3> 2024 Cloud Computing Course</h3>
                <p>Col stelle</p>
                <p>3.8 ⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>
            <div class="course-card">
                <img src={p3} alt=""></img>
                <h3>Full Stack Web Development 2024</h3>
                <p>Col stelle</p>
                <p>4.4 ⭐⭐⭐⭐</p>
                <p>799 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={p4} alt=""></img>
                <h3>Graphic Designing Course</h3>
                <p>Col stelle</p>
                <p>4 ⭐⭐⭐⭐</p>
                <p>999 <del>1299</del></p>
            </div>
            <div class="course-card">
                <img src={p5} alt=""></img>
                <h3>2024 Java Programming Course</h3>
                <p>Col stelle</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p>799 <del>1499</del></p>
            </div>
            <div class="course-card">
                <img src={p6} alt=""></img>
                <h3>Cybersecurity Masterclass 2024</h3>
                <p>Col stelle</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>
            <div class="course-card">
                <img src={p7} alt=""></img>
                <h3>2024 Photoshop Designing</h3>
                <p>Col stelle</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>2199 <del>2499</del></p>
            </div>
            <div class="course-card">
                <img src={p8} alt=""></img>
                <h3>Mega Digital Marketing Masterclass</h3>
                <p>Col stelle</p>
                <p>4 ⭐⭐⭐⭐</p>
                <p>999 <del>1999</del></p>
            </div>
            </div>


        </div>
    )
}

export default Popular
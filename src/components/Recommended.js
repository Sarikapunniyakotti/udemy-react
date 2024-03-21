import c1 from "../asserts/images/c1.jpg"
import c2 from "../asserts/images/c2.jpg"
import c3 from "../asserts/images/c3.jpg"
import c4 from "../asserts/images/c4.jpg"
function Recommended()
{
    return(

        <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={c1} alt=""></img>
                <h3>2024 Python Data VisualisationMasterclass</h3>
                <p>Col stelle</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>799 <del>1499</del></p>
            </div>
            <div class="course-card">
                <img src={c2} alt=""></img>
                <h3>Web Development Bootcamp 2024</h3>
                <p>Col stelle</p>
                <p>3.7 ⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>
            <div class="course-card">
                <img src={c3} alt=""></img>
                <h3>UI/UX Designing with Figma</h3>
                <p>Col stelle</p>
                <p>4.3 ⭐⭐⭐⭐</p>
                <p>999 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={c4} alt=""></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col stelle</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>999 <del>1999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommended
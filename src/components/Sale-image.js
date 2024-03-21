import saleimage from "../asserts/images/sale-image.jpg"

function Saleimage()
{
    return(
        <div class="sale-image">
        <img src={saleimage} alt=""></img>
        <div class="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top courses for just 499.Just one day sale but lifetime to learn.</p>
        </div>
    </div>
    )
}

export default Saleimage
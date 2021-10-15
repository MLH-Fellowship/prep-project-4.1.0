import "./itemCard.css";

const itemCard = (props) => {
    return (
        <div class="container">
            <h1>Cards</h1>
            <div class="card">
                <div class="imgBx">
                    <img src="https://assets.codepen.io/4164355/shoes.png"/>
                </div>
                <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="size">
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div class="color">
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default itemCard;
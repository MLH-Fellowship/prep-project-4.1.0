import "./card.css";
import requiredItem from '../RequiredItems/index'

const Card = (props) => {
 const item = requiredItem[props.results.weather[0].main].items;
 let itemIcon = [] 
 for(let i = 0; i < item.length; i++) {
    itemIcon.push(`./images/${item[i]}.png`);
 }
   return (
      <div class="card__section">
      <div class="container">
        <div class="card">
            <div class="imgBx">
                <img src={itemIcon[0]}/>
            </div>
            <div class="contentBx">
                    <h3>{item[0]}</h3>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="card">
            <div class="imgBx">
              <img src={itemIcon[1]}/>
            </div>
            <div class="contentBx">
                    <h3>{item[1]}</h3>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="card">
            <div class="imgBx">
                <img src={itemIcon[2]}/>
            </div>
            <div class="contentBx">
                    <h3>{item[2]}</h3>
            </div>
        </div>
      </div>
      </div>
   );
 };
  export default Card;
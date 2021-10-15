import "./card.css";

const Card = (props) => {
 const requiredItem = {
    Thunderstorm : {
     items: ['Raincoat', 'Flashlight', 'Gloves'],
     message: `Looks like there is a thunderstorm don't got outside!`
    },
    Drizzle : {
     items: ['Trench Coat', 'Umbrella', 'Raincoat'],
     message: 'Drizzle happiness wherever you go!'
    },
    Rain : {
     items: ['Raincoat', 'Umbrella', 'Towels'],
     message: 'Please wear your raincoat!'
    },
    Snow : {
     items: ['Sweater', 'Jacket', 'Gloves'],
     message: `Nature is full of genius, full of divinity; so that not a snowflake escapes its fashioning hand.!`
    },
    Mist : {
     items: ['Flashlight', 'Gloves', 'Goggles'],
     message: 'You can walk in a dream while you are awake: Just walk in the misty morning of a forest!'
    },
    Smoke : {
     items: ['Water', 'Sunglasses', 'Mask'],
     message: 'You can walk in a dream while you are awake: Just walk in the smoky morning of a forest!'
    },
    Haze : {
     items: ['Flashlight', 'Gloves', 'Goggles'],
     message: 'You can walk in a dream while you are awake: Just walk in the misty morning of a forest!'
    },
    Dust : {
     items: ['Mask', 'Gloves', 'Goggles'],
     message: 'You can walk in a dream while you are awake: Just walk in the misty morning of a forest!'
    },
    Fog : {
     items: ['Mask', 'Gloves', 'Goggles'],
     message: 'You can walk in a dream while you are awake: Just walk in the misty morning of a forest!'
    },
    Sand : {
     items: ['Flashlight', 'Mask', 'Goggles'],
     message: 'You can walk in a dream while you are awake: Just walk in the misty morning of a forest!'
    },
    Ash : {
     items: ['Mask', 'Goggles', 'Flashlight'],
     message: 'You can walk in a dream while you are awake: Just walk in the misty morning of a forest!'
    },
    Squall : {
     items: ['Cap', 'Sunglasses', 'Sunscream'],
     message: 'Bring your umbrella!'
    },
    Tornado : {
     items: ['Raincoat', 'Flashlight', 'Gloves'],
     message: `Looks like there is a tornado outside don't got outside!`
    },
    Clear : {
     items: ['Sunglasses', 'Watch', 'Backpack'],
     message: 'Great clear weather outside. Perfect day to go out!'
    },
    Clouds : {
     items: ['Cap', 'Sunglasses', 'Sunscream'],
     message: 'Looks like the weather is cloudy please take a umbrella for precaution!'
    },
 }
 const item = requiredItem[props.results.weather[0].main].items;
 let itemIcon = [] 
 for(let i = 0; i < item.length; i++) {
    itemIcon.push(`./images/${item[i]}.png`);
 }
   return (
    <div class="section">
      <h1>Don't forget to bring your</h1>
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
    </div>
   );
 };
  export default Card;
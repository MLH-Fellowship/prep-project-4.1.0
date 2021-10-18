import "../background.css"
import "./thunderstrom.css"
const ThunderStromBg = ({ children}) => {
    return(
<div id="ag-sparks" class="background">
  <div class="ag-lightning"></div>
  {children}
</div>
    )
}

export default ThunderStromBg
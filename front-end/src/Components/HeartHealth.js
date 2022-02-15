import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  if (snackHealth) {
  return <h4><img className = 'heart' scr = {heartSolid} alt = 'healthy Food' /></h4> 
} else { 
  return <h4><img className = 'heart' scr = {heartOutline} alt = 'unhealthy Food' /></h4> 
}
}

export default HeartHealth;

import './index.less';

function Logo(props) {
  return (
    <img 
      src={props.img} 
      className={`logo ${props.modifier}`} 
      alt={props.imgName} /> 
  );
}
  
export default Logo;
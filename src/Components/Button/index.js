import './index.less';

function Button(props) {
  return (
   <button className={`button ${props.modifier}`} href={props.link}>
    {props.icon && (
      <i className={`button__icon ${props.iconModifier}`}>
        {props.icon}
      </i>
    )}
    {props.textBold && (
      <b className={`button__text button__text--bold`}>
        {props.textBold}
      </b>
    )}
    {props.textRegular && (
      <span className={`button__text`}>
        {props.textRegular}
      </span>
    )}
    {props.textBold2 && (
      <b className={`button__text button__text--bold`}>
        {props.textBold2}
      </b>
    )}
   </button>
  );
}
  
export default Button;
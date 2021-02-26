import './index.less';


function Card({img2, cardModifier,visibleState, title, subtitle, text,  element }) {
  return (
  <section className={`card card--${cardModifier}`} visible-state={`${visibleState}`}>
    {img2}
    {title && ( 
      <h1 className="card__title">{title}</h1> 
    )}
    {subtitle && (
      <h3 className="card__subtitle">{subtitle}</h3>
    ) }
    {text && (
      <p className="card__text">{text}</p>
    ) }
    {element }
  </section>
  );
}
  
export default Card;
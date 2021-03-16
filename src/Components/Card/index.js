import React from "react";
import './index.less';


function Card({id, img, cardModifier,visibleState, title, subtitle, text,  element, displayState, cardElWrapperModifier }) {
  return (
  <section id={id} className={`card ${cardModifier}`} visible-state={`${visibleState}`} display={`${displayState}`}>
    {img}
    {title && ( 
      <h1 className="card__title">{title}</h1> 
    )}
    {subtitle && (
      <h3 className="card__subtitle">{subtitle}</h3>  
    ) }
    {text && (
      <p className="card__text">{text}</p>
    ) }
    {element && (
      <div className={`card__element-wrapper ${cardElWrapperModifier}`}>
        {element}
      </div>
    )}
  </section>
  );
}
  
export default Card;
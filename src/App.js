import logo from './RDB-posiLogo.svg';
import './App.css';
import logoNega from './RDB-negaLogo.svg';
import Card from'./Components/Card';
import Logo from'./Components/Logo';
import Button from './Components/Button';
import { useState } from 'react';


const App = () => {

  const [cardStyle, setCardStyle ] = useState('');

  const toggleClass = () => {
    setCardStyle (
      cardStyle === '' ? 'card--primary' : ''
    );
  }

  const whyElements = <Button
    modifier='button--negative button--negative--primary'
    textBold="Toggle "
    textRegular="Class"
    onClick={toggleClass}
  />

  const whatElements = <>
  <Button
    modifier='button--disable'
    textRegular="Move "
    textBold2="Up"
  />
  <Button
    modifier='button--primary'
    textBold="Next "
    textRegular="content"
  />
  </>

  const howElements = <>
  <Button
    modifier='button--negative button--negative--primary'
    textBold="Next "
    textRegular="content"
  />
  </>

  return (
    <div className="app">
      <Card
        id="why"
        cardModifier= {cardStyle}
        img={<Logo img={logo} modifier='logo--negative-bk' />}
        title='Why BEM ?'
        subtitle='"There are only two hard problems in Computer Science: cache invalidation and naming things"'
        text='Phil Karlton'
        element={whyElements}
      ></Card>
    
      <Card
        id="what"
        cardModifier='card--white'
        img={ <Logo img={logo} ></Logo>}
        title='BEM • What ?'
        subtitle='block__element--modifier'
        text='Modularity, Reusability, Structure'
        display={'hide'}
        element={whatElements}
      ></Card>

      <Card
        id="where"
        img={ <Logo img={logo}></Logo>}
        title='BEM • Where'
        subtitle='Design system'
        text='Typography, color table, components, microcomponents'
        element=''
      ></Card>

      <Card
          id="how"
          cardModifier='card--dark'
          img={ <Logo img={logoNega}></Logo>}
          title='BEM • How'
          subtitle='Semantics, naming consistency, selector specificity, exceptions'
          text='Component	c-	c-card c-checklist	Form the backbone of an application and contain all of the cosmetics for a standalone component.
          Layout module	l-	l-grid l-container	These modules have no cosmetics and are purely used to position c- components and structure an application’s layout.
          Helpers	h-	h-show h-hide	These utility classes have a single function, often using !important to boost their specificity. (Commonly used for positioning or visibility.)
          States	is- has-	is-visible has-loaded	Indicate different states that a c- component can have. More detail on this concept can be found inside problem 6 below, but
          JavaScript hooks	js-	js-tab-switcher	These indicate that JavaScript behavior is attached to a component. No styles should be associated with them; they are purely used to enable easier manipulation with script.'
          element={howElements}
      ></Card>

    </div>
  );

  
}

export default App;

import logo from './RDB-posiLogo.svg';
import './App.css';
import logoNega from './RDB-negaLogo.svg';
import Card from'./Components/Card';
import Logo from'./Components/Logo';
import Button from './Components/Button';

const whyElements = <Button
  modifier='button--negative button--negative--primary'
  textBold="Next "
  textRegular="content"
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

const howElements = <Button
  modifier='button--negative button--negative--primary'
  textBold="Next "
  textRegular="content"
/>

function App() {
  return (
    <div className="app">
    <Card
      id="why"
      cardModifier='card--primary'
      img={<Logo 
        img={logo} 
        modifier='logo--negative-bk'
      />}
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
        id="how"
        cardModifier='card--dark'
        img={ <Logo img={logoNega}></Logo>}
        title='BEM • How'
        subtitle='Semantics, naming consistency, selector specificity, exceptions'
        text='Clear project overview to define properly the right hierarchy'
        element={howElements}
    ></Card>

    <Card
      id="where"
      img={ <Logo img={logo}></Logo>}
      title='BEM • Where'
      subtitle='Design system'
      text='Typography, color table, components, microcomponents'
      element=''
    ></Card>
    </div>
  );
}

export default App;

import logo from './RDB-posiLogo.svg';
import logoNega from './RDB-negaLogo.svg';
import Card from'./Components/Card';
import Logo from'./Components/Logo';
import './App.css';
import Button from './Components/Button';


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
      title='Why'
      subtitle='"There are only two hard problems in Computer Science: cache invalidation and naming things"'
      text='Phil Karlton'
      element={<Button
        modifier='button--negative button--negative--primary'
        textBold="Next "
        textRegular="content"
      />}
    ></Card>
  
    <Card
      id="what"
      cardModifier='card--white'
      img={ <Logo img={logo} ></Logo>}
      title='BEM • What'
      subtitle='block__element--modifier'
      text='Modularity, Reusability, Structure'
      display={'hide'}
      element={<>
      <Button
        modifier='button--disable'
        textRegular="Back "
        textBold2="Up"
      />
      <Button
        modifier='button--primary'
        textBold="Next "
        textRegular="content"
      />
      </>}
    ></Card>

    <Card
        id="how"
        cardModifier='card--dark'
        img={ <Logo img={logoNega}></Logo>}
        title='BEM • How'
        subtitle='block__element--modifier'
        text='Modularity, Reusability, Structure'
        element=''
    ></Card>

    <Card
      id="where"
      img={ <Logo img={logo}></Logo>}
      title='BEM • Where'
      subtitle='block__element--modifier'
      text='lorem ipsum'
      element=''
    ></Card>
    </div>
  );
}

export default App;

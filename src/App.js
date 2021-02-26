import logo from './RDB-posiLogo.svg';
import logoNega from './RDB-negaLogo.svg';
import Card from'./Components/Card';
import Logo from'./Components/Logo';
import './App.css';


function App() {
  return (
    <div className="app">
    <Card
      img2={ <Logo img={logo} modifier='logo--negative-bk'></Logo>}
      cardModifier='card--primary'
      title='BEM • Why'
      subtitle='"There are only two hard problems in Computer Science: cache invalidation and naming things"'
      text='Phil Karlton'
    ></Card>
  
    <Card
      cardModifier='white'
      img={logo}
      title='BEM • What'
      subtitle='block__element--modifier'
      text='Modularity, Reusability, Structure'
      element=''
    ></Card>

    <Card
        cardModifier='dark'
        img={logoNega}
        title='BEM • How'
        subtitle='block__element--modifier'
        text='Modularity, Reusability, Structure'
        element=''
    ></Card>

    <Card
      img={logo}
      title='BEM • Where'
      subtitle='block__element--modifier'
      text='lorem ipsum'
      element=''
    ></Card>
    </div>
  );
}

export default App;

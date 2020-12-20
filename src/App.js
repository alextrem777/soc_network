
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

//npm start

//переменной APP присваевается стрелочная функция, которая return возвращает
//JSX разметку (компоненту)
//в функцию мы засовываем обьект (параметр) = props!

const  App =()=>{    //создаем тег App <App />
  return (
      <div className={'app-wrapper'}>
          {/*название компоненты (ее тег)*/}

          <Header />
          <Navbar />
          <Profile />


    </div>
  )
}

export default App;

import s from './Navbar.module.css'; //полезная штука класс classess для удобного подключения item navbar из стилей

const Navbar =()=>{
    return (
        <nav className={s.navbar}>
            <div className={`${s.item} ${s.big}`}>
                <a>Профиль</a>
            </div>
            <div className={s.item}>
                <a>Сообщения</a>
            </div>
            <div className={s.item}>
                <a>Новости</a>
            </div>
            <div className={s.item}>
                <a>Музыка</a>
            </div>
            <div className={s.item}>
                <a>Настройки</a>
            </div>
        </nav>)
}

export default Navbar;

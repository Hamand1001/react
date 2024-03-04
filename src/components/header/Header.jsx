import './Header.css'
export default function Header(){
    return (
        <>
        <header>
            <ul className='menu-list'>
                <li><b><a href="" className="link">Azbuka Fkusa</a></b></li>
                |
                <li><a href="" className="link">Главная</a></li>
                <li><a href="" className="link">Каталог</a></li>
                |
                <li><a href="" className="link">Инофрмация</a></li>
            </ul>
            <ul className="menu-list">
                <li><a href="" className="button">Sign in</a></li>
                <li><a href="" className="button">Sign in</a></li>
            </ul>
        </header>
        </>
    )
}
import { MdLocationOn, MdPhone } from 'react-icons/md';
import Footer from './Main/Footer';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <header>
        <div className="topBar">
          <p>
            <span><MdLocationOn /></span>  Toshkent 100027, Botir Zokirov ko'chasi 1 uy
          </p>
          <p><span><MdPhone /></span> +998 77 200 00 00</p>
        </div>
        <nav className="nav">

        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;

// import { MdLocationOn, MdPhone } from 'react-icons/md';
import Footer from "./Main/Footer";
import {
  MdArrowCircleDown,
  MdArrowDropDown,
  MdClose,
  MdLocationOn,
  MdMenu,
  MdPhone,
  MdRemoveCircle,
  MdSearch,
  MdSearchOff,
} from "react-icons/md";
import Logo from "./assets/imgs/logo-estrada.png";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { IoMenu, IoMoonOutline } from "react-icons/io5";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { PiSunDimLight } from "react-icons/pi";
import AISearchBar from "./components/searchAi";
import { FaSearch } from "react-icons/fa";
import TranslateWidget from "./lang";


const Layout = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);




  const navLinks = [
    {
      id: 0,
      linkName: { link: "Bosh sahifa", path: "/" },
      linkList: null,
    },
    {
      id: 1,
      linkName: "Institut",

      linkList: [
        {
          nestedLinkName: "Tuzilma",
          nestedLinks: [
            {
              link: "Institut tuzilmasi",
              path: "/Institut/Tuzilma",
            },
            {
              link: "Tarkibiy tuzilma",
              path: "/Activity/Activity",
            },
            { link: "Fakultetlar va kafedralar", path: "/Institut/fakultet" },
          ],
        },
        [
          { link: "Rahbariyat", path: "/Institut/Rahbariyat" },
          { link: "Institut tarixi", path: "/Institut/Tarix" },
          { link: "Me'yoriy-huquqiy hujjatlar", path: "/Institut/Meyoriy Huquqiy Hujjatlar" },
          { link: "Xalqaro hamkorlik", path: "/Institut/Xalqaro hamkorlik" },
          { link: "Foydali havolalar", path: "/Institut/Foydali havolalar" },
          { link: "Botir Zokirov hayoti va ijodi", path: "/Institut/Botir Zokirov hayoti va ijodi" },
        ],
      ],
    },
    {
      id: 2,
      linkName: "Ta'lim",
      linkList: [
        [
          { link: "Bakalavr", path: "/Talim/Bakalavr" },
          { link: "Magistratura", path: "/Talim/Magister" },
          { link: "Dars jadvali", path: "/Talim/DarsJadvali" },
          { link: "Bitiruvchilar", path: "/Talim/Bitiruvchilar" },
        ],
      ],
    },
    {
      id: 3,
      linkName: "Ilmiy faoliyat",
      linkList: [
        [
          { link: "Ilmiy tadqiqot faoliyati", path: "/Activity/Activity" },
          { link: "Ilmiy kengashlar", path: "/Activity/ActiveCouncil" },
          { link: "Ilmiy jurnallar", path: "/Activity/Article" },
          { link: "Ilmiy loyihalar", path: "/Activity/Projects" },
        ],
      ],
    },
    {
      id: 4,
      linkName: "Axborot xizmati",
      linkList: [
        [
          { link: "Yangiliklar", path: "/News/Allnews" },
          { link: "Tadbirlar", path: "/News/Events" },
          { link: "Media galereyalar", path: "/News/Galery" },
          { link: "Bog'lanish", path: "/News/Connect" },
          { link: "Qabul 2025-natijalari", path: "/News/Documents" },
        ],
      ],
    },
    {
      id: 5,
      linkName: "Qabul-2025",
      linkList: [
        [
          { link: 'Qabul "Call Centre"', path: "/Qabul/Callcenter" },
          { link: "Qabul kvotalari (BA & MA)", path: "/Qabul/Qabulkvotalari" },
          { link: "Xorijiy fuqarolar uchun qabul", path: "/Qabul/XorijiyStudentlar" },
          { link: "Qabul dasturlari", path: "/Qabul/QabulDasturlari" },
          {
            link: "Kasbiy(Ijodiy) imtihonlar translatsiyasi",
            path: "/Qabul/Kuzatuv",
          },
        ],
      ],
    },
     {
            id: 6,
            linkName: "Talabalar",
            linkList: [
                [
                    {link:"Ekofaol talabalar", path: '/Students/Ekostudents'},
                    {link:"Grant uchun ariza", path: '/Students/Grand'},
                    {link:"Talaba yutuqlarini jo'natish", path: '/Students/Yutuqlar'},
                    {link:"Grant uchun test", path: '/Students/Test'},
                ]
            ]
        },
   {
    id: 7,
    linkName: "Tarix",
   linkList: [
                [
                    {link:"Tarixiy yillar", path: '/History/History'},
                ]
            ]
}
  ];

  console.log(navLinks[1].linkList[0].nestedLinks);

  const [menu, setMenu] = useState(true);

  const menubar = (bool) => {
    setMenu(bool);
  };

  const [scrSearch, setScrSearch] = useState(false)


  return (
    <div className="container">
      <header>
        <div className="topBar">
          <p>
            <span className="searchIco" onClick={()=>setScrSearch(true)}><FaSearch/></span>
            <div className={`searchBox ${scrSearch ? "screen" : "hide"}`}>
              <span className="searchIco" onClick={()=>setScrSearch(false)}><MdClose/></span>
              <AISearchBar/>
            </div>
          </p>
              
          <p>
            <span>
              <MdLocationOn />
            </span>{" "}
            Toshkent 100027, Botir Zokirov ko'chasi 1 uy
            <span>
              <MdPhone />
            </span>{" "}
            +998 77 200 00 00
          </p>
        </div>
        <nav className="nav">
          <div className="col">
            <div className="logo">
              <img src={Logo} alt="" />
              <h2>
                O'zbekiston Davlat KOnservatoriyasi huzuridagi <br />
                Botir Zokirov nomidagi <br />
                Milliy Estrada san'ati instituti
              </h2>
            </div>
          </div>
          <div className="col">
            <div className="menuBar">
              <span className="menuIcon" onClick={() => menubar(false)}>
                <MdMenu />
              </span>
              <div className={`sideBarMenu ${menu ? "hide" : "scr"}`}>
                <span className="close" onClick={() => menubar(true)}>
                  <MdClose />
                </span>
                <ul className="navLinks">
                  <Nav arr={navLinks} />
                </ul>
              </div>
            </div>
            <ul className="navLinks rwdNav">
              <Nav arr={navLinks} />
            </ul>
          </div>
          <div className={`nav-border ${menuOpen ? "open" : ""}`}>
      <div className="nav-bor-menu">
        <span onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <ImCancelCircle /> : <IoMenu />}
        </span>
      </div>

      {menuOpen && (
        <div className="nav-me-list">
         <button
  className="sun_mode"
  onClick={() => setDarkMode(!darkMode)}
>
  <p>
    {darkMode ? <PiSunDimLight /> : <span className="moon"><IoMoonOutline /></span>}
  </p>
</button>
          <button><TranslateWidget/></button>
        </div>
      )}
    </div>
        </nav>
      </header>
      <main className="darkmain">
        <Outlet />
      </main>
      {/* shu childrenga Komponents keladi, avtomatik layout o'zgarmay tururadi. */}
      <footer className="fotter">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

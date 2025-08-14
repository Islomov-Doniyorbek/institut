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
import cookie from "react-cookies";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

const Layout = () => {
const {t }=useTranslation()
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    cookie.save("tilTanish", lang, { path: "/" });
  };
  
  
  // Tillarning navbati
  const languages = ["uz", "ru", "en"];
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  
  const handleLanguageSwitch = () => {
    const nextIndex = (currentLangIndex + 1) % languages.length;
    setCurrentLangIndex(nextIndex);
    changeLanguage(languages[nextIndex]);
    setMenuOpen(false); // menyuni yopadi
  };

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
      linkName: { link: t("home"), path: "/" },
      linkList: null,
    },
    {
      id: 1,
      linkName: t("institute"),

      linkList: [
        {
          nestedLinkName:t("structure"),
          nestedLinks: [
            {
              link: t("institute_structure"),
              path: "/Institut/Tuzilma",
            },
            {
              link: t("faculty_structure"),
              path: "/Activity/Activity",
            },
            { link:  t("departments"), path: "/Institut/fakultet" },
          ],
        },
        [
          { link:  t("management"), path: "/Institut/Rahbariyat" },
          { link: t("history"), path: "/Institut/Tarix" },
          { link:  t("legal_documents"), path: "/Institut/Meyoriy Huquqiy Hujjatlar" },
          { link:  t("international"), path: "/Institut/Xalqaro hamkorlik" },
          { link: t("useful_links"), path: "/Institut/Foydali havolalar" },
          { link:t("botir_life"), path: "/Institut/Botir Zokirov hayoti va ijodi" },
        ],
      ],
    },
  {
    id: 2,
    linkName: t("education"),
    linkList: [
      [
        { link: t("bachelor"), path: "/Talim/Bakalavr" },
        { link: t("master"), path: "/Talim/Magister" },
        { link: t("schedule"), path: "/Talim/DarsJadvali" },
        { link: t("graduates"), path: "/Talim/Bitiruvchilar" }
      ]
    ]
  },
  {
    id: 3,
    linkName: t("scientific"),
    linkList: [
      [
        { link: t("research"), path: "/Activity/Activity" },
        { link: t("councils"), path: "/Activity/ActiveCouncil" },
        { link: t("journals"), path: "/Activity/Article" },
        { link: t("projects"), path: "/Activity/Projects" }
      ]
    ]
  },
  {
    id: 4,
    linkName: t("info_service"),
    linkList: [
      [
        { link: t("news"), path: "/News/Allnews" },
        { link: t("events"), path: "/News/Events" },
        { link: t("media_gallery"), path: "/News/Galery" },
        { link: t("contact"), path: "/News/Connect" },
        { link: t("admission_results"), path: "/News/Documents" }
      ]
    ]
  },
  {
    id: 5,
    linkName: t("admission_2025"),
    linkList: [
      [
        { link: t("call_center"), path: "/Qabul/Callcenter" },
        { link: t("admission_quotas"), path: "/Qabul/Qabulkvotalari" },
        { link: t("foreign_students"), path: "/Qabul/XorijiyStudentlar" },
        { link: t("admission_programs"), path: "/Qabul/QabulDasturlari" },
        { link: t("exam_translations"), path: "/Qabul/Kuzatuv" }
      ]
    ]
  },
  {
    id: 6,
    linkName: t("students"),
    linkList: [
      [
        { link: t("eco_students"), path: "/Students/Ekostudents" },
        { link: t("grant_application"), path: "/Students/Grand" },
        { link: t("send_achievements"), path: "/Students/Yutuqlar" },
        { link: t("grant_test"), path: "/Students/Test" }
      ]
    ]
  },
  {
    id: 7,
    linkName: t("history"),
    linkList: [
      [
        { link: t("historical_years"), path: "/History/History" }
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
          {t("ins_location")}
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
               {t("sentence_logo")}<br />
               {t("sentence_logo2")} <br />
           {t("sentence_logo3")}
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
          {menuOpen ? <ImCancelCircle /> :<GrLanguage />}
        </span>
      </div>

      {menuOpen && (
   <div className="nav-me-list">
   {/* Dark / Light mode */}
   <button
     className="sun_mode"
     onClick={() => setDarkMode(!darkMode)}
   >
     <p>
       {darkMode ? (
         <PiSunDimLight />
       ) : (
         <span className="moon">
           <IoMoonOutline />
         </span>
       )}
     </p>
   </button>
 
   {/* Til almashuvchi bitta tugma */}
   <button onClick={handleLanguageSwitch}>
     {languages[currentLangIndex].toUpperCase()}
   </button>
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









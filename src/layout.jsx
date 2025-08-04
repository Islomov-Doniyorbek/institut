// import { MdLocationOn, MdPhone } from 'react-icons/md';
import Footer from "./Main/Footer";
import {
  MdArrowCircleDown,
  MdArrowDropDown,
  MdClose,
  MdLocationOn,
  MdMenu,
  MdPhone,
} from "react-icons/md";
import Logo from "./assets/imgs/logo-estrada.png";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "./components/Nav";


const Layout = () => {




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
      linkName: "Syurpriz",
      linkList: null,
    },
  ];

  console.log(navLinks[1].linkList[0].nestedLinks);

  const [menu, setMenu] = useState(true);

  const menubar = (bool) => {
    setMenu(bool);
  };

  return (
    <div className="container">
      <header>
        <div className="topBar">
          <p>
            <span>
              <MdLocationOn />
            </span>{" "}
            Toshkent 100027, Botir Zokirov ko'chasi 1 uy
          </p>
          <p>
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
        </nav>
      </header>
      <main>
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

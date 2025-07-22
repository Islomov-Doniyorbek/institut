// import { MdLocationOn, MdPhone } from 'react-icons/md';
import Logo from './assets/imgs/logo-estrada-uz-d.png'
import Footer from './Main/Footer';
import { MdArrowCircleDown, MdArrowDropDown, MdClose, MdLocationOn, MdMenu, MdPhone } from 'react-icons/md';
// import Logo from './assets/imgs/logo-estrada.png'
import { useState } from 'react';
// import { useState } from 'react';

const Layout = ({ children }) => {
    const navLinks = [
        {
            id: 0,
            linkName: "Bosh sahifa",
            linkList: null
        },
        {
            id: 1,
            linkName: "Institut",
            linkList: [
                {
                    nestedLinkName: "Tuzilma",
                    nestedLinks: [
                        "Institut tuzilmasi",
                        "Tarkibiy tuzilma",
                        "Fakultetlar va kafedralar"
                    ]
                },
                ["Rahbariyat",
                "Institut tarixi",
                "Me'yoriy-huquqiy hujjatlar",
                "Xalqaro hamkorlik",
                "Foydali havolalar",
                "Botir Zokirov hayoti va ijodi"]
            ]
        },
        {
            id: 2,
            linkName: "Ta'lim",
            linkList: [
                ["Bakalavr",
                "Magistratura",
                "Dars jadvali ",
                "Bitiruvchilar"]
            ]
        },
        {
            id: 3,
            linkName: "Ilmiy faoliyat",
            linkList: [
                ["Ilmiy tadqiqot faoliyati",
                "Ilmiy kengashlar",
                "Ilmiy jurnallar ",
                "Ilmiy loyihalar"]
            ]
        },
        {
            id: 4,
            linkName: "Axborot xizmati",
            linkList: [
                ["Yangiliklar",
                "Tadbirlar",
                "Media galereyalar",
                "Bog'lanish",
                "Qabul 2025-natijalari"
                ]
            ]
        },
        {
            id: 5,
            linkName: "Qabul-2025",
            linkList: [
                ["Qabul \"Call Centre\"",
                "Qabul kvotalari (BA & MA)",
                "Xorijiy fuqarolar uchun qabul",
                "Qabul dasturlari",
                "Kasbiy(Ijodiy) imtihonlar translatsiyasi"
                ]
            ]
        },
        {
            id: 6,
            linkName: "Talabalar",
            linkList: [
                ["Ekofaol talabalar",
                "Grant uchun ariza",
                "Talaba yutuqlarini jo'natish",
                "Grant uchun test"
                ]
            ]
        },
    ]

    console.log(navLinks[1].linkList[0].nestedLinks);
    
    const [menu, setMenu] = useState(true)

    const menubar = bool => {
        setMenu(bool)
    }

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
            <div class="col">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <h2>O'zbekiston Davlat KOnservatoriyasi huzuridagi <br/>
                        Botir Zokirov nomidagi <br/>
                        Milliy Estrada san'ati instituti
                    </h2>
                </div>
            </div>
            <div class="col">
                <div class="menuBar">
                   <span className='menuIcon' onClick={() => menubar(false)}>
                    <MdMenu />
                    </span>
                    <div class={`sideBarMenu ${menu ? "hide" : "scr"}`}>
                            <span className='close' onClick={() => menubar(true)}>
                                <MdClose />
                            </span>
                            <ul className="navLinks">
                        {
                            navLinks.map(item => (
                                <li key={item.id} className='linkBlock'>
                                    <strong>{item.linkName} <MdArrowDropDown/> </strong>
                                    {
                                        item.linkList ? (
                                            <ul className='links'>
                                                {
                                                    item.linkList.map((itm, i) => {
                                                        if (typeof itm === 'object' && !Array.isArray(itm)) {
                                                            return (
                                                                <li className='nesting' key={i}>
                                                                {itm.nestedLinkName} <MdArrowDropDown/>
                                                                    <ul className='dropdown'>
                                                                            {itm.nestedLinks.map((link, idx) => (
                                                                                <li key={idx}>{link}</li>
                                                                            ))}
                                                                    </ul>
                                                                </li>
                                                            );
                                                        } else if (Array.isArray(itm)) {
                                                            return (
                                                                <>
                                                                    {itm.map((link, idx) => (
                                                                        <li key={idx}>{link}</li>
                                                                    ))}
                                                                </>
                                                            );
                                                        } else {
                                                            return null;
                                                        }
                                                    })
                                                }
                                            </ul>
                                        ) : null
                                    }
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                </div>
                <ul className="navLinks rwdNav">
                    {
                        navLinks.map(item => (
                            <li key={item.id} className='linkBlock'>
                                <strong>{item.linkName} <MdArrowDropDown/></strong>
                                {
                                    item.linkList ? (
                                        <ul className='links'>
                                            {
                                                item.linkList.map((itm, i) => {
                                                    if (typeof itm === 'object' && !Array.isArray(itm)) {
                                                        return (
                                                            <li className='nesting' key={i}>
                                                            {itm.nestedLinkName} <MdArrowDropDown/>
                                                                <ul className='dropdown'>
                                                                        {itm.nestedLinks.map((link, idx) => (
                                                                            <li key={idx}>{link}</li>
                                                                        ))}
                                                                </ul>
                                                            </li>
                                                        );
                                                    } else if (Array.isArray(itm)) {
                                                        return (
                                                            <>
                                                                {itm.map((link, idx) => (
                                                                    <li key={idx}>{link}</li>
                                                                ))}
                                                            </>
                                                        );
                                                    } else {
                                                        return null;
                                                    }
                                                })
                                            }
                                        </ul>
                                    ) : null
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="navDetails">
                    detal
                </div>
            </div>
        </nav>
      </header>
      <main>{children}</main>
      {/* shu childrenga Komponents keladi, avtomatik layout o'zgarmay tururadi. */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;

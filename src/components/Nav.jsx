import { Link } from "react-router-dom";
import {  MdArrowDropDown} from 'react-icons/md';
import LiComponent from "./LiComponent";


const Nav = ({arr}) => {
  return (
    arr.map(item=>{
        return (
            <li key={item.id} className='linkBlock'>
                                    {typeof item.linkName === 'object' ? 
                                        <strong><Link to={item.linkName.path}>{item.linkName.link}</Link>  </strong> :
                                        <strong>{item.linkName}  <MdArrowDropDown/></strong>   
                                    }
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
                                                                        {itm.nestedLinks.map((lnk, idx) => (
                                                                            <LiComponent key={idx} idx={idx} path={lnk.path} link={lnk.link} />
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            );
                                                        } else if (Array.isArray(itm)) {
                                                            return itm.map((lnk, idx) => (
                                                                <LiComponent key={idx} idx={idx} path={lnk.path} link={lnk.link} />
                                                            ));
                                                        } else {
                                                                return null;
                                                            }
                                                        })

                                                }
                                            </ul>
                                        ) : null
                                    }
        </li>
        )
    })
  )
}

export default Nav

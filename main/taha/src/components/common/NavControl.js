import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import "../../styles/navBar.css";


export default function NavControl({data}) {

  const [isOpen, setIsOpen] = useState(false)
  const [link, setlink] = useState(true)
  const ref = useRef();
  const ref2 = useRef();
  ///////////////////////////////////////////////////////////

    // innerWidth
    const clickEvent=()=>{
      if (window.innerWidth < 990) {
        if (link) {
          setIsOpen(!isOpen);
          setlink(!link)
        } else {
          if (isOpen) {
            document.location.href =`${data.link}`
          }else{
            setIsOpen(!isOpen)
          }
          
        } 
      }
    }
    
    const close=(e)=>setIsOpen(false)
    
    useEffect(() => {
      if (window.innerWidth < 990) {
        ref.current.innerText=`${data.name}`
      }
    }, [])

    const Name=data.kind.map((item)=>{
        return (
        <li className="tw-border-b-2 tw-border-gray-100">
             <Link to={item.link} className="tw-relative lg tw-text-center tw-block tw-py-6 tw-px-2 lg:tw-p-6 tw-text-sm  lg:tw-text-base tw-font-bold hover:tw-bg-gray-100 hover:tw-text-green-600 tw-text-gray-700 tw-px-4 tw-py-2">
               {item.title}
            </Link>
        </li>
        )   
    })

    return (
        <>
            <button
            onClick={()=>clickEvent()}
             className={`ab tw-inline-flex tw-text-black tw-font-bold lg:tw-w-full lg:tw-h-full hover:tw-text-green-600 focus:tw-ring-4 focus:tw-ring-green-300 tw-rounded-lg tw-text-sm tw-px-2 tw-py-2.5 tw-text-center  tw-items-center`}
              type="button" 
              data-dropdown-toggle="dropdown"
              ref={ref}
              >
                <KeyboardArrowDownIcon/>
                <Link className={`tw-hidden lg:tw-block tw-text-sm tw-text-center tw-font-bold tw-w-full hover:tw-text-green-600`} to={data.link}>{data.name}</Link>
            </button>
            <div  
            ref={ref2}
            className={`${isOpen?"tw-block ":"tw-hidden"} bc lg:tw-absolute tw-bg-white tw-text-base tw-z-50 tw-list-none tw-divide-y tw-divide-gray-100 tw-rounded tw-shadow `}>
            <ul className="tw-py-1 " aria-labelledby="dropdown">
              {Name}
             </ul>
           </div>
        </>

    )
}




        {/* <Button
        id="basic-button"
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onMouseMove={handleClick}
         endIcon={<KeyboardArrowDownIcon />}
         style={{
           width:"100%",
           height:"100%",   
        //    margin:"2px",
        //    padding:"15px",
           backgroundColor:"transparent",
        //    fontFamily: "Lalezar",
           color:"black",
           fontSize:"100%",
           fontWeight:"bold"
         }}
       >
           <Link to={data.link}>
              {data.name}
           </Link>

       </Button>
       <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{onMouseLeave: handleClose}}
        style={{direction:"rtl"}}
        >
         {Name}
       </Menu> */}

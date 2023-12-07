import React from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

const SettingsDropdown = ({setLang}) => {
    return (
        <div style={{display:"inline-block",
        marginBottom: "0px",
        position: "relative",top: "-1px"}}>     
        <UncontrolledDropdown>
          <DropdownToggle className='settings-toggle'>
          <span  className='run-btn'>Settings <i className="fas fa-cog" style={{ marginLeft: "10px", color: "#fff", }}></i></span>  
          </DropdownToggle> 
          <DropdownMenu>
            <DropdownItem onClick={() =>setLang("javascript") }>Javascript</DropdownItem>
            <DropdownItem onClick={() =>setLang("python") }>Python</DropdownItem>
            <DropdownItem onClick={() =>setLang("c++") }>C++</DropdownItem>
            <DropdownItem onClick={() =>setLang("c") }>C</DropdownItem>
            <DropdownItem onClick={() =>setLang("java") }>Java</DropdownItem>

-
          </DropdownMenu>
          </UncontrolledDropdown> 
        </div>
    )
}

export default SettingsDropdown
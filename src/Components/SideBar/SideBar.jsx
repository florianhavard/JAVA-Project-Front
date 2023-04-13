import '../../CSS/SideBar.css'
import Tabs from "./Tabs"

import {FaSchool} from 'react-icons/fa'
import {MdPeopleAlt} from 'react-icons/md'
import { IoSchoolSharp } from 'react-icons/io5';



function SideBar(){
    return(
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className='nav-item'><Tabs to="/Schools" value="Schools"  icon={<FaSchool />}/></li>
                <li className='nav-item'><Tabs to="/Classes" value="Classes" icon={<MdPeopleAlt />}/></li>
                <li className='nav-item'><Tabs to="/Students" value="Students" icon={<IoSchoolSharp />}/></li>
            </ul>



        </div>
    )
}
export default SideBar
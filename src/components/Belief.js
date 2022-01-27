import React from 'react'
import Personal from '@mui/icons-material/SettingsAccessibility';
import BiotechIcon from '@mui/icons-material/Biotech';
import SafetyIcon from '@mui/icons-material/HealthAndSafety';
import GroupsIcon from '@mui/icons-material/Groups';
import '../styles/Belief.css'

function Belief() {
    return (
        <div className='belief-section'>
            <h3>We Believe In</h3>
            <div className="belief-cards">
            <div className="cards one
            "><Personal sx={{ fontSize: 60 }} /> <p>Person Centered Care</p></div>
            <div className="cards"><BiotechIcon sx={{ fontSize: 60 }}/> <p>Evidence Based Care</p></div>
            <div className="cards"><SafetyIcon sx={{ fontSize: 60 }}/><p>Safe Care</p></div>
            <div className="cards"><GroupsIcon sx={{ fontSize: 60 }}/> <p>Collaborative Care</p></div>
            </div>
        </div>
    )
}

export default Belief

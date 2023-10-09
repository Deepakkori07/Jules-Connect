import React from 'react'
import NavBar from './NavBar'

export default function UpdateAdminProfile() {
  return (
    <div>
        <NavBar/>
        <div>
            <label htmlFor='org_name'>Organisation Name</label>
            <input type='text'/>
            <label htmlFor='admin_name'>Admin Name</label>
            <input type='text'/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='email'/>
            <label htmlFor='mob_num'>Mbbile Number</label>
            <input type='text'/>
        </div>
    </div>
  )
}

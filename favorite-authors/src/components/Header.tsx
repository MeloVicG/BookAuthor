import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <p><Link to="">Home</Link></p>
            <p><Link to="/new"> Add an Author </Link></p>
            <p><Link to="/list" > List of Books </Link></p>
        </div>
    )
}

export default Header
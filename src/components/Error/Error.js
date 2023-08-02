import React from 'react';
import './Error.css';
import {Link} from 'react-router-dom'
import { faChevronCircleRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import { IoMdSearch } from 'react-icons/io';
import styled from 'styled-components'

const Error = () => {
  return (
    <>
        <div className='error-div'>
        <h1>Error 404 Page</h1>
        <p>Home &gt; 404 - Page Not Found</p>
        </div>
        <h1 className='oops'>Oops, This Page Could Not Be Found!</h1>
        <div className='div-404'>
            <div>
                <h1 className='error-message'>404</h1>
            </div>
            <div className='helpful-links-div'>
                <h2 className='helpful-links'>Helpful Links</h2>
                <ul>
                    <li>
                    <FontAwesomeIcon className='faChevronCircleRight' icon={faChevronCircleRight} />
                    <p><Link className='helpful-link' to = '/'>Home</Link></p>
                    </li>
                    <li>
                    <FontAwesomeIcon className='faChevronCircleRight' icon={faChevronCircleRight} />
                    <p><Link className='helpful-link' to = '/about'>About</Link></p>
                    </li>
                    <li>
                    <FontAwesomeIcon className='faChevronCircleRight' icon={faChevronCircleRight} />
                    <p><Link className='helpful-link' to = '/services'>Our Services</Link></p>
                    </li>
                    <li>
                    <FontAwesomeIcon className='faChevronCircleRight' icon={faChevronCircleRight} />
                    <p><Link className='helpful-link' to = '/careers'>Careers</Link></p>
                    </li>
                    <li>
                    <FontAwesomeIcon className='faChevronCircleRight' icon={faChevronCircleRight} />
                    <p><Link className='helpful-link' to = '/contact'>Contact Us</Link></p>
                    </li>
                    <li>
                    <FontAwesomeIcon className='faChevronCircleRight' icon={faChevronCircleRight} />
                    <p><Link className='helpful-link' to = '/qoute'>Get Free Qoute</Link></p>
                    </li>
                </ul>
            </div>
            <div className='search-website'>
                <h2>Search Our Website</h2>
                <p>Can't find what you need? Take a moment and do a search below!</p>
                <Search>
      <IoMdSearch style={{marginLeft: "1rem", position: "absolute"}} color="#9ea0a4" size="1.5em" border='3px'/>
      <SearchBar 
        id="search-bar" 
        type="text"
        placeholder="Search" style={{color:'#9ea0a4', borderRadius:'8px', border:'2px solid #9ea0a4'}}>
      </SearchBar>
    </Search>
                {/* <input type="search" placeholder="&#xf002;" style={{fontFamily:'font-family:Arial, FontAwesome'}}/> */}
            </div>
        </div>
    </>
  )
}

const Search = styled.div`
  padding: .5rem;
  position: relative;
  display: flex;  
  align-items: center;
  width: 80%;
  color:gray;
  border: 3px;
`

const SearchBar = styled.input`
  padding: 13px 1rem 14px 2.5rem;
  width: 100%;
  color: gray;
`

export default Error

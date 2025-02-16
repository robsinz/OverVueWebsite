import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/logo/overvue-nav.png';
import './navbar.css';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// OG Nav Bar
export default function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [starsCount, setStarsCount] = useState('');

  // Fetch Github stars at runtime
  const defaultStars = '2.3k'; // Use this number if github fetch fails

  useEffect(() => {
    // Check localStorage for starCount, if present use that starsCount
    const localStorageStars = JSON.parse(
      window.localStorage.getItem('starsCount')
    );
    if (localStorageStars) {
      setStarsCount(localStorageStars + 'k');
    }
    // Retrieve from Github if not present
    else {
      // Fetch data from Github api
      fetch('https://api.github.com/repos/open-source-labs/OverVue')
        .then((response) => {
          console.log('fetching stars...');
          if (response.status === 403) {
            throw new Error('403 error');
          } else return response.json();
        })
        .then((data) => {
          const starsRounded = (data.stargazers_count / 1000).toFixed(1);
          window.localStorage.setItem('starsCount', starsRounded);
          setStarsCount(starsRounded + 'k');
        })
        .catch((error) => {
          console.log(error);
          setStarsCount(defaultStars);
        });
    }
  }, []);

  return (
    <nav className='nav'>
      <Link className='nav_logo' to={'/'}>
        <img class='overVue_logo' src={logo} alt={'logo'} />
      </Link>
      <div className='nav_actions' id={showNavLinks ? 'hidden' : ''}>
        <Link className='nav_docs' to={'/docs/installation'}>
          Docs
        </Link>
        <Link className='nav_ourTeam' to={'/ourteam'}>
          About Us
        </Link>
        <a
          className='nav_blog'
          href='https://medium.com/@abagat07/elevate-your-prototyping-experience-overvue-10-0-8035400abd05'
        >
          Blog
        </a>
        <a
          className='github_button'
          id='github-btn'
          href='https://github.com/open-source-labs/OverVue'
        >
          <img
            className='github_logo'
            src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
            alt='black github logo'
          ></img>
        </a>
      </div>
      <IconButton
        className='ham-btn'
        onClick={() => setShowNavLinks(!showNavLinks)}
      >
        <MenuIcon />
      </IconButton>
    </nav>
  );
}

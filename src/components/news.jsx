import React from 'react';
import Weather from './weather';
import Calender from './calender';
import './News.css';
import Logo from '../assets/Logo_BrainDump.svg'; // Import the SVG logo

const News = () => {
  return (
    <div className="news">
        <header className="news-header">
            <img src={Logo} alt="BrainDump Logo" className='logo-image' /> {/* Add the logo here */}
            <h1 className='logo'>BrainDump</h1>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className='search-bar'>
                <form>
                    <input type="text" placeholder='Search Here...' />
                    <button type='submit'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </button>
                </form>
            </div>
        </header>
        <div className="news-content">
            <div className="navbar">
                <div className="user">User  Profile</div>
                <nav className="categories">Categories</nav>
            </div>
            <div className="news-section">
                <div className="headline">Latest Headlines</div>
                <div className="news-grid">
                    <div className="news-article">
                        <h2>Article Title</h2>
                        <p>Summary of the article goes here...</p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>
            </div>
            <div className="my-blogs">My Blogs</div>
            <div className="weather-calendar">
                <Weather />
                <Calender />
            </div>
        </div>
        <footer className="news-footer">Footer Content</footer>
    </div>
  );
}

export default News;
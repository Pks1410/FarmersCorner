import React from 'react';
// import { Link } from 'react-router-dom';

const NavigationItem = ({ children }) => (
  <div className="navigation-item">{children}</div>
);

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavigationItem>About us</NavigationItem>
      <NavigationItem>Training & Resources</NavigationItem>
      <NavigationItem>Community</NavigationItem>
      <NavigationItem>Helpdesk</NavigationItem>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <div className="logo-and-title">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f692dda8237734f2ce40b0c3c7999f754504bcadd9b57cd3ae20fee740d63a3?apiKey=dadde3c8bb91485ea6a1326748697be7&" alt="Farmers Konnect Logo" className="logo" />
        <div style={{
            fontSize: '24px',
            
        }}>Farmers Konnect</div>
      </div>
      <Navbar />
      

      

      <button className="get-started">
        <h1>Get Started</h1>
      </button>
    </header>
  );
};

function App1() {
  return (
    <>
      <Header />
    <style>{`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        header {
          background-color: white;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding: 16px 60px;
        }
        @media (max-width: 991px) {
          header {
            padding: 0 20px;
          }
        }
        .logo-and-title {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .logo {
          width: 50px;
          aspect-ratio: 1;
          object-fit: cover;
        }
        .navbar {
          display: flex;
          gap: 20px;
          margin: auto 0;
        }
        .navigation-item {
          font-family: Outfit, sans-serif;
        }
        .get-started {
          font-family: Outfit, sans-serif;
          background-color: #2e383b;
          color: #ebebeb;
          border-radius: 25px;
          padding: 6px 23px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .get-started {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}

export default App1;
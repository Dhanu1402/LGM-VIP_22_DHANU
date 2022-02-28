import React from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* Navbar S */}
      <section className='hero'>
        <nav className='navbar navbar-expand-lg navbar-light nav'>
          <div className='container-fluid '>
            <span className='brand'>LetsGrowMore</span>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul class='navbar-nav ms-auto  me-5'>
                <button className='get-btn' onClick={handleClick}>
                  Get Users
                </button>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar E */}

        <div className='container'>
          <div className='row justify-content-center '>
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div>
                  <h1>Please Wait....</h1>
                </div>
              )
            ) : (
              <div className='bg'>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
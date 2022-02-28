import React from 'react';
import './Cards.css';
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div className='col-lg-4 col-md-6 mt-4 col-sm-8 col-xs-10 mx-auto'>
            <div className='portfolio'>
              <img src={user.avatar} alt='' className='pic' />
              <div className='port-folio'>
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
                <button className='web-btn'>Web Developer Intern</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
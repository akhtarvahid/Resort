import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.div`
    padding: 10px;
    background: #626d6f;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: 800;
    font-family: cursive;
    a{
      img{
          height:50px;
          border-radius: 50%;
          margin: 3px;
      }
    }
    a:nth-child(2) img, a:nth-child(3) img, a:nth-child(4) img {
        height: 50px;
    }
`

const Footer = () => {
    return (
        <MyFooter>
           <a href="https://www.linkedin.com/in/vaheed-akhtar-97a761a4/"
           target="_blank" rel="noopener noreferrer">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQguOImIJHOHUPczYNEPe5WHSlRUgiyXJ99lA&usqp=CAU" alt="LI-icon"/>
           </a>
           <a href="https://stackoverflow.com/users/6544460/vahid-akhtar?tab=profile" target="_blank" rel="noopener noreferrer">
             <img src="https://icon-library.net/images/stackoverflow-icon/stackoverflow-icon-6.jpg" alt="so-icon"/>  
           </a>
           <a href="https://github.com/akhtarvahid" target="_blank" rel="noopener noreferrer">
               <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="gh-icon"/>
           </a>
           <a href="https://www.freecodecamp.org/akhtarvahid" target="_blank" rel="noopener noreferrer">
               <img src="http://static.libsyn.com/p/assets/2/f/f/7/2ff7cc8aa33fe438/freecodecamp-square-logo-large-1400.jpg" alt="fcc-icon"/>
           </a>
        </MyFooter>
    );
};

export default Footer;
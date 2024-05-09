import React from 'react';
import { MyFooter } from './Footer.styled';


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
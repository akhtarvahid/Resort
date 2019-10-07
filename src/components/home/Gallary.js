import React from 'react';
import Title from '../common/Title';
import Carousel from '../common/Carousel';
import gallary from '../../utils/gallary-data';

class Gallary extends React.Component{
    state={
      gallary: gallary
    }
    render(){
    return (
        <div>
         <Title title="Gallary" center/>  
         <div style={{margin:30}}>
         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            {this.state.gallary.map(({id, img, className, classImg, title})=>
                <Carousel 
                key={id}
                url={img} className={className}
                classImg={classImg}
                imgStyle={{height:'600px'}}
                altName={title}
            />)}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style={{background:'coral'}}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" style={{background:'coral'}}> 
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
</div>   
</div>
        </div>
    );
};
}
export default Gallary;
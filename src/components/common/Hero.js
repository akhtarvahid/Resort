import styled from 'styled-components';
// import homeImage from '../../images/homeBcg.jpeg'
import { setFlex, setBackground } from '../../styles';

const Hero = styled.header`
 min-height: 100vh;
 ${props => setBackground({ img: props.img, color: "rgba(0,0,0,0)" })};
 ${setFlex({x: "center", y: "center"})}
`

export default Hero;
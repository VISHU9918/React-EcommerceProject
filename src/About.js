import { useProductContext } from './context/Productcontex';
import HeroSection from './components/HeroSection';

const About = () => {
   const {myName} = useProductContext();

   const data = {
    name: "Vishal Ecommerce",
   };
   
   return (
   <>
   {myName}
    <HeroSection myData={data}/>
   </>
   );
};

export default About;

import React, {useEffect} from 'react'
import styled from 'styled-components';
import {FaUserGraduate} from 'react-icons/fa';
import {FiDatabase} from 'react-icons/fi';
import {BiDetail} from 'react-icons/bi';
import Aos from "aos"
import "aos/dist/aos.css"
//import {Container} from '../globalStyles';


const Container = styled.div`
margin: 0 auto;
padding: 0 50px;
max-width: 1300px;
width: 100%;

@media (max-width:400px){
    padding: 0 10px;
}
@media (max-width:991px) {
    padding: 0 30px;
}

@media (min-width: 1500px) {
    max-width: 1500px;
}

@media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
}
`;

const WorksContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3rem;
`;
const WorksContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 5rem 8rem;
color: #333333;
${Container};
`;

const WorksTitle = styled.h2`
font-size: clamp(2rem, 8.5vw, 5rem);
font-weight: bold;
`;
const Underline = styled.div`
  width: 12rem;
  height: 0.25rem;
  background: #FF00FF;
  margin-left: auto;
  margin-right: auto;`;

const WorksCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5rem;
@media only screen and (max-width:900px){
    flex-direction: column;
}
`;

const WorksCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 30rem;
height: 50rem;
background-color: #fff;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
border-radius: 20px;
transition: all .5s ease;
&:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1300px){
        margin-right: 10rem;
    }
    @media only screen and (min-width: 1500px){
        margin-right: 20rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 10rem;
        margin-right: 0;
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
}
@media only screen and (max-width:900px){
        width: 50rem;
}
@media only screen and (max-width:500px){
        width: 30rem;
}
@media only screen and (min-width:1890px){
        width: 40rem;
}
&:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #FF00FF;
    color: #fff;
    
}
`;

const WorksIconContainer = styled.div`
width: 9rem;
height: 9rem;
border-radius: 50%;
border: 2px solid #333;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
`;
const WorksIcon1 = styled(FiDatabase)`
color: #333;
font-size: 8rem;
`;

const WorksIcon2 = styled(BiDetail)`
color: #333;
font-size: 6rem;
`;
const WorksIcon3 = styled(FaUserGraduate)`
color: #333;
font-size: 6rem;
`;

const WorksCardTitle = styled.h3`
font-size: 2.4rem;
font-weight: bold;
padding-top: 1rem;
`;

const WorksCardText = styled.p`
font-size: 1.8rem;
padding: 1rem 2rem;
`;




const Services = () => {

    useEffect(()=>{
        Aos.init({duration: 4000});
      }, []);
      //const [readMore, setReadMore] = useState(true);
    return (
        <div data-aos= "fade-down" >
            
            <WorksContent>
                <WorksContainer >
                    <WorksTitle> Nos services</WorksTitle>
                    <Underline />
                    <WorksCardContent>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon1 className="Icon"/>
                            </WorksIconContainer>
                            <WorksCardTitle>Base de données de particuliers</WorksCardTitle>
                            <WorksCardText>
                            ARCHIPEL met à disposition de ses clients des bases de contacts axées sur l'âge et le centre d’intérêt 
des particuliers.Vous êtes une entreprise et souhaitez rentrer en contact avec une cible particulière, nous vous fournissons des 
contacts afin de vous accompagner dans votre communication.
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon2/>
                            </WorksIconContainer>
                            <WorksCardTitle>Base  des entreprises Camerounaise</WorksCardTitle>
                            <WorksCardText>
                            ARCHIPEL vous met en contact 
                            avec des entreprises grâce à sa banque de données.
                             Vous êtes une entreprise, un commercial, un chercheur d'emploi, 
                             votre objectif est d'enrichir votre porte feuille CV,
                              contacter des responsable d'entreprise nous mettons à 
                              disposition notre mine d'or de contacts actualisés régulièrement.
                               Juste pour vous !

                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon3/>
                            </WorksIconContainer>
                            <WorksCardTitle>Base des entreprises française</WorksCardTitle>
                            <WorksCardText>
                            ARCHIPEL vous met en contact avec des entreprises grâce 
                            à sa banque de données. Vous êtes une entreprise, un commercial,
                             un chercheur d'emploi, votre objectif est d'enrichir votre porte feuille
                              CV, contacter des responsable d'entreprise nous mettons à disposition 
                              notre mine d'or de contacts actualisés régulièrement. Juste pour vous !

                            </WorksCardText>
                        </WorksCard>
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
<hr></hr>

<WorksContent>
                <WorksContainer >
                    <WorksTitle> Nos services</WorksTitle>
                    <Underline />
                    <WorksCardContent>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon1 className="Icon"/>
                            </WorksIconContainer>
                            <WorksCardTitle>Pick a meal</WorksCardTitle>
                            <WorksCardText>
                                There are different meals every week to choose from. 
                                This gives you a variety of options to switch it up.
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon2/>
                            </WorksIconContainer>
                            <WorksCardTitle>Customize it</WorksCardTitle>
                            <WorksCardText>
                               Choose your favourite recipes that you want to cook. 
                               Pick the category you love. 
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon3/>
                            </WorksIconContainer>
                            <WorksCardTitle>Cook it up</WorksCardTitle>
                            <WorksCardText>
                               Order the meal you have chosen. 
                               Fresh and packed ingredients straight to your doorstep.
                            </WorksCardText>
                        </WorksCard>
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
            


        </div>
    )
}

export default Services

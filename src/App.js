import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {keyframes,styled} from "styled-components";
import {fadeIn,slideInLeft} from 'react-animations';
import { Icon } from "./components/index.ts";
import emailjs from "@emailjs/browser";
import { useEffect } from 'react';
import "./css/responsive.css";
import Ui from "./assets/ui-ux-representations-with-laptop.jpg";
import Links from "./assets/still-life-red-thread-connection.jpg";
import Web from "./assets/web-development-4202909_640.png";
import Kanap from "./assets/Capture d’écran_14-11-2024_133349_127.0.0.1.jpeg";

import {Swiper,SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay,Pagination,Navigation} from "swiper/modules";

const FadeIn = styled.div`animation: 1.2s ${keyframes `${fadeIn}`} linear`;
const SlideInLeft = styled.div`animation: 1.2s ${keyframes `${slideInLeft}`} ease-in-out`;

function App() {


  useEffect(()=>{
    emailjs.init({
      publicKey: "SSiXGzf6UUP-YqBH8",
    })
  },[])

  /**
   * 
   * @param {import('react').BaseSyntheticEvent} event 
   */
  function handleSubmit(event){
      event.preventDefault();
      const formData = new FormData(event.target);
      const entries = Object.fromEntries(formData.entries());

      emailjs.send("service_vh72w4k","template_z5r1e3i",{
        from_name:entries.user_name,
        to_name:"Gloire Dianzenza",message:entries.message,subject:entries.subject
      }).then(value=>{
        console.log(value.text);
        if(value.text === "OK")alert("Message envoyé avec succès");
      }).catch(error=>{
        console.error(error);
      })
  }

  return (
    <div className="App">
      <FadeIn className='w-full'>
        <div id='home'></div>
        <Header/>
        <main>
            <h1>Gloire Dianzenza, Développeur Web Full-Stack</h1>
            <p className='intro'>Je suis un développeur Web résidant en Île-de-France et programmant depuis 4 ans, avec notamment un an de BTS SIO.</p>
          <div id='about' className='mt-52 flex flex-col items-center pt-[10vh]'>
            <h1>Au sujet de moi</h1>
            <p className='intro'>Je suis un jeune développeur Full-Stack ayant acquis de nombreuses compétences dans le domaines. <br/><br/> J'ai eu le privilège de collaborer avec une entreprise pour mettre à jour son contenu et design. Le développement Web n'est pas qu'un travail pour moi. Je suis passionné par tout ce qui concerne l'informatique, la programmation et les jeux vidéo.</p>
            <SlideInLeft className='w-full px-6'>
              <div className='skills-list mt-10'>
                <div className='skill-group'>
                  <label>HTML/CSS</label>
                  <hr style={{width:"100%"}}/>
                </div>
                <div className='skill-group'>
                  <label>Javascript</label>
                  <hr style={{width:"100%"}}/>
                </div>
                <div className='skill-group'>
                  <label>PHP</label>
                  <hr style={{width:"60%"}}/>
                </div>
                <div className='skill-group'>
                  <label>React JS</label>
                  <hr style={{width:"90%"}}/>
                </div>
                <div className='skill-group'>
                  <label>Express et Nodejs</label>
                  <hr style={{width:"90%"}}/>
                </div>
                <div className='skill-group'>
                  <label>Python</label>
                  <hr style={{width:"70%"}}/>
                </div>
              </div>
            </SlideInLeft>
          </div>
          <div id='services' className='mt-52 flex flex-col items-center pt-[10vh]'>
            <h1>Mes services</h1>
            <div className='services'>
              <div className='service'>
                <div className='service-inner'>
                  <div className='service-front'>
                    <img alt='' src={Ui}/>
                  </div>
                  <div className='service-back'>
                    <h2>Design et mise à jour de sites web</h2>
                  </div>
                </div>
              </div>
              <div className='service'>
                <div className='service-inner'>
                  <div className='service-front'>
                    <img alt='' src={Links}/>
                  </div>
                  <div className='service-back'>
                    <h2>Attribution de liens vers d'autres pages, sites ou réseaux sociaux</h2>
                  </div>
                </div>
              </div>
              <div className='service'>
                <div className='service-inner'>
                  <div className='service-front'>
                    <img alt='' src={Web}/>
                  </div>
                  <div className='service-back'>
                    <h2>Réécriture, Ajout de texte, médias, etc...</h2>
                  </div>
                </div>
              </div>
              {/* <div className='service'>
                <h2>Assignation de liens</h2>
                <p className='intro'>Attribuer des liens hypertexte pour d'autres sites ou des réseaux sociaux.</p>
              </div>
              <div className='service'>
                <h2 className='capitalize'>écriture de contenu</h2>
                <p className='intro'>Que ce soit réécriture, ajout de texte, importation de médias, etc...</p>
              </div> */}
            </div>
          </div>
          <div id='works' className='mt-52 flex flex-col items-center pt-[10vh]'>
            <h1>Projets déjà effectués</h1>
            <div className='projects'>
              {/* <div className='project'>
                <h2>QCM avec PHP</h2>
              </div>
              <div className='project'>
                <h2>Site web de canapé</h2>
              </div>
              <div className='project'>
                <h2>Projet réseau social/chat en sein d'une entreprise</h2>
              </div>
              <div className='project'>
                <h2>Mise à jour site coaching professionnel</h2>
              </div>
              <div className='project'>
                <h2>Misa à jour site école médicale</h2>
              </div> */}

              <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className='project relative'>
                          <img src={Ui} alt='' className='w-full h-full object-fill object-center'/>
                          <div className='absolute left-0 top-0 w-full h-full flex justify-center items-center'>
                              <h2>Questionnaire</h2>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide><div className='project relative'>
                          <img src={Kanap} alt='' className='w-full h-full object-fill object-center'/>
                          <div className='absolute left-0 top-0 w-full h-full flex justify-center items-center'>
                              <h2>Site web E-Commerce</h2>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>Slide 3</SwiperSlide>
                      <SwiperSlide>Slide 4</SwiperSlide>
                      <SwiperSlide>Slide 5</SwiperSlide>
                      <SwiperSlide>Slide 6</SwiperSlide>
              </Swiper>

            </div>
          </div>
          <div id='contact' className='mt-52 flex flex-col items-center pt-[10vh]'>
            <h1>Contactez-moi !</h1>
            <p className='intro'>Si mon profil vous intéresse, je suis disponible pour travailler sur de nouveaux projets; envoyez-moi un message.</p>
            <div className='contact-group'>
                <Icon size='30px' name={"bx bxs-envelope"}/>
                <a href='mailto:gloiredianzenza5@gmail.com'>gloiredianzenza5@gmail.com</a>
            </div>
            <div className='contact-group'>
                <Icon size='30px' name={"bx bxs-phone"}/>
                <a href='tel:0766970236'>07 66 97 02 36</a>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='nom'>Nom</label>
                  <input placeholder='Insérer nom' id='nom' name='user_name'/>
                </div>
                <div className='form-group'>
                  <label htmlFor='mail'>Email</label>
                  <input placeholder='Insérer email' type='email' id='mail' name='user_email' required/>
                </div>
                <div className='form-group'>
                  <label htmlFor='subject'>Sujet</label>
                  <input placeholder='Définir sujet' id='subject' name='subject' required/>
                </div>
                <div className='form-group'>
                  <label htmlFor='body'>Message</label>
                  <textarea placeholder='Message...' id='body' name='message' required/>
                </div>
                <div className='form-group'>
                  <input type='submit' value={"Envoyer"}/>
                </div>
            </form>
          </div>
        </main>
        <Footer/>
      </FadeIn>
    </div>
  );
}

export default App;

import {gsap} from 'gsap';
import Link from 'next/link';
import React, {useState} from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import SocialLinks from '@/common/social-links';
import ContactIcon from '@/svg/contact-icon';
import EmailIcon from '@/svg/email';
import LocationIcon from '@/svg/location-icon';
import PhoneIcon from '@/svg/phone-icon';
import RightArrow from '@/svg/right-arrow';

import footer_logo from "../../../public/assets/img/logo/pennyflo_logo_white_5.png";
import Image from 'next/image';


// footer_content 
const footer_content  = {
    title: <>Get Our Latest's News <br /> & Updates</>,
    description: <>A co-pilot for CFOs, business owners and <br /> finance teams to control & 
    manage the cash.</>,
    phone: "+91 62822 38059",
    contact_mail: "founders@pennyflo.io",
    location: "Pennyflo Limited, 128 City Road, London, EC1V 2NX, UK",

    copy_right: <>Full Copyright & Design By <Link href="#"> PENNYFLO LTD (Company No: 15318809)</Link> – {new Date().getFullYear()}</>,

    footer_lisks : [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3 col-md-5",
            cls_2: "footer-col-2",
            title: "Main Pages",
            delay: ".7s",
            links: [
               //  {name: "Business", link: "#"},
               //  {name: "Technology", link: "#"},
               //  {name: "Online Marketing", link: "#"},
               //  {name: "Advertising Strategy", link: "#"},
               //  {name: "Strategy", link: "#"},
               //  {name: "Development", link: "#"},
               {name: "About", link: "/about"},
               {name: "Products", link: "/project"},
               {name: "Pricing", link: "/price"},
               {name: "Careers", link: "/career"},
               {name: "Blog", link: "/blog"},
               {name: "Contact", link: "/contact"},
            ]
        },
        {
            id: 2,
            cls_1: "col-xl-2 col-lg-2 col-md-6",
            cls_2: "footer-col-3",
            title: "Other Pages",
            delay: ".9s",
            links: [
               //  {name: "About", link: "/about"},
               //  {name: "Services", link: "/service"},
               //  {name: "How It Works", link: "#"},
               //  {name: "Pricing Plan", link: "/price"},
               //  {name: "Blog", link: "/blog"},
               //  {name: "Contact", link: "/contact"},
               // {name: "Integrations", link: "/integration"},
               {name: "Integrations", link: "/#"},
               {name: "Team", link: "/team"},
               {name: "T&C", link: "/PennyFlo_Terms_and_Conditions.pdf" , target: "_blank"},
               {name: "Privacy Policy", link: "/Privacy Policy.pdf", target: "_blank"},
               // {name: "Log in", link: "/sign-in"},
               // {name: "Sign up", link: "/register"},
               {name: "Log in", link: "/#"},
               {name: "Sign up", link: "/#"},
            ]
        },

    ],

}
const {title, description, phone, contact_mail, location, copy_right , footer_lisks}  = footer_content


const Footer = () => {
    const [isOppen , setIsOppen]  = useState(false)
    const oppenLan = () => {
        setIsOppen(!isOppen)
    }
    // use Gsap 
   //  useEffect(() => {
      
   //  })

    useIsomorphicLayoutEffect(() => {
      gsap.set(".tp-gsap-bg", {scaleX : 1} );
       let mm = gsap.matchMedia();
       mm.add("(min-width:1400px)", () => {
			gsap.to(".tp-gsap-bg", {
				scrollTrigger: {
					trigger: ".tp-gsap-bg",
					scrub: 0.02,
					start:"top bottom",
					end: "bottom bottom",
				},
				scaleX: .95,
				borderRadius: "30px",
				transformOrigin: "center center", 
				ease: "none",
			});
		})
    }, []);
    

    return (
        <>
        <footer className="pb-50 fix">
            <div className="tp-footer__pl-pr p-relative">
               <div className="footer-black-bg tp-gsap-bg"></div>
               <div className="tp-footer__area pt-50">
                  <div className="container">

                     <div className="tp-footer__border-bottom">
                        <div className="row align-items-center">
                           <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                              <div className="tp-footer__top-text">
                                 <span>{title}</span>
                              </div>
                           </div>
                           <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                              <div className="tp-footer__input p-relative">
                                 <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Business email adress" />
                                    <span>
                                        <EmailIcon /> 
                                    </span>
                                    <button>
                                        <RightArrow />
                                    </button>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="tp-footer__top-space">
                        <div className="row">

                           <div className="col-xl-4 col-lg-4 col-md-7 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                              <div className="tp-footer__widget footer-col-1">
                                 <Link href="/" className="tp-footer__widget-logo mb-10">
                                    <Image src={footer_logo} alt="" />
                                 </Link>
                                 <div className="tp-footer__text">
                                    <p>{description}</p>
                                 </div>
                                 <div className="tp-footer__social">
                                    <SocialLinks /> 
                                 </div>
                              </div>
                           </div>


                           {footer_lisks.map((item, i)  => 
                             <div key={i} className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay=".7s">
                             <div className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}>
                                 <h4 className="tp-footer__widget-title" style={{ color: 'white' }}>{item.title}</h4>
                                 <div className="tp-footer__content">
                                     <ul>
                                         {item.links.map((link, i) => (
                                             <li key={i}>
                                                 <Link 
                                                     href={link.link} 
                                                     target={link.target ? link.target : "_self"} 
                                                     rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                                                     style={{ color: 'white' }}
                                                 >
                                                     {link.name}
                                                 </Link>
                                             </li>
                                         ))} 
                                     </ul>
                                 </div>
                             </div>
                         </div>
                           //  <div key={i} className={`${item.cls_1} pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay={item.delay}>
                           //    <div className={`tp-footer__widget ${item.cls_2}`}>
                           //       <h4 className="tp-footer__widget-title">{item.title}</h4>
                           //       <div className="tp-footer__content">
                           //          <ul>
                           //              {item.links.map((link, i)  => <li key={i}><Link href={link.link}>{link.name}</Link></li>)} 
                           //          </ul>
                           //       </div>
                           //    </div>
                           // </div>
                           )}

                           <div className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                              <div className="tp-footer__widget footer-col-4">
                                 <h4 className="tp-footer__widget-title">Contact Us</h4>
                                 <div className="tp-footer__contact-info tp-footer__icon-space">
                                    <ul>
                                       <li>
                                          <span>
                                            <PhoneIcon /> 
                                          </span>
                                          <Link href={`tel:${phone}`}>{phone}</Link>
                                       </li>
                                       <li>
                                          <span>
                                            <ContactIcon /> 
                                          </span>
                                          <Link href={`mailto:${contact_mail}`}>{contact_mail}</Link>
                                       </li>
                                       <li>
                                          <span>
                                            <LocationIcon /> 
                                          </span>
                                          <Link href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z"
                                             target="_blank">{location}</Link>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright__area pt-20 pb-20">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                           <div className="tp-copyright__text">
                              <span>{copy_right} </span>
                           </div>
                        </div>
                        <div className="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                           <div className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-start">
                              <div className="tp-copyright__lang">
                                 <ul>
                                    <li>
                                       <button id="tp-copyright__lang-toggle" onClick={() => oppenLan()} >
                                          <span>English (US)<i className="fal fa-angle-down"></i></span>
                                       </button>

                                       {isOppen && 
                                       <ul className={`tp-copyright__lang-submenu ${isOppen && "open"}`}>
                                          <li>
                                             <Link href="#">Arabic</Link>
                                          </li>
                                          <li>
                                             <Link href="#">Spanish</Link>
                                          </li>
                                          {/* <li>
                                             <Link href="#">Mandarin</Link>  
                                          </li> */}
                                       </ul>
                                       }
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
        </>
    );
};

export default Footer;
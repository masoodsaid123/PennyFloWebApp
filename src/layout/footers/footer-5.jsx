import { CopyRight } from '@/common/social-links';
import EmailIcon from '@/svg/email';
import EmailFour from '@/svg/email-4';
import PhoneFour from '@/svg/phone-4';
import RightArrow from '@/svg/right-arrow';
import Link from 'next/link';
import Image from 'next/image'; 
import React from 'react';


import shape_img_1 from "../../../public/assets/img/footer/footer-inner-1.png";
import shape_img_2 from "../../../public/assets/img/footer/footer-inner-2.png";
import footer_logo from "../../../public/assets/img/logo/pennyflo_logo_white_5.png";




const footer_content = {
    info: <>A co-pilot for CFOs, business owners and  finance teams to control & 
manage the cash.</>,
    phone: " +91 62822 38059",
    email: "founders@pennyflo.io",
    
    footer_lisks : [
        {
            id: 1,
            cls_1: "col-xl-3 col-lg-3",
            cls_2: "footer-col-3-2",
            title: "Main Pages",
            delay: ".7s",
            links: [
               //  {name: "Damo page", link: "#"},
               //  {name: "About", link: "/about"},
               //  {name: "Pricing Plan", link: "/price"},
               //  {name: "Integrations", link: "/integrations"},
               //  {name: "Blog", link: "/blog"},
               //  {name: "Contact", link: "/contact"},
               {name: "About", link: "/about"},
               {name: "Products", link: "/project"},
               {name: "Pricing", link: "/price"},
               {name: "Careers", link: "/career"},
               {name: "Blog", link: "/#"},
               {name: "Contact", link: "/contact"},
            ]
        },
        {
            id: 2,
            cls_1: "col-xl-2 col-lg-2",
            cls_2: "footer-col-3-3",
            title: "Other Pages",
            delay: ".9s",
            links: [
               //  {name: "Features", link: "#"},
               //  {name: "Team", link: "/team"},
               //  {name: "Careers", link: "#"},
               //  {name: "Login", link: "/login"},
               //  {name: "Register", link: "/register"},
               //  {name: "404 Not found", link: "/404"},
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
const {info, phone, email, footer_lisks}  = footer_content

const FooterFive = ({style_contact, bg_style=true, style_team}) => { 

    return (
        <>
        <div className={`tp-footer__pl-pr ${style_contact && "pt-105"} ${bg_style?'grey-bg-2':''}`}>
               <div className={`tp-footer__area ${style_contact && "p-relative"} tp-footer__tp-border-bottom`}>
                  {style_contact && 
                     <>
                     <div className="tp-footer__shape-1 d-none d-xxl-block">
                        <Image src={shape_img_1} alt="theme-pure" />
                     </div>
                     <div className="tp-footer__shape-2 d-none d-xxl-block">
                        <Image src={shape_img_2} alt="" />
                     </div>
                  </>
                  }
                  <div className="container">
                     <div className="row">

                        <div className="col-xl-3 col-lg-3 col-md-6 pb-30  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                           <div className={`tp-footer__widget ${style_team && "tp-footer__input-inner"} footer-widget-3 footer-col-3-1`}>  
                              <div className="tp-footer__logo mb-25">
                                 <Link href="/">
                                    <Image src={footer_logo} alt="" />
                                 </Link>
                              </div>
                              <div className="tp-footer__contact-info">
                                 <p>{info}</p>
                                 <ul>
                                    <li> 
                                       <span>
                                        <PhoneFour /> 
                                       </span>
                                       <Link className="first-child" href={`tel:${phone}`}>{phone}</Link>
                                    </li>
                                    <li>
                                       <span>
                                        <EmailFour /> 
                                       </span>
                                       <Link href={`mailto:${email}`}>{email}</Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>

                        {footer_lisks.map((item, i)  => 
                        <div key={i} className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay=".7s">
                           <div className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}>
                               <h4 className="tp-footer__widget-title">{item.title}</h4>
                               <div className="tp-footer__content">
                                   <ul>
                                       {item.links.map((link, i) => (
                                           <li key={i}>
                                               <Link 
                                                   href={link.link} 
                                                   target={link.target ? link.target : "_self"} 
                                                   rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                                               >
                                                   {link.name}
                                               </Link>
                                           </li>
                                       ))} 
                                   </ul>
                               </div>
                           </div>
                       </div>
                        //     <div key={i} className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay=".7s">
                        //     <div className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}>
                        //         <h4 className="tp-footer__widget-title">{item.title}</h4>
                        //         <div className="tp-footer__content">
                        //             <ul>
                        //                 {item.links.map((link, i)  => <li key={i}><Link href={link.link}>{link.name}</Link></li>)} 
                        //             </ul>
                        //         </div>
                        //     </div>
                        // </div>
                            )
                        } 
                        <div className="col-xl-4 col-lg-4 col-md-6 pb-30  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                           <div className="tp-footer__widget footer-widget-3 footer-widget-5 footer-col-3-4">
                              <h4 className="tp-footer__widget-title">Our Newsletter</h4>
                              <div className="tp-footer__input mb-35 p-relative">
                                 <form onSubmit={e => e.preventDefault()}>
                                    <input type="text" placeholder="Business email adress" />
                                    <span>
                                        <EmailIcon /> 
                                    </span>
                                    <button>
                                        <RightArrow /> 
                                    </button>
                                 </form>
                              </div>
                              <div className="tp-footer__social-3">
                                 <h4>Social media</h4>
                                 {/* <Link href="#"><i className="fab fa-facebook-f"></i></Link> */}
                                 {/* <Link href="#"><i className="fab fa-instagram"></i></Link>
                                 <Link href="#"><i className="fab fa-pinterest"></i></Link> */}
                                 <Link href="https://www.linkedin.com/company/pennyflo/"><i className="fab fa-linkedin-in"></i></Link>
                                 <Link href="https://twitter.com/PennyFlo_"><i className="fab fa-twitter"></i></Link>
                                 <Link href="https://www.youtube.com/@PennyFlo"><i className="fab fa-youtube"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-copyright__area pt-20 pb-20">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="tp-copyright__text tp-copyright__text-3 text-center" style={{ whiteSpace: 'nowrap' }}>
                            <span><CopyRight /></span> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
        </>
    );
};

export default FooterFive;
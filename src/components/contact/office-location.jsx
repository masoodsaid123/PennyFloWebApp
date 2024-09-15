// import React from 'react';


// import img_1 from "../../../public/assets/img/contact/contact-icon-sm-5.png";
// import img_2 from "../../../public/assets/img/contact/contact-icon-sm-6.png";
// import img_3 from "../../../public/assets/img/contact/contact-icon-sm-7.png";
// import Image from 'next/image';
// import Link from 'next/link';


// // office location data
// const office_data = [
//     {
//         id: 1, 
//         cls:"",
//         img: img_1,
//         location: "India",
//         address: <>60/49E, Third Floor, JC Chambers, Panampilly Nagar, Cochin, Ernakulam, Kerala, 682036, India</>,
//     },
//     {
//         id: 2, 
//         cls:"p-relative",
//         img: img_2,
//         // badge: "Main Office",
//         location: "London",
//         address: <>128 City Road,<br/> London, EC1V 2NX,<br/> London, United Kingdom</>,
//     },
//     // {
//     //     id: 3, 
//     //     cls:"",
//     //     img: img_3,
//     //     location: "Egypt",
//     //     address: <>Av. Cordoba 1309, 3'A, City of <br /> Buenos Aires, Egypt</>,
//     // },
// ]

// const OfficeLocation = () => {
//     return (
//       <>
//         <div className="contact-info-area pb-90">
//           <div className="container">
//             <div className="row"  >
//               {office_data.map((item, i) => (
//                 <div key={i} className="col-xl-4 col-lg-4 mb-30">
//                   <div className={`contact-info-item ${item.cls}`}>
//                     {item.badge && (
//                       <div className="contact-info-badge">
//                         <span>Main Office</span>
//                       </div>
//                     )}
//                     <div className="contact-info-img">
//                       <Image src={item.img} alt="theme-pure" />
//                     </div>
//                     <div className="contact-info-title-box">
//                       <h5 className="contact-info-title-sm">{item.location}</h5>
//                       <p>{item.address}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </>
//     );
// };

// export default OfficeLocation;

import React from 'react';
import img_1 from "../../../public/assets/img/contact/contact-icon-sm-5.png";
import img_2 from "../../../public/assets/img/contact/contact-icon-sm-6.png";
import Image from 'next/image';

// office location data
const office_data = [
  {
    id: 1,
    cls: "",
    img: img_1,
    location: "India",
    address: "60/49E, Third Floor, JC Chambers, Panampilly Nagar, Cochin,, Ernakulam, Kerala, 682036, India",
  },
  {
    id: 2,
    cls: "p-relative",
    img: img_2,
    location: "London",
    address: <>128 City Road, London, EC1V 2NX,<br/> London, United Kingdom</>,
  },
];

const OfficeLocation = () => {
  return (
    <div className="contact-info-area pb-90">
      <div className="container">
        <div className="row">
          {office_data.map((item, i) => (
            <div key={i} className="col-md-6 col-sm-12 mb-30">
              <div className={`contact-info-item ${item.cls}`}>
                <div className="contact-info-img">
                  <Image src={item.img} alt="location-icon" />
                </div>
                <div className="contact-info-title-box">
                  <h5 className="contact-info-title-sm">{item.location}</h5>
                  <p>{item.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;

import Link from 'next/link';
import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import PlanLineIcon from '@/svg/plan-line-icon';


const plan_content  = {
    tp_title: "Compare our plans",
    tp_des: <>Comparing our pricing plans side-by-side so you can choose the best <br /> one for yourself.</>,
    feature_title: "Features and Services",
    feature_items: [
        {id: 1, cls: "", title: "BASIC", btn_text: "Get Basic"},
        {id: 2, cls: "active", title: "Growth", btn_text: "Get Growth"},
        {id: 3, cls: "", title: "Premium", btn_text: "Get Premium"},
    ],
    feature_lists : [
        {
            id: 1, 
            title: "Integrations", 
            features : [<><span>Unlimited</span></>,  <><span>Unlimited</span></>, <><span>Unlimited</span></>,],
        },
        {
            id: 2, 
            title: "Auto reconciliation of bills and invoices",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 3, 
            title: "Invoice creation",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 4, 
            title: "Auto reconciliaction of AP/AR",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 5, 
            title: "Payroll",
            features : [<><span>Upto 10 FTE's</span></>,  <><span>Upto 50 FTE's</span></>, <><span>Upto 150 FTE's</span></>,],
        },
        {
            id: 6, 
            title: "Batch payments",
            features : [<><span>Upto 5 invoices </span></>,  <><span>Upto 10 invoices </span></>, <><span>Upto 25 invoices</span></>,],
        },
        {
            id: 7, 
            title: "Payment receipt email to vendors",
            features : [ <><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 8, 
            title: "Real time bank account sync",
            features : [<><span>Upto 2 </span></>, <><span>Upto 3 </span></>, <><span>Upto 4 </span></>,],
        },
        {
            id: 9, 
            title: "Number of users",
            features : [<><span>Upto 3 </span></>,  <><span>Upto 8</span></>, <><span>Upto 15</span></>,],
        },
        {
            id: 10, 
            title: "User rights management",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 11, 
            title: "Auto categoristaions of payments",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 12, 
            title: "Vendor management",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 13, 
            title: "Schedule payments",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 14, 
            title: "Auto schedule payments using ai (Launching soon)",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 15, 
            title: "Revoke payments",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 16, 
            title: "Notify vendors on payments",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 17, 
            title: "Invoice creation",
            features : [<><span>Upto 50 </span></>,  <><span>Unlimited</span></>, <><span>Unlimited</span></>,],
        }, 
        {
            id: 18, 
            title: "Customer dashboard",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 19, 
            title: "Automted payment reminders",
            features : [<><span>3 /customer </span></>,  <><span>5 /customer </span></>, <><span>5 /customer </span></>,],
        }, 
        {
            id: 20, 
            title: "Rule based payment remainders (Launching soon)",
            features : [<><span>Upto 10 invoices </span></>, <><span>Upto 25 invoices </span></>, <><span>Upto 100 invoices </span></>,],
        }, 
        {
            id: 21, 
            title: "Payment links",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 22, 
            title: "Email forwarding of invoices and bills",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 23, 
            title: "Bulk payment links",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 24, 
            title: "Cash flow insights",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 25, 
            title: "Invoices / bill aging tracking",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 26, 
            title: "Custom financial statements",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 27, 
            title: "Cash flow and cash burn reports",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 28, 
            title: "Cash flow forecasting",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 29, 
            title: "Predictive runway",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 30, 
            title: "Scenario based forecasting using AI (Launching soon)",
            features : [<><span>Upto 3 </span></>,  <><span>Upto 7 invoices </span></>, <><span>Unlimited </span></>,],
        }, 
        {
            id: 31, 
            title: "Custom dashboard",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 32, 
            title: "Approval work flow",
            features : [<><span>Unlimited </span></>, <><span>Unlimited  </span></>, <><span>Unlimited</span></>,],
        }, 
        {
            id: 33, 
            title: "Tracking and approval workflows",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 34, 
            title: "Employee budgeting",
            features : [<><i className="far fa-times times"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 35, 
            title: "Auto categorisation of employee expences (Launching soon) ",
            features : [<><i className="far fa-times times"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 36, 
            title: "Expense management (Launching soon) ",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 37, 
            title: "Support access to accountant (Launching soon) ",
            features : [<><span>Free </span></>,  <><span>Add on </span></>, <><span>Add on </span></>,],
        }, 
        {
            id: 38, 
            title: "Support access to CA (Launching soon) ",
            features : [<><span>Add on </span></>,  <><span>Add on </span></>, <><span>Add on </span></>,],
        }, 
        {
            id: 39, 
            title: "Email support ",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 40, 
            title: "On call assistance ",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 41, 
            title: "Instant chat support ",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 41, 
            title: "Dedicated account manager ",
            features : [<><i className="far fa-times times"></i></>,  <><i className="far fa-times times"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 42, 
            title: "Expense cards (Launching soon) ",
            features : [<><i className="far fa-times times"></i></>,  <><i className="far fa-times times"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        {
            id: 43, 
            title: "Free webinars",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        }, 
        
    ],

}
const {tp_title, tp_des, feature_title, feature_items, feature_lists} = plan_content


const PlanArea = () => {
   
    useIsomorphicLayoutEffect(() => {
        ScrollTrigger.create({
            trigger: ".pr-feature-box",
            start: "top 80px",
            end: "bottom 54%",
            pin: ".pr-feature-wrapper",
            pinSpacing: false,
        });
     },[])

    return (
        <>
            <div className="plan-area pb-110">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-6">
                     <div className="plan-section-box text-center pb-20">
                        <h3 className="tp-section-title tp-section-title-shape p-relative">
                            {tp_title}
                           <PlanLineIcon />
                        </h3>
                        <p>{tp_des}</p>
                     </div>
                  </div>
               </div>
               <div className="pr-feature-box">
                  <div className="pr-feature-main">

                     <div className="pr-feature-wrapper">
                        <div className="row gx-0 align-items-center">
                           <div className="col-xl-4 col-lg-4 col-md-4">
                              <div className="pr-feature-head">
                                 <div className="pr-feature-title-box">
                                    <h5 className="pr-feature-title">{feature_title}</h5>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-8 col-lg-8 col-md-8">
                              <div className="pr-feature-head">
                                 <ul>
                                    {feature_items.map((item, i)  => 
                                        <li key={i}>
                                            <div className={`pr-feature-item ${item.cls}`}>
                                                <h5>{item.title}</h5>
                                                <Link className="tp-btn-service black-bg text-white" href="/service-details">
                                                    {item.btn_text}
                                                </Link>
                                            </div>
                                        </li>
                                    )} 
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="pr-feature-wrapper-2">
                        {feature_lists.map((item, i)  => 
                            <div key={i} className="row gx-0 align-items-center pr-feature-height">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="pr-feature-bottom">
                                        <div className="pr-feature-title-box">
                                            <h5 className="pr-feature-title-sm">{item.title}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8">
                                    <div className="pr-feature-bottom">
                                        <ul>
                                            {item.features.map((list, i)  =>  <li key={i}> {list} </li> )}                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )} 
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default PlanArea;
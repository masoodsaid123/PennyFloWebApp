import ClockIcon from '@/svg/clock-icon';
import LocationIconThree from '@/svg/location-icon-3';
import NiceSelect from '@/ui/nice-select';
import Link from 'next/link';
import React, { useState } from 'react';

const CareerDetailsArea = ({ career }) => {
    const applyHandler = () => {
        if (career?.applicationLink) {
            window.open(career.applicationLink, '_blank'); // Open the link in a new tab
        } else {
            console.log('Application link not available');
        }
    };

    const selectHandler = (e) => {};

    return (
        <>
            <div className="career-details-area career-border-bottom pt-110 pb-110">
                <div className="container">
                    <div className="row align-content-start">
                        <div className="col-xl-7 col-lg-7">
                            <div className="career-details-wrapper">
                                <div className="career-details-title-box">
                                    <span>{career?.sub_title || 'No Subtitle Available'}</span>
                                    <h4 className="career-details-title" style={{ lineHeight: '45px' }}>
                                        {career?.title || 'No Title Available'}
                                    </h4>
                                </div>
                                <div className="career-details-location-box">
                                    <span>
                                        <LocationIconThree />
                                        Remote
                                    </span>
                                    <span>
                                        <ClockIcon />
                                        Full-time
                                    </span>
                                </div>
                                {career?.job_post_details?.map((item, i) => (
                                    <div key={i} className={`career-details-job-responsiblity ${item.cls}`}>
                                        <h4 className="career-details-title-sm">{item.title}</h4>
                                        <p className="pb-15">{item.description}</p>
                                        {item.experiences && (
                                            <div className="career-details-job-list">
                                                <ul>
                                                    {item.experiences.map((list, index) => (
                                                        <li key={index}>
                                                            <i className="fal fa-long-arrow-right"></i>
                                                            {list}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 career-details-pin">
                            <div className="col-xxl-12">
                                <div className="postbox__apply-btn-border">
                                    <div id="my-btn" className="postbox__apply-btn-box">
                                        <button onClick={applyHandler} className="submit-btn mb-50 w-100">
                                            Apply For This Job
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-12">
                            {/* <Link href="https://www.linkedin.com/company/pennyflo/" passHref>
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link href="https://twitter.com/PennyFlo_" passHref>
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link href="https://www.youtube.com/@PennyFlo" passHref>
                                <i className="fab fa-youtube"></i>
                            </Link> */}
                                {/* <div className="career-details-social-box mb-20">
                                    <Link href="https://www.linkedin.com/company/pennyflo/" passHref>
                                        <a target="_blank" rel="noopener noreferrer" className="facebook">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </Link>
                                    <Link href="https://twitter.com/PennyFlo_" passHref>
                                        <a target="_blank" rel="noopener noreferrer" className="twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </Link>
                                    <Link href="https://www.youtube.com/@PennyFlo" passHref>
                                        <a target="_blank" rel="noopener noreferrer" className="linkedin">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </Link>
                                </div> */}
                                {/* <div className="career-details-bottom-text text-center">
                                    <Link href="/employee-at-pennyflo">Employee at Pennyflo?</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareerDetailsArea;

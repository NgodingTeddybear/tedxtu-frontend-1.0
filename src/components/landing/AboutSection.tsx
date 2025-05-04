import { ImageAccordion } from '../ui/image-accordion';

// Import your image assets
import licenseeClosedBg from '../../../public/about/licensee-closed.png';
import staffClosedBg from '../../../public/about/staff-closed.png';
import staffOpenBg from '../../../public/about/staff-opened.png';
import contentBg from '../../../public/about/content-bg.png';

export function AboutSection() {
    return (
        <section
            id='about'
            className='min-h-screen flex flex-col justify-center items-center px-4 md:px-6 lg:px-8 py-16'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='inline-flex items-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl relative'>
                    About Us
                </h2>

                {/* Full width accordion at the top */}
                <div className='flex mt-14 '>
                    <ImageAccordion
                        title="Licensee"
                        closedHeaderImage={licenseeClosedBg.src}
                        openHeaderImage={licenseeClosedBg.src}
                        contentImage={contentBg.src}
                    >
                        <p className="mb-4 text-2xl">
                            Licensee is responsible for obtaining and maintaining the TEDx licensee, leading event planning, managing the team, curating speakers, ensuring content quality, and fostering a lasting community. All while complying with TED guidelines to deliver an impactful experience.
                        </p>
                    </ImageAccordion>
                </div>

                {/* Two-column grid layout for additional accordions */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6'>
                    {/* Left Column */}
                    <div className='flex flex-col space-y-6'>
                        <ImageAccordion
                            title="Executive Prod."
                            closedHeaderImage={staffClosedBg.src}
                            openHeaderImage={staffOpenBg.src}
                            contentImage={contentBg.src}
                        >
                            <p className="mb-4">
                                Executive Producer will lead all production and planning for the day of the event. They oversee all of the roles happening on the day of your event related to content production, stage management, technology, and video.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Event</h3>
                            <p className="mb-4">
                                Assist with the setup and breakdown of event spaces according to guidelines, coordinate event activities and presentations, address questions and concerns, resolve any issues that arise, and distribute event materials such as programs, handouts, and refreshments.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Communication</h3>
                            <p className="mb-4">
                                Support the Communication Manager in executing the communication strategy, provide administrative assistance, create Terms of Reference (TOR) documents, reach out to potential speakers and negotiate their participation, and develop and administer post-event surveys to collect feedback from attendees and speakers.
                            </p>
                        </ImageAccordion>

                        <ImageAccordion
                            title="PNO"
                            closedHeaderImage={staffClosedBg.src}
                            openHeaderImage={staffOpenBg.src}
                            contentImage={contentBg.src}
                        >
                            <p className="mb-4">
                                Partnership and Operations TEDx is responsible for managing partnerships, coordinating event logistics, handling budgets, and ensuring a seamless experience for partners and participants.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Sponsor & Partnership</h3>
                            <p className="mb-4">
                                Coordinate sponsor deliverables and benefits, ensure all partnerships align with TEDx values, maintain timely and professional communication with sponsors, and assist the manager in drafting and personalizing sponsor outreach materials.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Finance</h3>
                            <p className="mb-4">
                                Handle payment processes for vendors and sponsors, track and record ticket sales and associated costs, and organize invoices, receipts, and other necessary financial records.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Venue & Consumption</h3>
                            <p className="mb-4">
                                Research and assess venues for suitability, accessibility, and technical needs. Set up and test audio-visual equipment, coordinate with security, oversee setup, manage clean-up, and ensure timely food distribution with selected catering vendors.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Logistic</h3>
                            <p className="mb-4">
                                Develop a logistics plan covering timing, location, and event requirements. Identify and rent or purchase necessary equipment, assign vehicles for specific tasks, and oversee logistics execution during the event. Handle post-event logistics by collecting, packing, and storing resources.
                            </p>
                        </ImageAccordion>
                    </div>

                    {/* Right Column */}
                    <div className='flex flex-col space-y-6'>
                        <ImageAccordion
                            title="Marketing and Design."
                            closedHeaderImage={staffClosedBg.src}
                            openHeaderImage={staffOpenBg.src}
                            contentImage={contentBg.src}
                        >
                            <h3 className="text-xl font-semibold mb-2">CCSM</h3>
                            <p className="mb-4">
                                Create content briefs and content for TikTok and Instagram, manage TEDx Telkom University’s social media and copywriting, ensure tasks align with workflow, and collaborate with other divisions in content creation, especially for short videos.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Visual Design</h3>
                            <p className="mb-4">
                                Realization content brief for designs created by Content Creator, create designs for social media (digital) and print purposes, and Collaborating with other teams to improve the experience.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                            <p className="mb-4">
                                Prepare and operate equipment for event documentation, ensure documentation follows SOPs, assist the content creator team with editing, and produce audio-visual content such as bumpers, teasers, and after-movies.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Website</h3>
                            <p className="mb-4">
                                Develop the website based on the provided brief, ensure compatibility of domain, hosting, and tools, maintain website security, and manage website operations
                            </p>
                        </ImageAccordion>

                        <ImageAccordion
                            title="ENS"
                            closedHeaderImage={staffClosedBg.src}
                            openHeaderImage={staffOpenBg.src}
                            contentImage={contentBg.src}
                        >
                            <p className="mb-4">
                                Engagement and Sustainability fostering community connections and implementing sustainable practices during events. The engagement role involves managing communication with audiences, designing activities to involve participants, and creating a sense of community.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Audience</h3>
                            <p className="mb-4">
                                Designing and implementing audience engagement strategies, oversee audience service operations, analyze audience data to identify trends and improve experiences, manage feedback collection, and turn insights into action. Collaborate with other departments to enhance the overall audience experience.
                                                            </p>
                            <h3 className="text-xl font-semibold mb-2">Internal Sustainability</h3>
                        <p className="mb-4">
                            Support internal team engagement and well-being initiatives, implement internal communication strategies and feedback systems, assist in organizing training and development activities, and support evaluations and reporting on staff satisfaction.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Website</h3>
                        <p className="mb-4">
                            Develop the website based on the provided brief, ensure compatibility of domain, hosting, and tools, maintain website security, and manage website operations
                        </p>
                    </ImageAccordion>
                </div>
            </div >
        </div>
        </section >
    );
}

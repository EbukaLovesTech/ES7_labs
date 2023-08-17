import Styles from './page.module.css';
import Image from 'next/image';
import Contact_link from '@/components/contact-link';
export default function ServicePage() {
    return (
        <main>
            <div className={Styles.service_page_wrapper}>
                <h1>Our Features And Services</h1>
                <div className={Styles.grid_container}>
                    <section>
                        <div className={Styles.service_page_content}>
                            <div className={Styles.image_wrapper}>
                                <Image
                                    src='/we-build-website.svg'
                                    alt=''
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <div>
                                <h2>Customized Websites for Your Unique Sound</h2>
                                <p>We understand that your music is an extension of your identity.
                                    Our team of skilled developers works closely with you to create a website that resonates with your style.
                                    From vibrant color schemes to interactive elements, we ensure your online platform mirrors the essence of your music.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className={Styles.service_page_content}>
                            <div className={Styles.image_wrapper}>
                                <Image
                                    src='/visuals.svg'
                                    alt=''
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <div>
                                <h2>Captivating Visuals that Strike a Chord </h2>
                                <p>
                                    First impressions matter, especially in the fast-paced music industry.
                                    We craft visually stunning websites that capture attention and leave a lasting impact. Whether it's high-resolution images, striking album artwork displays,
                                    or captivating video backgrounds, we infuse creativity into every pixel.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className={Styles.service_page_content}>
                            <div className={Styles.image_wrapper}>
                                <Image
                                    src='/calendar.svg'
                                    alt=''
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <div>
                                <h2>Event Integration and Tour Updates </h2>
                                <p>
                                    Keeping your fans informed about your upcoming shows and tours is crucial. Our websites seamlessly integrate event calendars, tour schedules, and ticketing options, ensuring your followers never miss a beat.
                                    Engage your audience and build anticipation for your live performances!
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className={Styles.service_page_content}>
                            <div className={Styles.image_wrapper}>
                                <Image
                                    src='/connect-with-fans.svg'
                                    alt=''
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <div>
                                <h2>Connect with Your Fans </h2>
                                <p>
                                    Music brings people together, and we help you strengthen that connection. Interactive features like fan forums, comments sections, and social media integration empower you to engage directly with your fan base.
                                    Let your supporters feel like an integral part of your musical journey.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className={Styles.service_page_content}>
                            <div className={Styles.image_wrapper}>
                                <Image
                                    src='/analytics.svg'
                                    alt=''
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <div>
                                <h2> Analytics and Insights for Growth </h2>
                                <p>
                                    Understanding your audience is key to success. We integrate powerful analytics tools that provide valuable insights into visitor behavior, popular content, and demographics.
                                    This data equips you to make informed decisions and refine your online strategy.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className={Styles.service_page_content}>
                            <div className={Styles.image_wrapper}>
                                <Image
                                    src='secure-website.svg'
                                    alt=''
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <div>
                                <h2> Secure and Responsive Platforms </h2>
                                <p>With the increasing diversity of devices used to access websites, it's vital that your site performs flawlessly across them all. Our websites are optimized for mobile, tablet, and desktop,
                                    and built with robust security measures to keep your content safe.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div>
                <Contact_link />
            </div>
        </main >
    )
}
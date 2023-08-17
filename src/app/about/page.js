import Image from 'next/image';
import Styles from './page.module.css'

import Contact_link from '@/components/contact-link';
export default function AboutPage() {
    return (
        <main>
            <div className={Styles.about_wrapper}>
                <section>
                    <div className={Styles.intro_text}>
                        <h1>INSPIRED BY THE LOVE OF MUSIC</h1>
                    </div>
                </section>
                <section>
                    <div className={Styles.about_page_contents}>
                        <div className={Styles.content_wrapper}>
                            <div className={Styles.image_wrapper}>
                                <Image
                                    src='/music file2-08.svg'
                                    alt=''
                                    width={400}
                                    height={400}
                                    priority
                                />
                            </div>
                            <div>
                                <div className={Styles.text_wrapper}>
                                    <p><b>ES7 LABS</b> was founded in 2023 by a music lover who wanted to
                                        help <b>musicians, bands, and DJs</b> achieve their goals. we are passionate
                                        about music and we believe that everyone deserves to have a website that represent
                                        their art in best possible way.
                                    </p>
                                </div>
                                <div className={Styles.text_wrapper}>
                                    <p>
                                        We work with <b>musicians,bands and Djs</b> of all level, from beginners to established
                                        professionals. we understand the unique challenges that these artists face and we are committed to providing them
                                        with the services they need to succeed.
                                    </p>
                                </div>
                                <div className={Styles.text_wrapper}>
                                    <p>
                                        We are also constantly evolving and learning new technologies we are always
                                        looking for new ways to help our clients reach their target audiences and achieve their goals.
                                    </p>
                                </div>
                                <div className={Styles.text_wrapper}>
                                    <p>If you are a <b>musician,bands, or DJ</b> who is looking for a web development partner
                                        who understands your needs,then <b>ES7 LABS</b> is the perfect choice for you.
                                        contact us today to learn more about our services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Contact_link />
            </div>
        </main>
    )
}
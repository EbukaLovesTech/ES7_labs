import './contact_link.css';
import Link from 'next/link';
export default function Contact_link() {
    return (
        <section className='contact-section'>
            <div className='contact-us-wrapper'>
                <h2>Let's Talk</h2>
                <div>
                    <p>Do you have an exciting project coming up that you would like to talk about?</p>
                    <Link href='/contact' className='contact-link'>Contact Us</Link>
                </div>
            </div>
        </section>
    )
}
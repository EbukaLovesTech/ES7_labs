import Image from 'next/image'
import Link from 'next/link';
import './homepage.css';
import Contact_link from '@/components/contact-link';
import Carousel from '@/components/carousel';
export default function Home() {
  return (
    <main>
      <div>
        <section className='page-title-section'>
          <div className='page-title-wrapper'>
            <div className='intro-text'>
              <h1>Unleash Your Musical Identity: Elevate Your Online Presence with Our Web Services</h1>
              <div>
                <p>As <b>Musicians, Bands, and Djs, </b>your online presence is your stage, and we&apos;re here to make it unforgettable.
                  Let&apos;s create a website that echoes your sound and amplifies your reach.
                </p>
              </div>
            </div>
            <div className='intro-image-wrapper'>
              <Image
                src='/es7-illustration.svg'
                alt=''
                width={680}
                height={680}
                priority
              />
            </div>
          </div>
          <div className='build-website'>
            <Link href='/contact' className='contact-link'>Bring Your Dream Website To Life!</Link>
          </div>
        </section>
        <div>
          <section className='description-section'>
            <div>
              <h2>Step into the Spotlight: Your Online Music Journey Begins Here!</h2>
              <p>
                Welcome to a digital symphony designed exclusively for <b>Musicians,
                  Bands, and DJs!</b> At <b>ES7 LABS,</b> we specialize in crafting online experiences that harmonize
                with your unique sound. Our web development services are finely tuned to cater to the diverse needs of the music world.
                From dynamic websites that captivate your audience to seamless event integration that keeps your fans in
                rhythm with your schedule – we&apos;re here to help you strike the perfect chord in the virtual realm.
              </p>
            </div>
          </section>
          <section className='service-section'>
            <div>
              <h2>What We Offer</h2>
              <div>
                <div>
                  <Image
                    src="/es7_service.svg"
                    alt=""
                    width={320}
                    height={280}
                    priority
                  />
                </div>
                <div>
                  <h3> Customized Websites for Your Unique Sound </h3>
                  <p>
                    We understand that your music is an extension of your identity.
                    Our team of skilled developers works closely with you to create a website that resonates with your style.
                    From vibrant color schemes to interactive elements, we ensure your online platform mirrors the essence of your music.
                    <Link href='/services' className='learn-more'> Learn More </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className='testimonial_section'>
          <div className='testimonial_wrapper'>
            <h2>What our clients says</h2>
            <Carousel />
          </div>
        </section>
        <div className='portfolio_link_section'>
          <Link href='/' className='portfolio_link'>See our latest work</Link>
        </div>
        <Contact_link />
      </div>
    </main>
  )
}
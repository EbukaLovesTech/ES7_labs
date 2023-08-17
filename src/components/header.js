'use client'
import styles from '../app/layout.module.css';
import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
export default function HeaderComponent() {
    const [isOpen, setIsopen] = useState(false);
    function handleClick() {
        setIsopen(!isOpen);
    }
    return (
        <div className={styles.header_wrapper}>
            <header className={isOpen === true ? styles.navbar_is_opened : null}>
                <div className={styles.container}>
                    <div className={styles.logo_menu}>
                        <div className='logo'>
                            <Image
                                src="/es7labs.svg"
                                alt="ES7 LABS Logo"
                                width={130}
                                height={40}
                                priority
                            />
                        </div>
                        <div className={styles.menu_wrapper}>
                            <button aria-label='Menu' className={styles.menu_btn} onClick={handleClick}>
                                {
                                    isOpen === true ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                                }
                            </button>
                        </div>
                    </div>
                    <div className={isOpen === true ? styles.navBar_open : styles.nav_wrapper}>
                        <div className={styles.nav_container}>
                            <nav aria-label='Main navigation'>
                                <ul className={styles.links_wrapper}>
                                    <li className={styles.list_link}>
                                        <Link href='/' className={styles.link}>Home</Link>
                                    </li>
                                    <li className={styles.list_link}>
                                        <Link href='/about' className={styles.link}>About</Link>
                                    </li>
                                    <li className={styles.list_link}>
                                        <Link href='/services' className={styles.link}>Services</Link>
                                    </li>
                                    <li className={styles.list_link}>
                                        <Link href='/' className={styles.link}>Blog</Link>
                                    </li>
                                    <li className={styles.list_link}>
                                        <Link href='/contact' className={styles.link}>Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label='Social media'></nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
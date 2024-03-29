import React from 'react'
import styles from "./Layout.module.css";
import Link from 'next/link';


const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="/">Ordering Food</Link>
                </div>
                <div className={styles.right}>
                    <Link href="/menu">Menu</Link>
                    <Link href="/categories">Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <a href="https://botostart.ir" target="_blank" rel="noreferrer">
                    Botostart
                </a>
                Next.js course | BotoFood Project &copy;
            </footer>
        </>
    )
}

export default Layout

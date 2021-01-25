import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = (props) =>{
    let header = props.headerData;

    return(
        <nav className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
                <img
                    src={header[0].company_logo.url}
                    alt={`Company Logo`}
                    className={styles["company-logo"]}
                />
            </div>
            <div className={styles["nav-links"]}>
                {
                    header[0].navigation_links.map((link, i)=>{
                        return(
                            <div key={i}>
                                <Link href={`${link.href}`}>
                                    <a>
                                        <p key={i} className={styles["nav-link-title"]}>{link.title}</p>
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Header;
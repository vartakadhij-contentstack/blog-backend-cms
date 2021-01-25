import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = (props) =>{
    let footer = props.footerData;

    return(
        <div className={styles["footer-container"]}>
            <div className={styles["footer-heading"]}>
                <div className={styles["footer-title"]}>
                    <p>{`${footer[0].footer_title}`}</p>
                </div>
            </div>   
            <div className={styles["footer-details"]}>
                <div className={styles["footer-sub-details"]}>
                    <div className={styles["company-name"]}>
                        <p>{`${footer[0].company_name}`}</p>
                    </div>
                    <div className={styles["copyright-text"]}>
                        <p>{`${footer[0].copyright_text}`}</p>
                    </div> 
                </div>
                <div className={styles["social-media-links"]}>
                    <div className={styles["section-heading"]}>
                        <p>Social Media Links:</p>
                    </div>
                    <div className={styles["links"]}>
                        {
                            footer[0].social_media_links.map((link,i)=>{
                                return(
                                    <div key={i}>
                                        <Link href={`${link.href}`}>
                                            <a>
                                                <p key={i}>{`${link.title}`}</p>
                                            </a>
                                        </Link>
                                    </div>
                                )     
                            })       
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;
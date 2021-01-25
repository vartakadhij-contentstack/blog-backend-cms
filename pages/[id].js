import Link from 'next/link';
import styles from '../styles/Blog.module.css'
import Head from 'next/head'
import fetchData from './api/fetchAllEntries'
import fetchSingleBlog from './api/fetchEntryById'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Blog (props) {
    let {blog} = props;

    return(
        <>
        <Head>
            <title>Blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" type="img/png" href="/favicon.png" />
        </Head>
        <Header headerData={props.header} />
            <div className={styles["blog-container"]}>
                <div className={styles["blog-details"]}>
                    <div className={styles["blog-title"]}>
                        <p>{blog.blog_title}</p>
                    </div>
                    <div className={styles["image-container"]}>
                        <img 
                            src={blog.blog_image.url}
                            alt={`Blog Banner Image`}
                            className={styles["blog-banner-image"]}
                        >
                        </img>
                    </div>
                    <div className={styles["blog-content"]}>
                        <p>
                            {blog.blog_content}
                        </p>
                    </div>
                </div>
                <div className={styles["aside-section"]}>
                    <div className={styles["aside-heading"]}>
                        <p>Related Links:</p>
                    </div>
                    <div className={styles["blog-related-links"]}>
                        {
                            blog.related_blogs.map((link, i)=>{
                                return(
                                    <div key={i}>
                                        <Link href={`${link.related_blog_link.href}`}>
                                            <a>
                                                <p key={link.id}> {link.related_blog_link.title} </p>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>  
        <Footer footerData={props.footer} />
        </>
    )
}

export const getStaticProps = async (context) => {
    let blog = await fetchSingleBlog(
      "adhij_blog_rendering_backend",
      `${context.params.id}`
    );

    let header = await fetchData("adhij_blog_rendering_header").then(function success(
      result
    ) {
      return result;
    });

    let footer = await fetchData("adhij_blog_rendering_footer").then(function success(
      result
    ) {
      return result;
    });
    
    return {
      props: {
        blog: {...blog},
        header: [...header[0]],
        footer: [...footer[0]],
      },
    };
  };

  export const getStaticPaths = async () => {
    let allBlogs = await fetchData("adhij_blog_rendering_backend").then(function success(
      result
    ) {
      return result;
    });

    let paths = allBlogs[0].map((blog) => {
      return {
        params: {
          id: blog.uid.toString(),
        },
      };
    });
    
    return {
      paths,
      fallback: false,
    };
  };

export default Blog;
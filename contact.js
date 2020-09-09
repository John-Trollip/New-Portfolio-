import Layout from '../components/Layout';

const Contact = () => (
    <Layout>
        <section className="contact" id="contact" >
            <div className="contactHeader">
                <h2 className='sectionHeading'>Get in Touch</h2>
                <br />
            </div>
            <hr />
            <br />
            <div className="contact-links">
                <a href="https://github.com/John-Trollip"
                    target="_blank"
                    className="contact-details">
                    <i className="fab fa-github"></i> GitHub
            </a>

                <a href="mailto:johntrollip700@gmail.com"
                    className="contact-details">
                    <i className="fas fa-at"></i> Email
            </a>

                <a className="contact-details"
                    href="tel: 076 769 2768">
                    <i className="fas fa-phone"></i> 
            </a>
                <br />
            </div >
        </section>
        <style jsx>{`
    .contact {
        display: flex;
        flex-direction: column;
        text-align: center;
        min-width: 100%;
        min-height: 100%;
        padding-top: 10rem;
        padding-bottom: 20rem;
      }
      
    .sectionHeading {
        padding-top: 30px;
        font-size: 5rem;
        font-weight: bolder;
        color: white;
      }
    
    hr {
      border-top: 5px solid white;
        width: 50%;
        margin: auto;
    }

    .sectionParagraph {
        text-align: center;
        font-style: italic;
        font-size: 24px;
        color: #fff
      }

    i {
        background: -webkit-linear-gradient(#38d39f, #38a4d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .contact-links {
        font-size: 2.4rem;
        color: #fff;
    }

    @media (max-width: 767px) {
      .contact-details {
        display: block;
      }
    }
      
    .contact-details {
        color: white;
        justify-content: center;
        width: 100%;
        max-width: 980px;
        margin-top: 4rem;
        flex-wrap: wrap;
        font-size: 36px;
        padding: 0.8rem;
      }
      
    .contact-details:hover {
        transform: translateY(8px);
        background: -webkit-linear-gradient(#38d39f, #38a4d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
     
`}</style>
    </Layout>
);

export default Contact;
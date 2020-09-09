import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <section className="about" id="about">
            <div className='container'>
                <h2 className='sectionHeading'>About Me</h2>
                <hr />
                <br />
                <br />
                <p className="aboutIntro"> I am a very particular person, with great attention to detail and enjoy thinking out of the box.<br /><br />
                    I enjoy creating applications that are fun, dynamic and can make change where possible.
                    I gained many skills to do just that through a full stack web development bootcamp and am a competent MERN (MongoDB, ExpressJS, ReactJS, NodeJS) full stack developer.
      </p>
                <br />
                <p className="aboutIntro">
                    My passion for technology developed in high school, where I was introduced to CAT (Computer Application technology), I am currently a sales rep, but my passion is with technology.
                    I signed up for the abovementioned bootcamp and I am ready to pursue my next journey in life.
      </p>
                <br />
                    <a
                        href="../static/John Trollip CV.pdf"
                        download="John Trollip CV"
                        className="resumeDownload"
                        target="_blank">
                        Download my Resume</a>
                <br />
            </div>
            <style jsx>{`
    .about {
        justify-content: center;
        text-align: center;
        color: gray;
        font-weight: bolder;
        padding-bottom: -40px;
      }

    hr{
        border-top: 5px solid white;
        width: 50%;
        margin: auto;
      }
      
    .sectionHeading {
        padding-top: 30px;
        font-size: 5rem;
        font-weight: bold;
        color: white; 
      }
    
    .aboutIntro {
        text-align: center;
        font-style: italic;
        font-size: 20px;
        color: #fff
      }
    .resumeDownload {
        font-size: 20px;
    }
    .btn-show-all {
        text-decoration: none;
        color: #fff;
      }
      
      }
`}</style>
        </section>
    </Layout>
);

export default About;
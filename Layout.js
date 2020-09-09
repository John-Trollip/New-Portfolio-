import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';

export default class Layout extends React.Component {

    render() {
        return (
            <div className='layoutMainDiv'>
                <Head>
                    <title>JT || Full Stack Web Developer</title>
                    <meta name="google-site-verification" content="vlNuQiKYm9dQ9uVcpJQVO0V5oiXRzJ9tCQS_lCY2WMk" />
                    <link rel="shortcut icon" type="image/x-icon" href="./static/myIcon.ico" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
                    <link rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                        crossOrigin="anonymous"
                    />
                </Head>

                <div className='sectionDiv'>
                    <Navbar />
                    {this.props.children}
                </div>
                <footer>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                        crossOrigin="anonymous" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
                        integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
                        crossOrigin="anonymous" />
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
                        crossOrigin="anonymous"></script>
                </footer>
                <style jsx global>{`
                body {
                    background:url("/static/main.jpg");
                    background-size:cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-position: fixed;
                } 
      }
    `}</style>
            </div>
        )
    }
};
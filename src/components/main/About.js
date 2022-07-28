import './About.css'

function About(props) {
    return (
        <div className='container-fluid about-container d-flex flex-column align-items-center justify-content-center text-center pt-5'>
            <p className='about-title vollkorn'>About us</p>
            <p className='about-text default-font'>Moving Co. is a platform meant to best suit you and your moving needs. We provide a blog for all of the best moving tips and strategies, along with a marketplace to make your move easier.</p>
        </div>
    );
}

export default About;
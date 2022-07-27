import './HomePageSignedOut.css';

function HomePageSignedOut(props) {
	return (
		<div className='container d-flex flex-column justify-content-center'>
            <div className='container-fluid w-100'>
                <p className='default-font text'>
                    An App
                    <br />
                    That 
                            <br />
                    Moves You
                </p>
                <div className='w-40'></div>
            </div>
                    <div className='container-fluid text-center'>
                        <button className='btn'>Sign Up</button>
                        <button className='btn'>Sign In</button>
                    </div>
        </div>
	);
}

export default HomePageSignedOut;

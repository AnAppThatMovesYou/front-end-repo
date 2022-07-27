import './HomePageSignedOut.css';

function HomePageSignedIn(props) {
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
        </div>
	);
}

export default HomePageSignedIn;
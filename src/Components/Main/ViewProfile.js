import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ViewProfile.css';

function ViewProfile() {
	// Initial Profile state:
	const initialProfile = {
		email: '',
		mobile: '',
		address: '',
	};

	const [profile, setProfile] = useState(initialProfile);
	let navigate = useNavigate();

	const getProfile = async () => {
		try {
			const res = await axios.get(
				`https://movingco.herokuapp.com/user/${localStorage.getItem(
					'logInUsername'
				)}`,

				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
					},
				}
			);
			setProfile(res.data.userProfile);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	if (profile) {
		return (
			<div className='d-flex justify-content-center align-items-center container-fluid big-container'>
				<div className='container-fluid d-flex flex-column justify-content-center align-items-center form profile-container'>
					<h2 className='default-font'>
						Welcome {localStorage.getItem('logInUsername')}!
					</h2>
					<ul className=''>
						<li className='profile-details vollkorn'>
							Email: <span className='profile-details'>{profile.email}</span>
						</li>
						<li className='profile-details vollkorn'>
							Mobile Number:{' '}
							<span className='profile-details'>{profile.mobile}</span>
						</li>
						<li className='profile-details vollkorn'>
							Address:{' '}
							<span className='profile-details-span'>{profile.address}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	} else {
		return (
			<div className='d-flex justify-content-center align-items-center container-fluid big-container'>
				<div className='container-fluid d-flex flex-column justify-content-center align-items-center form profile-container'>
					<h2 className='default-font'>
						Welcome! {localStorage.getItem('logInUsername')}
					</h2>

					<ul>
						<li className='profile-details vollkorn'>Email:</li>
						<li className='profile-details vollkorn'>Mobile Number:</li>
						<li className='profile-details vollkorn'>Address:</li>
					</ul>

					<button
						className='btn'
						type='button'
						onClick={() => {
							navigate('/createprofile');
						}}>
						Add Profile
					</button>
				</div>
			</div>
		);
	}
}

export default ViewProfile;

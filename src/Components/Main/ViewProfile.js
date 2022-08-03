import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
			<div>
				<h2>Welcome! {localStorage.getItem('logInUsername')}</h2>

				<ul>
					<li className='profile-details'>
						Email: <span className='profile-details-span'>{profile.email}</span>
					</li>
					<li className='profile-details'>
						Mobile Number:{' '}
						<span className='profile-details-span'>{profile.mobile}</span>
					</li>
					<li className='profile-details'>
						Address:{' '}
						<span className='profile-details-span'>{profile.address}</span>
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div>
				<h2>Welcome! {localStorage.getItem('logInUsername')}</h2>

				<ul>
					<li className='profile-details'>Email:</li>
					<li className='profile-details'>Mobile Number:</li>
					<li className='profile-details'>Address:</li>
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
		);
	}
}

export default ViewProfile;

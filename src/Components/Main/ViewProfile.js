import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ViewProfile({ profile, setProfile }) {
	// const [currentProfile, setCurrentProfile]

	const getProfile = async () => {
		try {
			const res = await axios.get(
				`http://localhost:8080/user/${localStorage.getItem('logInUsername')}`,
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

				<div>{profile.email}</div>
				<div>{profile.mobile}</div>
				<div>{profile.address}</div>
			</div>
		);
	}
}

export default ViewProfile;

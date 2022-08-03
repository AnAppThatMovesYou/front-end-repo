import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateProfile({ setSignedIn }) {
	const navigate = useNavigate();
	// Initial Profile state:
	const initialProfile = {
		email: '',
		mobile: '',
		address: '',
	};

	const [profile, setProfile] = useState(initialProfile);

	function handleChange(event) {
		setProfile({
			...profile,
			[event.target.id]: event.target.value,
		});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		await setProfile(profile);

		try {
			const response = await axios.post(
				`https://movingco.herokuapp.com/profile/${localStorage.getItem(
					'logInUsername'
				)}`,
				profile,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
					},
				}
			);
			console.log('RESPONSE', response);

			// localStorage.setItem('profileEmail', profile.email);
			// localStorage.setItem('profileMobile', profile.mobile);
			// localStorage.setItem('profileAddress', profile.address);

			if (response.status === 200) {
				setSignedIn(true);
				navigate('/home');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='signup-form container-fluid d-flex justify-content-center align-items-center'>
			<form
				className='form form-group shadow-lg d-flex flex-column justify-content-center align-items-center gap-3'
				onSubmit={handleSubmit}>
				<h1 className='position-relative mb-3 text-center title-text default-font'>
					Create Profile
				</h1>
				<input
					id='email'
					type='text'
					className='form-control position-relative mb-1 input'
					placeholder='Email'
					value={profile.email}
					onChange={handleChange}
				/>
				<input
					id='mobile'
					type='text'
					className='form-control position-relative mb-1 input'
					placeholder='Mobile'
					value={profile.mobile}
					onChange={handleChange}
				/>

				<input
					id='address'
					type='text'
					className='form-control position-relative mb-1 input'
					placeholder='Address'
					value={profile.address}
					onChange={handleChange}
				/>

				<div className='button-container'>
					<div className='d-flex flex-row'>
						<button
							className='btn w-50'
							type='button'
							onClick={() => {
								navigate('/home');
							}}>
							<p className='signup-text'>Set up later</p>
						</button>
						<button className='btn' type='submit'>
							Create Profile
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default CreateProfile;

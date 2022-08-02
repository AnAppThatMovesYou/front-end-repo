import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Main/CreateBlog.css';

function CreateBlog({ logIn, LogInJwt }) {
	const navigate = useNavigate();
	const initialBlogState = {
		title: '',
		summary: '',
		content: '',
		imageUrl: '',
		category: '',
	};

	const [blogState, setBlogState] = useState(initialBlogState);

	function handleChange(event) {
		setBlogState({ ...blogState, [event.target.id]: event.target.value });
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				`https://movingco.herokuapp.com/blogs/${localStorage.getItem(
					'logInUsername'
				)}`,
				blogState,
				{
					headers: { Authorization: `Bearer ${LogInJwt}`, Test: 'hello' },
				}
			);

			if (response.status === 200) {
				navigate('/home');
			}
		} catch (error) {
			console.log(error);
		}
	};

	function handleCancel(event) {
		event.preventDefault();
		navigate('/home');
	}
	return (
		<div className='d-flex flex-column p-3 gap-3 create-blog-container justify-content-center align-items-center'>
			<form
				className='create-blog-form form-group shadow-lg d-flex flex-column justify-content-center align-items-center gap-3'
				onSubmit={handleSubmit}>
				<h1 className='default-font position-relative mb-3 text-center create-blog-title'>
					Create your Blog!
				</h1>
				<input
					required
					type='text'
					id='title'
					className='form-control position-relative mb-1 input'
					placeholder='Title'
					value={blogState.title}
					onChange={handleChange}
				/>
				<input
					required
					type='text'
					id='summary'
					className='form-control position-relative mb-1 input'
					placeholder='Summary'
					value={blogState.summary}
					onChange={handleChange}
				/>
				<textarea
					required
					type='text'
					id='content'
					className='form-control position-relative mb-1 input'
					placeholder='Content'
					value={blogState.content}
					onChange={handleChange}
				/>
				<input
					type='text'
					id='imageUrl'
					className='form-control position-relative mb-1 input'
					placeholder="Your image's url"
					value={blogState.imageUrl}
					onChange={handleChange}
				/>
				<div className='button-container'>
					<button className='btn w-40' type='button' onClick={handleCancel}>
						Cancel
					</button>
					<button className='btn w-40' type='submit'>
						Post Blog!
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateBlog;

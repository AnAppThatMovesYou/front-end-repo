import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Main/CreateBlog.css';

function CreateBlog({ logIn }) {
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
		// event.preventDefault();
		// try {
		// 	const response = await axios.post(
		// 		'https://localhost:8080/:username',
		// 		blogState
		// 	);
		// 	if (response.status === 201) {
		// 		navigate('/');
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
		// console.log(logIn);
	};

	function handleCancel(event) {
		event.preventDefault();
		navigate('/');
	}
	return (
		<div className='d-flex flex-column p-3 gap-3 create-blog-container'>
			<form className='form form-group' onSubmit={handleSubmit}>
				<h1 className='default-font position-relative mb-3 text-center'>
					Create your Blog!
				</h1>
				<input
					type='text'
					id='title'
					className='form-control position-relative mb-1 input'
					placeholder='Title'
					value={blogState.title}
					onChange={handleChange}
				/>
				<input
					type='text'
					id='summary'
					className='form-control position-relative mb-1 input'
					placeholder='Summary'
					value={blogState.summary}
					onChange={handleChange}
				/>
				<textarea
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
				<select
					id='category'
					name='Category'
					className='form-control position-relative mb-1 input'>
					value={blogState.category}
					onChange={handleChange}
					<option>Your blog's category</option>
					<option value={'Moving Tips'}>Moving Tips</option>
					<option value={'Moving Feelings'}>Moving Feelings</option>
					<option value={'Moving Tricks'}>Moving Tricks</option>
				</select>
				<div className='button-container'>
					<div className='d-flex flex-row'>
						<button className='btn w-50' type='submit'>
							Cancel
						</button>
						<button className='btn w-50' type='button' onClick={handleCancel}>
							Post Blog!
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default CreateBlog;

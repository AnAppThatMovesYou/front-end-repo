import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function EditBlog(props) {
	const navigate = useNavigate();
	const { id } = useParams();
	const url = `https://movingco.herokuapp.com/blogs/${id}`;

	const [currentPost, setCurrentPost] = useState([]);

	function handleChange(event) {
		setCurrentPost({ ...currentPost, [event.target.id]: event.target.value });
	}

	const getBlog = async () => {
		try {
			const res = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
				},
			});
			delete res.data['user'];
			setCurrentPost(res.data);
		} catch (error) {
			console.log('Oh no! Some thing has gone Wrong!', error);
		}
	};

	useEffect(() => {
		getBlog();
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('THIS IS WHAT IM TRYING TO PRINT', currentPost);
		try {
			const response = await axios.put(
				`https://movingco.herokuapp.com/blogs/${id}`,
				currentPost,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
					},
				}
			);
			console.log(response);
			if (response.status === 200) {
				navigate('/home');
			}
		} catch (error) {
			console.log(error);
		}
	};

	function handleCancel(event) {
		event.preventDefault();
		navigate(`/details/${id}`);
	}

	if (currentPost) {
		return (
			<div className='d-flex flex-column p-3 gap-3 create-blog-container justify-content-center align-items-center'>
				<form
					className='create-blog-form form-group shadow-lg d-flex flex-column justify-content-center align-items-center gap-3'
					onSubmit={handleSubmit}>
					<h1 className='default-font position-relative mb-3 text-center create-blog-title'>
						Edit your Blog!
					</h1>
					<input
						type='text'
						id='title'
						className='form-control position-relative mb-1 input'
						placeholder='Title'
						value={currentPost.title}
						onChange={handleChange}
					/>
					<input
						type='text'
						id='summary'
						className='form-control position-relative mb-1 input'
						placeholder='Summary'
						value={currentPost.summary}
						onChange={handleChange}
					/>
					<textarea
						type='text'
						id='content'
						className='form-control position-relative mb-1 input'
						placeholder='Content'
						value={currentPost.content}
						onChange={handleChange}
					/>
					<input
						type='text'
						id='imageUrl'
						className='form-control position-relative mb-1 input'
						placeholder="Your image's url"
						value={currentPost.imageUrl}
						onChange={handleChange}
					/>
					<div className='button-container'>
						<button className='btn w-40' type='button' onClick={handleCancel}>
							Cancel
						</button>
						<button className='btn w-50' type='submit'>
							Post Blog!
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default EditBlog;

import './BlogDetails.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Comments from './Comments';

function BlogDetails({ logInJwt }) {
	const navigate = useNavigate();
	const params = useParams();

	const [blogDetails, setBlogDetails] = useState(null);
	const { id } = useParams();
	const url = `https://movingco.herokuapp.com/blogs/${id}`;

	const getBlogDetails = async () => {
		try {
			const res = await axios.get(
				`https://movingco.herokuapp.com/blogs/${id}`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
					},
				}
			);
			setBlogDetails(res.data);
			// console.log(blogDetails.user.username);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBlogDetails();
	}, []);

	const handleDelete = async () => {
		try {
			const response = await axios.delete(url, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
				},
			});
			navigate('/home');
		} catch (error) {
			console.log(error);
		}
	};

	const [currentComments, setCurrentComments] = useState([]);

	const initialCommentState = {
		title: '',
		body: '',
	};

	const [commentState, setCommentState] = useState(initialCommentState);

	function handleChange(event) {
		setCommentState({ ...commentState, [event.target.id]: event.target.value });
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				'https://movingco.herokuapp.com/comments',
				{ ...commentState, postId: params.id }
			);
			if (response.status === 200) {
				getBlogDetails();
				setCommentState(initialCommentState);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleEdit = async () => {
		navigate(`/editpost/${String(params.id)}`);
	};

	if (blogDetails) {
		return (
			<li className='blog-card-details details-background d-flex justify-content-center align-items-center'>
				<h2 className='blog-title'> {blogDetails.title}</h2>
				<div className='blog-author'>
					Blog by:{' '}
					<span className='blog-author-name'>{blogDetails.user.username}</span>
				</div>

				<div className='blog-summary'>{blogDetails.summary}</div>

				<div className='details-img-container'>
					<img src={blogDetails.imageUrl} alt='image of family moving' />
				</div>

				<div className='blog-content'>{blogDetails.content}</div>

				<div className='comments'>
					<form
						className='form d-flex flex-column w-100'
						onSubmit={handleSubmit}>
						<input
							className='create-blog-form form-group shadow-lg d-flex flex-column justify-content-center align-items-center gap-3'
							type='text'
							placeholder='Your Comment'
							onChange={handleChange}
							value={commentState.body}></input>

						<div className='d-flex justify-content-end'>
							<button className='btn'>Comment</button>
						</div>
					</form>

					<h5 className='d-flex flex-row w-100 justify-content-left'>
						Comments
					</h5>
					<div>
						{currentComments.map((comment) => {
							return (
								<Comments
									body={comment.body}
									createdAt={comment.createdAt}
									id={comment._id}
									getPost={getBlogDetails}
									key={comment._id}
								/>
							);
						})}
					</div>
				</div>

				<div className='d-flex flex-row w-100 justify-content-center'>
					{blogDetails.user.username ===
					localStorage.getItem('logInUsername') ? (
						<button
							type='button'
							className='details-btn btn w-50'
							onClick={handleDelete}>
							Delete Post
						</button>
					) : (
						''
					)}
					{blogDetails.user.username ===
					localStorage.getItem('logInUsername') ? (
						<button
							type='button'
							className='details-btn btn w-50'
							onClick={(event) => {
								event.preventDefault();
								navigate(`/editblog/${blogDetails.id}`);
							}}>
							Edit Post
						</button>
					) : (
						''
					)}
				</div>
			</li>
		);
	}
}

export default BlogDetails;

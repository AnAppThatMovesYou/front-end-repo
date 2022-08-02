import './BlogDetails.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function BlogDetails({ logInJwt }) {
	const navigate = useNavigate();

	const [blogDetails, setBlogDetails] = useState(null);
	const { id } = useParams();
	const url = `http://localhost:8080/blogs/${id}`;

	const getBlogDetails = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/blogs/${id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
				},
			});
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

	// const handleDelete =()=>{

	// }
	if (blogDetails) {
		return (
			<li className='blog-card-details details-background'>
				<h2 className='blog-title'> {blogDetails.title}</h2>

				<div className='blog-summary'>{blogDetails.summary}</div>

				<div>
					<img src={blogDetails.imgUrl} alt='image of family moving' />
				</div>

				<div className='blog-content'>{blogDetails.content}</div>

				<div>Category: {`#${blogDetails.category}`}</div>

				{blogDetails.user.username === localStorage.getItem('logInUsername') ? (
					<button
						type='button'
						className='details-btn btn'
						onClick={handleDelete}>
						Delete Post
					</button>
				) : (
					''
				)}
				{blogDetails.user.username === localStorage.getItem('logInUsername') ? (
					<button
						type='button'
						className='details-btn btn'
						onClick={(event) => {
							event.preventDefault();
							navigate(`/editblog/${blogDetails.id}`);
						}}>
						Edit Post
					</button>
				) : (
					''
				)}
			</li>
		);
	}
}

export default BlogDetails;

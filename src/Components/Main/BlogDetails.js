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
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBlogDetails();
	}, []);

	// const handleDelete =()=>{

	// }
	if (blogDetails) {
		return (
			<div>
				<h2> {blogDetails.title}</h2>

				<div>{blogDetails.summary}</div>

				<div>
					<img src={blogDetails.imgUrl} alt='image of family moving' />
				</div>

				<div>{blogDetails.content}</div>

				<div>Category: {`#${blogDetails.category}`}</div>

				<button type='button'>Delete Post</button>
				<button
					type='button'
					onClick={(event) => {
						event.preventDefault();
						navigate(`/editblog/${blogDetails.id}`);
					}}>
					Edit Post
				</button>
				{/* <Link to ={`editblog/${blogDetails.id}`}>
					<div> Edit post</div>
				</Link> */}
			</div>
		);
	}
}

export default BlogDetails;

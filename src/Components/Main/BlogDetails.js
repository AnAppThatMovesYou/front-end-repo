import './BlogDetails.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetails({logInJwt}) {
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
			setBlogDetails(res.data)
			
			
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBlogDetails();
	},[]);

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

			<div>
				{blogDetails.content}
			</div>


			<button type='button'>Delete Post</button>
			<button type='button'>Edit Post</button>
		</div>
	);
	}
}

export default BlogDetails;

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BlogContentCard from './BlogContentCard';
import './HomePageSignedIn.css';

function HomePageSignedIn({
	LogInJwt,
	currentBlogs,
	setCurrentBlogs,
	inputQuery,
}) {
	let navigate = useNavigate();

	const [searchInput, setSearchInput] = useState('');

	//fetch all the blogs
	const getBlogs = async () => {
		try {
			const res = await axios.get(`http://localhost:8080/blogs`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
				},
			});
			let data = res.data;
			setCurrentBlogs(data.reverse());
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBlogs();
	}, []);

	useEffect(() => {
		setSearchInput(inputQuery);
	});

	return (
		<div className='main-container container-fluid d-flex flex-column align-items-center'>
			<p className='default-font home-title-in text-center'>
				The blog for all of your moving needs
			</p>

			<ul className='blog-container'>
				{currentBlogs
					.filter((blogs) => {
						if (searchInput == '') {
							return blogs;
						} else if (
							blogs.title.toLowerCase().includes(searchInput.toLowerCase())
						) {
							return blogs;
						}
					})
					.map((blogs) => {
						return (
							<Link to={`/details/${blogs.id}`} className='blog-card shadow'>
								<BlogContentCard
									id={blogs.id}
									title={blogs.title}
									summary={blogs.summary}
									content={blogs.content}
									category={blogs.category}
									imageUrl={blogs.imageUrl}
									getBlogs={getBlogs}
									// votes={post.votes}
									key={blogs.id}
								/>
							</Link>
						);
					})}
			</ul>
		</div>
	);
}

export default HomePageSignedIn;

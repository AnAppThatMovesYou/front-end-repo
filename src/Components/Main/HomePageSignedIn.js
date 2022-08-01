import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogContentCard from './BlogContentCard';
import './HomePageSignedIn.css';

function HomePageSignedIn({ LogInJwt, currentBlogs, setCurrentBlogs }) {
	let navigate = useNavigate();

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

	return (
		<div className='main-container'>
			<p className='text default-font home-title'>
				A blog for all of your moving needs
			</p>

			{currentBlogs.map((blogs) => {
				return (
					<a href='/details'>
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
					</a>
				);
			})}

			{/* <ul className='blog-container'>
				<li className='blog-card'>
					<div className='img-container'>
						<img
							src='https://images.unsplash.com/photo-1658843941585-dd447ae263c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
							alt=''
						/>
					</div>
					<div>
						<span className='blog-category-in'>Category</span>
						<div className='blog-title-in'>Blog title</div>
						<div className='blog-description-in'>
							Blog description, dolor sit amet consectetur adipisicing elit.
						</div>
					</div>
				</li>
				<li className='blog-card'>
					<div className='img-container'>
						<img
							src='https://images.unsplash.com/photo-1658843941585-dd447ae263c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
							alt=''
						/>
					</div>
					<div>
						<span className='blog-category-in'>Category</span>
						<div className='blog-title-in'>Blog title</div>
						<div className='blog-description-in'>
							Blog description, dolor sit amet consectetur adipisicing elit.
						</div>
					</div>
				</li>
				<li className='blog-card'>
					<div className='img-container'>
						<img
							src='https://images.unsplash.com/photo-1658843941585-dd447ae263c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
							alt=''
						/>
					</div>
					<div>
						<span className='blog-category-in'>Category</span>
						<div className='blog-title-in'>Blog title</div>
						<div className='blog-description-in'>
							Blog description, dolor sit amet consectetur adipisicing elit.
						</div>
					</div>
				</li>
				<li className='blog-card'>
					<div className='img-container'>
						<img
							src='https://images.unsplash.com/photo-1658843941585-dd447ae263c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
							alt=''
						/>
					</div>
					<div>
						<span className='blog-category-in'>Category</span>
						<div className='blog-title-in'>Blog title</div>
						<div className='blog-description-in'>
							Blog description, dolor sit amet consectetur adipisicing elit.
						</div>
					</div>
				</li>
				<li className='blog-card'>
					<div className='img-container'>
						<img
							src='https://images.unsplash.com/photo-1658843941585-dd447ae263c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
							alt=''
						/>
					</div>
					<div>
						<span className='blog-category-in'>Category</span>
						<div className='blog-title-in'>Blog title</div>
						<div className='blog-description-in'>
							Blog description, dolor sit amet consectetur adipisicing elit.
						</div>
					</div>
				</li>
				<li className='blog-card'>
					<div className='img-container'>
						<img
							src='https://images.unsplash.com/photo-1658843941585-dd447ae263c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
							alt=''
						/>
					</div>
					<div>
						<span className='blog-category-in'>Category</span>
						<div className='blog-title-in'>Blog title</div>
						<div className='blog-description-in'>
							Blog description, dolor sit amet consectetur adipisicing elit.
						</div>
					</div>
				</li>
			</ul> */}
		</div>
	);
}

export default HomePageSignedIn;

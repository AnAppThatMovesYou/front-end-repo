import React from 'react';

function BlogContentCard({
	title,
	summary,
	content,
	category,
	imageUrl,
	getBlogs,
}) {
	return (
		<li className='blog-card'>
			<div className='img-container'>
				<img src={imageUrl} alt='' />
			</div>
			<div>
				<span className='blog-category'>{category}</span>
				<h1 className='blog-title'>{title}</h1>
				<div className='blog-description'>{summary}</div>
			</div>
		</li>
	);
}

export default BlogContentCard;

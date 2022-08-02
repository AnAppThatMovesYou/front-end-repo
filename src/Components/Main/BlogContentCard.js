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
			<div className='image-container'>
				<img src={imageUrl} alt='' />
			</div>
			<div>
				<span className='blog-category-in'>{category}</span>
				<h1 className='blog-title-in'>{title}</h1>
				<div className='blog-description-in'>{summary}</div>
			</div>
		</li>
	);
}

export default BlogContentCard;

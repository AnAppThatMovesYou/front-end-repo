import './BlogDetails.css';

function BlogDetails({ summary, content, title, imageUrl, category }) {
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
			<button type='button'>Delete Post</button>
			<button type='button'>Edit Post</button>
		</li>
	);
}

export default BlogDetails;

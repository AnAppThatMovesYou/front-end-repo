import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';

function EditBlog(props) {
    const navigate = useNavigate();
	const { id }  = useParams();
    const url = `http://localhost:8080/blogs/${id}`;

    const [currentPost, setCurrentPost] = useState([]);

    function handleChange(event) {
			setCurrentPost({ ...currentPost, [event.target.id]: event.target.value });
		}
    
    
    const getBlog = async ()=> {
        try{
            const res = await axios.get(url, {
							headers: {
								Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
							},
						});
            setCurrentPost(res.data)
        }
        catch (error) {
            console.log("Oh no! Some thing has gone Wrong!",error)
        }
    }


    useEffect(() => {
			getBlog();
            }, []);
    


    const handleSubmit = async (event) => {
			event.preventDefault();
			try {
				const response = await axios.put(
					`http://localhost:8080/blogs/${id}`,
					currentPost,
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('LogInJwt')}`,
						},
					}
				);
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

    if (currentPost){    
    return (
			<div className='d-flex flex-column p-3 gap-3 create-blog-container'>
				<form className='form form-group' onSubmit={handleSubmit}>
					<h1 className='default-font position-relative mb-3 text-center'>
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
					<select
						id='category'
						name='Category'
						className='form-control position-relative mb-1 input'>
						{/* value={currentPost.category} */}
						{/* onChange={handleChange} */}
						<option>Your blog's category</option>
						<option value={'Moving Tips'}>Moving Tips</option>
						<option value={'Moving Feelings'}>Moving Feelings</option>
						<option value={'Moving Tricks'}>Moving Tricks</option>
					</select>
					<div className='button-container'>
						<div className='d-flex flex-row'>
							<button className='btn w-50' type='button' onClick={handleCancel}>
								Cancel
							</button>
							<button className='btn w-50' type='submit'>
								Post Blog!
							</button>
						</div>
					</div>
				</form>
			</div>
		);
    }
}

export default EditBlog;
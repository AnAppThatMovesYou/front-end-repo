// import { Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
// import './contentcards.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Comments({ title, body, createdAt, id, getPost }) {
	const navigate = useNavigate();

	const handleDelete = async () => {
		try {
			const response = await axios.delete(
				`https://movingco.herokuapp.com/comments/${String(id)}`
			);
			if (response.status === 204) {
				// getPost();
				navigate(`/comments/${String(id)}`);
			}
		} catch (error) {}
	};

	return (
		<div className='form mt-3'>
			<div className='header'>
				<div className='d-flex flex-column justify-content-start align-items-start'>
					<span>Posted at: {createdAt}</span>
				</div>
				{/* <button className='drop-down' id='dropdown-basic-button' title=''>
					<Dropdown.Item onClick={handleDelete} href='#/action-1'>
						Delete comment
					</Dropdown.Item>
				</button> */}
			</div>
			<div className='cardBody'>
				<div>{body}</div>
			</div>
		</div>
	);
}

export default Comments;

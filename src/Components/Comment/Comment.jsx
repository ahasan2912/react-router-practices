import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const Comment = ({ comment }) => {
    const { id, name, email, body } = comment;
    const navigate = useNavigate();
    const handelBtn = () => {
        navigate(`/comment/${id}`);
    }
    return (
        <div className="border-2 border-yellow-500 rounded-md p-3">
            <h2 className='text-xl font-semibold'>Id: {id}</h2>
            <h2 className='text-xl font-bold'>Name: {name}</h2>
            <p className='text-yellow-300'>Email: {email}</p>
            <p>{body}</p>
            <Link className='btn btn-warning' to={`/comment/${id}`}>Show Details</Link>
            <Link to={`/comment/${id}`}>
                <button className='btn btn-primary'>Show Details2</button>
            </Link>
            <div className='text-center mt-2'>
                <button onClick={handelBtn} className='btn  btn-warning'>Details Info</button>
            </div>
        </div>
    );
};
Comment.propTypes = {
    comment: PropTypes.object.isRequired
}
export default Comment;
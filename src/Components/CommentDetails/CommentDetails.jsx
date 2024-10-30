import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const CommentDetails = () => {
    const details = useLoaderData();
    const {commentId} = useParams();
    const { id, name, email, body } = details;
    const nevigate = useNavigate();
    const handleBtn = () => {
        nevigate(-1);
    }

    return (
        <div className="text-center mt-10">
            <h2 className='text-xl font-semibold'>Id: {id}</h2>
            <h2 className='text-xl font-bold'>Name: {name}</h2>
            <p className='text-yellow-300'>Email: {email}</p>
            <p>{body}</p>
            <p>{commentId}</p>
            <div className="text-center">
                <button onClick={handleBtn} className="btn btn-success">Go Back</button>
            </div>
        </div>
    );
};

export default CommentDetails;
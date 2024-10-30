import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
    const comments = useLoaderData();
    return (
        <div>
            <h2 className="text-2xl text-center mt-10">Comments of User: {comments.length}</h2>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 px-5">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;
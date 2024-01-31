import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice"; // Adjust import according to your file structure

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const renderButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      onClick={() => dispatch(addReaction({ id: post.id, name }))}
      key={name}
      className='reactionButton'
    >
      {emoji} {post.reactions[name]}
    </button>
  ));

  return <div>{renderButtons}</div>;
};

export default ReactionButtons;

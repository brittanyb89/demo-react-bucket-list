import PropTypes from "prop-types";
import Button from "./Button";

export default function Bucket({ bucket }) {
  return (
    <li
      className={`list-none space-x-2 ${bucket.isCompleted && "line-through"}`}
    >
      <label htmlFor={bucket.id} className="font-medium">
        <input
          type="checkbox"
          id={bucket.id}
          className="mr-2"
          defaultChecked={bucket.isCompleted}
        />
        {bucket.text}
      </label>
      <Button text="Edit" colorClass="bg-orange-500" />
      <Button text="🔥" colorClass="bg-red-500" />
    </li>
  );
}

Bucket.defaultProps = {
  bucket: {
    importance: 1,
    isCompleted: false,
  },
};

Bucket.propTypes = {
  bucket: PropTypes.exact({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    importance: PropTypes.number,
    isCompleted: PropTypes.bool,
  }),
};

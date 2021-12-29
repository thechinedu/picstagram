import Post from "@components/Post";
import { FC } from "react";

const PostList: FC = () => {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <Post key={item} />
      ))}
    </>
  );
};

export default PostList;

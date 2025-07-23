// import { useParams } from "next/navigation";
import React from "react";

const BlogDetail = ({ params }) => {
  // const params = useParams();
  console.log("params", params);
  return <div>BlogDetail: {params.blogID}</div>;
};

export default BlogDetail;

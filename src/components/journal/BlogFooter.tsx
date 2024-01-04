import Link from "next/link";
import React from "react";

const BlogFooter = ({ post }: { post: any }) => {
  return (
    <div className="pt-4">
      <div className="border-t">
        <div className="text-base mt-3  flex flex-col items-end">
          <p className="text-muted-foreground">Next Article</p>
          <Link href={post.slug} className="underline">
            {post.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;

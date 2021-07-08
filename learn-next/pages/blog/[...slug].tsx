import { NextRouter, useRouter } from "next/router";

interface SlugProps {
  router: NextRouter;
}

const BlogPostsPage = (): JSX.Element | null => {
  const router = useRouter();

  console.log(router.query);
  if (!router.isReady) {
    return null;
  }
  return (
    <div>
      <h1>BlogPosts Page</h1>
    </div>
  );
};

export default BlogPostsPage;

import { useRouter } from 'next/router';
import { BlogsPage } from 'container';

const Page = () => {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <main>
      <BlogsPage id={id} />
    </main>
  );
};

export default Page;
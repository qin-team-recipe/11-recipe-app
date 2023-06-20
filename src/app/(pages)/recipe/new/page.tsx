import Link from 'next/link';

const AddRecipePage = () => {
  return (
    <div>
      <p>AddRecipePage</p>
      <Link href="/recipe/draft">下書き</Link>
    </div>
  );
};
export default AddRecipePage;

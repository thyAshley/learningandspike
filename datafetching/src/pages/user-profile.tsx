import { GetServerSideProps } from "next";

const UserProfilePage = ({ username }: Props): JSX.Element => {
  return (
    <div>
      <h1>{username} Page</h1>
    </div>
  );
};

interface Props {
  username: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  return {
    props: {
      username: "Max",
    },
  };
};

export default UserProfilePage;

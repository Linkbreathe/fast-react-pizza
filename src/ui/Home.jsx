import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';
import Button from '../ui/Button';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center sm:my-16">
      <h1
        className="mb-8 px-4 text-center  text-xl
      font-semibold md:text-3xl"
      >
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        // <Button type="primary" to="/menu">
        <Button type="primary" to="/menu">
          continue ordering {username}
        </Button>
      )}
    </div>
  );
}

export default Home;

import { useParams, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   http запит
  // })

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreads">Під породи</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;

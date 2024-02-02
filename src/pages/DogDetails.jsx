import { useParams } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   http запит
  // })

  return <>DogDetails: {dogId}</>;
};

export default DogDetails;

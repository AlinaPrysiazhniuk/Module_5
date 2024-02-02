import { useParams } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();
  //useEffect(() => {
  //Http запит
  //}, [])
  return <>DogDetails: {dogId}</>;
};

export default DogDetails;

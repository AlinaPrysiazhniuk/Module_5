import { useParams } from 'react-router-dom';

export const Subbreads = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  //   http запит
  // })

  return <div>Subbreads: {dogId}</div>;
};

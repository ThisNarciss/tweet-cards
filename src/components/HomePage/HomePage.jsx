import { useLocation } from 'react-router-dom';
import { HomeContainer, HomeLink } from './HomePage.styled';

export function HomePage() {
  const location = useLocation();
  return (
    <HomeContainer>
      <HomeLink to="/tweets" state={{ from: location }}>
        Go to Tweets
      </HomeLink>
    </HomeContainer>
  );
}

import { useLocation } from 'react-router-dom';
import { DoorIcon, HomeContainer, HomeLink, Span } from './HomePage.styled';

export function HomePage() {
  const location = useLocation();
  return (
    <HomeContainer>
      <HomeLink to="/tweets" state={{ from: location }}>
        <DoorIcon size={150} />
        <Span>Go to Tweets</Span>
      </HomeLink>
    </HomeContainer>
  );
}

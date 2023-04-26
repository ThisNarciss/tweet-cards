import { useLocation } from 'react-router-dom';
import {
  DoorIcon,
  HomeContainer,
  HomeLink,
  HomeSection,
  Span,
} from '@/components/HomePage/HomePage.styled';

export function HomePage() {
  const location = useLocation();
  return (
    <HomeSection>
      <HomeContainer>
        <HomeLink to="/tweets" state={{ from: location }}>
          <DoorIcon size={150} />
          <Span>Go to Tweets</Span>
        </HomeLink>
      </HomeContainer>
    </HomeSection>
  );
}

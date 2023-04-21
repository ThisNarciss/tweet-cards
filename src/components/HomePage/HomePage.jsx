import { HomeContainer, HomeLink } from './HomePage.styled';

export function HomePage() {
  return (
    <HomeContainer>
      <HomeLink to="/tweets">Go to Tweets</HomeLink>
    </HomeContainer>
  );
}

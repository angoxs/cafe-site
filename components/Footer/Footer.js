import {
  Container,
  Grid,
  FirstGroup,
  SecondGroup,
  ThirdGroup,
  Text,
  Button,
} from "./style";

export default function Footer() {
  return (
    <Container>
      <Grid>
        <Text>CAFINELI</Text>
        <FirstGroup>
          <Text>
            <strong>Platform</strong>
          </Text>
          <Text>Help Center</Text>
          <Text>Security</Text>
        </FirstGroup>
        <SecondGroup>
          <Text>Customers</Text>
          <Text>Use Cases</Text>
          <Text>Customer Stories</Text>
        </SecondGroup>
        <ThirdGroup>
          <Text>Company</Text>
          <Text>About</Text>
          <Text>
            Careers <span>- We're hiring!</span>
          </Text>
        </ThirdGroup>
        <Button>
          {" "}
          <a href="https://twitter.com/angelVZUR">Apply</a>
        </Button>
      </Grid>
    </Container>
  );
}

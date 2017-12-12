import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const SmallContentSection = styled(Container)`
  margin-bottom: 1.5em;
`;
const ContentSection = styled(Container)`
  margin-bottom: 3em;
`;

const Page = styled.div`
  margin-top: 3em;
  margin-bottom: 4em;
`;

export { ContentSection, SmallContentSection, Page};
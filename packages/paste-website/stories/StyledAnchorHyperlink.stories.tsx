import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {LinkIcon} from '@twilio-paste/icons/esm/LinkIcon';
import {StyledAnchorHyperlink} from '../src/components/Heading';

export const SectionHeaderAnchor = (): React.ReactNode => {
  return (
    <Heading as="h2" variant="heading20">
      <Box as="span" display="flex" alignItems="center">
        Page Section
        <StyledAnchorHyperlink href="paste.twilio.design">
          <LinkIcon decorative={false} title={`page section anchor`} size="sizeIcon40" />
        </StyledAnchorHyperlink>
      </Box>
    </Heading>
  );
};

export default {
  title: 'Website/SectionHeaderAnchor',
};

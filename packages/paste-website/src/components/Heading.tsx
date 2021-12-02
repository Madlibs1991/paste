import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Heading} from '@twilio-paste/heading';
import type {HeadingProps} from '@twilio-paste/heading';
import {LinkIcon} from '@twilio-paste/icons/esm/LinkIcon';
import {slugify} from '../utils/RouteUtils';

const anchoredHeadingSpacing: Partial<
  {
    [key in HeadingProps['variant']]: Partial<BoxStyleProps>;
  }
> = {
  heading10: {
    marginBottom: 'space70',
  },
  heading20: {
    marginBottom: 'space60',
  },
  heading30: {
    marginBottom: 'space50',
  },
  heading40: {
    marginBottom: 'space40',
  },
  heading50: {
    marginBottom: 'space30',
  },
  heading60: {
    marginBottom: 'space30',
  },
};

const StyledAnchorHyperlink: React.FC<{href: string}> = ({children, ...props}) => {
  return (
    <Box
      {...props}
      textDecoration="none"
      marginLeft="space20"
      color="colorTextIcon"
      borderRadius="borderRadius20"
      outline="none"
      display="inline-block"
      verticalAlign="text-bottom"
      _hover={{color: 'colorTextLinkStronger'}}
      _focus={{boxShadow: 'shadowFocus'}}
      as="a"
    >
      {children}
    </Box>
  );
};

// will want to make icon and heading inline so they line up
//

const AnchoredHeading: React.FC<HeadingProps> = ({variant, as, ...props}) => {
  // Only generate slugs for headings where children is 'string'
  if (typeof props.children === 'string') {
    const id = slugify(props.children);

    return (
      <Box alignItems="start" {...anchoredHeadingSpacing[variant]}>
        <Heading display="inline" variant={variant} as={as} {...props} id={id}>
          {props.children}
        </Heading>
        <StyledAnchorHyperlink data-cy={`anchored-heading-${as}`} href={`#${id}`}>
          <LinkIcon decorative={false} title={`${props.children} page anchor`} size="sizeIcon30" />
        </StyledAnchorHyperlink>
      </Box>
    );
  }

  return <Heading variant={variant} as={as} {...props} />;
};

export {AnchoredHeading, StyledAnchorHyperlink};

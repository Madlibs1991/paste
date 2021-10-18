import * as React from 'react';

import type {Story, Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {CustomizationProvider} from '@twilio-paste/customization';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Truncate} from '@twilio-paste/truncate';

import {Alert} from '../src';
import {terms} from './i18n';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {onDismiss: {action: 'clicked'}},
} as Meta;

const Template: Story = ({variant = 'neutral', onDismiss}, {globals: {locale}}) => {
  return (
    <Alert onDismiss={onDismiss} variant={variant}>
      <Text as="p">{terms.alertText[locale]}</Text>
    </Alert>
  );
};

export const Controllable = Template.bind({});
Controllable.args = {
  variant: 'neutral',
  // onDismiss: action('dismiss'),
};

export const Neutral = (): React.ReactNode => {
  return (
    <>
      <Alert variant="neutral">
        <Text as="div">I am an alert</Text>
      </Alert>
      <Alert variant="neutral" onDismiss={action('dismiss')}>
        <Text as="div">
          <strong>Alert title</strong> I am an alert
        </Text>
      </Alert>
      <Alert variant="neutral">
        <Text as="div">
          Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
          commodo cursus magna.
        </Text>
      </Alert>
      <Box width="size50">
        <Alert variant="neutral" onDismiss={action('dismiss')}>
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
            vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          </Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </Alert>
      </Box>
    </>
  );
};

export const Error = (): React.ReactNode => {
  return (
    <>
      <Alert variant="error" onDismiss={action('dismiss')}>
        <Text as="div">I am an alert</Text>
      </Alert>
      <Alert variant="error">
        <Text as="div">
          <strong>Alert title</strong> I am an alert
        </Text>
      </Alert>
      <Alert variant="error" onDismiss={action('dismiss')}>
        <Text as="div">
          Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
          commodo cursus magna.
        </Text>
      </Alert>
      <Box width="size50">
        <Alert variant="error">
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
            vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          </Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </Alert>
      </Box>
    </>
  );
};

export const Warning = (): React.ReactNode => {
  return (
    <>
      <Alert variant="warning">
        <Text as="div">I am an alert</Text>
      </Alert>
      <Alert variant="warning" onDismiss={action('dismiss')}>
        <Text as="div">
          <strong>Alert title</strong> I am an alert
        </Text>
      </Alert>
      <Alert variant="warning">
        <Text as="div">
          Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
          commodo cursus magna.
        </Text>
      </Alert>
      <Box width="size50">
        <Alert variant="warning" onDismiss={action('dismiss')}>
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
            vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          </Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </Alert>
      </Box>
    </>
  );
};

export const CustomAlert = (): React.ReactNode => {
  return (
    <CustomizationProvider
      baseTheme="default"
      elements={{
        ALERT: {
          paddingY: 'space100',
          borderWidth: 'borderWidth40',
          variants: {
            neutral: {
              backgroundColor: 'colorBackgroundSuccessWeakest',
              borderColor: 'colorBorderSuccess',
              padding: 'space30',

              '[data-paste-element="ALERT_ICON"]': {
                color: 'colorTextIconSuccess',
              },
            },
            warning: {
              backgroundColor: 'colorBackgroundNew',
            },
          },
        },
        ALERT_DISMISS_BUTTON: {
          backgroundColor: 'colorBackgroundBodyInverse',
          borderRadius: 'borderRadius20',
        },
        ALERT_DISMISS_ICON: {
          color: 'colorTextInverse',
        },
      }}
    >
      <Alert variant="neutral">
        <Text as="div">I am a custom neutral alert</Text>
      </Alert>

      <Alert variant="warning">
        <Text as="div">I am a custom warning alert</Text>
      </Alert>

      <Alert variant="error">
        <Text as="div">I am a custom error alert</Text>
      </Alert>

      <Alert variant="neutral" onDismiss={action('dismiss')}>
        <Text as="div">
          <strong>Dismissable:</strong> I am a dismissable custom alert
        </Text>
      </Alert>

      <Alert variant="error" onDismiss={action('dismiss')}>
        <Text as="p">
          <strong>Dismissable:</strong> I am a dismissable custom alert
        </Text>
      </Alert>
    </CustomizationProvider>
  );
};

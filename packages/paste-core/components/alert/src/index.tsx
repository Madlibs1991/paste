import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import type {ValueOf} from '@twilio-paste/types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {NeutralIcon} from '@twilio-paste/icons/esm/NeutralIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';

type AlertVariantKeys = 'ERROR' | 'NEUTRAL' | 'WARNING';

export const AlertRoles = {
  ERROR: 'alert',
  NEUTRAL: 'status',
  WARNING: 'alert',
} as const;
export const AlertVariants = {
  ERROR: 'error',
  NEUTRAL: 'neutral',
  WARNING: 'warning',
} as const;
export const AlertBackgroundColors = {
  ERROR: 'colorBackgroundErrorWeakest',
  NEUTRAL: 'colorBackgroundNeutralWeakest',
  WARNING: 'colorBackgroundWarningWeakest',
} as const;
export const AlertBorderColors = {
  ERROR: 'colorBorderErrorWeak',
  NEUTRAL: 'colorBorderNeutral',
  WARNING: 'colorBorderWarningWeak',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertVariants = ValueOf<typeof AlertVariants>;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertBackgroundColors = ValueOf<typeof AlertBackgroundColors>;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertBorderColors = ValueOf<typeof AlertBorderColors>;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertRoles = ValueOf<typeof AlertRoles>;

export interface AlertProps extends Pick<BoxProps, 'element'> {
  id?: never;
  className?: never;
  children: NonNullable<React.ReactNode>;
  onDismiss?: () => void;
  role?: string;
  variant: AlertVariants;
}

const renderAlertIcon = (variant: AlertVariants, element: string): React.ReactElement => {
  switch (variant) {
    case AlertVariants.ERROR:
      return (
        <ErrorIcon
          element={`${element}_ICON`}
          color="colorTextIconError"
          decorative={false}
          title="error: "
          size="sizeIcon20"
        />
      );
    case AlertVariants.WARNING:
      return (
        <WarningIcon
          element={`${element}_ICON`}
          color="colorTextIconWarning"
          decorative={false}
          title="warning: "
          size="sizeIcon20"
        />
      );
    case AlertVariants.NEUTRAL:
    default:
      return (
        <NeutralIcon
          element={`${element}_ICON`}
          color="colorTextIconNeutral"
          decorative={false}
          title="information: "
          size="sizeIcon20"
        />
      );
  }
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({children, onDismiss, variant, role, element = 'ALERT', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        backgroundColor={AlertBackgroundColors[variant.toUpperCase() as AlertVariantKeys]}
        borderColor={AlertBorderColors[variant.toUpperCase() as AlertVariantKeys]}
        borderBottomWidth="borderWidth20"
        borderBottomStyle="solid"
        paddingLeft="space60"
        paddingRight="space60"
        paddingTop="space50"
        paddingBottom="space50"
        element={element}
        variant={variant}
        ref={ref}
        role={role != null ? role : AlertRoles[variant.toUpperCase() as AlertVariantKeys]}
      >
        <MediaObject as="div">
          <MediaFigure as="div" spacing="space30">
            {renderAlertIcon(variant, element)}
          </MediaFigure>
          <MediaBody as="div">{children}</MediaBody>
          {onDismiss && typeof onDismiss === 'function' && (
            <MediaFigure align="end" spacing="space60">
              <Button onClick={onDismiss} variant="secondary_icon" size="reset" element={`${element}_DISMISS_BUTTON`}>
                <CloseIcon
                  element={`${element}_DISMISS_ICON`}
                  color="colorTextIcon"
                  decorative={false}
                  title="Dismiss alert"
                  size="sizeIcon20"
                />
              </Button>
            </MediaFigure>
          )}
        </MediaObject>
      </Box>
    );
  }
);
Alert.displayName = 'Alert';

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  onDismiss: PropTypes.func,
  role: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(AlertVariants)).isRequired,
  element: PropTypes.string,
};

export {Alert};

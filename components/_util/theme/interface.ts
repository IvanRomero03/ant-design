import * as React from 'react';

export const PresetColors = [
  'blue',
  'purple',
  'cyan',
  'green',
  'magenta',
  'pink',
  'red',
  'orange',
  'yellow',
  'volcano',
  'geekblue',
  'lime',
  'gold',
] as const;

type PresetColorKey = typeof PresetColors[number];

export type PresetColorType = Record<PresetColorKey, string>;

type ColorPaletteKeyIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type ColorPalettes = {
  [key in `${keyof PresetColorType}-${ColorPaletteKeyIndex}`]: string;
};

export interface OverrideToken {
  derivative: Partial<DerivativeToken & AliasToken>;
  [componentName: string]: object; // FIXME: tmp of component token
}

// ======================================================================
// ==                            Seed Token                            ==
// ======================================================================

export interface SeedToken extends PresetColorType {
  // Color
  colorPrimary: string;
  colorSuccess: string;
  colorWarning: string;
  colorError: string;
  colorInfo: string;
  colorText: string;
  colorTextLightSolid: string;
  /** Base component background color. Will derivative container background color with this */
  colorBg: string;

  // Font
  fontFamily: string;
  fontSizeBase: number;

  // Grid
  gridUnit: number;
  gridBaseStep: number;

  // Line
  lineWidth: number;

  // Motion
  motionUnit: number;
  motionBase: number;
  motionEaseInOutCirc: string;
  motionEaseInOut: string;
  motionEaseOutBack: string;
  motionEaseInQuint: string;
  motionEaseOutQuint: string;

  // Radius
  radiusBase: number;

  // Size
  sizeUnit: number;
  sizeBaseStep: number;

  // Control Base
  controlHeight: number;
}

// ======================================================================
// ==                         Derivative Token                         ==
// ======================================================================

export interface DerivativeToken extends SeedToken, ColorPalettes {
  // Color
  colorPrimaryHover: string;
  colorPrimaryActive: string;
  colorPrimaryOutline: string;

  colorWarningHover: string;
  colorWarningActive: string;
  colorWarningOutline: string;

  colorErrorHover: string;
  colorErrorActive: string;
  colorErrorOutline: string;

  colorText2: string;
  colorTextBelow: string;
  colorTextBelow2: string;
  colorTextBelow3: string;

  colorBgBelow: string;
  colorBgBelow2: string;

  // Font
  fontSizes: number[];
  lineHeights: number[];

  // Size
  sizeSpace: number;
  sizeSpaceXS: number;
  sizeSpaceXXS: number;
  sizeSpaceSM: number;

  // Grid
  gridSpaceSM: number;
  gridSpaceBase: number;
  gridSpaceLG: number;
  gridSpaceXL: number;
  gridSpaceXXL: number;

  // Motion
  motionDurationFast: string;
  motionDurationMid: string;
  motionDurationSlow: string;

  // Radius
  radiusSM: number;
  radiusLG: number;
  radiusXL: number;

  /** @private Only Used for control inside component like Multiple Select inner selection item */
  controlHeightXS: number;
  controlHeightSM: number;
  controlHeightLG: number;
}

// ======================================================================
// ==                           Alias Token                            ==
// ======================================================================
// FIXME: DerivativeToken should part pick
export interface AliasToken extends DerivativeToken {
  // Font
  fontSizeSM: number;
  fontSize: number;
  fontSizeLG: number;
  fontSizeXL: number;

  fontSizeHeading1: number;
  fontSizeHeading2: number;
  fontSizeHeading3: number;
  fontSizeHeading4: number;
  fontSizeHeading5: number;

  // LineHeight
  lineHeight: number;
  lineHeightLG: number;

  lineHeightHeading1: number;
  lineHeightHeading2: number;
  lineHeightHeading3: number;
  lineHeightHeading4: number;
  lineHeightHeading5: number;

  // Control
  controlLineWidth: number;
  controlLineType: string;
  controlRadius: number;
  controlOutlineWidth: number;
  controlItemBgHover: string; // Note. It also is a color
  controlItemBgActive: string; // Note. It also is a color

  // Color
  colorBorder: string;
  colorSplit: string;
  colorTextSecondary: string;
  colorTextDisabled: string;
  /** Placeholder text color */
  colorPlaceholder: string;
  colorTextHeading: string;
  colorBgContainer: string;
  colorBgComponent: string;
  colorBgComponentDisabled: string;

  // =============== Legacy: should be remove ===============
  iconColorHover: string;

  padding: number;
  margin: number;

  backgroundLight: string;

  zIndexAffix: number;
  zIndexDropdown: number;
  zIndexPopover: number;

  boxShadow: string;

  // =============== Legacy: should be remove ===============
  highlightColor: string;

  linkColor: string;
  linkHoverColor: string;
  linkActiveColor: string;
  linkDecoration: React.CSSProperties['textDecoration'];
  linkHoverDecoration: React.CSSProperties['textDecoration'];
  linkFocusDecoration: React.CSSProperties['textDecoration'];

  controlPaddingHorizontal: number;
  controlPaddingHorizontalSM: number;
  paddingSM: number;
  paddingXS: number;
  paddingXXS: number;
  paddingLG: number;
  marginXS: number;
  marginSM: number;
  marginLG: number;
  marginXXS: number;

  primaryColors: string[];
  errorColors: string[];
  warningColors: string[];

  // TMP
  tmpPrimaryColorWeak: string;
  tmpPrimaryHoverColorWeak: string;
  // Checked background for Checkable Tag
  tmpPrimaryColor6: string;
  // Active background for Checkable Tag
  tmpPrimaryColor7: string;

  tmpSuccessColorDeprecatedBg: string;
  tmpWarningColorDeprecatedBg: string;
  tmpErrorColorDeprecatedBg: string;
  tmpInfoColorDeprecatedBg: string;

  tmpSuccessColorDeprecatedBorder: string;
  tmpWarningColorDeprecatedBorder: string;
  tmpErrorColorDeprecatedBorder: string;
  tmpInfoColorDeprecatedBorder: string;
}
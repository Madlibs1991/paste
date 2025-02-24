# Change Log

## 6.2.0

### Minor Changes

- [`847504d03`](https://github.com/twilio-labs/paste/commit/847504d0393706806c683a4ffb537796fccc5888) [#2011](https://github.com/twilio-labs/paste/pull/2011) Thanks [@TheSisb](https://github.com/TheSisb)! - [Popover] Removes the wrapping `<Box>` present in `PopoverContainer`, along with the ref passing. PopoverContainer is strictly a context provider now. This fixes issues around vertical alignment and inlining PopoverButtons.

### Patch Changes

- [`b7675915`](https://github.com/twilio-labs/paste/commit/b76759157a8c554863b6e37ddb6ea081c1c53258) [#1985](https://github.com/twilio-labs/paste/pull/1985) Thanks [@TheSisb](https://github.com/TheSisb)! - For debugging purposes we now ship a `filename.debug.js` unminified version of each component or library in Paste.

* [`ed5c0a49c`](https://github.com/twilio-labs/paste/commit/ed5c0a49ced5c524607cac7166d3aa4c389f2e7f) [#1965](https://github.com/twilio-labs/paste/pull/1965) Thanks [@shleewhite](https://github.com/shleewhite)! - Upgrade Paste to use React 17 by default, but maintain React 16 support for consumers.

## 6.1.1

### Patch Changes

- [`01baddcd`](https://github.com/twilio-labs/paste/commit/01baddcd62c9367c7d6d12bb853a25d4849132f6) [#1925](https://github.com/twilio-labs/paste/pull/1925) Thanks [@shleewhite](https://github.com/shleewhite)! - Add displayNames to all components

## 6.1.0

### Minor Changes

- [`db9f9665`](https://github.com/twilio-labs/paste/commit/db9f96657c8e3d9230ef17e1a0ab4658b6016dca) [#1915](https://github.com/twilio-labs/paste/pull/1915) Thanks [@zahnster](https://github.com/zahnster)! - [Popover] Enable component to respect element customizations set on the customization provider. Component now enables setting an element name on the underlying HTML element and checks the emotion theme object to determine whether it should merge in custom styles to the ones set by the component author.

## 6.0.4

### Patch Changes

- [`0bfba62d`](https://github.com/twilio-labs/paste/commit/0bfba62d66efe74fc410216f62e67fdd5ab11bea) [#1720](https://github.com/twilio-labs/paste/pull/1720) Thanks [@TheSisb](https://github.com/TheSisb)! - The Popover's close button will now always be the first focus upon opening.

## 6.0.3

### Patch Changes

- [`b04e98b1`](https://github.com/twilio-labs/paste/commit/b04e98b17f4e35016956280e1762267f82ad6c51) [#1693](https://github.com/twilio-labs/paste/pull/1693) Thanks [@nkrantz](https://github.com/nkrantz)! - Increase padding on popover content and decrease size of close icon

## 6.0.2

### Patch Changes

- [`6730c0a6`](https://github.com/twilio-labs/paste/commit/6730c0a643cf52fb9008ec3bf707759bd1333b68) [#1606](https://github.com/twilio-labs/paste/pull/1606) Thanks [@richbachman](https://github.com/richbachman)! - [Popover] added the `state` prop that allows hooking into the state of the component using `usePopoverState`. Package is also now exporting `usePopoverState`.

## 6.0.1

### Patch Changes

- [`25a1f632`](https://github.com/twilio-labs/paste/commit/25a1f632b6d92271967470f8c65a2dbc6babbaca) [#1404](https://github.com/twilio-labs/paste/pull/1404) Thanks [@SiTaggart](https://github.com/SiTaggart)! - update internal usage of design tokens to reflect new strong / weak nomenclature

## 6.0.0

### Patch Changes

- [`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316) [#1319](https://github.com/twilio-labs/paste/pull/1319) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Change internal dependencies to have minor range matching on version numbers

- Updated dependencies [[`0eded1fd`](https://github.com/twilio-labs/paste/commit/0eded1fd63f081ba9aeab5b5946218e1c5b9b316), [`1bcb8b30`](https://github.com/twilio-labs/paste/commit/1bcb8b3093920fdd871f8a13b498a8eb99201200)]:
  - @twilio-paste/button@7.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [[`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c), [`514bd5aa`](https://github.com/twilio-labs/paste/commit/514bd5aa9fed6581bbc4c1de649457bcc8e87b3c)]:
  - @twilio-paste/theme@5.0.1
  - @twilio-paste/icons@5.1.1
  - @twilio-paste/button@6.0.1
  - @twilio-paste/spinner@7.0.1
  - @twilio-paste/box@4.0.2
  - @twilio-paste/text@4.0.1
  - @twilio-paste/style-props@3.0.1

## 5.0.0

### Minor Changes

- [`169089ce`](https://github.com/twilio-labs/paste/commit/169089cee859f40bf863e471745b867fd91c5837) [#1269](https://github.com/twilio-labs/paste/pull/1269) Thanks [@TheSisb](https://github.com/TheSisb)! - Fixed issue where open popovers would disable page scrolling

### Patch Changes

- Updated dependencies [[`8b5a8592`](https://github.com/twilio-labs/paste/commit/8b5a8592848abba3975717c33ed9aed93f376087)]:
  - @twilio-paste/icons@5.1.0
  - @twilio-paste/button@6.0.0
  - @twilio-paste/spinner@7.0.0

## 4.0.1

### Patch Changes

- Updated dependencies [[`509eba7a`](https://github.com/twilio-labs/paste/commit/509eba7a95325dd6f8adc3e905e22f92b7f004a9)]:
  - @twilio-paste/box@4.0.1
  - @twilio-paste/button@5.0.1
  - @twilio-paste/spinner@6.0.1
  - @twilio-paste/icons@5.0.1

## 4.0.0

### Patch Changes

- Updated dependencies [[`4c9ed5ca`](https://github.com/twilio-labs/paste/commit/4c9ed5cac36ada218824d3e24bf45d4a03a12272), [`26c828d8`](https://github.com/twilio-labs/paste/commit/26c828d8681e0e671f28b5f2856cd1803f13953f)]:
  - @twilio-paste/design-tokens@6.6.0
  - @twilio-paste/theme@5.0.0
  - @twilio-paste/button@5.0.0
  - @twilio-paste/spinner@6.0.0
  - @twilio-paste/box@4.0.0
  - @twilio-paste/text@4.0.0
  - @twilio-paste/icons@5.0.0
  - @twilio-paste/style-props@3.0.0

## 3.0.3

### Patch Changes

- Updated dependencies [[`ac38757f`](https://github.com/twilio-labs/paste/commit/ac38757f0e426531862d5c562a2f2300cfa30592)]:
  - @twilio-paste/non-modal-dialog-primitive@0.3.3
  - @twilio-paste/button@4.0.3

## 3.0.2

### Patch Changes

- Updated dependencies [[`944c3407`](https://github.com/twilio-labs/paste/commit/944c340790b932f4714b0e6075c5641ecdbee9d6), [`af779398`](https://github.com/twilio-labs/paste/commit/af77939865e030fb356dbc4193c8324e6261627a)]:
  - @twilio-paste/design-tokens@6.5.2
  - @twilio-paste/icons@4.0.2
  - @twilio-paste/button@4.0.2
  - @twilio-paste/spinner@5.0.2
  - @twilio-paste/box@3.0.1
  - @twilio-paste/text@3.0.1
  - @twilio-paste/style-props@2.0.1
  - @twilio-paste/theme@4.3.1

## 3.0.1

### Patch Changes

- Updated dependencies [[`7340a6a5`](https://github.com/twilio-labs/paste/commit/7340a6a552ddc45e35a786cbee4106998911458b)]:
  - @twilio-paste/icons@4.0.1
  - @twilio-paste/button@4.0.1
  - @twilio-paste/spinner@5.0.1

## 3.0.0

### Patch Changes

- Updated dependencies [[`f1675586`](https://github.com/twilio-labs/paste/commit/f1675586933bcce71a6b5c5fec7d939735763a73)]:
  - @twilio-paste/theme@4.3.0
  - @twilio-paste/button@4.0.0
  - @twilio-paste/spinner@5.0.0
  - @twilio-paste/box@3.0.0
  - @twilio-paste/text@3.0.0
  - @twilio-paste/icons@4.0.0
  - @twilio-paste/style-props@2.0.0

## 2.0.1

### Patch Changes

- [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f) [#1158](https://github.com/twilio-labs/paste/pull/1158) Thanks [@richbachman](https://github.com/richbachman)! - Pinned all twilio-paste package versions in order to keep them in sync with core when they are updated by changesets.

- Updated dependencies [[`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f), [`a12acb61`](https://github.com/twilio-labs/paste/commit/a12acb61739c7c2f2984dfc71fe53b5b3812675f)]:
  - @twilio-paste/theme@4.2.2
  - @twilio-paste/button@3.0.1
  - @twilio-paste/non-modal-dialog-primitive@0.3.2
  - @twilio-paste/style-props@1.9.2
  - @twilio-paste/box@2.13.2
  - @twilio-paste/icons@3.13.1
  - @twilio-paste/text@2.5.2
  - @twilio-paste/spinner@4.0.1

## 2.0.0

### Patch Changes

- Updated dependencies [[`4114dac2`](https://github.com/twilio-labs/paste/commit/4114dac24d6b89f10aeeaeda2220825b9e146169)]:
  - @twilio-paste/icons@3.13.0
  - @twilio-paste/button@3.0.0
  - @twilio-paste/spinner@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.1.0...@twilio-paste/popover@1.1.1) (2021-01-25)

**Note:** Version bump only for package @twilio-paste/popover

# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.57...@twilio-paste/popover@1.1.0) (2021-01-21)

### Features

- ESBuild for builds ([#1084](https://github.com/twilio-labs/paste/issues/1084)) ([0536460](https://github.com/twilio-labs/paste/commit/053646011508be10477d5b732269cdb0419235d7))

## [1.0.57](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.56...@twilio-paste/popover@1.0.57) (2021-01-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.56](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.55...@twilio-paste/popover@1.0.56) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.55](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.54...@twilio-paste/popover@1.0.55) (2021-01-14)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.54](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.53...@twilio-paste/popover@1.0.54) (2021-01-13)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.53](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.52...@twilio-paste/popover@1.0.53) (2021-01-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.52](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.51...@twilio-paste/popover@1.0.52) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.51](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.50...@twilio-paste/popover@1.0.51) (2020-12-17)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.50](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.49...@twilio-paste/popover@1.0.50) (2020-12-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.49](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.48...@twilio-paste/popover@1.0.49) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.48](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.47...@twilio-paste/popover@1.0.48) (2020-12-11)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.47](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.46...@twilio-paste/popover@1.0.47) (2020-12-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.46](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.45...@twilio-paste/popover@1.0.46) (2020-12-03)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.45](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.44...@twilio-paste/popover@1.0.45) (2020-12-02)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.44](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.43...@twilio-paste/popover@1.0.44) (2020-11-16)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.43](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.42...@twilio-paste/popover@1.0.43) (2020-11-11)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.42](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.41...@twilio-paste/popover@1.0.42) (2020-11-10)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.41](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.40...@twilio-paste/popover@1.0.41) (2020-11-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.40](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.39...@twilio-paste/popover@1.0.40) (2020-11-06)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.39](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.38...@twilio-paste/popover@1.0.39) (2020-11-05)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.38](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.37...@twilio-paste/popover@1.0.38) (2020-11-02)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.37](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.36...@twilio-paste/popover@1.0.37) (2020-10-30)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.36](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.35...@twilio-paste/popover@1.0.36) (2020-10-29)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.35](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.34...@twilio-paste/popover@1.0.35) (2020-10-23)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.34](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.33...@twilio-paste/popover@1.0.34) (2020-10-22)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.33](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.32...@twilio-paste/popover@1.0.33) (2020-10-21)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.32](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.31...@twilio-paste/popover@1.0.32) (2020-10-19)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.31](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.30...@twilio-paste/popover@1.0.31) (2020-10-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.30](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.29...@twilio-paste/popover@1.0.30) (2020-10-13)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.29](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.28...@twilio-paste/popover@1.0.29) (2020-10-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.28](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.27...@twilio-paste/popover@1.0.28) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.27](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.26...@twilio-paste/popover@1.0.27) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.26](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.25...@twilio-paste/popover@1.0.26) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.24...@twilio-paste/popover@1.0.25) (2020-10-07)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.23...@twilio-paste/popover@1.0.24) (2020-09-28)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.22...@twilio-paste/popover@1.0.23) (2020-09-22)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.21...@twilio-paste/popover@1.0.22) (2020-09-21)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.20...@twilio-paste/popover@1.0.21) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.19...@twilio-paste/popover@1.0.20) (2020-09-15)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.18...@twilio-paste/popover@1.0.19) (2020-09-14)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.17...@twilio-paste/popover@1.0.18) (2020-09-10)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.16...@twilio-paste/popover@1.0.17) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.15...@twilio-paste/popover@1.0.16) (2020-09-09)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.14...@twilio-paste/popover@1.0.15) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.13...@twilio-paste/popover@1.0.14) (2020-09-08)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.12...@twilio-paste/popover@1.0.13) (2020-09-03)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.11...@twilio-paste/popover@1.0.12) (2020-09-02)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.10...@twilio-paste/popover@1.0.11) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.9...@twilio-paste/popover@1.0.10) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.8...@twilio-paste/popover@1.0.9) (2020-08-31)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.7...@twilio-paste/popover@1.0.8) (2020-08-27)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.6...@twilio-paste/popover@1.0.7) (2020-08-24)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.5...@twilio-paste/popover@1.0.6) (2020-08-19)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.4...@twilio-paste/popover@1.0.5) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.3...@twilio-paste/popover@1.0.4) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.2...@twilio-paste/popover@1.0.3) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.1...@twilio-paste/popover@1.0.2) (2020-08-12)

**Note:** Version bump only for package @twilio-paste/popover

## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@1.0.0...@twilio-paste/popover@1.0.1) (2020-08-06)

**Note:** Version bump only for package @twilio-paste/popover

# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.25...@twilio-paste/popover@1.0.0) (2020-08-05)

### Bug Fixes

- **icons:** use display=block by default and rename 'iconColor' prop to 'color' ([#637](https://github.com/twilio-labs/paste/issues/637)) ([82beef4](https://github.com/twilio-labs/paste/commit/82beef487c514b2eab5c40b1ef1409842dd4ca82))

### BREAKING CHANGES

- **icons:** This change renames a key prop and changes the display mode from inline-flex to block

- fix: use new icon prop (iconColor -> color)

- test: update snapshots

- chore(icons): update readme to mention correct display value

Co-authored-by: Rich Bachman <rb@richbachman.com>

- chore(website): update icon doc prop table

Co-authored-by: Rich Bachman <rb@richbachman.com>

Co-authored-by: Rich Bachman <rb@richbachman.com>

## [0.1.25](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.24...@twilio-paste/popover@0.1.25) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.24](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.23...@twilio-paste/popover@0.1.24) (2020-08-04)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.23](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.22...@twilio-paste/popover@0.1.23) (2020-07-31)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.22](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.21...@twilio-paste/popover@0.1.22) (2020-07-30)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.21](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.20...@twilio-paste/popover@0.1.21) (2020-07-29)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.20](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.19...@twilio-paste/popover@0.1.20) (2020-07-28)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.19](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.18...@twilio-paste/popover@0.1.19) (2020-07-22)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.18](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.17...@twilio-paste/popover@0.1.18) (2020-07-20)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.17](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.16...@twilio-paste/popover@0.1.17) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.16](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.15...@twilio-paste/popover@0.1.16) (2020-07-15)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.15](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.14...@twilio-paste/popover@0.1.15) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.14](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.13...@twilio-paste/popover@0.1.14) (2020-07-14)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.13](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.12...@twilio-paste/popover@0.1.13) (2020-07-08)

### Bug Fixes

- **popover:** move arrow to StyedBase to prevent line-height override ([b549721](https://github.com/twilio-labs/paste/commit/b549721b12673fa2a68b8eced86bda99063d2f40))

## [0.1.12](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.11...@twilio-paste/popover@0.1.12) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.11](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.10...@twilio-paste/popover@0.1.11) (2020-07-02)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.10](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.9...@twilio-paste/popover@0.1.10) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.9](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.8...@twilio-paste/popover@0.1.9) (2020-07-01)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.8](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.7...@twilio-paste/popover@0.1.8) (2020-06-29)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.7](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.6...@twilio-paste/popover@0.1.7) (2020-06-25)

### Bug Fixes

- **popover:** adjust close icon size, remove small text from stories ([b580ff1](https://github.com/twilio-labs/paste/commit/b580ff152553a2804ad2877cd90d5e9e76a2ef6d))

## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.5...@twilio-paste/popover@0.1.6) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.5](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.4...@twilio-paste/popover@0.1.5) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.4](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.3...@twilio-paste/popover@0.1.4) (2020-06-25)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.2...@twilio-paste/popover@0.1.3) (2020-06-23)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.1...@twilio-paste/popover@0.1.2) (2020-06-22)

**Note:** Version bump only for package @twilio-paste/popover

## [0.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/popover@0.1.0...@twilio-paste/popover@0.1.1) (2020-06-18)

**Note:** Version bump only for package @twilio-paste/popover

# 0.1.0 (2020-06-16)

### Features

- **popover:** add popover package ([6029ec5](https://github.com/twilio-labs/paste/commit/6029ec5771f3bd47efd7150a718a64144019fcbb))

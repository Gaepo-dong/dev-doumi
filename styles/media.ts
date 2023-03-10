const mediaQuery = (maxWidth: number) => {
  return `@media screen and (max-width: ${maxWidth}px)`;
};

/**
 * Media queries
 * @author @Seojunhwan
 * @description
 * - desktop first media queries 입니다!
 * - mobile_lg: 768px
 * - tablet: 1024px
 * - desktop: 1200px
 * - desktop_lg: 1440px
 * - desktop_xlg: 1920px
 * @example
 * import { media } from '@styles/media';
 * const Example = styled.div`
 *  ${media.mobile_lg} {
 *   color: red;
 * }
 * `;
 */

export const media = {
  mobile_lg: mediaQuery(768),
  tablet: mediaQuery(1024),
  desktop: mediaQuery(1200),
  desktop_slg: mediaQuery(1366),
  desktop_lg: mediaQuery(1440),
  desktop_mlg: mediaQuery(1600),
  desktop_xlg: mediaQuery(1920),
};

import "styled-components";
import type { Theme as CustomTheme } from "./theme"; // ajuste o caminho para onde estiver seu Theme

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}

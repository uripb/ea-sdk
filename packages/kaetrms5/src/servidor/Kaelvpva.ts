// PlMensajeVtaTypescript
import {
  EAMensajeVta
} from '@zurich-es/ea-sdk-info-utils-js';

import {
  Kaergva1,
  Kaergdes,
} from '..';


/**
 * Interfaz Kaelvpva
 */
export interface Kaelvpva extends EAMensajeVta {

  // PlDeclElementoJavascript
  cdgruper?: string;
  // PlDeclElementoJavascript
  cdtiplg?: string;
  // PlDeclElementoJavascript
  cdstiplg?: string;
  // PlDeclTipoCompArrayJavascript
  cdlisva1?: Kaergva1[];
  // PlDeclElementoJavascript
  cdlisdes?: Kaergdes;

}
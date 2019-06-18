// PlMensajeVtaTypescript
import {
  EAMensajeVta
} from '@zurich-es/ea-sdk-info-utils-js';

import {
  Kaergvd1,
Kaergdes,

} from '..';


/**
 * Interfaz Kaelvdef
 */
export interface Kaelvdef extends EAMensajeVta {

  // PlDeclTipoCompArrayJavascript
  cdlisreg?: Kaergvd1[];
  // PlDeclElementoJavascript
  cdlisver?: Kaergdes;

}
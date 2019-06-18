// PlMensajeVtaTypescript
import {
  EAMensajeVta
} from '@zurich-es/ea-sdk-info-utils-js';

import {
  Kaergpwd,

} from '..';


/**
 * Interfaz Kaelvpwd
 */
export interface Kaelvpwd extends EAMensajeVta {

  // PlDeclTipoCompArrayJavascript
  cdlisreg?: Kaergpwd[];
  // PlDeclElementoJavascript
  cderror?: number;
  // PlDeclElementoJavascript
  nuocurre?: number;
  // PlDeclElementoJavascript
  inultpag?: string;

}
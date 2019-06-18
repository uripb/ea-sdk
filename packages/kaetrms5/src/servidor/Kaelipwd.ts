// PlMensajeIdaTypescript
import {
  EAMensajeIda
} from '@zurich-es/ea-sdk-info-utils-js';

import {
  Kaergpwd,

} from '..';


/**
 * Interfaz Kaelipwd
 */
export interface Kaelipwd extends EAMensajeIda {

  // PlDeclElementoJavascript
  cdoperac?: string;
  // PlDeclElementoJavascript
  cdusuari?: string;
  // PlDeclElementoJavascript
  vacontra?: string;
  // PlDeclElementoJavascript
  cdpasswr?: string;
  // PlDeclElementoJavascript
  cdultreg?: Kaergpwd;

}
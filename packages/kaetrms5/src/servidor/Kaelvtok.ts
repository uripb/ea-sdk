// PlMensajeVtaTypescript
import {
  EAMensajeVta
} from '@zurich-es/ea-sdk-info-utils-js';



/**
 * Interfaz Kaelvtok
 */
export interface Kaelvtok extends EAMensajeVta {

  // PlDeclElementoJavascript
  cdtoken?: string;

}
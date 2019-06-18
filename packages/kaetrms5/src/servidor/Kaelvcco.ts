// PlMensajeVtaTypescript
import {
  EAMensajeVta
} from '@zurich-es/ea-sdk-info-utils-js';



/**
 * Interfaz Kaelvcco
 */
export interface Kaelvcco extends EAMensajeVta {

  // PlDeclElementoJavascript
  inok?: string;
  // PlDeclElementoJavascript
  cderror?: number;

}
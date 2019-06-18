// PlMensajeVtaTypescript
import {
  EAMensajeVta
} from '@zurich-es/ea-sdk-info-utils-js';



/**
 * Interfaz Kaelveus
 */
export interface Kaelveus extends EAMensajeVta {

  // PlDeclElementoJavascript
  cdgruper?: string;
  // PlDeclElementoJavascript
  nousuari?: string;
  // PlDeclElementoJavascript
  cdsesion?: string;
  // PlDeclElementoJavascript
  vadia?: string;
  // PlDeclElementoJavascript
  feultcon?: string;
  // PlDeclElementoJavascript
  cdtiplg?: string;
  // PlDeclElementoJavascript
  cdstiplg?: string;

}
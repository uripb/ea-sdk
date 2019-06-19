// PlMensajeIdaTypescript
import {
  EAMensajeIda
} from '@zurich-es/ea-sdk-info-utils-js';

import {
  Kaergpro,

} from '..';

/**
 * Interfaz Kaeliprf
 */
export interface Kaeliprf extends EAMensajeIda {

  // PlDeclElementoTypescript
  tcoperac?: string;
  // PlDeclElementoTypescript
  inestado?: string;
  // PlDeclElementoTypescript
  registro?: Kaergpro;

}
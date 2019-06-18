// PlMensajeVtaTypescript
import {
  EAMensajeVta
} from '@zurich-es/ea-sdk-info-utils-js';

import {
  Kaergpro,

} from '..';


/**
 * Interfaz Kaelvprf
 */
export interface Kaelvprf extends EAMensajeVta {

  // PlDeclTipoCompArrayTypescript
  registro?: Kaergpro[];
  // PlDeclElementoTypescript
  inestado?: string;
  // PlDeclElementoTypescript
  nuocurre?: number;

}
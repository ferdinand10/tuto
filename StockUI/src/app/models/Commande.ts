
import { Client } from './client';
import { LigneCommande } from './LigneCommande';

export class Commande {
 id: number;
 client: Client = new Client();
 nCommande: string;
 ptt: number;
 ligneCommande: LigneCommande[] = [];
}

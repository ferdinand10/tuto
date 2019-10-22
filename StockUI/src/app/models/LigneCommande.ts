import { Category } from './Category';
import { Commande } from './Commande';
import { Product} from './Product';

export class LigneCommande {
 id: number;
 commande: Commande = new Commande();
 product: Product = new Product();
 unitPrice: number;
 qty: number;
 totalCost: number;
}

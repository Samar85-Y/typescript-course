/**
 * Ausgangsdaten (kommen z.B. aus einer API)
 * ACHTUNG: absichtlich unknown
 */

const rawData: unknown = [
    {
        id: 'p1',
        title: 'Karabiner HMS',
        priceCents: 1299,
        tags: ['climbing', 'saftey'],
    },
    { id: 'p2', title: 'Express-Set', priceCents: 2599 },
    { id: 'p3', title: 'Helm', priceCents: '3999' }, // Fehler 
    { title: 'Seil 60m', priceCents: 8999 }, // Fehler
];

/** type Product {
    id: string;
    title: string;
    priceCents: number;
    tags?: string[];
}
*/
//Aufgabe 1: Typ definieren
interface Product {
    id: string;
    title: string;
    priceCents: number;
    tags?: string[];
}

//Aufgabe 2:Type Guard schreiben
function isProduct(value: unknown): value is Product {
    // TODO
    if (typeof value !== 'object' || value === null) {
        return false;
    }

    const product = value as Record<string, unknown>;
    // prüfe alle Pflichtfelder
    if (typeof product.id !== 'string') return false;
    if (typeof product.title !== 'string') return false;
    if (typeof product.priceCents !== 'number') return false;

    //tags ist optional, aber wenn vorhanden, dann string[] 
    if (
        product.tags !== undefined &&
        (!Array.isArray(product.tags) ||
            !product.tags.every(tag => typeof tag === 'string'))
    ) {
        return false;
    }

    return true;
}
//Aufgabe 3 – Gültige Produkte filtern 
function filterProducts(data: unknown[]): Product[]/* Rückgabetyp */ {
    // TODO 
    return data.filter(isProduct);
}


//Aufgabe 4 – Preise umrechnen (praxisnah)
function formatPrice(priceCents: number): string {
    // TODO 
    return (priceCents / 100).toFixed(2) + " €";
}

//Aufgabe 5 – Produktausgabe erzeugen 
function printProducts(products: Product[]): void {
    // TODO 
    for (const p of products) {
        console.log(`- ${p.title} (${formatPrice(p.priceCents)})`);

    }
}

//Aufgabe 6 – Auswertung 
function totalPrice(products: Product[]): number {
    // TODO 
    return products.reduce((sum, p) => sum + p.priceCents, 0);
}


//Erwartetes Endergebnis (Demo) 
const products = filterProducts(rawData as unknown[]);
printProducts(products);
console.log("Summe:", formatPrice(totalPrice(products))); 
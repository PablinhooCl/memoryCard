class Card{
    constructor(id, nShiny){
        this.id= id;
        this.isShiny = nShiny === 2;
    }
}
class SetCards {
    constructor(diff){
        this.set= [];
        this.setArray(diff);
    }
    setArray(diff) {
        const usedIds = new Set(); 
        while (this.set.length < diff) {
            const id = Math.floor(Math.random() * 1017) + 1;
            const nShiny = Math.floor(Math.random() * 2) + 1;
            if (!usedIds.has(id)) {
                const card = new Card(id, nShiny);
                this.set.push(card);
                usedIds.add(id);
            }
        }
    }
}

export default SetCards
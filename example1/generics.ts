class GenericMap<T> {
    private _map: {[key:string] : T} = {};
    public setItem(key: string, value: T):void{
        this._map[key] = value
    }
    public  getItem(key: string):T{
        return this._map[key]
    }

    public clear(){
        this._map = Object()
    }

    public printMap(){
        for (let key in this._map) {
            console.log(key, this._map[key])
        }
    }

}

debugger;
console.log("Generics")

let mapObj = new GenericMap<number>();
mapObj.setItem("Key1",1)
mapObj.setItem("Key2",2)
mapObj.setItem("Key3",3)
console.log(mapObj.getItem("Key1"))

mapObj.printMap()


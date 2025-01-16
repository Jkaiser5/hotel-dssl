class producto{
    static tablename=producto;
    constructor(id,nombre,descripcion,stock,precioventa){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.stock=stock;
        this.precioventa=precioventa;
    }
}
module.export=producto;
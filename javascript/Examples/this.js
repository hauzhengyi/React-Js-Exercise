const Mango = {
    color: 'Yellow',
    price: 6,
    weight: 0.5,
    about: function() {
        return 'This mango costs RM' + this.price;
        // return `This mango costs RM${this.price}`;
        // both works
    }
}
console.log(Mango.about());
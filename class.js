class Support {
    name;
    designation = 'support web dev';
    address = 'bd'
    constructor(name, address) {
        this.name = name
        this.address = address
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }

}
const amir = new Support('amir khan', 'bd')
const salman = new Support('salman khan', 'dubai')
const sahrukh = new Support('sahrukh', 'india')

amir.startSession()
salman.startSession()
sahrukh.startSession()
// console.log(amir, salman);
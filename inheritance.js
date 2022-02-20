class TeamMember {
    name;

    address = 'bd'
    constructor(name, address) {
        this.name = name
        this.address = address
    }
}

class Support extends TeamMember {

    groupSupportTime;
    designation = 'support web dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }

}
class StudentCare extends TeamMember {
    designation = 'care web dev';
    buildARoutine(student) {
        console.log(this.name, 'Build A Routine For', student)
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'neptune app dev';
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
}

const amir = new Support('amir khan', 'bd', 11)
const salman = new Support('salman khan', 'dubai', 4)
const sahrukh = new Support('sahrukh', 'india', 9)

const alia = new StudentCare('alia bhatt', 'mumbai', 11)
const ash = new NeptuneDev('ash', 'mumbai', 'android studio')

ash.releaseApp('1.4.5')
// console.log(ash)



class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        this._name = name;
    }
    get level() {
        this._level = level;
    }
    get numberOfStudents() {
        this._numberOfStudents = this.numberOfStudents;
    }
    numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents
        } else {
            return console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    quickFacts() {
        return console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let ranNum = Math.floor(Math.random()*substituteTeachers.length)
        return substituteTeachers[ranNum];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents,pickupPolicy){
        super(name,'primary',numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents,sportsTeams){
        super(name,'high',numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        console.log(this._sportsTeams);
    }
}

//Primary Tests
const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514, 'Students must be picked up by a parent, guardian or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(substituteTeachers);

//High School Test
const alSmith  = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;

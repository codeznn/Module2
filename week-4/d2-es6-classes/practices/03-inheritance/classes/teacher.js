const Person = require('./person');

// Your code here
class Teacher extends Person {
    constructor(firstName, lastName, subject, yearsOfExperience) {
        super(firstName, lastName);
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
    }
    static combinedYearsOfExperience(teachers) {
        // let res = 0;
        // for (let teacher of teachers) {
        //     res += teacher.yearsOfExperience;

        // }
        // return res;
        return teachers.reduce((sum, el) => sum += el.yearsOfExperience, 0)
    }

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}

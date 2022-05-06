// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100

function finalGrade (exam, projects) {
    switch (true) {
        case exam > 90 || projects > 10 :
            return 100
        case exam > 75 && projects > 4 :
            return 90
        case exam > 50 && projects > 1 :
            return 75
        default :
            return 0
    }
}
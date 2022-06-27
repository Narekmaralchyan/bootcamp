// For the given list of exams, and evaluations do the following exercises.

const evaluations = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 70
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 60
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 60
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 40
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 45
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 35
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 25
    }
   ];

   //  Return  the evaluation record with the lowest evaluation score,

function lowestScore (evaluations){
    let lowest = evaluations[0].score;
    for( let i= 1 ; i < evaluations.length ; i++){
        let current = evaluations[i];
        if( current.score < lowest) lowest = current.score
    }

    return lowest;
   }

//Return the name of the student who has the lowest evaluation score․
function lowestScoreName (evaluations){
    let lowest = evaluations[0].score;
    let name = evaluations[0].studentName
    for( let i= 1 ; i < evaluations.length ; i++){
        let current = evaluations[i];
        if( current.score < lowest) {
            lowest = current.score;
            name = current.studentName
        }      
        }

    return name;
   }

//Return array of students that have any evaluation more than 60․
function scoreMoreThan60(evaluations){
    let info = {};
    for( let i = 0 ; i < evaluations.length ; i++){
        let current = evaluations[i];
        if( current.score > 60 ){
            if(!info[current.studentId]){
                info[current.studentId] = {
                    name:current.studentName,
                    courseName:current.courseName
                }
            }
        }
    }
    return Object.values(info)
}

// Return array of students for whom the average evaluation is less than 40,
function averageLess40(evaluations){
    let info = {};
    let infoArray = [];
    for( let i = 0 ; i < evaluations.length ; i++){
        let current = evaluations[i];
        let id = current.studentId;
        
        if(!info[id]){
                info[id] = {
                    name:current.studentName,
                    score:current.score,
                    exams:1,
                }
            }
            else {
                info[id].score += current.score;
                info[id].exams++;
            }
        info[id].average = info[id].score / info[id].exams
            
    }

    for(let i = 0 ; i < Object.values(info).length ; i++){
        let current = Object.values(info)[i];
        if(current.average < 40) infoArray.push(current)
    }
    
    return infoArray;
}

// * Return array of courses including average evaluation for each course,
function courseInfo(evaluations){
    let info = {};
    let infoArray = [];
    for( let i = 0 ; i < evaluations.length ; i++){
        let current = evaluations[i];
        let id = current.courseId;
        
        if(!info[id]){
                info[id] = {
                    name:current.courseName,
                    score:current.score,
                    exams:1,
                }
            }
            else {
                info[id].score += current.score;
                info[id].exams++;
            }
        info[id].average = info[id].score / info[id].exams
            
    }

    
    return Object.values(info)
}

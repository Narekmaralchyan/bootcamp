class University{
    teachers = [] ;
    students = [] ;
    
    addMember(member){
        if(member.constructor.name == "Student")
            this.students.push(member);
        else if(member.constructor.name == "Teacher")
            this.teachers.push(member);     
    }

    removeMember(member){
        let type = member.constructor.name
        let array = type == "Student" ? this.teachers :this.students;
        array = array.filter(item=> item.name != member.name)   
        }

    startLesson(){
        this.teachers.forEach(teacher =>{
            teacher.energy -= 5;
        })
        this.students.forEach(student=>{
            student.energy -= 2;
        })
    }
}

class UniversityMember{
    constructor(name,age,role,energy = 24){
        this.name = name;
        this.age = age ;
        this.role = role ;
        this.energy = energy;
    }
    info(){
        return {
            name:this.name,
            age : this.age,
            role:this.role,
            energy:this.energy,
        }
    }
}

class Student extends UniversityMember {

}

class Teacher extends UniversityMember {

}
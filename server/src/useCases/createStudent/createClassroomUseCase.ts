import Student from '../../entities/Student';
import IStudentsRepository from '../../repositories/IStudentsRepository';
import ICreateClassroomDTO from './ICreateStudentDTO';

class CreateClassroomUseCase {
    constructor(private studentsRepository: IStudentsRepository) {}

    execute() {
        const data = [{}];

        const student = new Student(data);

        this.studentsRepository.save(data);

        return student;
    }
}

export default CreateClassroomUseCase;

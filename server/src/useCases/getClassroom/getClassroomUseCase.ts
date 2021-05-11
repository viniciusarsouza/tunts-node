import Student from '../../entities/Student';
import SpreadsheetsProvider from '../../providers/spreadsheetsAPI/implementations/SpreadsheetsProvider';

class GetClassroomUseCase {
    constructor(private spreadSheetsProvider: SpreadsheetsProvider) {}

    execute() {
        return this.spreadSheetsProvider.getClassroom();
    }
}

export default GetClassroomUseCase;

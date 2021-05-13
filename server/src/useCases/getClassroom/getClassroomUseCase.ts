import SpreadsheetsProvider from '../../providers/spreadsheetsAPI/implementations/SpreadsheetsProvider';

class GetClassroomUseCase {
    constructor(private spreadSheetsProvider: SpreadsheetsProvider) {}

    execute() {
        this.spreadSheetsProvider.getClassroom();
        return this.spreadSheetsProvider.updateClassroom();
    }
}

export default GetClassroomUseCase;

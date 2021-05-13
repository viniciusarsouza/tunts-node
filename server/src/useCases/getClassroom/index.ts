import SpreadsheetsProvider from '../../providers/spreadsheetsAPI/implementations/SpreadsheetsProvider';
import GetClassroomController from './getClassroomController';
import GetClassroomUseCase from './getClassroomUseCase';

const spreadsheetsProvider = new SpreadsheetsProvider();

const getClassroomUseCase = new GetClassroomUseCase(spreadsheetsProvider);

const getClassroomController = new GetClassroomController(getClassroomUseCase);

export { getClassroomController, spreadsheetsProvider, getClassroomUseCase };

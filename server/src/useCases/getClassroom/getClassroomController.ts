import { Request, Response } from 'express';
import GetClassroomUseCase from './getClassroomUseCase';
import { spreadsheetsProvider } from './';

class GetClassroomController {
    constructor(private GetClassroomUseCase: GetClassroomUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const getClassroomUseCase = new GetClassroomUseCase(
                spreadsheetsProvider,
            );
            const classroom = getClassroomUseCase.execute();
            return response.json(classroom);
        } catch (err) {
            throw console.log(err);
        }
    }
}

export default GetClassroomController;

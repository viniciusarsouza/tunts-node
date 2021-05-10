import { Request, Response } from 'express';
import CreateClassroomUseCase from './createClassroomUseCase';

class CreateClassroomController {
    constructor(private CreateClassroomUseCase: CreateClassroomUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            await this.CreateClassroomUseCase.execute();

            return response.status(201).send();
        } catch (err) {
            throw console.log(err);
        }
    }
}

export default CreateClassroomController;

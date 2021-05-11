'use strict';
import { google, sheets_v4 } from 'googleapis';
import ISpreadsheetsProvider from '../ISpreadsheetsProvider';
import Student from '../../../entities/Student';
import keys from '../keys/keys.json';

class SpreadsheetsProvider implements ISpreadsheetsProvider {
    getClassroom() {
        const classroomArray: Student[] = [];
        const client = new google.auth.JWT(
            keys.client_email,
            undefined,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'],
        );

        client.authorize((err, tokens) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('Connected');
                gsrun(client);
            }
        });

        const gsrun = async (cl) => {
            const gsapi = google.sheets({ version: 'v4', auth: cl });

            const options = {
                spreadsheetId: '1XvWJcRLj2WAeXO3ULQ_GxGm9---3SZkjMbGcXMJtt70',
                range: 'A4:F27',
            };

            const dataArray = (await gsapi.spreadsheets.values.get(options))
                .data.values;

            console.log(dataArray);
        };

        // const fakeClassroom = [
        //     {
        //         registration: 1,
        //         name: 'Aluno',
        //         absence: 10,
        //         firstTest: 60,
        //         secondTest: 70,
        //         thirdTest: 80,
        //     },

        //     {
        //         registration: 2,
        //         name: 'Eu',
        //         absence: 10,
        //         firstTest: 60,
        //         secondTest: 70,
        //         thirdTest: 80,
        //     },
        // ];

        return classroomArray;
    }

    updateClassroom(classroom: Student[]) {
        classroom = [];
    }
}

export default SpreadsheetsProvider;

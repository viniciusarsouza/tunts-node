'use strict';
import { google, sheets_v4 } from 'googleapis';
import ISpreadsheetsProvider from '../ISpreadsheetsProvider';
import Student from '../../../entities/Student';
import keys from '../keys/keys.json';

class SpreadsheetsProvider implements ISpreadsheetsProvider {
    public classroomArray: Student[] = [];

    public client = new google.auth.JWT(
        keys.client_email,
        undefined,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets'],
    );

    getClassroom() {
        this.client.authorize((err, tokens) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log('Connected');
                gsrun(this.client);
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

            dataArray.map((cv) => {
                this.classroomArray.push({
                    registration: cv[0],
                    name: cv[1],
                    absence: cv[2],
                    firstTest: cv[3],
                    secondTest: cv[4],
                    thirdTest: cv[5],
                });
            });
        };

        return this.classroomArray;
    }

    updateClassroom(classroom: Student[]) {
        classroom = [];
    }
}

export default SpreadsheetsProvider;

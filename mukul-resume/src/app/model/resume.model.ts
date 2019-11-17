import { Projects } from './projects.model';

export class Resume {
    'personaldetail': {
        'firstname': string;
        'lastname': string;
        'address': string;
        'languagesKnown': string;
        'dob': Date;
    };
    'profile': [
        {
            'value': string
        }
    ];
    'technicalSkill': {
        'frontend': string,
        'backend': string,
        'database': string,
        'developmentTools': string,
        'devOps': string
    };
    'personalQualities': [
        {
            'value': string
        }
    ];
    'keyResponsibilityHandled': [
        {
            'value': string
        }
    ];
    'keyProjectsTaken': Projects;
    'achievements': [
        {
            'value': string
        }
    ];
    'academicsAndQualifications': [
        {
            'value': string
        }
    ];
}

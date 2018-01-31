import axios from 'axios';

export const UPCOMING_RECRUITMENTS = 'upcoming_recruitments';




export function upcomingRecruitments() {

    const request = [
        {
            "id": 1,
            "college_name": "G L Bajaj Institute of Technology",
            "city": "Greater Noida",
            "student_placed_count": "8"
        },
        {
            "id": 2,
            "college_name": "Moti Lal Nehru Institute of Technology",
            "city": "Allahabad",
            "student_placed_count": "9"
        },
        {
            "id": 3,
            "college_name": "M. S. Ramaiah Institute of Technology",
            "city": "Bangalore",
            "student_placed_count": "4"
        },
        {
            "id": 4,
            "college_name": "JSS Institute of Technology",
            "city": "Bangalore",
            "student_placed_count": "10"
        }
    ]

    return {
        type: UPCOMING_RECRUITMENTS,
        payload: request
    };

}
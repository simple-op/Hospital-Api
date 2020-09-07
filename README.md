# Hospital-api
We’re going to design an API for the doctors of a Hospital which has been
allocated by the govt for testing and quarantine + well being of COVID-19
patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient
already exists, just return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine,
Symptoms-Quarantine, Positive-Admit]
- Date

# TO RUN
 Clone the Repo.
 cd to hostpital-api
 npm install
 npm start


# API collection : 
 - /doctors/register
 - /doctors/login 
 - /register_patient 
 - /patient/:id/create_report 
 - /patient/:id/all_report 
 - /reports/:status

# Server
 - Server will be running on localhost:8000

# Tools

 - Postman (to check api response)
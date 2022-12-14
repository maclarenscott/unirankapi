import { university_routes } from "/scripts/routes";
import { DatabaseConnection } from "/conn/conn";
import { getUniversityIdByName } from "/scripts/mis";
//return a json list of university programs
export default function handler(req, res) {
    //create a set of canadian university names, if the university from the url is not in the set, return an error
    //check if university from route in university_routes
    if (!university_routes.includes(req.query.university)) {
        res.status(404).json({ message: "University not found" })
    }


    //create a new database connection
    const conn = new DatabaseConnection();
    //connect database
    conn.connect().then(() => {
        //check if connection is successful
        if (!conn.connection) {
            res.status(500).json({ message: "Database connection failed" })
        }
        //get university id from url
        const university_id = getUniversityIdByName(req.query.university);
        //get programs from database
        const programs = conn.getUndergraduateProgramsByUniversityId(university_id).then((programs) => {
            //return json object of programs
            // console.log(programs)
            res.status(200).json(programs);
        });



            //return http response 200 with props as json object
        });



    }
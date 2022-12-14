import { university_routes } from "/scripts/routes";
import { DatabaseConnection } from "/conn/conn";
import { getUniversityIdByName } from "/scripts/mis";
//return a json list of university programs
export default function handler(req, res) {
    //create a set of canadian university names, if the university from the url is not in the set, return an error
    //check if filter is valid
    if (!["name", "admission_average", "acceptance_rate","applications","enrolment","competitive_score"].includes(req.query.filter)) {
        res.status(404).json({ message: "Filter not found" })
    }
    //check if limit is valid and less than 1000    
    if (req.query.limit) {
        if (isNaN(req.query.limit)) {
            res.status(404).json({ message: "Limit must be a number" })
        }
        //check if limit between 1 and 1000 and an integer  
        if (req.query.limit < 1 || req.query.limit > 1000 || !Number.isInteger(Number(req.query.limit))) {
            res.status(404).json({ message: "Limit must be a positive integer between 1 and 1000" })
        }
    }else{
        req.query.limit = 1000;
    }


    //create a new database connection
    
    const conn = new DatabaseConnection();
    //connect database
    conn.connect().then(() => {
        //check if connection is successful
        if (!conn.connection) {
            res.status(500).json({ message: "Database connection failed" })
        }
        //if order is given, check if it is valid
        if (req.query.order) {
            const lower_order = req.query.order.toLowerCase();
            if (!["asc", "desc"].includes(lower_order)) {
                res.status(404).json({ message: "Order must be one of if given: ASC, DESC" })
            }
        }else{
            req.query.order = "desc";
        }
        //get university id from url
        const university_id = getUniversityIdByName(req.query.university);
        //get programs from database
        const programs = conn.getUndergraduateProgramsByFilter(req.query.filter,req.query.order,req.query.limit).then((programs) => {
            //return json object of programs
            // console.log(programs)
            res.status(200).json(programs);
        });



            //return http response 200 with props as json object
        });



    }
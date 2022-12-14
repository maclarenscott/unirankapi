
import { university_routes } from "./routes"
export function getUniversityIdByName(university_name){
    return university_routes.indexOf(university_name)+23;
}


    
//return a json list of university programs
export async function getStaticProps() {
    // const res = await fetch('http://localhost:3000/api/programs')
    // const programs = await res.json()
    return {
        //return json object of programs
        props: {
            programs: [
                {
                    id: 1,
                    name: "Computer Science",
                    university: "University of Toronto",
                    university_id: 1,
                    program_id: 1,
                    description: "Computer Science is the study of the theoretical foundations of information and computation, and of practical techniques for their implementation and application in computer systems.",
                    
                },
                {
                    id: 2,
                    name: "Computer Science",
                    university: "University of Waterloo",
                    university_id: 2,
                    program_id: 1,
                }
            ]    
    }
    //return http response 200 with props as json object
}
}

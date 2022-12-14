
export default function handler(req, res) {
    res.status(200).json("To use the filter endpoint, use the following format: /api/programs/filter/[filter]. For example, /api/programs/filter/competitive_score. The filter can be one of the following: name, admission_average, acceptance_rate, applications, enrolment, competetive_score. The university can be any university in Canada.\nAdditionaly, you can specify if the order is ascending or descending by specifying the order parameter. For example, /api/programs/filter/competitive_score?order=asc. The order parameter can be one of the following: asc, desc. The default order is descending.\nFurthermore,the limit parameter can be used to limit the number of results. For example, /api/programs/filter/competitive_score?limit=10. The limit parameter must be a positive integer. The default limit is 1000.")

}


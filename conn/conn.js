import mysql from 'serverless-mysql';
export class DatabaseConnection {

    constructor(host = null, user = "php", password = null, database = "Universities") {
        require("dotenv").config()
        //set host and password to environment variables if not given
        if (!host) {
            host=process.env.host;

        }
        if (!password) {
            password=process.env.pass;
        }

        console.log(process.env.pass)
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
    }

    async connect() {
        this.connection = require('serverless-mysql')(
            {
                config: {
                    host: this.host,
                    user: this.user,
                    password: this.password,
                    database: this.database
                }
            });
    }

    async getUniversityById(id) {
        const rows = await this.connection.query('SELECT * FROM universities WHERE id = ?', [id]);
        return rows[0];
    }

    async getUndergraduateProgramById(id) {
        const rows = await this.connection.query('SELECT * FROM undergraduate_programs WHERE id = ?', [id]);
        return rows[0];
    }

    async getUndergraduateProgramsByUniversityId(universityId) {
        const rows = await this.connection.query('SELECT * FROM undergraduate_programs where school_id = ?;', [universityId]);
        console.log(rows)
        return rows;
    }
    async getUndergraduateProgramsByName(name) {
        const rows = await this.connection.query('SELECT * FROM undergraduate_programs WHERE name = ?', [name]);
        return rows0;
    }
    async getUniversityIdByName(name) {
        const rows = await this.connection.query('SELECT id FROM universities WHERE name = ', [name]);
        return rows[0];
    }
    async getUndergraduateProgramsByFilter(filter, order = "desc",limit=1000) {
        //order by filter
        const rows = await this.connection.query(`SELECT * FROM undergraduate_programs WHERE ${filter} IS NOT NULL OR ${filter} != 0 ORDER BY ${filter} ${order} LIMIT ${limit};`);
        return rows;
    }
    
}



const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const checkDatabaseConnection = async () => {
    const client = await pool.connect();

    try{
        await client.query("SELECT 1")
    } finally {
        client.release()
    }
};

module.exports ={
    pool ,
    checkDatabaseConnection
};


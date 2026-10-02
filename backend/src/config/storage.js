const {
    S3Client,
    HeadBucketCommand
} = require("@aws-sdk/client-s3");

const storage = new S3Client({
    endpoint: process.env.S3_ENDPOINT  ,
    region: process.env.S3_REGION,
    forcePathStyle : process.env.S3_FORCE_PATH_STYLE === "true",
    credentials :{
        accessKeyId : process.env.S3_ACCESS_KEY_ID,
        secretAccessKey : process.env.S3_SECRET_ACCESS_KEY
    }
});

const checkStorageConnection = async () => {
    await storage.send (
        new HeadBucketCommand ({
            Bucket: process.env.S3_BUCKET
        })
    );
};

module.exports = {
    storage ,
    checkStorageConnection
};
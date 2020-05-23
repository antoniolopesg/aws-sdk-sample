const AWS = require('aws-sdk');
const uuid = require('node-uuid');

const S3_CLIENT = new AWS.S3();

const bucketName = `aws-sdk-sample-${uuid.v4()}`;

S3_CLIENT.createBucket({ Bucket: bucketName }, (err) => {
  if(err){
    console.log(err);
    return;
  }

  console.log(`Bucket created: ${bucketName}`)

  let objectName = 'hello_aws.txt'

  S3_CLIENT.putObject(
    { 
      Bucket: bucketName, 
      Key: objectName, 
      Body: 'First bucket and object using AWS SDK'
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Success: ${bucketName}/${objectName}`)
      }
    }
  );
});
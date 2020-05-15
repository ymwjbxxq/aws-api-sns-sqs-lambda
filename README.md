# API Gateway + SNS + SQS + Lambda #

This example show you how to setup few serverless components.

![picture](https://bitbucket.org/DanBranch/api-sns-sqs-lambda/downloads/diagram.png)

### User Case ###

Well there a many of them :)
If you have an api and you want to fanout the request to have parallel asynchronous processing, you could subscribe the SNS topic to a SQS queue(s) or HTTP endpoint(s) etc.

In this example we subscribe with SQS queue for reliability and later on process it with a Lambda.


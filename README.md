# API Gateway + SNS + SQS + Lambda #

This example shows you how to set up a few serverless components.

![picture](https://bitbucket.org/DanBranch/api-sns-sqs-lambda/downloads/diagram.png)

### User Case ###

Well, there a many of them :)
If you have an API and you want to fan out the request to have parallel asynchronous processing, you could subscribe the SNS topic to an SQS queue(s) or HTTP endpoint(s) etc.

In this example, we subscribe with an SQS queue for reliability and later on the process it with a Lambda.


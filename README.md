# API Gateway + SNS + SQS + Lambda #

This example shows you how to set up a few serverless components.

![picture](https://github.com/ymwjbxxq/aws-api-sns-sqs-lambda/blob/master/diagram.png)

### User Case ###

Well, there a many of them :)
If you have an API and you want to fan out the request to have parallel asynchronous processing, you could subscribe the SNS topic to an SQS queue(s) or HTTP endpoint(s) etc.

In this example, we subscribe with an SQS queue for reliability and later process it with a Lambda.

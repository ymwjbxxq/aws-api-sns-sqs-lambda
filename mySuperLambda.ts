import { SQSEvent } from "aws-lambda";

export const handler = async (event: SQSEvent): Promise<any> => {
  for (const record of event.Records) {
    const body: any = JSON.parse(record.body);
    // Do something
  }

  return "OK";
};
import { MidwayError } from '@midwayjs/core';

export class FgoEmptyDataError extends MidwayError {
  constructor(err?: Error) {
    super('fgo data is empty', {
      cause: err,
    });
    if (err?.stack) {
      this.stack = err.stack;
    }
  }
}

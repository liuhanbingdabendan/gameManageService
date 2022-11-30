import { Catch } from '@midwayjs/decorator';
import { Context } from '@midwayjs/core';
import { FgoEmptyDataError } from '../error/fgo.error';

@Catch(FgoEmptyDataError)
export class FgoErrorFilter {
  async catch(err: FgoEmptyDataError, ctx: Context) {
    ctx.logger.error(err);
    return '<html><body><h1>weather data is empty</h1></body></html>';
  }
}

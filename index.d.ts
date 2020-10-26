import {Options as JuiceOptions} from 'juice'
import {MapStream} from 'event-stream'

declare const gulpJuice: (options?: JuiceOptions) => MapStream
export = gulpJuice

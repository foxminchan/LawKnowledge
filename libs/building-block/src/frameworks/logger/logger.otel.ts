/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import Pino, { Logger, LoggerOptions } from 'pino';
import { trace, context } from '@opentelemetry/api';

export const loggerOptions: LoggerOptions = {
  level: 'info',
  formatters: {
    level(label) {
      return { level: label };
    },
    log(object) {
      const activeSpan = trace.getSpan(context.active());
      if (!activeSpan) return { ...object };
      const spanContext = activeSpan.spanContext();
      if (!spanContext) return { ...object };
      const { spanId, traceId } = spanContext;
      return { ...object, spanId, traceId, span_id: spanId, trace_id: traceId };
    },
  },
};

export const logger: Logger = Pino(loggerOptions);

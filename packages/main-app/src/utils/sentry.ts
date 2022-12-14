import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import type { App } from 'vue'
import router from '~/router'

export function initSentry(app: App) {
  Sentry.init({
    app,
    dsn: 'https://f919e2698429451a981b2cfa619fe8de@o4504276330807296.ingest.sentry.io/4504276360757249',
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracePropagationTargets: ['localhost', 'my-site-url.com', /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}

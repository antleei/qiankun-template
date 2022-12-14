import hostMap from '~/utils/hostMap'

export interface microApp {
  name: string
  entry: string
  container: '#micro-app'
  activeRule: string
  port: number | string
}

export const apps: microApp[] = [
  {
    name: 'app1',
    entry: hostMap('//localhost:9001/'),
    container: '#micro-app',
    activeRule: '/app1',
    port: '9001',
  },
  {
    name: 'app2',
    entry: hostMap('//localhost:9002/'),
    container: '#micro-app',
    activeRule: '/app2',
    port: '9002',
  },
]

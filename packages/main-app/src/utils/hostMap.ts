interface HostMap {
  [key: string]: string
}

const map: HostMap = {
  '//localhost:9001/': '//cyoo.cn/app1/',
  '//localhost:9002/': '//cyoo.cn/app2/',
}

export default function hostMap(host: string) {
  if (process.env.NODE_ENV === 'production')
    return map[host]
  return host
}

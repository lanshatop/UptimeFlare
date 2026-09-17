import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
const pageConfig: PageConfig = {
  // Title for your status page
  title: "wang's Status Page",
  // Links shown at the header of your status page
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
  ],
  // 监控分组
  group: {
    '🌐 站点监控': ['yto88_web', 'lt_frp', 'nas_frp', 'ip_182_45_248_250','flac-music', '24bit'],
  },
}
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  // HTTP Basic认证 用户名:密码
  passwordProtection: 'wang:Yto@2019',
  // 监控列表
  monitors: [
{
      id: 'yto88_web',
      name: 'www.yto88.cn',
      method: 'GET',
      target: 'https://www.yto88.cn',
      expectedCodes: [200],
      timeout: 10000,
    },
{
      id: 'lt_frp',
      name: 'lt.250052.xyz:8081',
      method: 'GET',
      target: 'http://lt.250052.xyz:8081',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'nas_frp',
      name: 'nas.250052.xyz:8081',
      method: 'GET',
      target: 'http://nas.250052.xyz:8081',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'flac-music',
      name: 'flac.music.hi.cn',
      method: 'GET',
      target: 'https://flac.music.hi.cn',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: '24bit',
      name: 'www.24bit.net',
      method: 'GET',
      target: 'https://www.24bit.net',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'ip_182_45_248_250',
      name: '182.45.248.250',
      method: 'TCP_PING',
      target: '182.45.248.250:80',
      tooltip: '服务器 182.45.248.250 端口80检测',
      timeout: 5000,
    },
  ],
  notification: {
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
  },
}
// 清空维护计划，不需要维护任务
const maintenances: MaintenanceConfig[] = []
// Don't forget this, otherwise compilation fails.
export { maintenances, pageConfig, workerConfig }

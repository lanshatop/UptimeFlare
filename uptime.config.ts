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
    '🌐 服务器监控': ['ip_60_216_16_211', 'ip_58_56_56_190', 'ip_182_45_248_250'],
  },
}
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  // HTTP Basic认证 用户名:密码
  passwordProtection: 'wang:Yto@2019',
  // 监控列表
  monitors: [
    {
      id: 'ip_60_216_16_211',
      name: '60.216.16.211',
      method: 'TCP_PING',
      target: '60.216.16.211:80',
      tooltip: '服务器 60.216.16.211 端口80检测',
      timeout: 5000,
    },
    {
      id: 'ip_58_56_56_190',
      name: '58.56.56.190',
      method: 'TCP_PING',
      target: '58.56.56.190:80',
      tooltip: '服务器 58.56.56.190 端口80检测',
      timeout: 5000,
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

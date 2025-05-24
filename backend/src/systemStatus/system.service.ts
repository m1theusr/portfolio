import { Injectable } from '@nestjs/common';
import * as si from 'systeminformation';

@Injectable()
export class SystemService {
  async getStatus() {
    try {
      const [cpu, mem, osInfo, time] = await Promise.all([
        si.currentLoad(),
        si.mem(),
        si.osInfo(),
        si.time()
      ]);

      return {
        cpuLoad: cpu?.currentLoad?.toFixed(2) || '0',
        totalMem: ((mem?.total || 0) / 1024 / 1024 / 1024).toFixed(2) + ' GB',
        usedMem: ((mem?.total - (mem?.available || 0)) / 1024 / 1024 / 1024).toFixed(2) + ' GB',
        os: osInfo?.distro || 'Unknown',
        uptime: time?.uptime || 0
      };
    } catch (error) {
      console.error('Error fetching system information:', error);
      return {
        cpuLoad: '0',
        totalMem: '0 GB',
        usedMem: '0 GB',
        os: 'Unknown',
        uptime: 0
      };
    }
  }
}

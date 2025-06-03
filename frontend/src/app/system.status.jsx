// src/system/system.service.ts
import { Injectable } from '@nestjs/common';
import si from 'systeminformation';

@Injectable()
export class SystemService {
  async getStatus() {
    const [cpu, mem, osInfo] = await Promise.all([
      si.currentLoad(),
      si.mem(),
      si.osInfo()
    ]);

    return {
      cpuLoad: cpu.currentLoad.toFixed(2),
      totalMem: (mem.total / 1024 / 1024 / 1024).toFixed(2) + ' GB',
      usedMem: ((mem.total - mem.available) / 1024 / 1024 / 1024).toFixed(2) + ' GB',
      os: osInfo.distro,
      uptime: (await si.time()).uptime
    };
  }
}

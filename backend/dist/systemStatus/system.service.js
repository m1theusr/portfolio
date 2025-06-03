"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemService = void 0;
const common_1 = require("@nestjs/common");
const si = require("systeminformation");
let SystemService = class SystemService {
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
        }
        catch (error) {
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
};
exports.SystemService = SystemService;
exports.SystemService = SystemService = __decorate([
    (0, common_1.Injectable)()
], SystemService);
//# sourceMappingURL=system.service.js.map
import { SystemService } from './system.service';
export declare class SystemController {
    private readonly systemService;
    constructor(systemService: SystemService);
    getStatus(): Promise<{
        cpuLoad: string;
        totalMem: string;
        usedMem: string;
        os: string;
        uptime: number;
    }>;
}

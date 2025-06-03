export declare class SystemService {
    getStatus(): Promise<{
        cpuLoad: string;
        totalMem: string;
        usedMem: string;
        os: string;
        uptime: number;
    }>;
}

import os from 'node:os';
import cluster from 'cluster';
import { Logger } from '@nestjs/common';
import { isUndefined } from 'helper-fns';

export class Cluster {
  private static readonly logger = new Logger(Cluster.name);

  public static async createCluster(main: () => Promise<void>): Promise<void> {
    const cpuCount = this.getCpuCount();

    if (cluster.isPrimary) {
      this.logger.log(`📑 Starting cluster with ${cpuCount} workers...`);
      this.logger.log(`📑 Master server is running on process ${process.pid}`);

      for (let index = 0; index < cpuCount; index++) {
        this.logger.log(`📑 Forking process number ${index + 1}...`);
        cluster.fork();
      }

      cluster.on('exit', (worker) => {
        this.logger.warn(`🚦 Worker ${worker.id} died. `);
        this.logger.warn('🚦 Starting a new worker...');
        cluster.fork();
      });
    } else {
      try {
        await main();
      } catch (error) {
        this.logger.error(error);
      }
    }
  }

  private static getCpuCount(): number {
    if (!isUndefined(process.env.WORKERS_COUNT))
      return Number.parseInt(process.env.WORKERS_COUNT, 10);

    return process.env.NODE_ENV.startsWith('prod') ? os.cpus().length : 2;
  }
}

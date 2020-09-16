export class Server
{
  Hostname: string;
  Resources: {
    MemPhysical: number,
    MemSwap: number,
    MemReserved: number,
    CPUs: number,
    GPUs: string[]
  };
  Cpuuse: number

  constructor (Hostname: string, MemPhysical: number, MemSwap: number, MemReserved: number,  CPUs: number, GPUs: Array<string>, Cpuuse: number)
  {
    this.Hostname = Hostname;
    this.Resources.MemPhysical = MemPhysical;
    this.Resources.MemSwap = MemSwap;
    this.Resources.MemReserved = MemReserved;
    this.Resources.CPUs = CPUs;
    this.Resources.GPUs = GPUs;
    this.Cpuuse = Cpuuse;
  }

}

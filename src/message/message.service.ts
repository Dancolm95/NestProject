import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  private readonly names: string[] = [];

  getMessage(name: string): string {
    return `Hola, ${name || 'visitante'}!`;
  }

  saveName(name: string): void {
    this.names.push(name);
  }

  getAllNames(): string[] {
    return this.names;
  }

  deleteName(name: string): boolean {
    const index = this.names.indexOf(name);
    if (index === -1) {
      return false;
    }

    this.names.splice(index, 1);
    return true;
  }
}

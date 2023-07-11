import {Controller, Get} from '@nestjs/common';

interface HeroInterface {
  id: number;
  name: string;
  description: string;
}

@Controller('heroes')
export class HeroesController {

  @Get()
  findAll(): HeroInterface[] {
    return [
      {
        id: 1,
        name: 'Sniper',
        description: 'Sniper is a hero',
      },
      {
        id: 2,
        name: 'Pudge',
        description: 'Pudge is a sniper',
      },
    ];
  }
}

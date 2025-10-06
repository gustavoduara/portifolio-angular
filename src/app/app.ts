import { Component } from '@angular/core';

interface ItemHabilidade {
  icone: string;
  titulo: string;
  descricao?: string;
}

interface ItemPortfolio {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlGif: string;
  urlRepositorio: string;
  stack: string[];
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})
export class App {
  public readonly itensHabilidades: ItemHabilidade[] = [
    {
      icone: 'bi-window-fullscreen',
      titulo: 'Web Design',
      descricao: 'Design e desenvolvimento de sistemas web atraentes e responsivos.',
    },
    {
      icone: 'bi-server',
      titulo: 'Aplicações Back-End',
      descricao: 'Desenvolvimento de sistemas robustos para solucionar problemas simples ou complexos.',
    },
    {
      icone: 'bi-graph-up',
      titulo: 'Testes Automatizados',
      descricao: 'Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações.',
    },
    {
      icone: 'bi-people',
      titulo: 'Liderança',
      descricao: 'Habilidade de liderar e tomar decisões técnicas em projetos em equipe.',
    },
  ];

  public readonly itensHabilidades2: ItemHabilidade[] = [
    { icone: 'https://skillicons.dev/icons?i=html&theme=dark', titulo: 'HTML' },
    { icone: 'https://skillicons.dev/icons?i=css&theme=dark', titulo: 'CSS' },
    { icone: 'https://skillicons.dev/icons?i=scss&theme=dark', titulo: 'SCSS' },
    { icone: 'https://skillicons.dev/icons?i=js&theme=dark', titulo: 'JavaScript' },
    { icone: 'https://skillicons.dev/icons?i=ts&theme=dark', titulo: 'TypeScript' },
    { icone: 'https://skillicons.dev/icons?i=bootstrap&theme=dark', titulo: 'Bootstrap' },
    { icone: 'https://skillicons.dev/icons?i=angular&theme=dark', titulo: 'Angular' },
    { icone: 'https://skillicons.dev/icons?i=rxjs&theme=dark', titulo: 'RxJS' },
    { icone: 'https://skillicons.dev/icons?i=net&theme=dark', titulo: '.NET' },
    { icone: 'https://skillicons.dev/icons?i=cs&theme=dark', titulo: 'C#' },
    { icone: 'https://skillicons.dev/icons?i=selenium&theme=dark', titulo: 'Selenium' },
    { icone: 'https://skillicons.dev/icons?i=cypress&theme=dark', titulo: 'Cypress' },
    { icone: 'https://skillicons.dev/icons?i=sqlite&theme=dark', titulo: 'SQLite' },
    { icone: 'https://skillicons.dev/icons?i=postgres&theme=dark', titulo: 'Postgres' },
    { icone: 'https://skillicons.dev/icons?i=redis&theme=dark', titulo: 'Redis' },
    { icone: 'https://skillicons.dev/icons?i=docker&theme=dark', titulo: 'Docker' },
    { icone: 'https://skillicons.dev/icons?i=powershell&theme=dark', titulo: 'PowerShell' },
    { icone: 'https://skillicons.dev/icons?i=git&theme=dark', titulo: 'Git' },
    { icone: 'https://skillicons.dev/icons?i=github&theme=dark', titulo: 'GitHub' },
    { icone: 'https://skillicons.dev/icons?i=azure&theme=dark', titulo: 'Azure' },
    { icone: 'https://skillicons.dev/icons?i=visualstudio&theme=dark', titulo: 'Visual Studio' },
    { icone: 'https://skillicons.dev/icons?i=vscode&theme=dark', titulo: 'VSCode' },
  ];

  public readonly itensPortfolio: ItemPortfolio[] = [
    {
      titulo: 'DuoBingo',
      urlImagem: 'DuoBingo.png',
      urlGif: 'https://https://i.imgur.com/TeG9FYq.gif',
      urlRepositorio: 'https://https://github.com/joao-gabriel-gustavo/Duobingo',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: 'O sistema do DuoBingo apresenta o conceito de gerenciamento de um posto de uma agenda, com o controle de disciplina, matéria, questões e testes.',
    },
  ];

  public itemPortfolioSelecionado?: ItemPortfolio;
}
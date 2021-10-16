import { ffModel } from './models/ff-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  public ffmodel: ffModel;

  constructor() {
    this.ffmodel = {
      nav: {
        title: '',
        logo: {
          src: '',
          alt: '',
        },
      },
      main: {
        title: 'General',
        description:
          'Final Fantasy (ファイナルファンタジー Fainaru Fantajī?) es una franquicia de medios creada por Hironobu Sakaguchi y desarrollada por Square Enix (antes conocida como Squaresoft). La franquicia se centra en una serie de fantasía y ciencia ficción de videojuegos RPG. Aunque la mayoría de las entregas de la serie son historias propias con diferentes personajes y escenarios, existen ciertos temas recurrentes que definen a la franquicia. Algunos de estos temas incluyen elementos argumentales, nombres de personajes y mecánicas de jugabilidad. La trama normalmente constituye en un grupo de héroes, normalmente jóvenes, que luchan contra un mal mayor, mientras enfrentan ciertos problemas personales y se exploran sus personalidades y relaciones con otros personajes. Comúnmente los nombres de personajes y escenarios provienen de diferentes nombres de lenguajes, culturas y mitologías alrededor del mundo, así como más recientemente de la cultura popular. Dentro del universo Final Fantasy encontraras criaturas de lo mas pintorescas :',
        titleChocobo: 'Chocobo',
        chocobo: {
          src: 'https://pbs.twimg.com/media/EVLRSmQVAAA11Zl.jpg',
          alt: 'Chocobo',
        },
        button: '¡Enfadar al chocobo!',
        happychocobo: {
          src: 'https://img-10.stickers.cloud/packs/90671aa9-65c7-4b14-a31e-e964f07f23af/webp/ca9426a1-f7f7-49ea-a327-a99aabaf3a71.webp',
          alt: 'Happy Chocobo',
        },
        angrychocobo: {
          src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c28a937a-f446-48fc-9c67-b3f7af1e2022/dojndh-69d4045e-1430-4dc3-9ba9-4db0032cef86.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyOGE5MzdhLWY0NDYtNDhmYy05YzY3LWIzZjdhZjFlMjAyMlwvZG9qbmRoLTY5ZDQwNDVlLTE0MzAtNGRjMy05YmE5LTRkYjAwMzJjZWY4Ni5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZmI1_qCMp1GQV-wVbIX7vD4Nb2rRUGi4bWSzESSqzWk',
          alt: 'Angry Chocobo',
        },
        moguri: {
          src: 'https://tomalcockccw.files.wordpress.com/2010/11/final-fantasy-logos1.jpg',
          alt: 'FF Logo',
        },
        formulario: 'Introduce una frase',
      },
      characters: [
        {
          name: '',
          game: '',
          description: '',
          img: {
            src: '',
            alt: 'Mis amigos',
          },
        },
        {
          name: '',
          game: '',
          description: '',
          img: {
            src: '',
            alt: 'Mis amigos',
          },
        },
        {
          name: '',
          game: '',
          description: '',
          img: {
            src: '',
            alt: 'Mis amigos',
          },
        },
        {
          name: '',
          game: '',
          description: '',
          img: {
            src: '',
            alt: 'Mis amigos',
          },
        },
        {
          name: '',
          game: '',
          description: '',
          img: {
            src: '',
            alt: 'Mis amigos',
          },
        },
        {
          name: '',
          game: '',
          description: '',
          img: {
            src: '',
            alt: 'Mis amigos',
          },
        },
        {
          name: '',
          game: '',
          description: '',
          img: {
            src: '',
            alt: 'Mis amigos',
          },
        },
        {
          name: '',
          game: '',
          description: '',
          img: {
            src: '',
            alt: 'Mis amigos',
          },
        },
      ],
      games: [
        {
          title: 'Final Fantasy',
          description: '',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy',
          description: '',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy',
          description: '',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy',
          description: '',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy',
          description: '',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy',
          description: '',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy',
          description: '',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy',
          description: '',
          img: {
            src: '',
            alt: '',
          },
        },
      ],
    };
  }

  ngOnInit(): void {}

}

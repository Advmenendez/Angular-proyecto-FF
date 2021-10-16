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
        title: 'Mundo',
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
          src: 'https://img1.freepng.es/20180920/xir/kisspng-final-fantasy-ix-final-fantasy-xiii-final-fantasy-5ba4335db7eb60.2004587215374877097533.jpg',
          alt: 'Moguri',
        },
        formulario: 'Introduce una frase',
      },
      characters: [
        {
          name: 'Terra',
          game: 'FFVI',
          description:
            'Una joven enigmática, nacida con el don de la magia y esclavizada por el Imperio de Gestahl',
          img: {
            src: 'https://m.media-amazon.com/images/I/61he7PQatgL._AC_SY879_.jpg',
            alt: 'Mis amigos',
          },
        },
        {
          name: 'Kefka',
          game: 'FFVI',
          description:
            '«Quedaos con la copla... ¡La piedad es cosa de nenazas! Con razón "resistencia" rima con "sentencia". ¡Matad a todo el que se entrometa!»',
          img: {
            src: 'https://i.pinimg.com/originals/18/d9/f0/18d9f0f903f63c7437288cc958379dcc.jpg',
            alt: 'Kefka',
          },
        },
        {
          name: 'Cloud',
          game: 'FFVII',
          description:
            'Ex-Soldado de 1.ª clase. Tras dejar su puesto militar con Shinra, se establece como mercenario en Midgar y presta sus servicios a Avalancha. Armado con su espada mortal, está dispuesto a aceptar cualquier encargo si la paga es buena.',
          img: {
            src: 'data:image/jpeg;base64,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',
            alt: 'Cloud',
          },
        },
        {
          name: 'Sephiroth',
          game: 'FFVII',
          description:
            '«Una vez existió un SOLDADO que era mejor que el resto, pero cuando supo acerca de los experimentos realizados por la Compañía de Energía Eléctrica Shinra que lo crearon, comenzó a odiarlos, pero con el tiempo este SOLDADO llamado Sefirot comenzó a odiar al mundo entero.»',
          img: {
            src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYIFRgVFhYZFhgYHBgaHBoYGRwaHhwhHBwcHCEcIxwcIS4lHh4tHxgaNDgmKy8xNTU1HCY9QDszPy40NTEBDAwMEA8QHBISHz0rJSs0MTQ0NDQ0NDU0NDQ0NDQ0NDQ0NDg0MTQ0NDQ0NDQ0NDQ0PTE0NDU0NDQ0NDQxMTQ0NP/AABEIANcA6wMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xABFEAACAQIEAwYCBgYGCwEAAAABAgADEQQFEiEGMUETIlFhcYEHkRQjMmJyoUKCorHB8BUWUpKyszM0Q1Nzg8LD0eHxJP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAfEQEBAQABBAMBAAAAAAAAAAAAARECEiExQSJCUSP/2gAMAwEAAhEDEQA/ALmiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJwTaAiQ/P8yqsEam5RNS/Z521deu4/fOrKuIWo4laLv2iVLANe5Vzy38CdrdDblvfXTc1nqm4m0REy0REQEREBERAREQEREBERAw6GY0cQSEqIxBsQrKSD6XmZNZj8jw+Ym9Wgjt/aKjWPRx3h7Ga7+q5wv+r4rE0LclL9snutXUx9mECSRIzrzLA81w+LUDmhahUPorFk/aE4PGFLC7YmnWwh6mqh0enardD7GXE1J4mJg8fSxw1U6iuD1Vgf3TLkUiIgIiICIiBxNbxBX+j4eq17ErpB8C5CA/Np04riTDYU2NUMfBA1T2JQEA+shvGvGuHxGHNOk5LComtWBQhRZwd+hbSB6Hwlkupax8fUTM3SizhdPeCatJY7gG197ATGyh6eAq6VZWCEXAYNpBJuPLkZnZJUpVC7Oqs6bi46FeY2PjItnGOTCU2VQAUQXsLbtsB6zPV/TGun4avKi2tVPiAfmJ2SI5Lxbh6WHwwqVDrahTdgFZyLXQk6AdtaMPabrA5/h8wIVKqljyVgUY+isAT7TWVnY2sREikREBERAREQEREBERAREQE+SL7HefUQI/jeD8Him1il2T3vroM1Fr+J0EBv1gZinKsfl3+gxa11H6GKXvH/AJtMbf3JKolTES/rXVy/bGYSrSHWpTHa0/XUl9I/FabjLeIMNmgBpV0e/gwv8ptZosy4VwmZtreiFf8A3lMmm/u6EE+huJFb2JDv6u43LN8JjS69KeKXUPaoguB6qT5zgcUYnLNsZgaiqP8AaYf65LW5kLdlH4gsuJqYyJcT5wtOvTw7X7M6TVKm1tbaUB+7fcjrt0vNrlHEuFzkA0a6Pfpezf3TvKw+JHEBoY2oirTIVEHeuSxUBr91hvdwLHlovEKmmMx2Hpd2lQarYkEqVUCw+8bnfwEq3i7KGcPiQmlWqFW3+yxKWF7feI9p9YPimrhwNITs7IjMyEbEDUAoa1gdQFwSQOZkpzvH0sTh8RhUpsNAWvqsBfQFN9IA0qSF0kXB35Gaz9ZaTKMU9ZFqqWQ6QrEbWI7n52M0/ElBqCFNyzsPUgb3+f75lZDUOXOhYg0a11N+SsGsOew6+xPhPrOcQcdrxenUmsUMOlt2Y373p3f2j4Tlnz11+uMzhCmtApVZCf8A8603Ucz9Ymk2JFj9k28z1Mk+JxOHrAqFZT3gQy2tY/xtceW8i710wrOmo6kVndipKkAhzyItyuPGxkaxHEdXE6i40koRtcgnmBa9gNzc8+XhO17OXmLo4K4hGMZ8MzEtTBKlrklQQOfX7Qtvfn4SaTz/APDXiAYLHJ2jU1Sor0yzargtpZe8b2OtQNyB3tze09ATHLy1CIiRSIiAiIgIiICIiAiIgIiICIiAiIgIiIEX4tyzArSfEYmipKAd9QVqE3sqh0s27Edbb3O15SFZO3e9QKbHmwZzboNXX35+c9BZ5klPPFVKpbSragFbTvYrvtvsx+c86Z5jfo2IrU6YARKlREPM6VcgG/iQL+868OXGTuzylr5x9bsQLgX3IUeJ9PD9+82WA4irPhjh2Nw1l1/pCnvdOW97257AtsSbjryvhl8XgqmYOe5TZFRdyWYuqM58FXV7kHkBvpypwz26HcTPLl1dzMSY4sV8KuGQAu9XvfcUbg+O++46BvEX687zDtMJRw7Loek7BgPuhhruORJJv1uCeRE12Gx7Ze/aJa7LbcKbW321Agf+pi5jjnxzl3N2PMgKL22GygC+37pzzu3vZzmOdVMei0/skgB26uQduQGleRI8Sem033E3CRy+hRxmHVnw1SnTNTcu1JwtmLfdJB35BrjYaZFMBT7Z79F3P8/zyl6fCjHdthnoE3NF9h4K9z/jFT5zdnbWPeKGdQRfmDLq+HXHyY2iuHxTqlWmFRXY7OtrAsTsrbAEk2JI6m0yOMvhth8wpvVwyCjXALBU2SoRvpKclJ6Fbbne8o6ghuQ1x0IO1iOYI8bjl5SK9aA3nMrD4RcUfSkOBqnv0hekSd2Qc19V2t90jwMs+RSIiAiIgIiICIiAiIgIiICIiAiIgIiIGDm+KOBoVqo506dRx+qpP8J5kzmyimo/RRQfMm7c/wBaek+KP9TxX/Ar/wCW08618E+aYinh0HfqMiLfkCQBc+QFyfQyzwi0eBsA2ZZEaXLtGrBDvsO1PePowb5Stc5wzGqgsASiaVJCk2REawPNu0SoCvO67Ceh8myqnk9Cnh6Y7lNdI8T1YnzYkk+ZMoziPCKmYYlXYFBUI3awRWYv9re1i7XHPduR5WFaA01qHQdQaxuq6dQI/EQOXn4zDxTAll3AW4F7G9jYA2Nht5n3ljVcMPozh9RZmItpaoqi5CgItgECXNlOogqNzYHU5jlNN6dNuyVC93VnUrpTSDpfSV3BNl1X1W6EmXpTUcyFNaP+L+A/jaTbhLF4vLm14amlU1O4ULBWbQus21EC9i1t97N5Xh+Droz91SquzLYKAgI3Ciw56Tudrkch1nPCVZqWIoCwIWsrG/NdaPSLD3dQfxCX0ntMcFx/Q1CniUfCVDfu1lKXtzILWuPMXmJn/AmC4rLV6VTsqrbl6RDKx/tOh2J8wVJ6mTXGYOnjlKVaaVFPNXUMp9iLSJ4n4f0qTF8HWq4N+dkbXTv5oxv7KyiYaU7neSYrg3EJqbQ4JajVQ919NtxfkRqF1YfpW3B3tjg/jatm9VKeIpLTNUMUCBrjSuq7XY91rNY2HIeO0K4xqYnIsVSOMZKwFO6P9oNpO47wBQkne1wLrud7RbMeIa2LxHbr9RUpm6BLizLsSSftHoQQBYkW53TB6diRfgTikcVYftCvZ1EOionS9gQy9dLA7X5EEb2uZRIpERAREQEREBERAREQEREBERAREQNPxRUAwtdObvRrKiDdnPZt3VUbsfISrPhtlfY5k9SuNBpU7Uw/dJap3RpBteyaxYb96T74jIBgalXQrPSKMusKwUsyoW0v3SQjtbUOvSVl8P8AEUsdjgcToU0xrpMgFMBlYHcIApXTcnyBPIEixKvSvWXDqzsQqqCWJ2AAFyT5WnmmnWbGu9R93dmdz0BZizeXMmXzx9UWnl2K1GwakyA/efuL+0RKEwx1jSNkHPpfzJ8IhW4p8QvkZLBA6OEKqxI02RV2O/QDu28OV99VmudVM5VTp0IhuFBLWN7Alj5228Z9Zli1p6B3lKCzFGsy30BWVrAclO3XU1zyaacVBV1HSFBe4A6XFunpvbrLtTHwlfsHUm+gOrkL4Kd7X66SRvLP4Xth8bRRzcEpuOTagrofTWqH2lV15Z3B1VcYuEqC+pVpUmA6GjjMKvTxTEXPk0FXXERMtNXmmSYfNXpPWpq7UGLpq5KTa+3IjZTY9VB6SN8YfDuhxJUNdXehXIUFgAyNba7IbEnTtcMOnO1pOIgU7h/hjjsu1NRxaBkcaNJdGZBzJYbKxFrrZhdR3uc7E42zPhgquOw+tBYF2Ggne21VAUY2302ub9Jb063QVQQwBB2IIuD6gwItknH+Czfu9p2L8ilayb3021AlCSbWGq+423krBvvIRnnwzwWZXNNThnOrelbR3hY3pHugfh0nbnOOEeGMZkFZEavTfDJTdbLqUuxYFSaZBVSN+8GJPL0CdREQEREBERAREQEREBERAREQNFxrR+kYDFry+oqnfxVSw/MSm+EMuYrTxNJHbE06oqKgF1r4e4oVVHTUrM2q+9mG1iDL7q0lrKVYBlYFSCAQQRYgg8wR0ka4O4SHCz4jRULUqrqyIb9wAHY3O53tq5kKt7wNH8S1epl1dAGVaFeiN1Kh0JTTpP6Sq1RRcdaZv1lW4X6tRawJsFJ8TsD8yJbPxjxoo4JaXWtVRbeSXqE/NFH60qrAIC3iFt8+d/nNRGuzGl2ivpYXZ2sp2ZtNiQOYuAwNiRsfaazAHXsTYG2/huBy67EzIzDEspdVYhWJuOhG4Bt422vzsSORMxcGdJHr/CPY7awvLO+EGAOKpltwqVKnTmWfAuPl2Bv+KVkRtLQ+B2bCk9fCMba7Vk8yoCuPW2g+xii5YiJlSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgUv8Z8UXxlCn0SiXHrUdlP8AlLIkr/Rad7XI3IuRfyuN5uPibiBis0qjpTSlT/Y1/vqflNHjfsAeM1EanMKKaA4O+oD7StquCxOnZkK7Ag3vcETCoAjcdDO3FAc/GdVIX2uJBl1DvYAC357nn5+nhN98PsSMJmWGY7XfRfwLqyf9RHvNA9yL+QH8/Iz5o1zh3V12ZGVh6qb/AMJoetImHlWNXMaNOsu4qIri33gDMyYUiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIidGJrDDoznYIrMfRQT/CB50z6v9NxuJY/pYirb8KsUX9lRMbNK3ZkKADsB+YN5i4BzUIZjdiLknqTuT85ziQajjz/dci/zBmkYmZsj6Str3bVZCm3dtdblQb6vs7biYNPYzYY7C6CxJW2pthqJ58rWG/vMWnT13tb0JA+Ug7UbWnof5/xGdZWdmEsbgnrfle3T36QVlFz/AAYzv6ZhmwzHv4drr5o9yPk2ofKWXPNXAmc/0FjadQtZCdD+BRtjf02b1UT0oDeSq5iIkCIiAiIgIiICIiAiIgIiICIiAiIgIiICR7juv9Gy7FMDYmi6j1caR+bSQyBfGLF/R8v0f72rTT+6TV/7UCmMKthFJ+zqKd+fQkH2I6+t5xRbSs+aO7r+ITVR3Zvg6muoxWy63sbpbcm3Jr8vKak0eu3If/bdZtuIrpXqr01kgbdRf+M07jYeMzPA+8MdLWvz2/n3tMqoukiYSixmfiG1AHxAlGLWXQbz0L8M88/pzAoWN3pfVP8AqgaT7qV97ygKg1gSefBbMThsZUoE92tTLW6aqZuP2Wf5RSLyiIkUiIgIiICIiAiIgIiICIiAiIgIiICIiAkC+LuUPmOCFRLk4du1ZfFdJVj6gG/oD5SezpxFIYhGRhdWBUjyIsfyMDy2h2nNNirAjx/8zbcTcN1eGKvZ1AShv2dS3ddR18nAtdeh8QQTi5ThPplUIBdmVyvPmiO/IAkmyHa25I9ZoY+d1e3qu/8AaIPzE6Muy+rmjrSoo1RyCdK87Dmd+k7czIcggFSFRWDHmwuCfyElXwfFsyXcD6ip77psPPr7GQdeA+F+Y4zdkSj/AMWoN/amH/O0weJ+E8Rw0tMV9BD6grU2Zh3bGxLItj3tvQ+E9HyMfEDJv6bwNRQLug7Wn46kBNh5spZf1pB51LbSV/C3DPXzKiUGyCo7noF0Mv5syj3kWpoajBVBYuQFCi5Yk2AAHMkkWEvv4b8KnhrDk1ABXrEM/I6QPspcbG1yTbqx3IAMqJpERIpERAREQEREBERAREQEREBERAREQEREBERA1+b5VSzmk1GsgdG6HmD0YHmGHQiVJS4ZqcI5nhSbtResqpUtz13TQ3g/e9xuOoF1zpqUxVFiAQCDuARdSGB36ggEHoRAoH4kYJcFjsSqoqqezddJ/tquo28317TRcPZw2QVqeIpgFkLXUkgOrXDISPI7HexANjabDi/GHM8biainWGqFVK7hlTuJa3MEKOXO87qXBuMzen9Iop2i3CFQyhh3FbVpYgFbMORJ57dZRdHDHF+G4mX6p7VALtSawdfb9JfvLceh2kjnmz+puYKw0YeqHU3VgrLpI5EMbAG/W89ILuN/5+Ugh+QcDUcoxlXE7MCSaC2/0QcXfyvckL4Lt1kziICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJp+J6FTF4TEU6Qu9Sm6LuAe8pGxJABsTa5G8RAonF5Ficvemo0iofsgFT7G/dPvtLr4GwNXLsFSSsPrTqd9wTd2LAErtcKVG2wsAL2nESiSRESBERAREQEREBERAREQERED//2Q==',
            alt: 'Sephiroth',
          },
        },
        {
          name: 'Leon',
          game: 'FFVIII',
          description:
            'Todo el mundo se cree el bueno de la película, pero no hay buenos ni malos, sólo aliados y enemigos.',
          img: {
            src: 'https://i.pinimg.com/originals/1f/c3/d8/1fc3d8238fbb65b80066efe3b695e6c6.jpg',
            alt: 'Leon',
          },
        },
        {
          name: 'Yitan',
          game: 'FFIX',
          description:
            'Abnegación - "¿Se necesita una razón para ayudar a alguien?" —Lema de Yitán',
          img: {
            src: 'https://static.wikia.nocookie.net/esfinalfantasy/images/4/44/Yitan_Tribal_FFIX.jpg',
            alt: 'Yitan',
          },
        },
        {
          name: 'Vivi',
          game: 'FFIX',
          description:
            'Tristeza - "Ser o no ser... ¿Cómo podemos probar nuestra existencia? —Lema de Vivi ',
          img: {
            src: 'https://static.wikia.nocookie.net/esfinalfantasy/images/2/2c/ViviImagen.jpg',
            alt: 'Vivi',
          },
        },
        {
          name: 'Tidus',
          game: 'FFX',
          description:
            'Escucha mi historia. Esta... puede ser nuestra última oportunidad.',
          img: {
            src: 'https://static.wikia.nocookie.net/finalfantasy/images/0/02/FFX_HD_Tidus_Render.png',
            alt: 'Tidus',
          },
        },
        {
          name: 'Vaan',
          game: 'FFXII',
          description:
            'Uno de estos días volaré con mi propia nave. Seré un pirata del Aire, libre de ir adonde quiera.',
          img: {
            src: 'https://static.wikia.nocookie.net/esfinalfantasy/images/4/41/Vaan_FFXII.PNG',
            alt: 'Vaan',
          },
        },
        {
          name: 'Lightning',
          game: 'FFXIII',
          description:
            'Esta solitaria mujer nunca comparte nada de su vida privada; de hecho, incluso su verdadero nombre es un misterio. Todos los demás la conocen simplemente como "Lightning".',
          img: {
            src: 'https://static.wikia.nocookie.net/esfinalfantasy/images/8/86/Lightning.png',
            alt: 'Lightning',
          },
        },
        {
          name: 'Noctis',
          game: 'FFXV',
          description:
            'Príncipe del Reino de Lucis, con sus ojos puede sentir la muerte de otros. Sus amigos le llaman Noct.',
          img: {
            src: 'https://static.wikia.nocookie.net/esfinalfantasy/images/4/4a/FFXV_Noctis.png',
            alt: 'Noctis',
          },
        },
      ],
      games: [
        {
          title: 'Final Fantasy VI',
          img: {
            src: 'https://i.blogs.es/18f8bb/final-fantasy-vi-cover-caratula-portada-caja/450_1000.jpeg',
            alt: 'FFVI',
          },
        },
        {
          title: 'Final Fantasy VII',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy VIII',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy IX',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy X',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy XII',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy XIII',
          img: {
            src: '',
            alt: '',
          },
        },
        {
          title: 'Final Fantasy XV',
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

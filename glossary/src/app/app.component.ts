import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showme=""
  txt= "";
  user =[
    {word:'Labyrinth', def:'a place constructed of or full of intricate passageways and blind alleys a complex labyrinth of tunnels and chambers.'},
    {word:'Ineffable',def:'Too great or extreme to be expressed or described in words '},
    {word:'Incandescent',def:'While the word incandescent is one way to talk about electric lamps, it can also be used in reference to the brightness or someones intellect or personality.'},
    {word:'Sumptuous',def:'Meaning "extremely costly, rich, luxurious, or magnificent," the word sumptuous can be used to describe anything like a five-star vacation'},
    {word:'Serendipity',def:'the faculty or phenomenon of finding valuable or agreeable things not sought for'},
    {word:'Cherish',def:'The word cherish means to hold dear or cultivate with care and affection. Everyone has someone or something that they cherish.'},
    {word:'Euphoria',def:'The word euphoria is used to describe an intense feeling of happiness or elation.<br> A sense of euphoria may be the result of a fortunate turn of events or an indescribable personal high'},
    {word:'Eternity',def:'Forever; always; a limitless time. These are just some ways to describe the endless and sometimes frightening idea of eternity.'},
    {word:'Mellifluous',def:'This lyrical word refers to something that is sweet and enjoyable, especially when it comes to sound.'},
 ]
 title ='Glossary';
 msg ='Enter your Word';

}
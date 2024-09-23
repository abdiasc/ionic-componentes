import { Component, OnInit } from '@angular/core';


interface Componente
{
  icon:string;
  name:string;
  redirectTo:string;
}



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[] = [
    {
      icon:'american-football-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'person-circle-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'layers-outline',
      name:'Botones',
      redirectTo:'/botones'
    },
    {
      icon:'id-card-outline',
      name:'Cards',
      redirectTo:'/cards'
    },
    {
      icon:'checkbox-outline',
      name:'Checkbox',
      redirectTo:'/checkbox'
    },
    {
      icon:'calendar-outline',
      name:'Date time',
      redirectTo:'/date-time'
    },
    {
      icon:'add-circle-outline',
      name:'Fab',
      redirectTo:'/fab'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}

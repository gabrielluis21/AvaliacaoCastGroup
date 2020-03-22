import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html'
})
export class StudentMenuComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNavCadastros = [
    {name:'Adicionar Curso', option:'#addCourse', icon:'add'},
  ];

  fillerNavRelatorios = [
    {name:"Meus Cursos", option:'#myCourses', icon:'list'},
  ];

  menuOptions: any;
  
  private _mobileQueryListener: () => void;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
   //icones de menu
   iconRegistry.addSvgIcon(
    'menu-icon',
    sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/cog.svg'));
    iconRegistry.addSvgIcon(
      'person-icon',
       sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/person.svg'));
   iconRegistry.addSvgIcon(
    'logout-icon', 
    sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/account-logout.svg'));
    iconRegistry.addSvgIcon(
      'document', 
      sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/document.svg'));

    this.mobileQuery = media.matchMedia('(max-width: 870px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  menuClick(option:any){
    this.menuOptions = option;
  }

}
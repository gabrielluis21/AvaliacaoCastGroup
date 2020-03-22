import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html'
})
export class MenuPrincipalComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNavCadastros = [
    {name:'Cursos', option:'#coursesCadastro', icon:'book'},
    {name:'Alunos', option:'#studentsCadastro', icon:'person'},
    {name:'Categorias', option:'#categoryCadastro', icon:'document'},
    
  ];

  fillerNavRelatorios = [
    {name:"Cursos", option:'#coursesSheet', icon:'list'},
    {name:'Alunos', option:'#studentsSheet', icon:'person'},
    {name:"Categorias", option:'#catgorySheet', icon:'list'}
  ];

  menuOptions: any;
  private _mobileQueryListener: any;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      //icones de menu
   iconRegistry.addSvgIcon(
    'menu-icon',
    sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/cog.svg'));
   iconRegistry.addSvgIcon(
   'book-icon',
    sanitizer.bypassSecurityTrustResourceUrl('assets/open-iconic-master/svg/book.svg'));
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

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  menuClick(option:any){
    this.menuOptions = option;
  }

}

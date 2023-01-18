import { Component ,Input} from '@angular/core';
import { Detail } from 'src/app/interfaces/detail';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  @Input() statsprofile!:Detail

  showMenu(){

    const r = document.querySelector('#navbartop')

    const visible = r?.getAttribute('visibility');

    if(visible == 'true'){
      r?.setAttribute('visibility', 'false')
    }
    else{
      r?.setAttribute('visibility', 'true')

    }

  }
  load(){
    if(this.statsprofile)
    return true
    else
    return false
  }
}

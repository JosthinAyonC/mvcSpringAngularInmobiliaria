import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Inmueble } from 'src/app/models/Inmueble.model';

@Component({
  selector: 'app-modal-confirmx-inmueble',
  templateUrl: './modal-confirmx-inmueble.component.html',
  styleUrls: ['./modal-confirmx-inmueble.component.css']
})
export class ModalConfirmxInmuebleComponent {
  @Input() idInmuebleAEliminar!: Inmueble;
  @Output() eliminarInmueble = new EventEmitter<number>();

  eliminarInmuebleConfirmado() {
    this.eliminarInmueble.emit(this.idInmuebleAEliminar.id);    
  }
}

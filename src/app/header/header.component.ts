import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() clicked = new EventEmitter<void>();


  constructor(private modalService: ModalService) { }

  openModal(id: string) {
    console.log('clicked');
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

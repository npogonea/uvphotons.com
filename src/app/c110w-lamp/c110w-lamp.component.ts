import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service'
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-c110w-lamp',
  templateUrl: './c110w-lamp.component.html',
  styleUrls: ['./c110w-lamp.component.css']
})
export class C110wLampComponent implements OnInit {

  title = 'UV-C Light Disinfection | Mountable UV-C lamp powered by two High Output 55W UV-C lamps.'

  constructor(
    private modalService: ModalService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

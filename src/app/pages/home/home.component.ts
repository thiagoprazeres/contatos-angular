import { Component, OnInit } from '@angular/core';
import { ContatosService } from './../../services/contatos.service';
import { Contatos } from './../../interfaces/contatos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contatos: Contatos[] | undefined;

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {
    this.showContatos();
  }

  showContatos(){
    this.contatosService.getContatos().subscribe((contatos: Contatos[]) => this.contatos = contatos);

  }

}

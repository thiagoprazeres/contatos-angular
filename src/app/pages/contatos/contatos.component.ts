import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContatosService } from 'src/app/services/contatos.service';
import { Contatos } from './../../interfaces/contatos';
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {
  contato: Contatos | undefined;

  constructor(private route: ActivatedRoute, private contatosService: ContatosService, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.contatosService.getContatoId(id).subscribe((contato: Contatos) => this.contato = contato);
  }
  voltar() {
    this.location.back();
  }
  delete(id: string) {
    this.contatosService.deleteContato(id).subscribe(()=>this.voltar());
  }

}

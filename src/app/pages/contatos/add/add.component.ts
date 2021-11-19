import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ContatosService } from 'src/app/services/contatos.service';
import { Contatos } from './../../../interfaces/contatos';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  cardForm;
  carregando = false;

  constructor(private location: Location, private formBuilder: FormBuilder, private contatosService: ContatosService) {
    this.cardForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carregando = false;
  }
  voltar() {
    this.location.back();
  }
  onSubmit(contato: Contatos): void {
    this.carregando = true;
    const lead = {nome: contato.nome, email: contato.email, telefone: contato.telefone};
    console.log(lead);
    this.contatosService.addContato(contato).subscribe(
      {
        next: () => this.voltar(),
        error: (err) => {
          console.error(err);
          this.carregando = false;
        }
      }
    );
  }

}

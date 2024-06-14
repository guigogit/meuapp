import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../post';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css'],
})
export class PostDialogComponent {

public nomearquivo: string = ''; // iniciando a string como vazio

public dados ={
  post: new Post("","","","","",""),
  arquivo: null

};

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    mudouarquivo(event: any){
      this.nomearquivo = event.target.files[0].name;
      this.dados.arquivo = event.target.files[0];

    }

salvar(){
this.dialogRef.close(this.dados);
}

cancelar(){
  this.dialogRef.close(null);

}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

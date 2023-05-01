import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aw-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent {

  @Input() HeadArray: any [] = [];
  @Input() Data: any [] = [];
  @Input() Action: boolean = false;
  @Input() showEditButton: boolean = true;
  @Input() showDeleteButton: boolean = true;
  @Input() showSpinner: boolean = false
  @Input() loading: boolean = false;
  @Input() pageSize: number = 5
  @Output() onEdit =  new EventEmitter<any>() 
  @Output() onDelete =  new EventEmitter<any>();

//   showEditButton = true;
// showDeleteButton = true;
  constructor() { }

  ngOnInit(): void {}

  Edit(item: any) {
    this.onEdit.emit(item);
  }

  Delete(item: any) {
    this.onDelete.emit(item);
  }

  confirm(item: any): void {
    console.log('confirm', item);
  }

  cancel(item:any): void {
    console.log('cancel');
  }


  // Dans le code ci-dessus, nous avons un tableau headArrayqui contient des informations sur les en-têtes de la table. Si le FieldNamene contient pas de point (.), nous affichons la valeur de cette propriété directement à partir de l' itemobjet. S'il contient un point, cela signifie que la propriété est imbriquée et que nous utilisons la getNestedValuefonction pour y accéder. Cette fonction prend l' itemobjet et la fieldchaîne comme arguments et divise la fieldchaîne sur les points. Il parcourt ensuite les champs imbriqués et accède aux propriétés imbriquées une par une jusqu'à ce qu'il atteigne la propriété souhaitée. La valeur finale est ensuite renvoyée.

  getNestedValue(item: any, field: string) {
    const nestedFields = field.split('.');
    let value = item;
    for (const nestedField of nestedFields) {
      value = value[nestedField];
    }
    return value;
  }
}

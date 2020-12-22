import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})


export class BudgetItemListComponent implements OnInit {
   
     @Input() BudgetItems: BudgetItem[];

      @Output() deletecard : EventEmitter<BudgetItem>= new EventEmitter<BudgetItem>();
      @Output() update : EventEmitter<UpdateEvent>= new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  delete(item:BudgetItem){
    this.deletecard.emit(item);

  }
  
  onCardClicked(item: BudgetItem){
    const dialogRef =this.dialog.open(EditItemModalComponent,{
      width:'580px',
      data: item  
     });
    dialogRef.afterClosed().subscribe(result =>{
      if (result)
      {
        //this.BudgetItems[this.BudgetItems.indexOf(item)]=result;
      
        this.update.emit({
          old:item,
          new:result
        })
      
      }


    })
  }
 
 

}
export interface UpdateEvent{
  old :BudgetItem;
  new :BudgetItem;
}

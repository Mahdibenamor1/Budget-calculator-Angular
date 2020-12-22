
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
   
   BudgetItems: BudgetItem[]= new Array<BudgetItem>();

   totalBudget :number=0 ;
  constructor() { }

  ngOnInit(): void {
  }

  additem(newitem:BudgetItem){
    this.BudgetItems.push(newitem);
    this.totalBudget += newitem.amount;

  }
  deleteitem(item: BudgetItem)
  {
 let index =this.BudgetItems.indexOf(item);
this.BudgetItems.splice(index, 1);
this.totalBudget -= item.amount;

  }
  updateItem(updatetheEvent: UpdateEvent)
  {
    this.BudgetItems[this.BudgetItems.indexOf(updatetheEvent.old)]=updatetheEvent.new;
    this.totalBudget -=updatetheEvent.old.amount;
    this.totalBudget +=updatetheEvent.new.amount ;
  


  }

}

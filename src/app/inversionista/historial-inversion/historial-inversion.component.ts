import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-inversion',
  templateUrl: './historial-inversion.component.html',
  styleUrls: ['./historial-inversion.component.scss']
})
export class HistorialInversionComponent implements OnInit {
  fundings = [];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.fundings = this.storageService.getFundigs();
  }

  eventAlert(){
    Swal.fire(
      {
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      });
  }

}

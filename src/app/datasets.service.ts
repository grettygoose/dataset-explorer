import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dataset } from './dataset';
import { DATASETS } from './mock-datasets';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private messageService: MessageService) { }

  getDatasets(): Observable<Dataset[]> {
    // TODO: send the message _after_ fetching the dataset
    this.messageService.add('DatasetsService: fetched datasets');
    return of(DATASETS);
  }

}

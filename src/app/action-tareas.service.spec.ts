import { TestBed } from '@angular/core/testing';

import { ActionTareasService } from './action-tareas.service';

describe('ActionTareasService', () => {
  let service: ActionTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

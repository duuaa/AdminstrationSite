
import { TestBed, waitForAsync } from '@angular/core/testing';
import { StudentService } from './student.service';

describe('StudentsService', () => {

let service: StudentService;

  beforeEach(waitForAsync(() => {
    service = TestBed.inject(StudentService);
  }));
  it('when setPageNumber() called must affect pagenumber', ()=> {
    spyOn(service, 'setPageNumber').withArgs(1).and.callFake;
    expect(service.getpageNumber()).toEqual(1);
    
  });
  it('when setStudentperPageNumber() called must affect pagenumber', ()=> {
    spyOn(service, 'setStudentperPageNumber').withArgs(3).and.callFake;
    expect(service.getnumberofstudent()).toEqual(3);

  });
  it('when setId() called must affect pagenumber', ()=> {
    spyOn(service, 'setId').withArgs(0).and.callFake;
    expect(service.getId()).toEqual(0);
  
  });
  
  
});


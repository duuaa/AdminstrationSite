import { HttpClientModule } from '@angular/common/http';

import { TestBed, waitForAsync } from '@angular/core/testing';

import { SingleStudentService } from './single-student.service';
describe('SingleStudentService', () => {
  let service: SingleStudentService;

let httpClientSpy: { get: jasmine.Spy };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
          HttpClientModule,

      ]
    });
 
    service  = TestBed.inject(SingleStudentService)

  }));
  it('should be called getById function',
  (done: DoneFn) => {
  service.getById(3).subscribe(value => { 
      console.log(value);
    expect(value.data.id).toEqual(3);
    done();
})
    
  });
});




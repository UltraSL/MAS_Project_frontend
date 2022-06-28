import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-view',
  templateUrl: './feedback-view.component.html',
  styleUrls: ['./feedback-view.component.css']
})
export class FeedbackViewComponent implements OnInit {
  feedBackData : any = {};
  constructor(private feedback : FeedbackService) { }

  ngOnInit(): void {
this.feedback.getAllFeedback().subscribe((res: any) => {
  this.feedBackData = res;
  console.log(res);
}
);
}

}

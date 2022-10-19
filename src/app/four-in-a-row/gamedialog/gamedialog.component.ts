import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gamedialog',
  templateUrl: './gamedialog.component.html',
  styleUrls: ['./gamedialog.component.scss']
})
export class GamedialogComponent {

  message: string = ""
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<GamedialogComponent>) {
      if (data) {
        this.message = data.message || this.message;
        if (data.buttonText) {
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
      }
    // this.dialogRef.updateSize('300px','100px')
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
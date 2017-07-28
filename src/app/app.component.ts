import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular 2/4 CSV to JSON converter';
    response: any = "Select the file to display JSON data...";
    private showAlert: boolean = false;
    private success: boolean = false;
    private message: string = "JSON is copied on the clipboard!";
    private isConverted: boolean = false;

    constructor(private _ElementRef: ElementRef) {

    }

    public readFile(fileInput: any) {
        let file = fileInput.files[0];
        let extension: string = file.name.split('.').pop();
        if (!extension || extension.toLowerCase() !== 'csv') {
            this.setLoader("Invalid file with extension '" + extension + "'", true, false);
            this.clear(fileInput);
            return;
        }
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = this.convertFile.bind(this)
    }

    public convertFile(event: any): void {
        let lines: Array<string> = event.target.result.split("\n");
        let result = [];
        let headers = lines[0].split(",");
        for (let i: number = 1; i < lines.length; i++) {
            let obj: any = {};
            let currentline: Array<string> = lines[i].split(",");
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j] ? currentline[j].trim() : currentline[j];
            }
            result.push(obj);
        }
        this.isConverted = true;
        this.response = result;
        this.setLoader('File converted successfully!', true, true);
    }

    public copy(): void {
        let json: string = this._ElementRef.nativeElement.querySelector('#jsonViewer').innerHTML;
        let el: HTMLInputElement = this._ElementRef.nativeElement.querySelector('#hiddenTxt');
        el.value = json;
        el.select()
        document.execCommand("copy");
        this.setLoader('JSON is copied on the clipboard!', true, true);
    }

    public clear(file: any): void {
        file.value = "";
        this.response = "Select the file to display JSON data...";
        this.isConverted = false;
    }

    public setLoader(message: string, showAlert: boolean, success: boolean) {
        this.message = message;
        this.showAlert = showAlert;
        this.success = success;

        if (showAlert) {
            setTimeout(function() {
                this.showAlert = false;
            }.bind(this), 5000);
        }
    }
}
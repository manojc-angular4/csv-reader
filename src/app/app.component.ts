import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular 2/4 CSV to JSON converter';
    response: any = "Select the file to display JSON data...";
    private isCopied: boolean = false;
    private isConverted: boolean = false;

    constructor(private _ElementRef: ElementRef) {

    }

    readFile(file) {
        file = file.files[0];
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = this.convertFile.bind(this)
    }

    convertFile(event: any) {
        var lines = event.target.result.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j] ? currentline[j].trim() : currentline[j];
            }
            result.push(obj);
        }
        this.isConverted = true;
        this.response = result;
    }

    copy() {
        let json = this._ElementRef.nativeElement.querySelector('#jsonViewer').innerHTML;
        let el = this._ElementRef.nativeElement.querySelector('#hiddenTxt');
        el.value = json;
        el.select()
        document.execCommand("copy");
        this.isCopied = true;
    }

    clear(file) {
        file.value = "";
        this.response = "Select the file to display JSON data...";
        this.isConverted = false;
    }
}

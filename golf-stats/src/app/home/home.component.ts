import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    this.getMessageFromAPI();
    return 'Welcome to Golf Stats!';
  }

  getMessageFromAPI() {
    const url = new URL('https://localhost:7020/golf-stats');
    const headers = {
      "x-api-key": "[insert-your-api-key]",
      "x-api-secret": "[insert-your-api-secret]",
      "x-rapidapi-host": "crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com",
      "x-rapidapi-key": "REPLACE_THIS_WITH_YOUR_KEY",
    };

    (async function () {
      const response = await fetch(url.toString(), { headers });
      const data = await response.json();
      console.log(data)
    })()
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Server } from 'src/app/server';


@Component({
  selector: 'app-simple-tables',
  templateUrl: './simple-tables.component.html',
  styleUrls: ['./simple-tables.component.css']
})
export class SimpleTablesComponent implements OnInit {
 isDisplay = false;
 toggleDisplay(){
   this.isDisplay = !this.isDisplay;
 }


  title = '';

  constructor(private http: HttpClient ) { }

    servers : Server[] = [];

    private headers = new HttpHeaders().set('Content-Type', 'application/json');

    ngOnInit(): void {
      let i: number = 0;
      const body = { title: '' }
      this.http.get<any>('http://localhost:3000/result',
                                //body,
                                {
                                  headers: new HttpHeaders().set('Content-Type', 'application/json')
                                }).subscribe((response) => {


        for(let entry of response){

          //console.log("VALUE RECEIVED: " + entry.Info.Hostname);
          var server = entry.Info;
          //var server = new Server(entry.name, entry.id, entry.address.geo.lat, entry.address.geo.lng, entry.username);
          i++;
          if(i == 1)
            this.servers.push(server);

        }

      })
    }

}





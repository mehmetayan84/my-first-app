import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  
  serverAddStatus:string = "No server is added";

  serverName:string = "testserver";

  serverCreated:boolean = false;

  servers = ['TestServer', 'TestServer2'];

  constructor() { 
    setTimeout(() => {this.allowNewServer = true}, 2000);
  }

  ngOnInit() {
  }

  setServerAddStatus(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverAddStatus = "New server is added and the name of it : " + this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
